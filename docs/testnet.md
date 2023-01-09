---
sidebar_position: 6
---

# Testnets

Over the coming quarters, Obol Labs have and will continue to coordinate and host a number of progressively larger testnets to help harden the charon client and iterate on the key generation tooling.

The following is a break down of the intended testnet roadmap, the features that are to be complete by each testnet, and their target start date and durations.

# Testnets

- [x] [Dev Net 1](#devnet-1)
- [x] [Dev Net 2](#devnet-2)
- [x] [Athena Public Testnet 1](#athena-public-testnet-1)
- [ ] [Bia Public Testnet 2](#bia-public-testnet-2)
- [ ] [Circe Attack Net](#cerce-attack-net)

## Devnet 1

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Completed Date:** June 2022

**Duration:** 1 week

**Goals:**

- A single user completes a first tutorial alone, using docker compose to spin up 4 charon clients on a single machine, with a remote consensus client. The keys are created locally in charon, and activated with the existing launchpad.
- Prove the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works.
- Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to charon running across a network.

## Devnet 2

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Completed Date:** July 2022

**Duration:** 2 weeks

**Goals:**

- Groups of 4 testers complete a group onboarding tutorial, using docker compose to spin up 4 charon clients, each on their own machine at each operators home or their place of choosing, running at least a kiln consensus client.
- Operators avoid exposing charon to the public internet on a static IP address through the use of Obol hosted relay nodes.
- User test `charon dkg`. The launchpad is not used, and this dkg is triggered by a manifest config file created locally by a single operator using the `charon create dkg` command.
- Effective collection of network performance data, to enable gathering even higher signal performance data at scale during public testnets. This was the first time charon was run in variable, non-virtual networks (i.e. the real internet).
- Block proposals in place

## Athena Public Testnet 1

**Participants:** Obol Community

**State:** Bare Minimum

**Network:** Görli

**Completed date:** October 2022

**Duration:** 2 week cluster setup, 8 weeks operation

**Goals:**

- Get distributed validators into the hands of the Obol Early Community for the first time
- Create the first public onboarding experience and gather feedback. This is the first time we need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) in as many languages as possible.
- Make deploying Ethereum validator nodes accessible using the CLI
- Generate a huge backlog of bugs, feature requests, platform requests and integration requests

## Bia Public Testnet 2

**Participants:** Obol Community, Ethereum staking community

**State:** MVP

**Network:** Görli

**Target Completed date:** March 2023

**Duration:** 2 week cluster setup, 4-8 weeks operation

**Goals:**

- Engage the wider Solo and Professional Ethereum Staking Community.
- Get integration feedback.
- Build confidence in Charon after running DVs on an Ethereum testnet.
- Prove Charon superior performance and benefits compared to other DVT solutions.
- Distributed Validator returns competitive versus single validator clients
- Make deploying Ethereum validator nodes accessible using the DV Launchpad.
- Build comprehensive guides for various profiles to spin up DVs with minimal supervision from the core team.

## Cerce Attack Net

**Participants:** Obol Community, Immunefi Bug Bounty searchers, Code4rena.io

**State:** Client Hardening

**Network:** Görli

**Target Completed Date:** June 2023

**Duration:** 2-4 weeks operation, depending on how resilient the clients are

**Goals:**

- Break charon, the launchpad, and the Obol API in multiple ways after having focused primarily on the happy path during the previous testnets.
- Create a number of testing tools to facilitate the disruption of charon, including releasing a p2p network abuser, a fuzz testing client, k6 scripts for load testing/hammering RPC endpoints and more.
- Find as many memory leaks, DoS vulnerable endpoints and operations, missing signature verifications and more.
- This testnet may be centered around a hackathon if suitable.