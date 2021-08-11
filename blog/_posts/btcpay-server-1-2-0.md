---
title: "BTCPay Server 1.2.0 - Bootstrapping and paving roads"
date: 2021-08-10
author: Zaxounette
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "ui-ux"
  - "greenfield"
  - "api"
  - "update"
coverImage: "/images/BTCPayServer1.2.0.png"
---

It's been a while since the last BTCPay Server major update and the team has been hard at work pushing through a number of efforts in that time, ranging from migrating our front-end UI framework to increasing the Greenfield API capabilities, setting up the foundation for our plugin system and crushing numerous bugs!

 **BTCPay Server 1.2.0** is a major update that includes more than forty items. We won't cover them all in this release post, but as usual, the high-time preference crowd can view the [full changelog](https://github.com/btcpayserver/btcpayserver/releases) directly.

To update, simply navigate to your **Server Settings > Maintenance** tab and click **Update** or use the command *btcpay-update.sh* in the command line.


## **Continuation of our UI updates** 🎨

----

Since the beginning of 2021, our design contributors have improved a number of pages in the interface. This release includes a number of these updated pages and the migration from Bootstrap 3 to Bootstrap 5. This framework migration enables us to create and implement more modern-looking pages and provide a better experience.

### Wallet Signing Wizard 🧙

BTCPay Server wallet allows you to receive and spend transactions. If you're self-hosting a server, it's a wallet relying on your full node. With hardware wallet support and an abundance of privacy-enhancing features, we've seen an increasing amount of wallet usage. The community feedback was that signing options could be improved.

That's why the 1.2.0 now offers a signing wizard, which should simplify and, in some cases, automate choices that you may face when signing a transaction. If you're using a hot wallet, the wallet now signs instantly.

Another change relating to the hot wallet, is that from now on, your hot wallet enables *PayJoin* by default.

![BTCPay 1.2.0 Crowdfund view](/images/BTCPay1.0.2WalletSign.gif)

### Apps UI Improved 💻

The *Crowdfund* and *Point-Of-Sale* app creation pages have been updated - making navigation and creation of your favorite apps smoother.

![BTCPay 1.2.0 Crowdfund view](/images/BTCPay1.2.0Crowdfund.png)

![BTCPay 1.2.0 POS view](/images/BTCPay1.2.0POS.png)

A number of UI improvements and fixes also made it into this release, namely relating to the following pages:

* The server settings
* The payment request
* The notifications

### **BTCPay Vault notification** 🔐

BTCPay Vault is an application which allows you to plug your hardware wallet and use it within your BTCPay Server - thanks to the [HWI](https://github.com/bitcoin-core/HWI) (Hardware Wallet Integration).
Due to changes in [HWI 2.0.1](https://github.com/bitcoin-core/HWI/releases/tag/2.0.1), BTCPay Server will now detect the version of the Vault application and notify you to update in case you're using an older version.

For the full list, check out the [changelog](https://github.com/btcpayserver/btcpayserver/releases)

## Top-up invoices 🧾

Lots of our community members use BTCPay Server to accept donations. Unlike our regular invoice, where a fixed price and rate are needed, the donations don't have that requirement.

Another interesting use-case is topping up the account. Certain merchants wanted to have the ability to accept whatever the amount is paid since they're crediting it to the customer's account. So whatever customer sends them, that's what they'll credit to their account.

*Top-up invoice* is a new type of invoice, which doesn't require an amount. This invoice is considered paid as soon as payment is detected.

![BTCPay 1.2.0 Crowdfund view](/images/topupinvoice.png)

For now, the top-up invoice is available in the [pay button](https://docs.btcpayserver.org/FAQ/FAQ-Apps/#what-is-a-payment-button). Depending on the community feedback, we intend to gradually roll it out to other apps.

## **BTCPay Plugins - Paving the road** 🔌

----

In this release, we also introduced the Greenfield API to the internal codebase.
This allows plugins to gain access to the many internal features they will require in the future.

This addition is paving the road towards having a plugin system in BTCPay that adds infinite functionality and customization on top of the core feature available.

The plugin system should allow developers to build easier on top of BTCPay without relying on the core team to develop, agree, or review the changes. These plugins can be maintained separately and activated by users on demand. This introduces a whole new vision for BTCPay, a payment platform or as we like to call it, the WordPress of Bitcoin.

## **Greenfield API** 🏗️

----

The Greenfield is still being perfected and additions are being made to it in every update.

Today, here's what's **new and improved in Greenfield**:
* Add Delete User
* Add `CanModifyInvoices` permission
* Add text search terms to an invoice with `additionalSearchTerms`
* Add Get store Payment methods
* Add Generate Store OnChain Wallet
* Add StoreId to Invoice model
* Change `enabledOnly` filter to `enabled`

Some API documentation was also corrected to reflect what actually happens when using the endpoints.

## **NBXplorer specifics** 🔍

----

This release also includes NBXplorer 2.1.58.
Docker deployments are updated to this version automatically. Other deployment methods need to update manually.

NBXplorer 2.1.58 fixes a number of bugs and enables **sending to Taproot** formatted addresses.

## **Translations**

----

Last but not least, BTCPay Server 1.2.0 sees improvements and error corrections in multiple translations for the checkout page in:
* Bulgarian
* Dutch
* Finnish
* Hebrew
* Kazath
* Korean
* Portuguese

Related to translations, now the language of a user paying through the BTCPay Server checkout will be automatically detected! No more loosing customers because the checkout isn't in their language.

----

That's going to be all for highlights of this BTCPay Server 1.2.0 release!

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, we love you:
[@britttttk](https://github.com/britttttk) [@cypherbeerus](https://github.com/cypherbeerus) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@Kukks](https://github.com/kukks/) [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@sageprogrammer](https://github.com/sageprogrammer) [@ubolator](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey) [@Zaxounette](https://github.com/zaxounette/)

The BTCPay Server team 💚.
