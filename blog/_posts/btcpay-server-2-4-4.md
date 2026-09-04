---
title: "BTCPay Server 2.4.4: Security Hardening"
date: 2026-09-04
author: BTCPay Server
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "security"
  - "2.4.4"
---

We are releasing **BTCPay Server 2.4.4**, an update focused on security hardening and keeping the software bundled with our Docker deployment current.

We recommend that all server administrators update. For a standard BTCPay Server installation, go to **Server Settings > Maintenance > Update**.

For a complete list of changes, see the [full release notes](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.4).

## Updated Bitcoin and Lightning software

This release updates important parts of the standard BTCPay Server Docker deployment:

- **Bitcoin Core** is updated from 29.2 to 31.1. Bitcoin Core 29.2 is already about one year old, so moving to the current release keeps BTCPay Server on a maintained version with the latest fixes and improvements. ([details](https://github.com/btcpayserver/btcpayserver-docker/pull/1091))
- **LND** is updated to 0.21.3-beta. ([details](https://github.com/btcpayserver/btcpayserver/pull/7547))
- **Bitcoin Knots** support has been removed from the Docker deployment after Knots followed a chain that forked away from Bitcoin's main chain. BTCPay Server's standard deployment now uses Bitcoin Core. ([details](https://github.com/btcpayserver/btcpayserver-docker/pull/1085))

## Ongoing attempts to target LND

Following the recent [LND security incident](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/), we disabled external access to the LND API in the standard Docker deployment.

We have since observed bots attempting to target servers where this access had been manually re-enabled. They repeatedly call the following LND endpoint:

`/lnd-rest/btc/v1/changepassword`

This route does not require a macaroon while an LND wallet is still locked. Older BTCPay Server LND wallets also used a shared default password. After LND restarts, there can be a short window before BTCPay Server's internal unlocker reaches it. If an attacker submits that known password first, they may be able to set a new password and ask LND to return an admin macaroon used to control the node.

We are blocking this attack on two fronts.

### A unique password for every LND wallet

Our new LND image no longer creates wallets with a shared default password. Every new wallet receives a random password unique to that instance. Existing wallets using the old default are migrated automatically when they start. ([details](https://github.com/btcpayserver/lnd/pull/13))

### Blocking unauthenticated routes at the network edge

The Docker deployment also blocks LND's unauthenticated wallet setup and unlock routes at BTCPay Server's reverse proxy. This removes the brief restart window from the standard public network path. ([details](https://github.com/btcpayserver/btcpayserver-docker/commit/4f2f56dc21f4593936727fc4fe539092ad642bef))

## External Lightning access is coming back

We know that some users rely on external access to LND or Core Lightning for mobile wallets and other tools.

During this week, we plan to add a new option to the BTCPay Server Docker deployment that will let administrators explicitly reactivate these external routes. We will share instructions on our [Twitter/X account](https://x.com/BtcpayServer) in the next few days.

Until then, do not manually expose LND's API through your own reverse proxy. If you already did, remove that access and update your server.

Security hardening remains our priority. Thank you to everyone helping us identify suspicious activity, review fixes and protect the BTCPay Server community.
