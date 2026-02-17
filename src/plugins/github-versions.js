const REPOS = {
  intifaceCentral: "intiface/intiface-central",
  gameHapticsRouter: "intiface/intiface-game-haptics-router",
};

/** Download URL templates use rawTag (full tag with build metadata) for the
 *  GitHub release path, and cleanTag (without +N suffix) for the filename,
 *  since release artifacts are named without the build number. */
const IC_DOWNLOAD_TEMPLATES = {
  windows: (repo, rawTag, cleanTag) =>
    `https://github.com/${repo}/releases/download/${rawTag}/intiface-central-${cleanTag}-win-x64.exe`,
  macos: (repo, rawTag, cleanTag) =>
    `https://github.com/${repo}/releases/download/${rawTag}/intiface-central-${cleanTag}-macos-universal.dmg`,
  linux: (repo, rawTag, cleanTag) =>
    `https://github.com/${repo}/releases/download/${rawTag}/intiface-central_${cleanTag}-linux-ubuntu-24.04-x64.zip`,
  androidApk: (repo, rawTag, cleanTag) =>
    `https://github.com/${repo}/releases/download/${rawTag}/intiface-central-${cleanTag}-android-arm-universal.apk`,
};

/** Strip semver build metadata (everything after +) from a tag. */
function stripBuildMeta(tag) {
  return tag.replace(/\+.*$/, "");
}

async function fetchLatestTag(repo) {
  const url = `https://api.github.com/repos/${repo}/releases/latest`;
  const headers = { Accept: "application/vnd.github.v3+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for ${repo}`);
  }
  const data = await res.json();
  return data.tag_name;
}

function buildDownloadUrls(repo, rawTag) {
  const clean = stripBuildMeta(rawTag);
  const urls = {};
  for (const [platform, template] of Object.entries(IC_DOWNLOAD_TEMPLATES)) {
    urls[platform] = template(repo, rawTag, clean);
  }
  return urls;
}

/** HEAD-request each download URL; throw if any are unreachable.
 *  GitHub returns 302 for valid release assets, so we disable redirect
 *  following and accept 2xx/3xx as success. */
async function verifyDownloadUrls(urls) {
  const failures = [];
  const checks = await Promise.allSettled(
    Object.entries(urls).map(async ([platform, url]) => {
      const res = await fetch(url, { method: "HEAD", redirect: "manual" });
      if (res.status >= 400) {
        failures.push({ platform, url, status: res.status });
      }
    })
  );
  // Also catch network errors from the fetch itself
  for (const check of checks) {
    if (check.status === "rejected") {
      failures.push({ platform: "unknown", url: "?", error: check.reason.message });
    }
  }
  if (failures.length > 0) {
    const details = failures
      .map((f) => `  ${f.platform}: ${f.status || f.error} — ${f.url}`)
      .join("\n");
    throw new Error(
      `[github-versions] Download URL verification failed:\n${details}`
    );
  }
}

module.exports = function githubVersionsPlugin() {
  return {
    name: "github-versions",

    async loadContent() {
      const results = await Promise.allSettled(
        Object.entries(REPOS).map(async ([key, repo]) => {
          const tag = await fetchLatestTag(repo);
          return [key, { tag, repo }];
        })
      );

      const data = { versions: {}, downloads: {} };
      for (const result of results) {
        if (result.status === "fulfilled") {
          const [key, { tag, repo }] = result.value;
          data.versions[key] = stripBuildMeta(tag);
          if (key === "intifaceCentral") {
            data.downloads.intifaceCentral = buildDownloadUrls(repo, tag);
          }
        } else {
          console.warn(
            `[github-versions] ${result.reason.message}`
          );
        }
      }

      // Verify all generated download URLs resolve before proceeding
      if (data.downloads.intifaceCentral) {
        await verifyDownloadUrls(data.downloads.intifaceCentral);
        console.log("[github-versions] All download URLs verified OK");
      }

      return data;
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
