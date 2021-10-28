---
title: "BTCPay Server 1.3.0 - LNURL, Lightning Address, Taproot and UI goodies"
date: 2021-10-29
author: Zaxounette
category:
  - "releases"
tags:
  - "taproot"
  - "btcpay-server"
  - "release"
  - "LNURL"
  - "greenfield"
  - "api"
  - "lightningaddress"
coverImage: "/images/BTCPayServer1.3.0.png"
---

It's been two months since the [last](https://blog.btcpayserver.org/btcpay-server-1-2-0/) BTCPay Server major update, and the team has been hard at work pushing through a number of efforts in that time. We're thrilled to release a new major version - 1.3.0!

**BTCPay Server 1.3.0** includes the support for LNURL-Pay, Lightning address and Taproot; Lightning support for topup invoices and pull payments; crowdfunding app redesign, Greenfield API enhancements, lots of UI improvements and several bug crushes.

We won't cover them all in this release post, but as usual, the high-time preference crowd can view the [full changelog](https://github.com/btcpayserver/btcpayserver/releases) directly.

To update your BTCPay Server, simply navigate to your `Server Settings > Maintenance` tab and click `Update` or use `btcpay-update.sh` in the command line.

## LNURL and Lightning Addresses ⚡

Lightning Network ecosystem moves *lightning* fast, and we're trying to bring you all of the latest bleeding-edge improvements. We're happy to introduce the support for `LNURL` and `Lightning addresses`

### LNURL-Pay 🔥

LNURL is a Lightning network protocol that improves payments user-experience. While the protocol introduces several flows, our focus in this release is on the **LNURL-Pay**.

Upon enabling this feature in your Lightning Payment method, a user can now pay a BTCPay Server invoice using LNURL-Pay compatible wallet.

This adds a few nice additions on top of BTCPay Server invoices such as:

* The ability for a payee to add comments on payments. Donating to your favorite streamer or podcaster? Add a message to your donation!
* LNURL supporting invoices don't expire
* The ability to attach LNURL QR-codes to the POS app view, print it and enable customers to pay you in your physical store for particular items

#### LNURL-Pay & Print Point of Sale 🏪

Traditionally, the easiest way to accept bitcoin payments in retail is to print out and display a QR code of your address. However, address re-use is a bad privacy-practice. Furthermore it's not possible to differentiate payments coming in to a single address with ease, making invoice management a total nightmare. This is why we're excited to introduce our new Point of Sale option - **Print**.

By utilizing LNURL-Pay protocol, we created a separate view in our POS app which allows you to print out  a static, re-usable QR code for every product in your app. This feature allows you to accept payments without having a wallet on the spot. The customer would need an LNURL-Pay compatible wallet to scan a QR in order to pay.  For every payment coming in to your static QR-code, BTCPay Server generates invoices on the fly. That means that you can easily export these invoices and manage them for accounting purposes, and even refund them!

Here is an a example of a printed QR code being used in the wild by Enrique Berrios, a local dentist from El Salvador.

Enrique charges fixed prices for services and he uses our printable template ...

<!--
![BTCPay 1.3.0 LNURL POS view](/images/1.3.0-LNURL-POS-view.png)
-->

### Lightning Addresses 📧

[Lightning Addresses](http://lightningaddress.com) leverage the LNURL capabilities and enable you to create a human readable address to be paid to, instead of a bitcoin address string and they look like email addresses.

<!--
![BTCPay 1.3.0 LNURL POS view](/images/1.3.0-LNURL-POS-view.png)
-->

In BTCPay Server, you are now able to configure and create such addresses, so that someone that want's to pay you, can simply send funds to a Lightning Address that looks like this: `you@yourbtcpay.com`. You can enable Lightning Address under `Store` > `Integrations`, but make sure you have `LNRUL` enabled in your Lightning payment methods.

BTCPay Server will generate an invoice for every payment coming to your lightning address on a fly and add it in the back-office. In case you enable the currency under `advanced` settings, your instance will do rate-conversions. If you're sharing your instance and Lightning node with others, they can also create their addresses.

So what are you waiting for? Enable your lightning address and share it on Twitter to accepts tips in a non-custodial way, instantly.

## Taproot woot woot

BTCPay Server 1.3.0 adds the ability to create new internal wallets that support receiving Taproot initiated transactions. This feature will be available starting block 709632, at which point Taproot becomes activated on the bitcoin network.

BTCPay Server already introduced Taproot sending support last August, and this was the last missing part for full Taproot support.

![BTCPay 1.3.0 Hot Wallet creation view](/images/1.3.0-taproot-hot-wallet.png)

For more information on Taproot as a network upgrade, you can visit a few of these uncurated posts [here](https://river.com/learn/what-is-taproot/) or [here](https://blog.kraken.com/post/10939/taproot-primer-an-upgrade-for-the-ages/).

*Please note that we don't recommend using only taproot supported wallets in your stores at first, since not all wallets your customers and users will be sending funds support Taproot just yet.*

## Topup feature expansion

Our Topup invoice feature, released in [1.2.0](https://blog.btcpayserver.org/btcpay-server-1-2-0/#top-up-invoices-%F0%9F%A7%BE) is now available in our POS app!

Starting 1.3.0, Topup invoices can be configured through the `Custom` price in the cart item settings. When set up by the merchant, this enables the customer to select the price paid for that specific item with no minimum imposed by the merchant.

To address edge-cases, we have also introduced a new `Minimum` price setting, to enable users to pay a custom price for a specific item, but with a floor price set by the merchant.

## Pull Payments, but Lightning fast!

Our Pull Payments feature is receiving an upgrade in this release.

You can now add Lightning as a payment method to your Pull Payments, to enable your customers and users to get their refunds at the speed of light!

Pull Payments with Lightning enabled also support LNURL and Lightning Addresses mentioned earlier.

## Continuation of our UI updates 🎨

Since the beginning of 2021, our design contributors have improved a number of pages in the interface. This release includes a number of these updated pages and a number of Bootstrap related updates. These updates, as well as the new UI enables us to improve a number of views so that hopefully, users with minimal technical savvyness gain clarity on how some of the more complexe features can benefit them.

### Crowdfunding with Love

Our Crowdfunding app has received a general UI lifting in BTCPay Server 1.3.0.

Each year, BTCPay Server performs a crowdfund for projects or causes that we like, in association with other Open-Source communities.

This year, we associated with [Bitcoin Design](https://bitcoin.design/) members and launched [Bitcoin Smiles](https://bitcoinsmiles.org/) to provide dental healthcare to elderly people in El Salvador. This crowdfunding campaign is still active by the way. *Nudge-nudge*

This year's campaign enabled us to detect shortcommings in the UI layout of our crowdfunding page, so we decided to act on it and refurbish it!
The new crowdfunding page has a more modern look, more easily visible Donation buttons and crowdfund goals.

![BTCPay 1.3.0 Crowdfund-app view](/images/1.3.0-crowdfund-app.png)

### Payment and Store settings changes

Over the years and with every release, we have added feature, options, settings and customizations to nearly every page when it comes to Store configuration. It was becomming too much, so we decided to clean-up these views, move a number of settings to where it makes more sense.

The improved navigation in your store now differenciates high-level Payment Methods options from fine grained Payment Method settings and Checkout Appearance customizations amongst numerous other changes.

<!--
![BTCPay 1.3.0 Store and payment settings view](/images/1.3.0-store-payment-settings.png)
-->

## Greenfield API 🏗️

The Greenfield API is still being perfected and additions are being made to it in every update.

Today, here's what's **new and improved in Greenfield**:

* Adds a `Payment Settled` webhook event
* Returns a negative undue when overpaid
* Adds ability to specify default payment method

For a full list of what our API can do, visit the [Greenfield documentation](https://docs.btcpayserver.org/API/Greenfield/v1/)

----

That's going to be all for highlights of this BTCPay Server 1.3.0 release!

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, we love you:

[@Bananenbieger123](https://github.com/Bananenbieger123) [@BitcoinQnA](https://github.com/BitcoinQnA)  [@britttttk](https://github.com/britttttk) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@1nF0rmed](https://github.com/1nF0rmed) [@Kukks](https://github.com/kukks/) [@maxdignan](https://github.com/maxdignan)   [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@sageprogrammer](https://github.com/sageprogrammer) [@satwo](https://github.com/satwo) [@sipsorcery](https://github.com/sipsorcery) [@ubolator](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey) [@Zaxounette](https://github.com/zaxounette)   

The BTCPay Server team 💚.
