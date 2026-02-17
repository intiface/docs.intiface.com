const REPOS = {
  intifaceCentral: "intiface/intiface-central",
  gameHapticsRouter: "intiface/intiface-game-haptics-router",
};

const IC_DOWNLOAD_TEMPLATES = {
  windows: (repo, tag) =>
    `https://github.com/${repo}/releases/download/${tag}/intiface-central-${tag}-win-x64.exe`,
  macos: (repo, tag) =>
    `https://github.com/${repo}/releases/download/${tag}/intiface-central-${tag}-macos-universal.dmg`,
  linux: (repo, tag) =>
    `https://github.com/${repo}/releases/download/${tag}/intiface-central_${tag}-linux-ubuntu-24.04-x64.zip`,
  androidApk: (repo, tag) =>
    `https://github.com/${repo}/releases/download/${tag}/intiface-central-${tag}-android-arm-universal.apk`,
};

/** Strip semver build metadata (everything after +) from a tag. */
function cleanTag(tag) {
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
  return cleanTag(data.tag_name);
}

function buildDownloadUrls(repo, tag) {
  const urls = {};
  for (const [platform, template] of Object.entries(IC_DOWNLOAD_TEMPLATES)) {
    urls[platform] = template(repo, tag);
  }
  return urls;
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
          data.versions[key] = tag;
          if (key === "intifaceCentral") {
            data.downloads.intifaceCentral = buildDownloadUrls(repo, tag);
          }
        } else {
          console.warn(
            `[github-versions] ${result.reason.message}`
          );
        }
      }
      return data;
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
