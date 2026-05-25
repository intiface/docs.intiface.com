/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  intifaceCentralSidebar: [
    "intiface-central/index",
    "intiface-central/getting-help",
    "intiface-central/quickstart",
    {
      type: "category",
      label: "Getting Around Intiface Central",
      items: [
        "intiface-central/ui/intro",
        "intiface-central/ui/engine-control-panel",
        {
          type: "category",
          label: "App Modes",
          items: [
            "intiface-central/ui/app-modes",
            "intiface-central/ui/app-modes-engine-control-panel",
            "intiface-central/ui/app-modes-repeater-panel",
          ],
        },
        {
          type: "category",
          label: "Devices",
          items: [
            "intiface-central/ui/devices-panel",
            "intiface-central/ui/devices-panel-device-info",
            "intiface-central/ui/devices-panel-device-configuration",
            "intiface-central/ui/devices-panel-device-feature-configuration",
            "intiface-central/ui/devices-panel-device-observability",
            {
              type: "category",
              label: "Advanced Device Management",
              items: [
                "intiface-central/ui/devices-panel-advanced",
                "intiface-central/ui/devices-panel-advanced-entry",
                "intiface-central/ui/devices-panel-advanced-websocket",
                "intiface-central/ui/devices-panel-advanced-simulated",
                "intiface-central/ui/devices-panel-advanced-serial",
              ],
            },
          ],
        },
        "intiface-central/ui/log-panel",
        "intiface-central/ui/settings-panel",
        "intiface-central/ui/other-panels",
      ],
    },
    {
      type: "category",
      label: "Hardware Help",
      items: [
        "intiface-central/hardware/intro",
        "intiface-central/hardware/bluetooth",
        /*
        'intiface-central/hardware/xinput',
        'intiface-central/hardware/lovense-dongle',
        'intiface-central/hardware/lovense-connect',
        'intiface-central/hardware/serial-port',
        'intiface-central/hardware/websocket-device'
        */
      ],
    },
    {
      type: "category",
      label: "Specific Toy Brand Help",
      items: [
        "intiface-central/brands/intro",
        "intiface-central/brands/kiiroo",
        "intiface-central/brands/lovense",
        "intiface-central/brands/muse",
        "intiface-central/brands/satisfyer",
        "intiface-central/brands/thehandy",
        "intiface-central/brands/wevibe",
      ],
    },
    "intiface-central/troubleshooting",
  ],
  intifaceGameHapticsRouterSidebar: ["intiface-game-haptics-router/index"],
};

module.exports = sidebars;
