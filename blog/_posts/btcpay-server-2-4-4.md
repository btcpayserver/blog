---
title: "BTCPay Server 2.4.4: Security Update"
date: 2026-09-08
author: BTCPay Server
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "security"
  - "2.4.4"
coverImage: "/images/2-4-4-featured.png"
---

We are releasing **BTCPay Server 2.4.4**, a new security-focused update that continues our work to harden the codebase.

## What's new in BTCPay Server 2.4.4

The release strengthens permissions and validation around invoices, API keys, server administration and other sensitive operations. It also includes several fixes and smaller improvements.

The new update comes with several breaking changes:

- **Checkout:** NFC payments are now disabled by default. They can be enabled under Store Settings > Checkout Experience.
- **Invoices:** Zero-amount invoices are now blocked by default. Stores can allow them in their settings. ([details and screenshot](https://github.com/btcpayserver/btcpayserver/pull/7514))
- **Boltcards:** The desktop smartcard setup has been removed. BTCPay Server now opens the Boltcard app instead.
- **WHMCS plugin:** With 2.4.4 [WHMCS integration](https://github.com/btcpayserver/whmcs-plugin) will stop working due to a breaking change. To continue using the plugin with 2.4.4 please update the plugin to v4.0.0 and [follow the instructions](https://github.com/btcpayserver/whmcs-plugin/blob/master/GUIDE.md#using-the-btcpay-server-payment-plugin-for-whmcs) on how to re-generate new Greenfield API key.
- **Store users:** Invited users must accept their invitation before joining a store. ([details and screenshots](https://github.com/btcpayserver/btcpayserver/pull/7519))
- **Point of Sale:** The per-request `notificationUrl` has been removed. Invoices now use the notification URL configured for the app.

We recommend that all server administrators [update](https://docs.btcpayserver.org/FAQ/ServerSettings/#maintenance). For a BTCPay Server Docker deployment installation, go to **Server Settings > Maintenance > Update**.

For a complete list of changes, see the [full release notes](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.4).

## BTCPay Server Docker deployment

We updated important parts of the standard Docker deployment:

- **Bitcoin Core** is updated from 29.2 to 31.1. Bitcoin Core 29.2 is already about one year old, so moving to the current release keeps the deployment on a maintained version with the latest fixes and improvements. ([details](https://github.com/btcpayserver/btcpayserver-docker/pull/1091))
- **LND** is updated to 0.21.3-beta. ([details](https://github.com/btcpayserver/btcpayserver/pull/7547))
- **Bitcoin Knots** support has been removed after Knots followed a chain that forked away from Bitcoin's main chain. The standard deployment now uses Bitcoin Core. ([details](https://github.com/btcpayserver/btcpayserver-docker/pull/1085))

### Restricted host management

BTCPay Server needs limited access to its Docker host for actions such as updates, restarts and domain changes. Previously, the application container received broader SSH access than it needed. If the application were compromised, that access could increase the damage an attacker could cause.

The Docker deployment now uses a restricted `btcpay-host` interface. A dedicated key can only call a small set of approved administration commands, keeping these features available while reducing the access granted to the application container. ([details](https://github.com/btcpayserver/btcpayserver-docker/pull/1081))

### Ongoing attempts to target BTCPay Server's LND integration

Following our recent [BTCPay Server security incident](https://blog.btcpayserver.org/security-advisory-btcpay-server-2-4-2/), we disabled external access to the LND API in the standard Docker deployment.

We have since observed bots attempting to target servers where this access had been manually re-enabled. They repeatedly call the following LND endpoint:

`/lnd-rest/btc/v1/changepassword`

This route does not require a macaroon while an LND wallet is still locked. Older BTCPay Server LND wallets also used a shared default password. After LND restarts, there can be a short window before BTCPay Server's internal unlocker reaches it. If an attacker submits that known password first, they may be able to set a new password and ask LND to return an admin macaroon used to control the node.

We are blocking this attack on two fronts.

#### A unique password for every LND wallet

Our new LND image no longer creates wallets with a shared default password. Every new wallet receives a random password unique to that instance. Existing wallets using the old default are migrated automatically when they start. ([details](https://github.com/btcpayserver/lnd/pull/13))

#### Blocking unauthenticated routes at the network edge

The Docker deployment also blocks LND's unauthenticated wallet setup and unlock routes at BTCPay Server's reverse proxy. This removes the brief restart window from the standard public network path. ([details](https://github.com/btcpayserver/btcpayserver-docker/commit/4f2f56dc21f4593936727fc4fe539092ad642bef))

#### External Lightning access is coming back this week

We know that some users rely on external access to LND or Core Lightning for mobile wallets and other tools.

This week, we plan to restore external access to LND and Core Lightning through a new option in the BTCPay Server Docker deployment. **External access will remain disabled by default. Administrators who need it will have to explicitly enable it.** We will share instructions on our [Twitter/X account](https://x.com/BtcpayServer) in the next few days.

Until then, do not manually expose LND's API through your own reverse proxy. If you already did, remove that access and update your server.

## Plugin Builder server incident

During development of 2.4.4, our own self-hosted Plugin Builder server was compromised. We detected the intrusion on September 2.

**This incident affects only plugin developers using the Plugin Builder. BTCPay Server users, including those using its plugins, are not affected.**

We identified the attack method and patched it. New registrations and plugin builds remain temporarily disabled while we complete further security hardening in our code and with our hosting provider. Plugin developers who need to build a new plugin version should contact us directly at `security@btcpayserver.org` in the meantime.

What we found and what we have done:

- **Published plugins:** We found no attempt to replace them with malicious versions.
- **All access tokens were rotated.**
- **Registered email addresses were likely exposed.** Plugin Builder users should be cautious of unexpected emails and phishing attempts.

Security hardening remains our priority. Thank you to everyone helping us identify suspicious activity, review fixes and protect the BTCPay Server community.