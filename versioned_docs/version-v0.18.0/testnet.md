---
sidebar_position: 6
description: Obol testnets roadmap
---

# Testnets

Over the coming quarters, Obol Labs has been and will continue to coordinate and host a number of progressively larger testnets to help harden the Charon client and iterate on the key generation tooling.

The following is a breakdown of the intended testnet roadmap, the features that are to be completed by each testnet, and their target start date and duration.

# Testnets

- [x] [Dev Net 1](#devnet-1)
- [x] [Dev Net 2](#devnet-2)
- [x] [Athena Public Testnet 1](#athena-public-testnet-1)
- [x] [Bia Public Testnet 2](#bia-public-testnet-2)

## Devnet 1

The first devnet aimed to have a number of trusted operators test out our earliest tutorial flows. The aim was for a single user to complete these tutorials alone, using `docker compose` to spin up 4 Charon clients and 4 different validator clients on a single machine, with a remote consensus client. The keys were created locally in Charon and activated with the existing launchpad.

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Completed Date:** June 2022

**Duration:** 1 week

**Goals:**

- A single user completes a first tutorial alone, using `docker compose` to spin up 4 Charon clients on a single machine, with a remote consensus client. The keys are created locally in Charon and activated with the existing launchpad.
- Prove that the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works.
- Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to Charon running across a network.

## Devnet 2

The second devnet aimed to have a number of trusted operators test out our earliest tutorial flows **together** for the first time.

The aim was for groups of 4 testers to complete a group onboarding tutorial, using `docker compose` to spin up 4 Charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch), each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client. 

This devnet was the first time `charon dkg` was tested with users. A primary focus of this devnet was to collect network performance data.

This was also the first time Charon was run in variable, non-virtual networks (i.e. the real internet).

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Completed Date:** July 2022

**Duration:** 2 weeks

**Goals:**

- Groups of 4 testers complete a group onboarding tutorial, using `docker compose` to spin up 4 Charon clients, each on their own machine at each operator's home or their place of choosing, running at least a kiln consensus client.
- Operators avoid exposing Charon to the public internet on a static IP address through the use of Obol-hosted relay nodes.
- Users test `charon dkg`. The launchpad is not used, and this dkg is triggered by a manifest config file created locally by a single operator using the `charon create dkg` command.
- Effective collection of network performance data, to enable gathering even higher signal performance data at scale during public testnets.
- Block proposals are in place.

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

## Bia Public Testnet 2

This second public testnet intends to take the learning from Athena and scale the network by engaging both the wider at-home validator community and professional operators. This is the first time users are setting up DVs using the DV launchpad.

This testnet is also important for learning the conditions Charon will be subjected to in production. A core output of this testnet is a large number of autonomous public DV clusters running and building up the Obol community with technical ambassadors.

**Participants:** Obol Community, Ethereum staking community

**State:** MVP

**Network:** Görli

**Target Completed date:** March 2023

**Duration:** 2 weeks cluster setup, 4-8 weeks operation

**Goals:**

- Engage the wider Solo and Professional Ethereum Staking Community.
- Get integration feedback.
- Build confidence in Charon after running DVs on an Ethereum testnet. 
- Learn about the conditions Charon will be subjected to in production.
- Distributed Validator returns are competitive versus single validator clients.
- Make deploying Ethereum validator nodes accessible using the DV Launchpad.
- Build comprehensive guides for various profiles to spin up DVs with minimal supervision from the core team.
