---
title: "BTCPay Server 1.3.0 - Lightning, Taproot and UI goodies"
date: 2021-10-27
author: Zaxounette
category:
  - "releases"
tags:
  - "taproot"
  - "btcpay-server"
  - "release"
  - "ui-ux"
  - "greenfield"
  - "api"
  - "update"
coverImage: "/images/BTCPayServer1.3.0.png"
---

It's been two months since the last BTCPay Server major update and the team has been hard at work pushing through a number of efforts in that time, ranging from enabling the creation of Taproot supported internal  wallets to increasing the Greenfield API capabilities, some sweet Lightning related features and crushing numerous bugs!

**BTCPay Server 1.3.0** is a major update that includes tens of items. We won't cover them all in this release post, but as usual, the high-time preference crowd can view the [full changelog](https://github.com/btcpayserver/btcpayserver/releases) directly.

To update, simply navigate to your **Server Settings > Maintenance** tab and click **Update** or use *btcpay-update.sh* in the command line.

## **Continuation of our UI updates** 🎨

Since the beginning of 2021, our design contributors have improved a number of pages in the interface. This release includes a number of these updated pages and a number of Bootstrap related updates. These updates, as well as the new UI enables us to improve a number of views so that hopefully, users with minimal technical savvyness gain clarity on how some of the more complexe features can benefit them.

### **Crowdfunding with Love**

Our Crowdfunding app has received a general UI lifting in BTCPay Server 1.3.0.

Each year, BTCPay Server performs a crowdfund for projects or causes that we like, in association with other Open-Source communities.

This year, we associated with [Bitcoin Design](https://bitcoin.design/) members and launched [Bitcoin Smiles](https://bitcoinsmiles.org/) to provide dental healthcare to elderly people in El Salvador. This crowdfunding campaign is still active by the way. *Nudge-nudge*

This year's campaign enabled us to detect shortcommings in the UI layout of our crowdfunding page, so we decided to act on it and refurbish it!
The new crowdfunding page has a more modern look, more easily visible Donation buttons and crowdfund goals.

![BTCPay 1.3.0 Crowdfund-app view](/images/1.3.0-crowdfund-app.png)

### **Payment and Store settings changes**

Over the years and with every release, we have added feature, options, settings and customizations to nearly every page when it comes to Store configuration. It was becomming too much, so we decided to clean-up these views, move a number of settings to where it makes more sense.

The improved navigation in your store now differenciates high-level Payment Methods options from fine grained Payment Method settings and Checkout Appearance customizations amongst numerous other changes.

<!--
![BTCPay 1.3.0 Store and payment settings view](/images/1.3.0-store-payment-settings.png)
-->

## **Taproot woot woot**

BTCPay Server 1.3.0 adds the ability to create new internal wallets that support receiving Taproot initiated transactions. This feature will be available starting block 709632, at which point Taproot becomes activated on the bitcoin network.

BTCPay Server already introduced Taproot sending support last August, and this was the last missing part for full Taproot support.

![BTCPay 1.3.0 Hot Wallet creation view](/images/1.3.0-taproot-hot-wallet.png)

For more information on Taproot as a network upgrade, you can visit a few of these uncurated posts [here](https://river.com/learn/what-is-taproot/) or [here](https://blog.kraken.com/post/10939/taproot-primer-an-upgrade-for-the-ages/).

*Please note that we don't recommend using only taproot supported wallets in your stores at first, since not all wallets your customers and users will be sending funds support Taproot just yet.*

## **LNURL and Lightning Addresses** 

Two new Lightning features are making their way into BTCPay Server in this release: `LNURL` and `Lightning Addresses`.

### **LNURL**

Upon enabling this feature in your Lightning Payment method, a user can now pay a BTCPay Server invoice using LNURL.

This adds a few nice additions on top of BTCPay Server invoices such as:
* The ability to add comments on payments. Donating to your favorite streamer or podcaster? Add a message to your donation!
* LNURL supporting invoices don't expire
* The ability to attach LNURL QR-codes to the POS app view, print it and enable customers to pay you in your physical store for particular items

<!--
![BTCPay 1.3.0 LNURL POS view](/images/1.3.0-LNURL-POS-view.png)
-->

### **Lightning Addresses**

Lightning Addresses leverage the LNURL capabilities and are fairly simple to understand:
They enable you to configure a human readable addresse to be paid to, instead of a bitcoin address string and they look a lot like email addresses.

In BTCPay Server, you are now able to configure and create such addresses, so that someone that want's to pay you, can simply send funds to a Lightning Address that looks like this: `r0ckstarDev@yourbtcpay.org`.

All the heavy lifting relating to Segwit & Taproot compatibility, address reuse, etc... is done by your BTCPay Server instance.

You can find this new feature under `Store` > `Integrations`.

*Please note that this feature requires an active internet connexion in most setups since there's a DNS-type resolution being performed in the background to translate the Lightning Addresses so that you can receive payments.*

## **Topup feature expansion**

Our Topup invoice feature, released in [1.2.0](https://blog.btcpayserver.org/btcpay-server-1-2-0/#top-up-invoices-%F0%9F%A7%BE) is now available in our POS app!

Starting 1.3.0, Topup invoices can be configured through the `Custom` price in the cart item settings. When set up by the merchant, this enables the customer to select the price paid for that specific item with no minimum imposed by the merchant.

To address edge-cases, we have also introduced a new `Minimum` price setting, to enable users to pay a custom price for a specific item, but with a floor price set by the merchant.

## **Pull Payments, but Lightning fast!**

Our Pull Payments feature is receiving an upgrade in this release.

You can now add Lightning as a payment method to your Pull Payments, to enable your customers and users to get their refunds at the speed of light!

Pull Payments with Lightning enabled also support LNURL and Lightning Addresses mentioned earlier.

## **Greenfield API** 🏗️

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

[@activefog](https://github.com/activefog) [@andhans](https://twitter.com/andhans_jail) [@britttttk](https://github.com/britttttk) [@cypherbeerus](https://github.com/cypherbeerus) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@jkljajic](https://github.com/jkljajic)[johanf85](https://github.com/johanf85) [@jonathanalevi](https://github.com/jonathanalevi) [@JimiHFord](https://github.com/JimiHFord/) [@Kukks](https://github.com/kukks/) [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@sageprogrammer](https://github.com/sageprogrammer) [@ubolator](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey) [@Zaxounette](https://github.com/zaxounette)

The BTCPay Server team 💚.
