---
sidebar_position: 2
description: Community testing efforts
---

# Community Testing

:::tip
This page looks at the community testing efforts organised by Obol to test Distributed Validators at scale. If you are looking for guides to run a Distributed Validator on testnet you can do so [here](../../run/start/quickstart_overview.md).
:::

Over the last number of years, DV Labs has coordinated and hosted progressively larger testing efforts to help harden the Charon client and iterate on the key generation tooling.

Below is a breakdown of the testing initiatives, the features targeted for completion in each testnet, along with their respective completion dates and durations.

# Testing Programs on Testnet

Listed from most recent to oldest:

- [x] [Lido Testnet 3 - SimpleDVT](#lido-testnet-wave-3---simpledvt)
- [x] [Lido Testnet 2](#lido-testnet-wave-2)
- [x] [Lido Testnet 1 - Pilot](#lido-testnet-wave-1---pilot)
- [x] [Bia Public Testnet 2](#bia-public-testnet-2)
- [x] [Athena Public Testnet 1](#athena-public-testnet-1)
- [x] [Dev Net 2](#devnet-2)
- [x] [Dev Net 1](#devnet-1)

## Lido Testnet Wave 3 - SimpleDVT

Official report [available here](https://obol.org/lido_obol_3.pdf). The metrics presented were derived from a 45-day monitoring period starting on November 18th, 2023. Each cluster initially ran 5 validators, a number that was subsequently scaled up to 50 and then 100 for most clusters. Throughout the testing, various challenges were encountered, primarily stemming from infrastructure limitations due to the early-stage development of the Holesky testnet. Throughout this monitoring phase, the aggregate metrics of Obol DVT clusters surpassed both Lido’s minimum requirements and the Holesky network averages.

**Participants:**  Professional and community operators. Initially 214 participants, which later fell to 196.

**State:** Pre-release

**Network:** Holesky

**Completed date:** Jan 11th, 2024

**Duration:** 2 months (Nov 28th, 2023 - Jan 11th, 2024)

**Goals:**

- Engage a broad set of node operators.
- Operate a high number of validators on each cluster.
- Gather performance data on potential candidates for Lido SimpleDVT onboarding.
- Conduct large-scale testing within Lido's framework. 
- Demonstrate good performance, even with a large degree of geographic, client, and hardware diversity.

## Lido Testnet Wave 2

Official report [available here](https://obol.org/lido_obol_2.pdf). Our testing period spanned 59 days, from March 23rd to May 20th, 2023. During this time, we focused on key metrics for our Lido clusters, also drawing comparisons with industry peers. We're excited to share that the data displays strong performance of our DVT clusters as we continue to improve and enhance our middleware client, Charon.

**Participants:** >50 community professional and community node operators.

**State:** MVP

**Network:** Görli

**Completed date:** May 2023

**Duration:** 3 months (March - May 2023)

**Goals:**

- Engage a broad set of node operators.
- Conduct large-scale testing within Lido's framework. 
- Demonstrate good performance, even with a large degree of geographic, client, and hardware diversity.

## Lido Testnet Wave 1 - Pilot

Offical report [available here](https://obol.org/lido_obol_1.pdf).Gathered key metrics from our Lido clusters, benchmarking these metrics against other
industry players, showing strong results and reaffirming our confidence in the
future of the technology. 

**Participants:** Professional node operators: Hashquark, CryptoManufaktur, Nethermind, Simply Staking, DSRV, Kukis Global, Chorus One, Staking Facilities, Blockscape, Everstake, Stakely.

**State:** MVP

**Network:** Görli

**Completed date:** January 2023

**Duration:** 104 days (Oct 3rd, 2022 - Jan 15th, 2023)

**Goals:**

- Engage Lido and Lido node operators with DVT. 
- Assist Lido to build out a testing program framework with can be repeated at a larger scale.
- Test up to 1000 active validators within each cluster.

## Bia Public Testnet 2

This second public testnet intends to take the learning from Athena and scale the network by engaging both the wider at-home validator community and professional operators. This is the first time users are setting up DVs using the DV launchpad.

This testnet is also important for learning the conditions Charon will be subjected to in production. A core output of this testnet is a large number of autonomous public DV clusters running and building up the Obol community with technical ambassadors.

**Participants:** Obol Community, Ethereum staking community

**State:** MVP

**Network:** Görli

**Completed date:** March 2023

**Duration:** 2 weeks cluster setup, 4-8 weeks operation

**Goals:**

- Engage the wider Solo and Professional Ethereum Staking Community.
- Get integration feedback.
- Build confidence in Charon after running DVs on an Ethereum testnet.
- Learn about the conditions Charon will be subjected to in production.
- Distributed Validator returns are competitive versus single validator clients.
- Make deploying Ethereum validator nodes accessible using the DV Launchpad.
- Build comprehensive guides for various profiles to spin up DVs with minimal supervision from the core team.

## Athena Public Testnet 1

With tutorials for solo and group flows having been developed and refined. The goal for public testnet 1 was to get distributed validators into the hands of the wider Obol Community for the first time. The core focus of this testnet was the onboarding experience.

The core output from this testnet was a significant number of public cluster running and public feedback collected.

This was an unincentivized testnet and formed the basis for us to figure out a Sybil resistance mechanism.

**Participants:** Obol Community

**State:** Bare Minimum

**Network:** Görli

**Completed date:** October 2022

**Duration:** 2 weeks cluster setup, 8 weeks operation

**Goals:**

- Get distributed validators into the hands of the Obol Early Community for the first time.
- Create the first public onboarding experience and gather feedback. This is the first time we need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) as possible.
- Make deploying Ethereum validator nodes accessible using the CLI.
- Generate a backlog of bugs, feature requests, platform requests and integration requests.

## Devnet 2

The second devnet aimed to have a number of trusted operators test out our earliest tutorial flows **together** for the first time.

The aim was for groups of 4 testers to complete a group onboarding tutorial, using `docker compose` to spin up 4 Charon clients and 4 different validator clients (Lighthouse, Teku, Lodestar and Vouch), each on their own machine located either at the operator's home or a location of their choice, while running at least a kiln consensus client.

This devnet was the first time `charon dkg` was tested with users. A core focus of this devnet was to collect network performance data.

This was also the first time Charon was run in variable, non-virtual networks (i.e. the real internet).

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Completed Date:** July 2022

**Duration:** 2 weeks

**Goals:**

- Groups of 4 testers complete a group onboarding tutorial, using `docker compose` to spin up 4 Charon clients, each on their own machine located either at the operator's home or a location of their choice, while running at least a kiln consensus client.
- Operators avoid exposing Charon to the public internet on a static IP address through the use of Obol-hosted relay nodes.
- Users test `charon dkg`. The launchpad is not used, and this dkg is triggered by a manifest config file created locally by a single operator using the `charon create dkg` command.
- Effective collection of network performance data, to enable gathering even higher signal performance data at scale during public testnets.
- Block proposals are in place.

## Devnet 1

The first devnet aimed to have a number of trusted operators test out our earliest tutorial flows. The aim was for a single user to complete the tutorials alone, using `docker compose` to spin up 4 Charon clients, and 4 different validator clients on a single machine, using a remote consensus client. The keys were created locally in Charon and activated with the existing launchpad.

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Completed Date:** June 2022

**Duration:** 1 week

**Goals:**

- A single user completes the first tutorial alone, using `docker compose` to spin up 4 Charon clients on a single machine, with a remote consensus client. The keys are created locally in Charon and activated with the existing launchpad.
- Prove that the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works.
- Establish basic monitoring systems in preparation for the next testnet, where accurate monitoring will be crucial as Charon operates across a network.