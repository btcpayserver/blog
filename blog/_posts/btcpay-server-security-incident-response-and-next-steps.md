---
title: 'BTCPay Server Security Incident: Our Response and Next Steps'
date: 2026-08-10
author: Pavlenex
category:
  - 'announcements'
tags:
  - 'security'
  - 'btcpay-server'
  - '2.4.2'
coverImage: '/images/whats-next.jpeg'
---

A recently disclosed vulnerability in BTCPay Server was exploited to steal funds from some users. The vulnerability allowed an attacker to obtain LND admin macaroon credentials from affected instances and use them to access connected LND wallets.

We published the technical details and remediation steps in our [security advisory](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/).

_If you have not yet updated, **please do so immediately**. Updating to BTCPay Server 2.4.2 now also updates LND and regenerates its admin macaroon. If you are unsure whether your instance was updated correctly, run the update again through the user interface or with `btcpay-update.sh`._

## What we are doing

### Supporting security researchers

The [BTCPay Server Foundation](https://foundation.btcpayserver.org) will donate 0.21 BTC to [Craig Raw](https://x.com/craigraw) and 0.21 BTC to the [Bitcoin Red Team](https://opensats.org/funds/red) fund for their responsible security disclosure of the vulnerability.

These are modest contributions, but they are what we can offer as a FOSS project and a way to appreciate people doing critical security work, which helps the entire ecosystem.

### Funding a recovery bounty

Friends and supporters of the BTCPay Server project have committed to funding a bounty to recover the stolen funds. The bounty will be 10% of the amount recovered, up to a maximum of 3 BTC for full recovery of the funds.

To anyone with actionable information that could lead to a recovery, including the attacker, please contact [security@btcpayserver.org](mailto:security@btcpayserver.org). Signal and other secure communication channels can be provided upon request.

If multiple reports contribute to the recovery, the bounty will be split in coordination with the victims, based on the amount each victim lost, the funds recovered, how useful the information was to the recovery efforts, and other relevant factors.

### Cooperating with the community on tracking and freezing stolen funds

We want to share our appreciation for all the security teams from exchanges, blockchain analytics providers, and law enforcement authorities who reached out and provided their help during these challenging times.

If you were affected and have not yet contacted us, email [security@btcpayserver.org](mailto:security@btcpayserver.org) with any relevant information, particularly on-chain addresses and transaction details.

Affected users should also report the theft directly to their local authorities and contact relevant exchanges or services if the stolen funds are traced to them. Individual reports can help preserve records, establish a clear chain of evidence, and improve the chance of funds being frozen or recovered.

### Strengthening security review

We are introducing more robust code-scanning and review processes with support from several external organizations. We are also working through reports from the Bitcoin Red Team, Project Loupe, Magic Grants and independent security researchers.

We will share more details and acknowledge the organizations supporting this work once the arrangements are finalized.

### Prioritizing security releases

For the foreseeable future, we are prioritizing security patches and hardening over major new features.

As a security practice, keep funds in cold storage whenever possible. If you need a hot wallet for daily operations, regularly move excess funds to cold storage, especially during this period of rapid, AI-driven change.

## The environment has changed

AI is changing the balance between attackers and defenders. As models improve, it becomes faster and cheaper to inspect large codebases and find weaknesses.

Bitcoin projects are particularly exposed because they are valuable targets. The rest of the software industry will face the same reality.

Defending software in this environment requires better tools, more thorough reviews, faster security responses, and support for researchers who find and responsibly report vulnerabilities.

If we give up open source or self-custody because defending them is difficult, we give up the freedom Bitcoin was created to protect.

To the users who lost funds: we are sorry.

We will examine our mistakes, but regret alone will not help affected users or secure the project. There is no time to waste. We have to learn, improve, and act quickly.

Thank you to everyone in the community who reported issues, helped affected users, shared information, contacted exchanges, and supported the project through this incident.
