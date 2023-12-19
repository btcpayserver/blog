---
title: "BTCPay Server 1.12.0 - Under the hood updates, POS improvements and BoltCards issuance at scale"
date: 2023-12-19
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "pos"
  - "boltcard"
coverImage: "/images/1-12/12featured.png"
---

We are excited to announce the latest release of BTCPay Server, version **1.12.0**! This release brings several important backend changes, solidifies structure for the future, introduces several new features, improvements, and bug fixes.

## 🥷 Under the hood enhancements

This release brings in several under the hood enhancements.

### Upgrade to .NET 8 

In this release, we've upgraded to .NET 8, which brings improved performance and new long term support. Please note that this upgrade requires a current version of the Docker engine (version 20.10.10 or higher). If you encounter [these symptoms](https://docs.linuxserver.io/FAQ/#symptoms) after updating, you can [manually upgrade](https://docs.docker.com/engine/install/) your Docker engine, although our docker deployment should update automatically if needed.

### Breaking changes for some plugins

**Some plugins** incompatible with the current version of BTCPay may automatically be disabled. Once updated to 1.12.0, BTCPay Server will let you know through notifications and you can update plugins for continued use. 

We’ve introduced significant internal changes when it comes to our Lightning support. Starting from 1.12.0, plugins are now able to extend BTCPay Server’s lightning support, enabling new integration possibilities.

In the next major release 1.13.0, we plan to move out any remaining altcoin code into independent plugins, moving them completely out of the main repository. 1.12.0 ensures proper foundations are in place to achieve that. 

### End of Support for Postgresql 11

As Postgresql 11 has reached its end-of-life (EOL) status, we will no longer provide support for it in BTCPay Server. While it should still work, we recommend considering an upgrade to a more recent version of Postgresql for ongoing compatibility. Learn more about the EOL status of Postgresql [here](https://www.postgresql.org/support/versioning/.)


## 🎉 New features

### 🛍️ Point of Sale improvements

Based on extensive [research](https://blog.btcpayserver.org/case-study-hodlhodl-2023/) and feedback we continuously receive from people around the world onboarding retailers, we’re bringing in several important UX/UI enhancements in 1.12.0.

![BTCPay Server POS](/images/1-12/1.12.0-Keypad-Plus.gif)

We’ve added the ability to add up amounts through **+ functionality**, making it easier to calculate the total, and **clear** out wrongly added amounts. 

Cashiers can now see a **transaction history** of the Point of sale app, ensuring easier invoice troubleshooting and refunding for users with permission to do so. We also improved **error messaging** on the checkout when using NFC cards and **optimized receipts printing**.

![BTCPay Server POS Transacitons Histor](/images/1-12/1.12.0-Keypad-Transaction-History.gif)

In case of [too many categories](https://blog.btcpayserver.org/btcpay-server-1-11-0/) in the POS cart view, categories are now scrollable. Starting 1.12.0, categories and filters can now be hidden from the main view, but they’re on by default if you’re using categories.


![BTCPay Server POS Categories](/images/1-12/274262116-43fb3c0a-7cde-45a9-9928-a4ccfc2d45bc.gif)

**Item editor** used in both Point of Sale and Crowdfunding apps got improved, allowing easier adding, drag and drop and editing experience for products.

![BTCPay Server POS Item Editor](/images/1-12/1.12.0-Keypad-Editr.gif)

### ⚡ Generate BoltCards at scale through BTCPay directly!

Inspired by the success of circular economies using BTCPay on physical POS devices and NFC cards, we’ve added direct integration of [BoltCard](https://www.boltcard.org) into our Pull Payment system, allowing anyone to issue physical NFC cards. We demonstrated the setup during our BTCPay Day in [Tokyo](https://x.com/BtcpayServer/status/1720707779680464954?s=20), and replicated it during the [AfroBitcoin](https://www.afrobitcoin.org) conference for merchants.

Quite simply, any BTCPay user now has the ability to not only generate NFC cards for spending for their local economies and merchants, but also have an easy way to do that at scale, thanks to our BTCPay Vault, it takes only a few seconds. The cards generated aren’t static. 

End-users can:
- Check card balance by scanning a QR code
- Top up the balance

There are several conditions that have to be met to use this feature:

- The pull payment is created with "Automatically approve claims"
- The currency of the pull payment is SATS or BTC
- The Automated Lightning Sender (Payout Processor)  of the store is configured
- [BTCPay Server Vault](https://github.com/btcpayserver/BTCPayServer.Vault/releases) 2.0.8 or more installed 
- A smart card reader such as [this](https://www.identiv.com/products/logical-access-control/smart-card-readers-writers/contactless-smart-card-readers-writers/3700f) or [this one](https://www.acs.com.hk/en/products/3/acr122u-usb-nfc-reader/).
- An empty NTag424 NFC card.

When those conditions are fulfilled, the pull payment will have two links "Setup Boltcard" and "Reset Boltcard" appearing. If you click on "Setup Boltcard", BTCPay Server will connect to the BTCPay Server Vault app, which will connect to your local smart card reader. You can then just tap the card on the smart card reader. That’s it! Card is set up.

This card can then be used to pay by tapping on the merchant's terminal. Note that the merchant needs an android phone with NFC enabled and Google Chrome or a dedicated device such as [Bitcoinize](https://geyser.fund/project/bitcoinizepos).

We’re still working on improving the UX around this feature, and will soon have better documentation and video tutorials. If you’re a local ambassador onboarding merchants, wanting to replicate this setup, please let us know, we’d love to hear from you on how we can improve it!


### 📧 Enhancing email form functionality


This version introduces the addition of webhook support for [Payment Requests](https://docs.btcpayserver.org/PaymentRequests/), [Payouts](https://docs.btcpayserver.org/Payouts/) and extendibility by plugins. 

![BTCPay Server Email Webhooks](/images/1-12/1.12.0-email.gif)

You can now send an email automatically when invoicing a client through a payment request, processing a salary for your employee or issuing a refund through payouts. Metadata collected through the custom forms is now exposed in the email forms, which means you can trigger emails with customer shipping information or any other custom data you’ve collected through the [checkout form](https://docs.btcpayserver.org/Forms/).

### 👛 Wallet improvements

To ensure better fee estimation in BTCPay’s wallet, we’ve set mempool.space as a default fee estimation source. Support for BIP129 has been added. We’ve also improved instructions for Passport device import and improved labels.

## 🖇️ Integrations

A new e-commerce integration for merchants is available - [SmartStore](https://docs.btcpayserver.org/Smartstore/). We’re inviting merchants using this CMS to beta [test it] and report back how it works. Our integration team has been on fire lately, and you can expect more CMS and eCommerce plugins in the future. Special thanks to Nisaba for leading on the SmartStore development.

One of our most popular e-commerce integrations - [BTCPay for WooCommerce](https://wordpress.org/plugins/btcpay-greenfield-for-woocommerce/) has been updated as well. Most notably, the plugin is now fully compatible with WooCommerce cart and checkout blocks.

## 🔌 Plugins

In the light of a recent [critical vulnerability](https://d11n.net/lnbank-vulnerability-recap) incident in one of the plugins, we’ve decided to add several warnings throughout the UI that communicate better what certain admin settings can do once enabled. We’ve also added a visible disclaimer to ensure possible risks of using plugins are more obvious.

Third-party plugins updates:

- **LNbank - critical [vulnerabilit](https://d11n.net/lnbank-vulnerability-recap) patch, please update if you’re using the plugin to mitigate the risk.**
- **Ticket Tailor** has been upgraded to v2 - you can now create multiple event integrations per store and the UI now uses your store branding.
- **Coinjoin plugin** 1.0.66 - Fee improvements - You can now coinjoin to consolidate utxos automatically and privately depending on the mempool fees. Paranoid payments is an extension to the unique coinjoin payment feature that will only fulfill payments if the coins used are fully private for those with the biggest tinfoil hat. Send to other wallet  - allows you to automatically forward funds from your store hot wallet through coinjoin to a hardware wallet with ease, and privately.
- **Sideshift** 1.1.12 - Now allows you to explicitly enable it per invoice through the api, along with customization of the sideshift explicit payment methods per invoice
- **Prism** 1.1.19 - Now supports onchain. It will be able to forward balances received on chain or lightning to an onchain or lightning destination
- **Dynamic Reports** 1.0 - Creating customized advanced reports for all your needs as a business.

🚨 Beware of scammers!

Despite our numerous warnings in the past months, we’re still seeing that people are falling for a scam called [Bitcoin Bonus](https://blog.btcpayserver.org/bitcoin-bonus-scam/) or similar derivative, which is an ongoing scam that abuses our brand and software. Please be aware our team will only reach out to you through our official channels. To be sure you're talking to our team members, ALWAYS join our official mattermost chat and verify if things are as they get proposed through other ways. Pay attention to people sending you direct messages on Telegram. Our team members will never DM you first.

## 🫶 Support BTCPay

If you’re finding BTCPay Server useful, you can support us as an individual donor through our [OpenSats page](https://opensats.org/projects/btcpayserver). If you're a corporate donor willing to donate, reach out directly to our [BTCPay Foundation](https://foundation.btcpayserver.org). 

## 💚 Thank you
As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 1.12.0 possible.

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚