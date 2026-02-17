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
            width="200"
            style={{ marginBottom: "20px" }}
          />
        )}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.heroTagline}>
          Applications for accessing and controlling intimate haptics/sensor
          hardware, built on the Buttplug Framework
        </p>
        <div className={styles.heroCta}>
          <a
            className="button button--secondary button--lg"
            href="#intiface-central"
          >
            Get Intiface Central
          </a>
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
    "Backward compatibility with older Buttplug apps",
    "Supports devices that didn't exist when apps were written",
    "WebSocket connections for app integration",
  ];

  const platforms = [
    { name: "Windows 10+", icon: "W" },
    { name: "macOS", icon: "M" },
    { name: "Linux", icon: "L" },
    { name: "Android", icon: "A" },
    { name: "iOS", icon: "i" },
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

          <div className={styles.platformBadges}>
            {platforms.map((platform, idx) => (
              <span key={idx} className={styles.platformBadge}>
                <span className={styles.platformIcon}>{platform.icon}</span>
                {platform.name}
              </span>
            ))}
          </div>

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
                <span className={styles.downloadPlatform}>Windows</span>
                <span className={styles.downloadMeta}>.exe</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.macos ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
                <span className={styles.downloadPlatform}>macOS</span>
                <span className={styles.downloadMeta}>.dmg</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.linux ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
                <span className={styles.downloadPlatform}>Linux</span>
                <span className={styles.downloadMeta}>.zip</span>
              </Link>
            </div>

            <h4 className={styles.downloadHeading}>Mobile</h4>
            <div className={styles.downloadRow}>
              <Link
                className={styles.downloadCard}
                to="https://play.google.com/store/apps/details?id=com.nonpolynomial.intiface_central"
              >
                <span className={styles.downloadPlatform}>Android</span>
                <span className={styles.downloadMeta}>Google Play</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to="https://apps.apple.com/us/app/intiface-central/id6444728067"
              >
                <span className={styles.downloadPlatform}>iOS</span>
                <span className={styles.downloadMeta}>App Store</span>
              </Link>
              <Link
                className={styles.downloadCard}
                to={icDownloads?.androidApk ?? "https://github.com/intiface/intiface-central/releases/latest"}
              >
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
              Playground to control your devices.
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
              your favorite video games into immersive haptic experiences.
            </p>
            <p className={styles.platformNote}>
              Windows 10+ only • Requires Intiface Central
            </p>
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
      icon: "💬",
    },
    {
      name: "Discourse",
      url: "https://discuss.buttplug.io",
      icon: "📝",
    },
    {
      name: "GitHub",
      url: "https://github.com/buttplugio",
      icon: "🔧",
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/buttplug.io",
      icon: "🦋",
    },
  ];

  return (
    <section className={styles.communitySection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Join the Community</h2>
        <div className={styles.communityLinks}>
          {links.map((link, idx) => (
            <Link key={idx} className={styles.communityLink} to={link.url}>
              <span className={styles.communityIcon}>{link.icon}</span>
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
