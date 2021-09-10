---
title: "BTCPay Server 1.0.5.0 is out!"
date: 2020-06-26
author: pavlenex
category:
  - "releases"
coverImage: "/images/v10050-1024x576-1.png"
---

The new version of BTCPay Server **1.0.5.0** is now available! This release introduces several major features, improvements and bug fixes.

## What’s new?

It's hard to pick the highlight of the release, since we have two new significant features! Let's start in alphabetical order.

### 🔔Notifications

We heard your feedback about wanting to be notified of important events in your BTCPay Server. Introducing - **notifications**!

![](/images/notifications2-1024x530.png)

For this release, you will be able to receive notifications within the UI when an invoice has an important [status](https://docs.btcpayserver.org/Invoices/#invoice-statuses) update, such as a confirmed payment, partially paid (underpaid), invalid state (paid, but failed to confirm within specified amount of blocks). Besides invoice status, we've added notifications for payouts as well.

The notifications page aggregates all notifications so you can manage them with batch actions.

![](/images/notificationspage-1024x442.png)

Thanks to all the heavy-lifting from [rockstardev](https://twitter.com/r0ckstardev), the system is flexible and expandable with ease, and we will add more notifications with new releases. As notification types grow, we intend to add notification preferences, so you get to decide which events matter to you. We'll also look into exposing the notifications through our [ever-growing GreenField API](#greenfield-api) along with other means of communication, such as email.

### 🧾Pull payments

Traditionally, to make a Bitcoin payment, a receiver shares their bitcoin address and the sender later sends money to that address. Such system is called `Push payment` as the sender initiates the payment while the receiver may be unavailable, in effect `pushing` the payment to the receiver.

However, with 1.0.5.0, we added a feature that reverses the roles. With **pull payments** the sender allows the receiver to `pull` the payment at the receiver's convenience.

A sender creates a pull payment, specifies the maximum amount that can be pulled out of their wallet and shares a link to a public page with a receiver. The receiver then, at their convenience, enters their payment destination (such as a Bitcoin address or a BIP21 payment link) and specifies how much they wish to pull from the sender (which can be a portion of the pull payment or the entire amount).

![](/images/PullPayments-3-1024x421.png)

Here's a simple example: Imagine you hired a freelancer - Tom, to create a logo for your company. The total is 0.003 BTC, but you agreed to work in stages : outline, coloring, and high-res file.

![](/images/PullPayments-2-1-1024x412.png)

You create a pull payment of 0.003 BTC and share a link with Tom. Once a stage is complete, Tom visits the link, creates a payout asking to send 0.001 BTC to his address. You check the files, authorize the payout and the funds have now been received by Tom!

![](/images/PullPayments-1-1024x395.png)

![](/images/PullPayments-4-1024x773.png)

At the moment, payouts need to be _authorized_, but we intend to allow automation with our [hot-wallet feature](https://docs.btcpayserver.org/HotWallet/), for those willing to hold a small amount in a hot wallet to automate the payouts even further.

![](/images/PullPayments-2-1024x412.png)

It's still early days for pull payments. We are inviting you to test it and help us improve the UI. There are many interesting use-cases this can tackle, but we need community feedback in order to iron it out and adjust for particular use-cases.

For more in-depth info on pull payments, check [out our documentation](https://docs.btcpayserver.org/PullPayments/).

#### ↩️Refunds

Up until now, merchants had to manually issue refunds. The process required a lot of back and forth between a sender and a receiver. The merchant had to ask for a refund address, calculate the preferred rate, manually add that to the wallet and broadcast the transaction.

![](/images/Refund2-1024x478.png)

**Refund** is a familiar concept built on top of the pull payments feature. In case of a refund, a merchant just needs to go to the invoice, click Issue refund , select the appropriate rate and share a link with a customer.

The customer will then input their address and claim a refund. Once a customer claims a refund, the merchant will get a notification and can authorize it in a click. In future releases, we will look into payouts which are approved to be paid out instantly, without the authorization, in case a merchant prefers that.

![](/images/RefundCustomerUI-1024x655.png)

### 💰Wallet improvements

We have big plans for our built-in wallet. With each release, our focus is on adding features and ironing out the interface. More importantly we plan to release a full API for the wallet. Our documentation of the wallet features has been improved recently and you can [check it out here](https://docs.btcpayserver.org/Wallet/), in case you're interested in learning more.

#### Improve fee selection UI in wallet send screen

![](/images/FeeConfirmationUI-1-1024x542.png)

#### Natively open BIP21 payment link

If you've been using the built-in BTCPay Server wallet to pay with [Payjoin](https://docs.btcpayserver.org/Payjoin/), you no longer need to manually copy-paste the BIP21 payment link and can now click on the "Open in wallet" button like a natively installed Bitcoin wallet.

The payment link data will automatically be loaded to your preset default wallet. To use this feature, simply go to Wallets->Manage->Settings->Actions->Open this bitcoin wallet on payment link. This works with any application or website that uses [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) to request a payment but can currently only be used on a [select number of browsers](https://caniuse.com/#feat=registerprotocolhandler).

#### Privacy enhancements and Payjoin level up

After we released Payjoin, there has been [continuous](https://github.com/btcpayserver/btcpayserver-doc/issues/486) [discussions](https://github.com/NicolasDorier/bips/pull/3) around improving the protocol and standardizing it into the new [Payjoin BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki). In addition, we've learnt of additional privacy enhancements that have now been applied to how we build and sign transactions. One example is that now, by default, RBF support is now randomized in order to not have a consistent fingerprint for a default BTCPay Server spending transaction.

### 👨‍💻Greenfield API lift-off!🚀

We remain committed to building a flexible yet straightforward API for developers. Our end-goal is to provide the thousands of hours of work put into the BTCPay Server technology stack in a clean interface so that everybody can use it to build a project or start a business with a solid foundation. We've added several new features and also launched a public [API documentation page](https://docs.btcpayserver.org/API/Greenfield/v1/).

#### The BTCPay Server Lightning node API

We've exposed our internal code for communicating with the Lightning network as part of GreenField. This means that irrespective of which lightning implementation you chose, you can use one common API for your needs. We currently support LND, CLightning, Eclair & Ptarmigan.

#### Additional Changes

- New server info API
- New Payment Requests API
- Expand Store API
- Consistency applied across all endpoint models and responses

The API is still far from done. We're slowly adding features and ironing things out as we go along. If you're interested in providing feedback, feel free to join our discussions [here](https://github.com/btcpayserver/btcpayserver/pull/1627).

### 🐛 Bug fixes and improvements

Here’s a rundown of the squashed bugs, minor changes and improvements in this version:

- Do not auto-complete generate wallet form
- Make sure copied notification is positioned correctly on checkout
- Fix broken documentation links
- Fix POS app item display issues
- Fix Invoice checkout modal close button theme issues
- Fix display of replaced transactions in invoice list
- Support BitPay invoice creation property "paymentCurrencies"
- Update lightning support warning text
- Add support for Cobo Vault and Wasabi wallet file imports
- Rename form items in Wallet Send UI
- Fix issue with payment requests not expiring
- Fix broken Bootstrap theme generator link
- Use proper Bitcoin symbol (₿) in UI instead of "BTC"
- Ensure you can only sign with hot wallet if you created the hot wallet via seed
- Respect JsonResponse option in payment button endpoint even for failures
- Opt out of dotnet telemetry in Docker containers
- Fix issue with POS app if button text had special formatting
- Autofocus 2FA-code input on page load
- Add Orderid to BitPay IPN format
- Require Owner role to the store for modifying store via Greenfield
- Fix css styling classes

The full changelog is available [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.5.0).

## How to update?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay Server > Server Settings > Maintenance > _**Update**_. If you prefer CLI, you can update with `btcpay-update.sh`.

## 📄New Documentation

We began working on design consistency in an earlier major [release](https://blog.btcpayserver.org/btcpay-server-1-0-4-0/), where we improved the appearance of our official [website](https://btcpayserver.org/) and merchant's [directory](https://directory.btcpayserver.org/).

In this release, we've decided to give our documentation an entire overhaul. We've adjusted not only design but the entire generation system.

BTCPay Server Documentation now has dark mode, multi-repo doc loading, built-in video support, better search functionality via Algolia and an improved structure and overall experience.

![](/images/DocsLight-1024x696.png)

[Wallet setup](https://docs.btcpayserver.org/WalletSetup/) is an important step. That's why the part of the docs that explains how to configure a wallet has been improved and re-structured.

![](/images/DocsDark-1024x744.png)

The entire documentation stack is [open-sourced](https://github.com/btcpayserver/btcpayserver-doc). You can read more on the technical aspect of how our docs work in [this](https://d11n.net/open-source-may-2020.html#reworking-the-btcpay-server-docs) blog post.

## Thank you to our contributors

Huge thanks to all of you who’ve helped in making of the **v1.0.5.0**. We appreciate every single contribution and support.

- [apotdevin](https://github.com/apotdevin)
- [britttttk](https://github.com/britttttk)
- [bitcoinbrisbane](https://github.com/bitcoinbrisbane)
- [chewsta](https://github.com/britttttk)
- [dennisreimann](https://github.com/dennisreimann)
- [jad0c](https://github.com/jad0c)
- [janoside](https://github.com/janoside)
- [mrkukks](https://github.com/kukks/)
- [mlv-](https://github.com/mlv-)
- [nemoBTC](https://github.com/nemoBTC)
- [nicolasdorier](https://github.com/nicolasdorier)
- [pavlenex](https://github.com/pavlenex)
- [riccardomasutti](https://github.com/RiccardoMasutti)
- [rockstardev](https://github.com/rockstardev)
- [ubolator](https://github.com/bolatovumar/)
- [woutersamaey](https://github.com/woutersamaey)
- [zaxounette](https://github.com/Zaxounette)

As always, if you face any issues or notice a bug, please join our [community chat](http://chat.btcpayserver.org/) and let us know.

In case you've missed the big news yesterday, we've received 150,000 USD (received and held in Bitcoin) from [Kraken](https://www.kraken.com/en-gb/). Check out our [blog announcement](https://blog.btcpayserver.org/btcpay-server-kraken-grant/).

Stay healthy! Here’s to the next release! 🍻
