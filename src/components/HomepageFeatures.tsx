/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  alt: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Learn",
    image: "/img/CharonLogo.svg",
    alt: "Charon Distributed Validator Client Logomark",
    description: (
      <>
        Understand how Charon powers Obol distributed validators.
      </>
    ),
    link: "/learn/charon/intro",
  },
  {
    title: "Run a DV",
    image: "/img/noun_ethereum.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        Jump straight into our quickstart guides.
      </>
    ),
    link: "/run/start/quickstart_overview",
  },
  {
    title: "Advanced Guides",
    image: "/img/noun_laboratory.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        Use the SDK, migrate existing validators, and more. 
      </>
    ),
    link: "/adv/advanced/quickstart-sdk",
  },
  {
    title: "Community & Governance",
    image: "/img/noun_gardening.png",
    alt: "Image courtesy of the Noun Project",
    description: (
      <>
        Info on Obol’s governance, RAF, token, Techne Credential, and Staking Mastery program.
      </>
    ),
    link: "/gov/governance/collective",
  },
];

function Feature({ title, image, description, alt, link }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <Link to={link}>
        <div className="text--center">
          <img className={styles.featureImg} alt={alt} src={image} />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Link to={link} style={{ textDecoration: "none" }}>
          <div className="text--center--title">
            <h3>{title}</h3>
          </div>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
