---
title: "Security Update: Hot-Wallet Thefts and a Correction to Our 2.4.2 Advisory"
date: 2026-11-02
author: BTCPay Server
category:
  - "announcements"
tags:
  - "security"
  - "btcpay-server"
---

## Immediate action required

We have received multiple reports of Bitcoin and Litecoin on-chain hot wallets being drained on BTCPay Server instances. **Among the cases investigated so far, every affected instance was running a version older than BTCPay Server 2.4.2.**

The vulnerability was fixed in **2.4.2, released on 7 August 2026**, but our assessment of its impact was incomplete. Contrary to our [August advisory](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/), the vulnerability was not limited to exposing LND credentials: it could be used to read arbitrary files on the BTCPay Server instance and enable escalation to full remote control of the machine.

**The earlier assurance that BTCPay Server's on-chain hot wallets were unaffected was incorrect. We are sorry for that assessment error and for the harm suffered by affected users.**

**To check your current version, log in to your BTCPay Server instance and look for the version number in the footer at the bottom of the page.**

- **If you are still running a version older than 2.4.2:** update to the latest supported release immediately. If you cannot do so promptly, take the server offline. This applies whether or not you use LND or Lightning.
- **If your server has been exploited:** consider the entire machine compromised. Updating or attempting to clean it up is not sufficient. Keep it offline and rebuild on a clean system, replacing exposed credentials and wallet keys as described below.
- **If you updated before these attacks:** we have not received reports of this exploit affecting instances already running 2.4.2 or later. However, an update does not undo a compromise that occurred beforehand.

## What happened

The reports describe hot-wallet drains from **1 November 2026 at 13:46 UTC** (22:46 in Japan). This is the incident time reported in those accounts, not an established starting time for exploitation. We have not established when exploitation first began.

After receiving multiple reports, we [issued a public warning on X](https://x.com/BtcpayServer/status/2117020340815819262) on **1 November 2026 at 22:25:56 UTC**, asking operators to shut down their instances while we investigated.

We also notified hosting provider LunaNode and asked for servers to be shut down as soon as possible to help prevent further losses during the investigation.

Our investigation found that all affected instances examined so far were still running versions older than 2.4.2. The fix for this vulnerability has been available since [7 August 2026](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.2).

## Correcting our earlier assessment

In August, the attacks we reviewed targeted LND `.macaroon` credential files. Our advisory described the vulnerability as exposing those credentials and stated that BTCPay Server's on-chain wallets, including hot wallets, were not affected.

That assessment was too narrow. **The same vulnerability could be used to read arbitrary files on the instance, not just macaroons.** Its consequences therefore extend beyond control of an LND node: exposed files and secrets can enable theft from on-chain hot wallets and escalation to full remote control of the machine.

The distinction matters: **2.4.2 fixed the vulnerability, but our explanation of its possible impact was wrong.** Operators who did not use LND should not have been reassured that their on-chain hot wallets were outside its scope.

## What we know—and what we do not

Among the cases investigated so far, all affected instances were running versions older than 2.4.2. We have not received reports of this exploit affecting instances already running 2.4.2 or later. These are findings from the reports and investigation to date, not a guarantee that any particular server is uncompromised.

One question remains: why are we seeing these on-chain hot-wallet thefts now, when the vulnerability was patched in August?

Earlier attacks focused on LND credentials. It is possible that attackers only later recognized the opportunity to steal from other hot wallets, but **we have not established that explanation**. The absence of earlier reports does not prove when attackers understood or first used the vulnerability's broader capabilities.

## What operators should do

### If you are running a vulnerable version

Update to the latest supported BTCPay Server release. For standard docker installations, use **Server Settings → Maintenance → Update**, then verify the installed version. For other deployments, follow your usual update process.

Review your wallet transactions, server activity, accounts, and credentials for signs of unauthorized access. **An update closes this vulnerability; it does not establish that the server was never compromised.** If you find evidence of exploitation, follow the compromised-server guidance below. A lack of obvious suspicious activity is not proof of safety.

### If your server has been exploited

**Do not try to clean up the existing installation and put it back into service. Treat the entire machine and the secrets stored on it as compromised.**

1. **Isolate the machine.** Keep it offline. Preserve relevant logs and transaction records for investigation before decommissioning it, without reconnecting it to production.
2. **Rebuild on a clean system.** Use trusted installation sources and the latest supported releases. Do not restore the compromised system wholesale or copy executables and configuration back without review.
3. **Replace exposed secrets from a trusted device.** Revoke and replace credentials the server could access, including applicable hosting, SSH, application, API, and Lightning credentials. Never enter replacement secrets on the compromised machine.
4. **Stop using compromised wallet keys.** Create replacement wallets with new seeds on a trusted device. If funds remain under exposed keys, arrange their transfer to the new wallets from a trusted environment as urgently as possible. Restoring the same seed on a new server does not make those keys safe again.

Updating after a theft does not remove an attacker's access or invalidate secrets they already copied.

## Reported destination addresses

The following addresses were identified in the incident reports:

- **Bitcoin:** [`bc1p0f7wmcnesrapznymf9ljdn04pudgmh96sqtrm9vmgqxdh666fh8qvn63r7`](https://mempool.space/address/bc1p0f7wmcnesrapznymf9ljdn04pudgmh96sqtrm9vmgqxdh666fh8qvn63r7)
- **Litecoin:** [`ltc1qp49tmfdueyaqrmgrx0uyx4uegyygt8yt02whee`](https://live.blockcypher.com/ltc/address/ltc1qp49tmfdueyaqrmgrx0uyx4uegyygt8yt02whee/)

These addresses have activity predating the reported incident time above. Their complete transaction histories and balances should not be interpreted as a tally of losses from this incident, and an address appearing here does not establish the circumstances of every transaction involving it.

## Reporting an incident

If you believe your instance was affected, contact [security@btcpayserver.org](mailto:security@btcpayserver.org). Include the BTCPay Server version running at the time, when you noticed the incident with its timezone, and relevant public transaction IDs and addresses. If you updated recently, include when the update occurred and which version you were previously running.

**Never send seed phrases, private keys, passwords, macaroons, or other credentials.** Do not send unredacted configuration files or logs containing secrets. We cannot promise recovery of stolen funds.

## Keeping hot-wallet exposure limited

We are continuing to address vulnerabilities in BTCPay Server and its dependencies. We also need to communicate the limits of our findings more carefully: fixing a vulnerability and correctly assessing its full impact are separate responsibilities.

AI-assisted vulnerability discovery adds pressure to an already asymmetric security problem: attackers need one exploitable weakness, while maintainers must defend a large attack surface.

Please update regularly, keep only the funds needed for operations in hot wallets, and move excess funds to cold storage whose signing keys are not held on the server.
