const REPOS = {
  intifaceCentral: "intiface/intiface-central",
  gameHapticsRouter: "intiface/intiface-game-haptics-router",
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

module.exports = function githubVersionsPlugin() {
  return {
    name: "github-versions",

    async loadContent() {
      const results = await Promise.allSettled(
        Object.entries(REPOS).map(async ([key, repo]) => {
          const tag = await fetchLatestTag(repo);
          return [key, tag];
        })
      );

      const versions = {};
      for (const result of results) {
        if (result.status === "fulfilled") {
          const [key, tag] = result.value;
          versions[key] = tag;
        } else {
          console.warn(
            `[github-versions] ${result.reason.message}`
          );
        }
      }
      return versions;
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};
