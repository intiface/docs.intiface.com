import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { usePluginData } from "@docusaurus/useGlobalData";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl("img/intiface_logo.svg");

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Intiface Logo"
            className={styles.heroLogo}
          />
        )}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          Applications for accessing and controlling intimate haptics/sensor
          hardware, built on the{" "}
          <Link to="https://buttplug.io">Buttplug Framework</Link>.
        </p>
        <div className={styles.heroButtons}>
          <a
            className="button button--primary button--lg"
            href="#intiface-central"
          >
            Get Intiface Central
          </a>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intiface-central"
          >
            Documentation
          </Link>
        </div>
        <div className={styles.infoBox}>
          <p>
            Are you a developer looking to integrate hardware into your app?{" "}
            <Link to="https://docs.buttplug.io">
              Check the Buttplug Developer Docs.
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}

function IntifaceCentralShowcase() {
  const logoUrl = useBaseUrl("img/intiface_central_icon.svg");
  const { versions, downloads } = usePluginData("github-versions") as {
    versions?: { intifaceCentral?: string };
    downloads?: {
      intifaceCentral?: { windows?: string; macos?: string; linux?: string; androidApk?: string };
    };
  };
  const icVersion = versions?.intifaceCentral;
  const icDownloads = downloads?.intifaceCentral;

  const features = [
    "Control hardware through the Buttplug Library",
    "Works with apps built for any Buttplug version (v1+)",
    "New device support added automatically via library updates",
    "WebSocket connections for app integration",
  ];

  return (
    <section id="intiface-central" className={styles.showcaseSection}>
      <div className="container">
        <div className={styles.showcaseContent}>
          <div className={styles.showcaseHeader}>
            <img
              src={logoUrl}
              alt="Intiface Central"
              className={styles.showcaseLogo}
            />
            {icVersion && (
              <span className={styles.versionBadge}>{icVersion}</span>
            )}
          </div>

          <h2 className={styles.showcaseTitle}>Intiface Central</h2>

          <p className={styles.showcaseDescription}>
            An open-source, cross-platform application that acts as a hub for
            intimate haptics/sensor hardware access. Connect to a wide variety
            of hardware via Bluetooth, USB, Serial, and more.
          </p>

          <div className={styles.featureList}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                {feature}
              </div>
            ))}
          </div>

          <div className={styles.downloadGrid}>
            <h4 className={styles.downloadHeading}>Desktop</h4>
            <div className={styles.downloadRow}>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.windows ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
                <i className={`fa-brands fa-windows ${styles.downloadIcon}`} />
                <span className={styles.downloadPlatform}>Windows</span>
                <span className={styles.downloadMeta}>.exe · 10+</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.macos ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
                <i className={`fa-brands fa-apple ${styles.downloadIcon}`} />
                <span className={styles.downloadPlatform}>macOS</span>
                <span className={styles.downloadMeta}>.dmg</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.linux ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
                <i className={`fa-brands fa-linux ${styles.downloadIcon}`} />
                <span className={styles.downloadPlatform}>Linux</span>
                <span className={styles.downloadMeta}>.zip · Ubuntu 22/24</span>
              </Link>
            </div>

            <h4 className={styles.downloadHeading}>Mobile</h4>
            <div className={styles.downloadRow}>
              <Link
                className={styles.downloadCard}
                to="https://play.google.com/store/apps/details?id=com.nonpolynomial.intiface_central"
              >
                <i className={`fa-brands fa-google-play ${styles.downloadIcon}`} />
                <span className={styles.downloadPlatform}>Android</span>
                <span className={styles.downloadMeta}>Google Play</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to="https://apps.apple.com/us/app/intiface-central/id6444728067"
              >
                <i className={`fa-brands fa-app-store-ios ${styles.downloadIcon}`} />
                <span className={styles.downloadPlatform}>iOS</span>
                <span className={styles.downloadMeta}>App Store</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.androidApk ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
                <i className={`fa-brands fa-android ${styles.downloadIcon}`} />
                <span className={styles.downloadPlatform}>Sideload</span>
                <span className={styles.downloadMeta}>.apk</span>
              </Link>
            </div>
          </div>

          <Link className={styles.docsLink} to="/docs/intiface-central">
            View Documentation →
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.howItWorksSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Install Intiface Central</h3>
            <p className={styles.stepDescription}>
              Download and install on your preferred platform - Windows, macOS,
              Linux, Android, or iOS.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Follow the Quickstart</h3>
            <p className={styles.stepDescription}>
              Our{" "}
              <Link to="/docs/intiface-central/quickstart">
                quickstart guide
              </Link>{" "}
              walks you through connecting your hardware via Bluetooth, USB, or
              Serial.
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Use Compatible Apps</h3>
            <p className={styles.stepDescription}>
              Launch apps like Game Haptics Router, ScriptPlayer, or Buttplug
              Playground to control your devices. See the full{" "}
              <Link to="https://awesome.buttplug.io">
                apps &amp; games list
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GameHapticsRouterCard() {
  const logoUrl = useBaseUrl("img/intiface_haptics_router_logo.svg");
  const { versions } = usePluginData("github-versions") as {
    versions?: { gameHapticsRouter?: string };
  };
  const ghrVersion = versions?.gameHapticsRouter;

  return (
    <section className={styles.secondarySection}>
      <div className="container">
        <div className={styles.secondaryCard}>
          <img
            src={logoUrl}
            alt="Game Haptics Router"
            className={styles.secondaryLogo}
          />
          <div className={styles.secondaryContent}>
            <h3>
              Intiface Game Haptics Router{" "}
              {ghrVersion && (
                <span className={styles.versionBadgeSmall}>{ghrVersion}</span>
              )}
            </h3>
            <p>
              Reroute gamepad rumble signals to control intimate hardware. Turn
              your favorite video games into immersive haptic experiences,
              including online multi-player interaction.
            </p>
            <p className={styles.platformNote}>
              Windows 10+ only • Requires Intiface Central • Games must use
              XInput or UWP Gamepad APIs (look for "Xbox Gamepad Compatible")
            </p>
            <details className={styles.ghrDetails}>
              <summary>Supported hardware &amp; known limitations</summary>
              <p>
                <strong>Works with:</strong> Vibrating devices (including all
                Lovense toys), rotating hardware (Vorze Cyclone/UFO, Lovense
                Nora).
              </p>
              <p>
                <strong>Not compatible with:</strong> Games using anti-cheat
                systems, VR games, keyboard/mouse-only input. Kiiroo Keon and
                The Handy are not yet supported.
              </p>
              <p>
                <Link to="https://discuss.buttplug.io/t/intiface-game-haptics-router-ghr-rumble-mod-game-support-list/229">
                  View the full game compatibility list →
                </Link>
              </p>
            </details>
            <div className={styles.secondaryButtons}>
              <Link
                className="button button--primary"
                to="https://github.com/intiface/intiface-game-haptics-router/releases/latest"
              >
                Download
              </Link>
              <Link
                className="button button--secondary"
                to="/docs/intiface-game-haptics-router"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityLinks() {
  const links = [
    {
      name: "Discord",
      url: "https://discord.buttplug.io",
      iconClass: "fa-brands fa-discord",
    },
    {
      name: "Discourse",
      url: "https://discuss.buttplug.io",
      iconClass: "fa-brands fa-discourse",
    },
    {
      name: "GitHub",
      url: "https://github.com/buttplugio",
      iconClass: "fa-brands fa-github",
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/buttplug.io",
      iconClass: "fa-brands fa-bluesky",
    },
    {
      name: "YouTube",
      url: "https://youtube.buttplug.io",
      iconClass: "fa-brands fa-youtube",
    },
    {
      name: "Patreon",
      url: "https://patreon.com/qdot",
      iconClass: "fa-brands fa-patreon",
    },
  ];

  return (
    <section className={styles.communitySection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Join the Community</h2>
        <div className={styles.communityLinks}>
          {links.map((link, idx) => (
            <Link key={idx} className={styles.communityLink} to={link.url}>
              <i className={`${link.iconClass} ${styles.communityIcon}`} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for Intiface Central, Game Haptics Router, and other Buttplug.io based applications"
    >
      <HomepageHeader />
      <main>
        <IntifaceCentralShowcase />
        <HowItWorks />
        <GameHapticsRouterCard />
        <CommunityLinks />
      </main>
    </Layout>
  );
}
