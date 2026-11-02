---
title: "Security Incident Affecting BTCPay Server 2.4.1 and Earlier"
permalink: /btcpay-server-security-incident-2-4-1-and-earlier/
date: 2026-11-02
author: BTCPay Server
category:
  - "announcements"
tags:
  - "security"
  - "btcpay-server"
coverImage: "/images/november-2026-security-incident.png"
---

On 1 November 2026, we received reports of Bitcoin and Litecoin being stolen from hot wallets on BTCPay Server. A hot wallet stores the keys needed to spend funds on the server itself.

Our investigation found that these attacks targeted servers running **BTCPay Server 2.4.1 (released on 23 July 2026) or earlier**. The attackers used a different method to exploit the vulnerability fixed in **2.4.2, released on 7 August 2026**.

Since our [August advisory](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/), we have released several further security updates. We wish we had done more to reach users still running older versions and alert them to the importance of updating.

## What you should do

To check your version, log in and look at the bottom of the page.

- **If you were already running 2.4.2 or later when we issued our warning on 1 November:** we have seen no impact from these attacks on those servers.
- **If you are running 2.4.1 or earlier:** we strongly recommend [moving to a fresh server](#moving-to-a-fresh-server) with a new wallet, after sweeping any remaining funds from the existing hot wallet. This applies even if you have not noticed a theft, and also if you updated from one of these versions after the 1 November warning.
- **If funds were stolen or you see signs of unauthorized access:** treat the entire machine and its secrets as compromised and follow the same recovery steps, even if you have already updated since the attack.

Funds in wallets whose spending keys are held off the server, including hardware wallets, were unaffected by these thefts. Accepting payments into these wallets remains our recommended practice. The recommendation to rebuild an older server still applies even if you keep wallet keys elsewhere.

## Moving to a fresh server

As explained in our [recovery guidance](https://x.com/MrKukks/status/2117131261458219471), updating alone cannot remove access an attacker may already have gained. An unchanged wallet balance does not rule out an earlier attack.

1. **Create a new wallet and sweep any remaining hot-wallet funds into it.** Use a trusted device and a new seed. Reusing the old seed on a new server leaves those funds at risk.
2. **Take the old server offline.** Preserve relevant logs and transaction records for the investigation before replacing it.
3. **Provision a fresh virtual machine.** Install the latest supported BTCPay Server release from trusted sources and connect the new wallet. Do not restore the entire old server onto the new machine.
4. **Replace potentially exposed passwords and access keys.** From a trusted device, revoke and replace credentials the old server could access, including applicable hosting, SSH, application, API, and Lightning credentials. Do not enter new credentials on the old machine.

## What happened and when

All times below are in UTC.

- **7 August:** [BTCPay Server 2.4.2 was released](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.2), fixing the vulnerability.
- **August–October:** we continued to publish security updates, including [2.4.4](https://blog.btcpayserver.org/btcpay-server-2-4-4/) and [2.4.5](https://blog.btcpayserver.org/btcpay-server-2-4-5/).
- **1 November, 13:46:** a wallet drain described in the incident reports occurred. We have not established when attackers first began exploiting the vulnerability.
- **1 November, 20:56:** we received the first email reporting a theft.
- **1 November:** we contacted VPS hosting providers, including LunaNode, and asked them to take BTCPay Server instances offline as a precaution to protect their customers.
- **1 November, 22:25:** we [warned the community on X](https://x.com/BtcpayServer/status/2117020340815819262) and asked operators to shut down their servers while we investigated.
- **2 November:** we [published an investigation update](https://x.com/BtcpayServer/status/2117106238123123008) identifying 2.4.1 and earlier as the affected versions. We also [reported that LunaNode and other hosting providers had taken instances offline as a precaution](https://x.com/BtcpayServer/status/2117106240098611681).

We thank the hosting providers for their quick response. If your hosted server was running 2.4.1 or earlier, contact your provider for help moving to a fresh VM.

## Reported destination addresses

The following addresses were identified in the incident reports:

- **Bitcoin:** [`bc1p0f7wmcnesrapznymf9ljdn04pudgmh96sqtrm9vmgqxdh666fh8qvn63r7`](https://mempool.space/address/bc1p0f7wmcnesrapznymf9ljdn04pudgmh96sqtrm9vmgqxdh666fh8qvn63r7)
- **Litecoin:** [`ltc1qp49tmfdueyaqrmgrx0uyx4uegyygt8yt02whee`](https://live.blockcypher.com/ltc/address/ltc1qp49tmfdueyaqrmgrx0uyx4uegyygt8yt02whee/)

Some activity at these addresses appears to predate the thefts described in the reports we have received so far. We have not established the full timeline or which transactions are linked to this incident, so their balances and transaction histories should not be treated as a confirmed total of losses.

## Reporting an incident

We are responding to affected users and reviewing incident reports. If you lost funds or noticed unauthorized activity, email [security@btcpayserver.org](mailto:security@btcpayserver.org). Include:

- The BTCPay Server version you were running at the time, plus when you last updated and the previous version, if known.
- When you noticed the incident, including your timezone.
- Relevant public transaction IDs and addresses.

If funds were stolen, also report the theft to your local authorities.

**Never send seed phrases, private keys, passwords, or other credentials.** Remove secrets from any logs or configuration files before sharing them.

With the rise in automated attacks using AI, we ask all users to be diligent about installing BTCPay Server updates as they are released. We regularly announce new releases on our [X profile](https://x.com/BtcpayServer) and in our [Telegram community chat](https://t.me/btcpayserver).

If you need a hot wallet for daily operations, keep only the funds needed for those operations on the server and move the rest to a wallet whose spending keys are held off the server.
