import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: "Intiface Central",
    img: "img/intiface_central_logo.svg",
    description: (
      <>
        <p>
          Intiface® Central is an open-source, cross-platform application that
          acts as a hub for intimate haptics/sensor hardware access.
        </p>
        <p>
          It connects to a wide variety of hardware via Bluetooth, USB, Serial,
          and more, exposing them to applications via the Buttplug Protocol.
        </p>
        <p>
          <strong>Supported Platforms:</strong> Windows 10+, macOS, Linux,
          Android, iOS.
        </p>
      </>
    ),
    downloads: [
      {
        label: "Desktop (GitHub)",
        href: "https://github.com/intiface/intiface-central/releases/latest",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.nonpolynomial.intiface_central",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/intiface-central/id6444728067",
      },
    ],
    docsLink: "/docs/intiface-central",
  },
  {
    title: "Intiface Game Haptics Router",
    img: "img/intiface_haptics_router_logo.svg",
    description: (
      <>
        <p>
          The Intiface® Game Haptics Router (GHR) allows users to reroute
          rumble signals intended for gamepads to control intimate hardware.
        </p>
        <p>
          Turn your favorite video games into immersive haptic experiences,
          supporting standard and VR titles.
        </p>
        <p>
          <strong>Supported Platforms:</strong> Windows 10+ Only.
        </p>
      </>
    ),
    downloads: [
      {
        label: "Windows (GitHub)",
        href: "https://github.com/intiface/intiface-game-haptics-router/releases/latest",
      },
    ],
    docsLink: "/docs/intiface-game-haptics-router",
  },
];

function Feature({ title, img, description, downloads, docsLink }) {
  const imgUrl = useBaseUrl(img);
  return (
    <div className={styles.feature}>
      {imgUrl && (
        <img src={imgUrl} className={styles.featureImage} alt={title} />
      )}
      <div className={styles.featureBody}>
        <h3>{title}</h3>
        <div className={styles.featureDescription}>{description}</div>
        <div className={styles.buttons}>
          {downloads.map((d, i) => (
            <Link
              key={i}
              className="button button--primary button--lg margin-bottom--sm"
              to={d.href}
            >
              {d.label}
            </Link>
          ))}
          <Link
            className="button button--secondary button--lg margin-bottom--sm"
            to={docsLink}
          >
            Documentation
          </Link>
        </div>
      </div>
    </div>
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
        <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
