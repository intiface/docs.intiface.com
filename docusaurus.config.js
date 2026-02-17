// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Intiface Software",
  tagline:
    "Because we couldn't call it Buttplug and still get it in app stores",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.intiface.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "docusaurus-plugin-matomo",
    require.resolve("docusaurus-plugin-image-zoom"),
    require.resolve("./src/plugins/github-versions"),
    /*
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    */
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/intiface-central.png",
      navbar: {
        title: "Intiface Software",
        logo: {
          alt: "Intiface Software",
          src: "img/intiface_logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "intifaceCentralSidebar",
            position: "left",
            label: "Intiface Central",
          },
          {
            type: "docSidebar",
            sidebarId: "intifaceGameHapticsRouterSidebar",
            position: "left",
            label: "Intiface Game Haptics Router",
          },
          {
            href: "https://github.com/intiface/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intiface Central Docs",
                to: "/docs/intiface-central",
              },
              {
                label: "Intiface GHR Docs",
                to: "/docs/intiface-game-haptics-router",
              },
              {
                label: "Buttplug.io Developer Docs",
                to: "https://docs.buttplug.io",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discourse Forum",
                href: "https://discuss.buttplug.io",
              },
              {
                label: "Discord",
                href: "https://discord.buttplug.io",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Mastodon",
                href: "https://buttplug.zone/@buttplugio",
              },
              {
                label: "Bluesky",
                href: "https://bsky.app/profile/buttplug.io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Nonpolynomial Blog",
                to: "https://nonpolynomial.com/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/buttplugio",
              },
              {
                label: "Youtube",
                href: "https://youtube.buttplug.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nonpolynomial. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      matomo: {
        matomoUrl: "https://nonpolynomial.matomo.cloud/",
        siteId: "3",
        phpLoader: "matomo.php",
        jsLoader: "matomo.js",
      },
      zoom: {},
    }),
};

module.exports = config;
