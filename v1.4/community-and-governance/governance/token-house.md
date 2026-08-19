# The Token House

In the Token House, OBOL Token holders are responsible for submitting, deliberating, and voting on various Obol Collective governance proposals.

## Overview of the Obol Token House

* Proposals are reviewed and voted on in three-week cycles.

:::info
<mark style="color:green;">You can subscribe to the public calendar</mark> [<mark style="color:green;">here</mark>](https://calendar.google.com/calendar/u/0?cid=Y183YzQ0ZmYwZjM5ODE4ZTcyODg2OTM2MmI4ZWEyMGNmMDdhMmZmMmZiMzMxYjE2MjMwYzg3ZjQxZGRiYjA4N2ViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20\&ref=blog.obol.org) <mark style="color:green;">so you always know where the current cycle stands.</mark>&#x20;
:::

* In the first week, anyone may draft a proposal of any type based on [this template](https://community.obol.org/t/proposal-template/208) and post it on the [Forum](https://community.obol.org/) with \[Draft] in the title. Delegates, Obol Collective members, and the general public can provide feedback on proposals in the forum, which should be incorporated into the proposal using the author’s best judgment.
* Once your proposal has been approved by four top-100 Delegates (by voting power), add a link to your proposal to the Voting Cycle Roundup forum thread by the last day of Week 2, and update the title from \[Draft] to \[Final]. The proposal then moves on to Week 3: Voting.
* If your proposal is passed, the Obol Association will facilitate its administration, including distributing approved OBOL Tokens grants.
*   If your proposal fails, you can make a new proposal in the next cycle, specifying how you have incorporated significant changes from your first proposal.\\

    ![](/img/gitbook/Token_house.png)

## Token House Governance Proposal Process

Anyone can submit a proposal to the Token House by using the Governance Portal. Proposals are accepted or rejected using a voting process. A proposal must be one of the valid proposal types listed below and follow the voting process described here.

All governance proposals go through a 3-week cycle. Each “week” runs from Thursday at 7:00 pm GMT until Wednesday at 7:00 pm GMT.

### Valid Proposal Types

All governance proposals must fall within one of the following categories:

* Ecosystem grants
* Protocol upgrades
* Token inflation adjustment
* Treasury allocations
* Work agreements
* Veto on the Obol RAF operations

The different requirements for submission and approval of each Proposal Type are summarized below. If a specific template is not specified below, proposals should follow this standard proposal template.

All Ecosystem grant applications are processed by the Association.

Below are listed types of Token House Proposals. Each has a two-week review period plus one week voting window, with an approval threshold of 51%.

|          Proposal Type          |                                                                                                      Description                                                                                                      | Submission Requirements                                 |
| :-----------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------- |
|         Ecosystem grants        |                                     The Obol Association’s treasury may be used to support development of the Collective and/or growth of the ecosystem via the proposal template.                                    | Forum proposal + On-Chain Voting                        |
|    Token inflation adjustment   |                                                                                   Changes to the OBOL Token Contract or its supply.                                                                                   | Forum proposal + On-Chain Voting                        |
|     Treasury Appropriations     |                                                                    The amount of OBOL Tokens the Obol Association may spend or distribute annually                                                                    | Proposal initiated by the Association + On-Chain Voting |
|         Work agreements         |                     Formal arrangements between the Obol Association and contributors, teams, or organizations tasked with advancing specific initiatives or responsibilities within the ecosystem                    | Forum proposal + On-Chain Voting                        |
| Veto on the Obol RAF operations | The veto mechanism serves as a safeguard against decisions or actions within the RAF operations that are misaligned with the mission of decentralization, transparency, or the collective interests of the community. | Forum proposal + On-Chain Voting                        |
|        Protocol upgrades        |                                                           Scheduled changes to the on-chain smart contracts comprising the protocol or governance contracts.                                                          | Forum proposal + On-Chain Voting                        |
|           SQUAD Goals           |                                  It reflects the aim of establishing shared, strategic, and community-driven objectives. Goals are set annually, with each cycle beginning in April.                                  | Forum proposal + On-Chain Voting                        |

### Weeks 1-2: Feedback and Review

All proposal types should be posted to the [Obol Forum](https://community.obol.org/) for review. Proposal authors are expected to respond to feedback from Obol Collective members and Delegates.

Proposals should be:

* Submitted as a new discussion thread on the [Governance Forum](http://community.obol.tech/) in the appropriate Proposal Category.
* Marked with \[Draft] in the title.
* Formatted and contain information consistent with the [standard proposal template](https://community.obol.org/t/proposal-template/208).

Before the end of Week 2, a governance administrator will create a Voting Cycle Roundup thread in the forum summarising all the proposals that meet the voting requirements for Week 3 Voting.

For proposals to proceed to Week 3, four of the top 100 delegates by voting power must give explicit approval on the discussion thread. Delegates may signal approval by pasting the following comment on the proposal discussion thread: _”I am an Obol Delegate \[link to your delegate commitment in your Tally profile] with sufficient voting power, and I believe this proposal is ready to move to a vote."_

If a Delegate approves a proposal to move to a vote, it does not endorse that proposal. It simply signifies that they believe the proposal is ready to move to a vote.

After receiving the required approvals, the author should update the proposal title from \[Draft] to \[Final] and add a link to their proposal in the Voting Cycle Roundup thread by the last day of Week 2 at 19:00 GMT. Authors should also include a summary of incorporated feedback as a comment on their proposal thread so future reviewers can understand the proposal’s progress. Proposal authors should include relevant links if feedback was gathered outside the Forum (e.g., on Discord).

If a proposal author does not get explicit approval or wants more time for feedback, they should not include their proposal in the Voting Cycle Roundup thread. Instead, they should continue to seek community feedback and submit an updated proposal in the next voting cycle.

:::warning
If a proposal that did not receive explicit approval through the steps above is submitted to the voting portal, the Obol Association reserves the right to cancel it onchain. While the Association is currently working to formalize this cancel authority within the Governor contract, this measure helps preserve governance integrity and ensures that only properly vetted proposals are voted on.
:::

### Week 3: Publish a Proposal Onchain and Voting

During Week 3, a wallet holding at least [30,000 OBOL in voting power](https://etherscan.io/address/0xcB1622185A0c62A80494bEde05Ba95ef29Fbf85c#readContract) must publish the proposal on the [Obol Governance Platform](https://www.tally.xyz/gov/obol).

\
After publication, there is a 24-hour voting delay, during which the proposal can be canceled if necessary. The voting delay is the amount of time between when a proposal is submitted and when it goes up for voting. The delay gives token holders time to delegate their voting power before the vote starts or buy more votes. Governor takes a snapshot of all the voting power at the start of voting. Read more [here](https://docs.tally.xyz/set-up-and-technical-documentation/deploying-daos/how-to-pick-governor-parameters#how-to-pick-the-voting-delay).

\
After the 24 hours, Delegates (including OBOL Token holders who have self-delegated) vote on proposals via the [Obol Governance Portal](https://vote.obol.org/). All proposals are included in voting if they were added to the Voting Cycle Roundup thread before the deadline and have the approval of four top-100 delegates.

A governance proposal is **approved** if it satisfies two requirements:

* **Quorum:** A minimum number of OBOL Token votes measured as _a % of the total votable OBOL Token supply, as of the start of the voting period._ “Votable supply” is the total amount of OBOL Tokens that have been delegated (including to oneself) and, therefore, can participate in voting. The current definition for the OBOL Token House is 0.84% of minted supply.
* **Approval threshold:** The minimum _% of votes cast in support relative to the total number of votes._ The current definition for the OBOL Token House is 0.01% of minted supply.

A snapshot is taken at the start of each voting period to determine each delegate’s voting power. Voting is hosted on the Obol Governance Portal.

If a proposal is submitted for a vote and does not pass, the proposal will not be executed. If a proposal author wishes to iterate on a rejected proposal, they should:

1. Create a new proposal thread on the Forum.
2. Include a link to the first proposal that did not pass.
3. Clearly identify what has changed in the new proposal.

:::warning
If the same proposal fails to pass two consecutive times (i.e., it is rejected onchain twice in a row), it may not be reintroduced or submitted again for a minimum period of **10 governance cycles** — roughly equivalent to **7 months** (based on the current 3-week cycle length). This ensures that only well-formed, broadly supported proposals proceed and discourages repeated cycling of the same topic without meaningful revision or support.
:::

### Timelock Delay

After the voting period ends, if the proposal passes, there will be a 5-day timelock delay. The timelock delay is the minimum time required between the approval and execution of a proposal. This delay gives stakeholders a final opportunity to review and react before the proposal is implemented. Read more [here](token-house.md#implementation).

## Implementation

Approved governance proposals will be routed to the Obol Association for implementation. Upon receipt of an approved proposal, the Obol Association will determine whether the proposal is safe, consistent with the purposes of the Obol Collective, and capable of being implemented legally (including potential KYC requirements).

* If it is, the Association will act diligently and in a commercially reasonable manner to consider the proposal for implementation.
* If it is not, the Association may, at its discretion, remove the proposal for resubmission or implement it with guardrails.
