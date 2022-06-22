---
sidebar_position: 13
---

# Testnets

![Testnet Roadmap](/img/ObolTestnetRoadmap.png)

Over the coming quarters, Obol Labs will be coordinating and hosting a number of progressively larger test nets to help harden the charon client and iterate on the key generation tooling.

The following is a break down of the intended testnet roadmap, the features that are to be complete by each testnet, and their target start date and durations.

# Testnets

- [x] Dev Net 1
- [x] Dev Net 2
- [ ] Athena Public Testnet 1
- [ ] Bia Attack net
- [ ] Circe Public Testnet 2
- [ ] Demeter Red/Blue net

## Devnet 1

The first devnet aim will be to have a number of trusted operators test out our earliest tutorial flows. The aim will be for a single user to complete these tutorials alone, using docker compose to spin up 4 charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch) on a single machine, with the option of adding a single consensus layer client from a weak subjectivity checkpoint (the default will be to connect to our Kiln RPC server, we shouldn't get too much load for this phase). The keys will be created locally in charon, and activated with the existing launchpad or ethdo.

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Target start date:** May 2022

**Duration:** 1 week

**Goals:**

- User test a first tutorial flow to get the kinks out of it. Devnet 2 will be a group flow, so we need to get the solo flow right first
- Prove the distributed validator paradigm with 4 separate VC implementations together operating as one logical validator works
- Get the basics of monitoring in place, for the following testnet where accurate monitoring will be important due to charon running across a newtwork.

**Test Artifacts:**

- Responding to a typeform, an operator will list:
  - The public key of the distributed validator
  - Any difficulties they incurred in the cluster instantiation
  - Any deployment variations they would like to see early support for (e.g. windows, cloud, dappnode etc.)

## Devnet 2

The second devnet aim will be to have a number of trusted operators test out our earliest tutorial flows _together_ for the first time.

The aim will be for groups of 4 testers to complete a group onboarding tutorial, using docker compose to spin up 4 charon clients and 4 different validator clients (lighthouse, teku, lodestar and vouch), each on their own machine at each operators home or their place of choosing, running at least a kiln consensus client.

As part of this testnet, operators will need to expose charon to the public internet on a static IP address.

This devnet will also be the first time `charon dkg` is tested with users. The launchpad is not anticipated to be complete, and this dkg will be triggered by a manifest config file created locally by a single operator using the `charon create dkg` command.

A core focus of this devnet will be to collect network performance data. This will be the first time we will have charon run in variable, non-virtual networks (i.e. the real internet). Focusing on effective collection of performance data in this devnet will be a core focus, to enable gathering even higher signal performance data at scale during public testnets.

**Participants:** Obol Dev Team, Client team advisors.

**State:** Pre-product

**Network:** Kiln

**Target start date:** June 2022

**Duration:** 2 weeks

**Goals:**

- User test a first dkg flow
- User test the complexity of exposing charon to the public internet
- Have block proposals in place
- Build up the analytics plumbing to injest network traces from dump files or distributed tracing endpoints

## Athena Public Testnet 1

With tutorials for solo and group flows having been developed and refined. The goal for public testnet 1 is to get distributed validators into the hands of the wider Proto Community for the first time.

This testnet would be intended to include the Distributed Validator Launchpad.

The core focus of this testnet is the onboarding experience. This is the first time we would need to provide comprehensive instructions for as many platforms (Unix, Mac, Windows) in as many languages as possible (need to engage language moderators on discord).

The core output from this testnet is a large number of typeform submissions, for a feedback form we have refined since devnets 1 and 2.

This will be an unincentivised testnet, and will form as the basis for us figuring out a sybil resistance mechanism for later incentivised testnets.

**Participants:** Obol Proto Community

**State:** Bare Minimum

**Network:** Kiln or a Merged Test Network (e.g. Görli)

**Target start date:** July 2022

**Duration:** 2 week setup, 4 weeks operation

**Goals:**

- Engage Obol Proto Community
- Make deploying Ethereum validator nodes accessible
- Generate a huge backlog of bugs, feature requests, platform requests and integration requests

## Bia Attack Net

At this point, we have tested best-effort, happy-path validation with supportive participants. The next step towards a mainnet ready client is to begin to disrupt and undermine it as much as possible.

This testnet needs a consensus implementation as a hard requirement, where it may have been optional for Athena. The intention is to create a number of testing tools to facilitate the disruption of charon, including releasing a p2p network abuser, a fuzz testing client, k6 scripts for load testing/hammering an RPC endpoints and more.

The aim is to find as many memory leaks, DoS vulnerable endpoints and operations, missing signature verifications and more. This testnet may be centered around a hackathon if suitable.

**Participants:** Obol Proto Community, Immunefi Bug Bounty searchers

**State:** Client Hardening

**Network:** Kiln or a Merged Test Network (e.g. Görli)

**Target start date:** August 2022

**Duration:** 2-4 weeks operation, depending on how resilient the clients are

**Network:** Merged Test Network (e.g. Görli)

**Goals:**

- Break charon in multiple ways
- Improve DoS resistance

## Cerce Public Testnet II

After working through the vulnerabilities hopefully surfaced during the attack net, it becomes time to take the stakes up a notch. The second public testnet for Obol will be in partnership with the Gnosis Chain, and will use validators with real skin in the game.

This is intended to be the first time that Distributed Validator tokenisation comes into play. Obol intends to let candidate operators form groups, create keys that point to pre-defined Obol controlled withdrawal addresses, and submit a typeform application to our testnet team including their created deposit data and manifest lockfile and exit data. (So we can verify the validator pubkey they are submitting is a DV)

Once the testnet team has verified the operators as real humans not sybil attacking the testnet that have created legitimate DV keys, their validator will be activated with Obol GNO.

At the end of the testnet period, all validators will be exited, and their performance will be judged to decide the incentivisation they will recieve.

**Participants:** Obol Proto Community, Gnosis Community, Ethereum Staking Community

**State:** MVP

**Network:** Merged Gnosis Chain

**Target start date:** September 2022 ([Dappcon](https://www.dappcon.io/) runs 12th-14th of Sept. )

**Duration:** 6 weeks

**Network:** Merged Gnosis Chain

**Goals:**

- Broad community participation
- First Obol Incentivised Testnet
- Distributed Validator returns competetive versus single validator clients
- Run an unreasonably large percentage of an incentivised test network to see the network performance at scale if a majority of validators moved to DV architectures

## Demeter Red/Blue Net

The final planned testnet before a prospective look at mainnet deployment is a testnet that takes inspiration for the Cyber Security industry and makes use of Red Teams and Blue Teams.

In Cyber Security, Red team are on offense, Blue team are on defence. In Obol's case, Operators will be grouped into clusters based on application and are assigned to either red team or blue team in secret. Once the validators are active, it will be the red teamers goal to disrupt the cluster to the best of their ability, and their rewards will be based on how much worse the cluster performs than optimal.

The blue team members will aim to keep their cluster online and signing. If they can keep their distributed validator online for the majority of time despite the red teams best efforts, they will recieve an outsized reward versus the red team reward.

The aim of this testnet is to show that even with directly incentivised byzantine actors, that a distributed validator client can remain online and timely in it's validation, further cementing trust in the clients mainnet readiness.

**Participants:** Obol Proto Community, Gnosis Community, Ethereum Staking Community, Immunefi Bug Bounty searchers

**State:** Mainnet ready

**Network:** Merged Gnosis Chain

**Target start date:** October 2022 ([Devcon 6](https://devcon.org/en/#road-to-devcon) runs 7th-16th of October. )

**Duration:** 4 weeks

**Network:** Merged Gnosis Chain

**Goals:**

- Even with incentivised byzantine actors, distributed validators can reliably stay online
- Charon nodes cannot be DoS'd
- Demonstrate that fault tolerant validation is real, safe and cost competetive.
- Charon is feature complete and ready for audit
