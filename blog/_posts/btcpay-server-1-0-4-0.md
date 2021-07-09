---
title: "Introducing BTCPay Server 1.0.4.0"
date: 2020-04-16
author: pavlenex
category:
  - "releases"
coverImage: "/images/v10040.png"
---

Today we are thrilled to introduce the new BTCPay Server - [v1.0.4.0](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.4.0). This version is one of our biggest releases to date and comes packed with brand new features, massive privacy gains, design enhancements and various other improvements and fixes.

## What's new?

### 🕵️‍♂️ Payjoin (P2EP) Support

The highlight of the release is without a doubt **Payjoin(P2EP**) support, which was generously sponsored by [Blockstream](https://blockstream.com) and was first described by them in this [blog post](https://blockstream.com/2018/08/08/en-improving-privacy-using-pay-to-endpoint/).

Payjoin (also called P2EP) is a form of coinjoin that allows 2 parties to mix their UTXOs while a payment is being done. Unlike other coinjoin mixing methods, a payjoin transaction does not leave an obvious _fingerprint_ and looks like an ordinary bitcoin transaction.

Wallets supporting payjoin can detect when a bitcoin payment link (BIP21) has payjoin support. They create a transaction paying the invoice and instead of broadcasting over the Bitcoin network, they connect to the BTCPay Server store and collaborate to enhance the transaction in a way that breaks essential blockchain analysis heuristics.

Payjoin is a win-win as it provides greater privacy for both parties:

- **Sender** \- It can't be assumed that all the inputs in a transaction belong to the same entity
- **Receiver** (merchant) - the UTXO set of the receiver does not grow with payjoin and blurs the link between sender and receiver for blockchain analysis software

Support in BTCPay Server has been added on both the _invoicing_ and the _wallet_ side. This means that you can enable Payjoin in the store, but you can also use [BTCPay's internal wallet](https://docs.btcpayserver.org/features/wallet) to pay Payjoin enabled invoices.

BTCPay Server uses a modified and expanded version of BIP79 Bustapay. If you're interested in learning how it works and want to add support to a specific wallet, [**read our specification here**](https://docs.btcpayserver.org/features/payjoin/payjoin-spec).

To learn how to enable Payjoin in your BTCPay Server or make a payment from the wallet, check the **[Payjoin User Guide](https://docs.btcpayserver.org/features/payjoin).**

To enable Payjoin as a merchant, a [hot wallet](https://docs.btcpayserver.org/CreateWallet/) is required. Please use it with care and do not store large amounts. The risk can be mitigated with our [BTC-Transmuter](https://github.com/btcpayserver/btcTransmuter) plugin.

### 🌚 New Theme & Dark mode

Another focus of this release was to standardize the BTCPay Server design. We created [new styling guidelines](https://design.btcpayserver.org/) and started applying them across all of our platforms.

You'll notice that the new default theme is much cleaner with a fresh new color-scheme.

![](/images/BTCPay-Server-Wallet-Light-1-1024x515.png)

Turn the lights off! The long-awaited dark theme is finally here!

![](/images/BTCPay-Server-Wallet-Dark-1-1024x515.png)

![](/images/BTCPay-Server-Invoices-Light-2-1024x518.png)

    Light Invoices page

![](/images/BTCPay-Server-Invoices-Dark-2-1024x518.png)

    Dark Invoices page


Design consistency was just the first step towards better user-experience. We plan to introduce a detailed dashboard, better navigation and an easier experience gradually.

Romantics who prefer the old-school look can access the legacy theme from Server Settings > Theme.

### 🧾 Re-designed Invoices

The checkout experience is crucial. It can be the difference between an abandoned cart and a successful sale. That's why we re-designed the invoice.

Since many of you use a customized theme, we were very careful not to make any breaking changes. Therefore, all of the customized invoice themes should continue to work.

**Dark mode** is also available for invoices from Store Settings > Checkout Experience.

![](/images/BTCPay-Server-Invoice-Light.png)

    New default light invoice

![](/images/BTCPay-Server-Invoice-Dark.png)

    New dark mode invoice


### 📷 New Wallet Features

Our internal wallet is one of the most private and secure wallets available. It's a full-node reliant wallet with a direct [hardware wallet integration](https://docs.btcpayserver.org/features/vault) that can run over Tor.

Several important features have been added to the wallet:

- Coin selection
- QR Code camera scanning
- Allows generation of a new address in the Wallet Receive page

#### Coin Selection

The new **coin-selection** feature can be found under Advanced Settings and allows you to expertly craft a transaction, using only coins that are desirable for your privacy in this payment situation. For example, paying with coins that are fresh from a coinjoin mix.

To make the selection easier, coin-selection works natively with the wallet **labels** feature. This means you can label any incoming funds for smoother UTXO management and spending. In the future we'll be adding auto-labelling on incoming coins based on invoices and whether it was a payjoin transaction.

![](/images/CoinSelection-1024x654.png)

Coin Selection

#### QR Code camera scanning

The new scan option (camera icon) lets you use your device's camera to scan an invoice when sending from the wallet. It auto-populates the invoice information so you don't have to manually copy-paste address and amount. More importantly the scan feature opens a door to new use-cases, especially for the BTCPay cross-platform app that we plan to launch in the future.

![](/images/ScanWallet-1024x598.png)

### 👨‍💻 API improvements

Our mission is to enable the creation of a powerful and flexible ecosystem that enables developers to build using BTCPay Server.

Therefore, we've spent quite a lot of time behind the scenes working on the new API, which we call the **Greenfield API**. It's still early days but we believe our efforts are starting to bear fruit.

Here are some of the new API features added in v1.0.4.0:

- Greenfield API permissions rework, to create API keys with very specific permissions
- Greenfield API C# Client
- Client Get/Create User API for Greenfield API

If you're a developer with a specific use-case, we'd like to invite you to join the [discussion on GitHub](https://github.com/btcpayserver/btcpayserver/issues/1320) and help us craft new features for the new API. Our legacy (BitPay-compatible API) will still be there, do not worry! In the meantime, we have APIs for managing stores and [Payment Requests](https://docs.btcpayserver.org/features/paymentrequests) in the works.

## 🐛 Bug fixes and improvements

- Better RBF and double spend handling
- Fix: Decimal precision for Liquid assets in BIP21
- Fix: do not allow 0 amount invoices in crowdfund or payment requests
- Fix: Make 0 amount invoices marked as paid instantly
- Bitflyer rate provider support
- Fix Payment request clone button
- Rename summary for invoices
- Add L-CAD support

The full changelog is available [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.4.0).

## How to update?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay Server > Server Settings > Maintenance > _**Update**_. If you prefer CLI, you can update with `btcpay-update.sh`.

## 🏪 New website & merchant directory

New guidelines meant that we had to give our [website](http://btcpayserver.org) a new look. We stripped the complexity of an earlier design and invested quite a bit of time in figuring out what content to display.

![](/images/BTCPayServerNewWebsiteLight-1024x516.png)

Due to software versatility, it was important to feature essential pieces of information that would be relevant for the majority of website visitors but without overwhelming them.

![](/images/BTCPayServerNewWebsiteDark-1024x514.png)

[Our directory](http://directory.btcpayserver.org) displays stores, charities and projects that use BTCPay Server. It helps smaller merchants with marketing. Our earlier directory was powered by WordPress which limited us in open-sourcing it.

BTCPay Server Directory is re-designed from the grounds up. It's light-weight and entirely open-source so that anyone can help us with moderation and code improvements.

As a self-hosted software, we have no way nor any intention to track people who use the software. Directory features are entries that people submitted themselves or posted publicly. It works on a voluntary basis. If you're using BTCPay Server and would like to be featured, feel free to submit an entry.

![](/images/BTCPayDirectoryLight-1024x515.png)

Both the [main website](https://blog.btcpayserver.org/btcpay-server-btse/) and [directory](https://github.com/btcpayserver/directory.btcpayserver.org) are open-source and can be found on GitHub. If you have the skills, feel free to join us in improving them further.

![](/images/BTCPayDirectoryDark-1024x515.png)

### 🗺️ Translators needed

BTCPay Server main website has been translated into 32 languages. We're grateful to all our contributors around the internet. Your efforts help us in making a borderless, open-financial future for everyone, a reality.

Changes on the main website, mean that there are new strings for translation and old ones that need to be reviewed. That's why we'd like to invite anyone interested into [helping us with translation](https://docs.btcpayserver.org/support-and-community/translate), by joining us on [Transifex](https://www.transifex.com/btcpayserver/btcpayserver-website/).

## Thank you to our contributors

This release is special. Many of the individuals that participated in this release are first-time contributors to the project which makes us very proud. Furthermore, this is the first version that was strictly coordinated with actual milestones and a plan. We're growing, and as a result, we need to improve our structure to cater the influx of new contributors.

Huge thanks to all of you who've helped in making the **v1.0.4.0**. We appreciate every single contribution and support.

- [binarydreaming](https://twitter.com/binarydreaming/)
- [britttttk](https://github.com/britttttk)
- [dennisreimann](https://github.com/dennisreimann)
- [](https://github.com/FrancisPouliot)[francispouliot](https://github.com/FrancisPouliot)
- [joerlop](https://github.com/joerlop)
- [mbomb1231](https://twitter.com/mbomb1231)
- [mikewchan](https://twitter.com/mikewchan)
- [mrkukks](https://github.com/kukks/)
- [nicolasdorier](https://github.com/nicolasdorier)
- [pavlenex](https://github.com/pavlenex)
- [rockstardev](https://github.com/rockstardev)
- [ubolator](https://github.com/bolatovumar/)
- [vswee](https://github.com/vswee)

We hope you'll have as much fun with the new BTCPay Server as we had developing it! As always, if you face any issues or notice a bug, please join our [community chat](http://chat.btcpayserver.org/) and let us know.

Stay healthy! Here's to the next release! 🍻
