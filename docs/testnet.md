---
sidebar_position: 9
---

# 🧪 Testnets

![Testnet Roadmap](/img/ObolTestnetRoadmap.png)

Over the coming quarters, Obol Labs will be coordinating and hosting a number of progressively larger test nets to help harden the charon client and iterate on the key generation tooling. 

The following is a break down of the intended testnet roadmap.

## Devnets

**State:** Pre-product

**Network:** Ephemeral Dev Networks

**Goals:** 
- Enable a group of distinct machines to validate together
- Basic form of DKG can be completed

## Public Testnet

**State:** Bare Minimum

**Network:** Merged Test Network (e.g. Görli)

**Goals:** 
- Engage Obol Community 
- Facilitate self-service deployment of nodes

## Attack Net

**State:** Client Hardening

**Network:** Merged Test Network (e.g. Görli)

**Goals:** 
- Break charon in multiple ways
- Improve DoS resistance

## Public Testnet II

**State:** MVP

**Network:** Merged Gnosis Chain

**Goals:** 
- Distributed Validator returns competetive versus single validator clients
- Run an unreasonably large percentage of a test network to see the network performance at scale if a majority of validators moved to DV architectures.

## Red/Blue Net

**State:** Production Ready

**Network:** Merged Gnosis Chain

**Goals:** 
- Charon nodes cannot be DoS'd 
- Demonstrate that fault tolerant validation is real, safe and cost competetive.