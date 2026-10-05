---
title: "BTCPay Server 2.4.5: Security Hardening and a Leaner Docker Deployment"
date: 2026-10-05
author: Nicolas Dorier, Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "docker"
  - "security"
  - "2.4.5"
coverImage: "/images/2-4-5-featured.png"
---

We are releasing **BTCPay Server 2.4.5**, another security hardening update that continues our work to strengthen the codebase.

Alongside the release, we are simplifying our standard Docker deployment and retiring Docker integrations that no longer have the maintenance or usage needed to keep them supported.

## What's new in BTCPay Server 2.4.5

BTCPay Server 2.4.5 adds security hardening around Lightning and LNURL, along with performance improvements that make invoices faster to generate. See the [full release notes](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.5) for all changes.

We recommend that all server administrators [update](https://docs.btcpayserver.org/FAQ/ServerSettings/#maintenance). For a standard Docker installation, go to **Server Settings > Maintenance > Update**. If you rely on Tor or an integration listed below, review the deployment changes before updating.

## BTCPay Server Docker deployment

BTCPay Server's Docker deployment has accumulated many optional services over the years. Some were useful experiments, some served projects that are no longer maintained, and others were enabled by default even when most operators did not use them.

During September, we started simplifying that deployment. We removed stale integrations and introduced safer control over public Lightning API routes. With this release, Tor also becomes opt-in.

The goal is to keep the default installation focused, reduce unnecessary containers and public endpoints, and make optional features an explicit choice by the server administrator.

## External Lightning access with `btcpay-routes`

Following the security hardening in [BTCPay Server 2.4.2](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/), the standard Docker deployment stopped exposing LND and Core Lightning APIs publicly by default. Some operators still need these endpoints for tools such as Zeus or other remote node-management software, but editing Nginx configuration manually is difficult to audit and easy to get wrong.

The new [`btcpay-routes`](https://github.com/btcpayserver/btcpayserver-docker/pull/1104) command lets server administrators explicitly manage these optional routes. See the [Docker networking documentation](https://docs.btcpayserver.org/Docker/networking/#lnd-rest-and-grpc-apis) for setup instructions and security guidance. Only enable endpoints you need and protect their credentials.

## Tor becomes opt-in

Until now, the core BTCPay Server fragment automatically included Tor. That meant a standard deployment could run it even when its administrator never used it.

**Tor remains supported**, but is no longer included by default.

**Existing deployments also need to select Tor explicitly to keep using it after the next Docker setup or update.** Administrators who rely on Tor, including their server's onion address, should, after updating to 2.4.5 enable it with:

```bash
sudo btcpay-fragments add opt-add-tor
```

Existing Tor data is preserved through the current Tor volumes.

Making Tor opt-in reduces the default attack surface and resource use without taking the choice away from operators who rely on it.

## Retiring stale integrations

We also removed integrations whose upstream projects were abandoned, whose packaged versions had become unsafe to maintain, or whose functionality was no longer supported by BTCPay Server.

These removals delete the integration from `btcpayserver-docker`; they do not delete images already published by their original registries. If your deployment uses one of these fragments, review your migration options before regenerating or updating its Docker configuration.

### Altcoins and obsolete chains

We have always allowed different communities to add integrations to our Docker deployment, including altcoins, as long as they had users and were maintained. Several of these integrations now lack active maintenance and have seen little observed usage, so we are removing them from the supported deployment.

[PR #1099](https://github.com/btcpayserver/btcpayserver-docker/pull/1099) removed stale or unsupported chain integrations and their image references:

- Bitcoin Plus: `chekaz/docker-bitcoinplus:2.7.0`
- Trezarcoin: `chekaz/docker-trezarcoin:0.13.0`
- Bitcore: `dalijolijo/docker-bitcore:0.90.9.10`
- Bitcoin Gold: `kamigawabul/docker-bitcoingold:0.15.2`
- Bitcoin Gold LND: `kamigawabul/btglnd:latest`
- Viacoin: `romanornr/docker-viacoin:0.15.2`

The same cleanup removed the old Ethereum configuration because BTCPay Server does not natively support ETH or ERC-20 payments; support for them requires a plugin.

Feathercoin, Groestlcoin and Monacoin remain available for now, but need active maintainers in `btcpayserver-docker`. Unless maintainers step forward to keep these integrations current by January 24, 2027, we plan to remove them as well.

### Unmaintained infrastructure and wallet tools

- [Traefik](https://github.com/btcpayserver/btcpayserver-docker/pull/1100): `traefik:v2.6`
- [JoinMarket](https://github.com/btcpayserver/btcpayserver-docker/pull/1102): `btcpayserver/joinmarket:0.9.10`
- [Electrum Personal Server and BWT](https://github.com/btcpayserver/btcpayserver-docker/pull/1106): `btcpayserver/eps:0.2.2` and `shesek/bwt:0.2.2-electrum`
- [BlueWallet LNDHub, NDLC and Snapdrop](https://github.com/btcpayserver/btcpayserver-docker/pull/1107): `bluewalletorganization/lndhub:v1.4.1`, its dedicated `redis:6.2.2-buster`, `nicolasdorier/ndlc-cli:1.0.1` and `btcpayserver/snapdrop:1.2`
- [BTCTransmuter and BTCPay Server Configurator](https://github.com/btcpayserver/btcpayserver-docker/pull/1117): `btcpayserver/btctransmuter:0.0.59` and `btcpayserver/btcpayserver-configurator:0.0.21`

ElectrumX remains supported. The obsolete `opt-add-nolimits` policy fragment was also removed because current Bitcoin Core defaults made it unnecessary.

### Retired web applications

- [LibrePatron and Isso](https://github.com/btcpayserver/btcpayserver-docker/pull/1128): `jvandrew/librepatron:0.7.39` and `jvandrew/isso:atron.22`
- [Firefly III](https://github.com/btcpayserver/btcpayserver-docker/pull/1142): `fireflyiii/core:latest`
- [Tallycoin Connect](https://github.com/btcpayserver/btcpayserver-docker/pull/1143): `djbooth007/tallycoin_connect:v1.8.0`
- [Chatwoot](https://github.com/btcpayserver/btcpayserver-docker/pull/1144): `chatwoot/chatwoot:v1.7.0` and its dedicated `redis:5.0.2-alpine`

Several of these integrations had not received upstream maintenance for years. Others relied on outdated dependencies, mutable images, unsafe shared secrets or incomplete persistent-storage configuration. Continuing to present them as supported options would give operators a false sense of safety.

## A smaller default, with explicit choices

Self-hosting does not mean every feature should run on every server. A smaller default deployment is easier to understand, easier to maintain and exposes fewer components that operators may not know are present.

We will continue to support useful optional services when they have active maintainers and a safe integration path. At the same time, we will keep removing abandoned integrations and turning unnecessary defaults into explicit choices.

## Plugin Builder is open again

In the [2.4.4 release post](https://blog.btcpayserver.org/btcpay-server-2-4-4/), we disclosed the Plugin Builder server compromise and paused registrations and builds. **Registrations and builds are now open again.**

Each build now runs in a temporary sandbox, separate from the application and without access to its credentials. Build output is validated before publication. We also added admin audit logs, alerts for new accounts and builds, and a limit of two unfinished builds per account.

**For plugin developers:** Repositories must be public and use HTTPS on GitHub or GitLab. Builds can only download from GitHub, GitLab and NuGet. Downloads from other sources will fail.

See [Build isolation](https://github.com/btcpayserver/btcpayserver-plugin-builder/blob/master/docs/build-isolation.md) for the full design.

Thank you to everyone contributing fixes, reviewing changes, reporting issues and helping us strengthen BTCPay Server. Special thanks goes to independent security researchers, [Project Loupe](https://www.projectloupe.org), [Prem AI](https://www.premai.io), [BugBunny AI](https://bugbunny.ai), and [Magic Grants](https://magicgrants.org/) who help us with continued scanning and investigation across our codebase.

The BTCPay Server team 💚
