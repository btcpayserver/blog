---
title: "A Leaner BTCPay Server Docker Deployment"
date: 2026-09-24
author: BTCPay Server
category:
  - "announcements"
tags:
  - "btcpay-server"
  - "docker"
  - "security"
---

BTCPay Server's Docker deployment has accumulated many optional services over the years. Some were useful experiments, some served projects that are no longer maintained, and others were enabled by default even when most operators did not use them.

During September, we started simplifying that deployment. We removed stale integrations, introduced safer control over public Lightning API routes, and are preparing to make Ride The Lightning (RTL) and Tor opt-in rather than part of every default installation.

The goal is not to make BTCPay Server less capable. It is to keep the default installation focused, reduce unnecessary containers and public endpoints, and make optional features an explicit choice by the server administrator.

:::warning Publication note
The RTL and Tor change described below is proposed in [PR #1167](https://github.com/btcpayserver/btcpayserver-docker/pull/1167) and has not yet merged. Confirm its final behavior and remove this note before publication.
:::

## External Lightning access with `btcpay-routes`

Following the security hardening in BTCPay Server 2.4.2, the standard Docker deployment stopped exposing LND and Core Lightning APIs publicly by default. Some operators still need these endpoints for tools such as Zeus or other remote node-management software, but editing Nginx configuration manually is difficult to audit and easy to get wrong.

The new [`btcpay-routes`](https://github.com/btcpayserver/btcpayserver-docker/pull/1104) command lets server administrators explicitly manage these optional routes. See the [Docker networking documentation](https://docs.btcpayserver.org/Docker/networking/#expose-bitcoin-lnd-apis) for setup instructions and security guidance. Only enable endpoints you need and protect their credentials.

## RTL and Tor are becoming opt-in

Today, selecting LND or Core Lightning automatically adds RTL, while the core BTCPay Server fragment automatically recommends Tor. That means a standard deployment can run both services even when its administrator never uses them.

[PR #1167](https://github.com/btcpayserver/btcpayserver-docker/pull/1167) changes this behavior:

- **RTL remains supported**, but moves to a dedicated `opt-add-rtl` fragment.
- **Tor remains supported**, but is no longer selected automatically.
- New default deployments avoid the related containers, routes, volumes and secrets unless the administrator chooses those features.

After this change is released, administrators who want to keep both services can add them explicitly:

```bash
sudo btcpay-fragments add opt-add-rtl opt-add-tor
```

You can also add only the fragment you need. The command reapplies the BTCPay Server Docker setup with the new selection.

Existing Tor data is preserved through the current Tor volumes. RTL moves to a new shared data volume instead of keeping separate LND and Core Lightning variants. Lightning funds and node data are not stored in RTL and are not affected by this change.

Making these services opt-in reduces the default attack surface and resource use without taking the choice away from operators who rely on them.

## Retiring stale integrations

We also removed integrations whose upstream projects were abandoned, whose packaged versions had become unsafe to maintain, or whose functionality was no longer supported by BTCPay Server.

These removals delete the integration from `btcpayserver-docker`; they do not delete images already published by their original registries. If your deployment uses one of these fragments, review your migration options before regenerating or updating its Docker configuration.

### Altcoins and obsolete chains

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

If you maintain or rely on a BTCPay Server Docker integration, follow the [`btcpayserver-docker` repository](https://github.com/btcpayserver/btcpayserver-docker) and help us keep its deployment current, secure and focused.
