---
title: "New version of BTCPay Server - v1.0.6.0 is out!"
date: 2020-11-25
author: pavlenex
category: 
  - "releases"
coverImage: "/images/BTCPay1060png.png"
---

We're excited to announce the new version of the BTCPay Server - **v1.0.6.0**! The new release introduces new features, UI improvements, Greenfield API additions, a bunch of bug fixes and a patch for a privacy vulnerability found in relation the payment button feature.

_**If you're using payment button in any form, we strongly recommend that you update your BTCPay Server.**_  
**_UPDATE: CVE-2021-29249 has been assigned to this issue._**

## 🆕What's new in v1.0.6.0?

Here's a highlight of some of the features added in this version. For an in-depth look, check the full [changelog](https://github.com/btcpayserver/btcpayserver/blob/master/Changelog.md#1060).

### 🏪Store Setup Improvements

Setting up a BTCPay Server store and wallet can be an overwhelming experience for new users. That's why in the next few releases, we are focusing on reducing the friction of that process. The first step towards a smoother setup experience is the simplification of the store setup page.

![](/images/Store-Setup-1024x465.png)

We've stripped down the complexity and got rid of the technical terms that most people aren't familiar with. The wallet setup call to action is now above the fold, simplified and clearer. Small hints have been added to notify you if the store has not been set up entirely. The next big step is improving the initial wallet setup.

### 🧾Unified QR Code for on-chain and off-chain payment

Quite a few of you reported that sometimes it's hard for a payee to understand the difference between the on-chain and off-chain lightning payment methods. We've added opt-in support to generate payment links and QR codes for the on-chain payment method that will also suggest a lightning invoice that could be paid instead if the wallet supports it. This reduces the need of the customer having to switch payment methods on the BTCPay Server invoice and having to think about the difference.

The current payment links and QR codes for on-chain currently use the [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) format, and is potentially extended with [Payjoin support](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki). This new feature extends this format, by adding a [lightning invoice](https://github.com/lightningnetwork/lightning-rfc/blob/master/11-payment-encoding.md) that the wallet can choose to pay instead.

An example of this:

`bitcoin:bc1qyq007w2qdhru9nwfas8lfh6rt458jtyv8anaq4?amount=0.00051929&pj=https://btcpay.kukks.org/BTC/pj&lightning=LNBC519290N1P0MU4TJPP5VENKU53FU2C663X8PF88WU5X6G028N80L5A0AWYQNJZL03NCVCWQDP22PSKJEPQW3HJQJM4DD4HXGPGFAEXGETJYPY5GW3Q9YXQZURCQPJSP559PU78TP2V6ADS49WK0TN43FFP9QJJS7YD4FHXU58QKQJFYKM8LQRZJQ2MGDN8K2HKWNTK804XCPUVMHYVN7L8ZYJ4HEZA7WTLT8NWHRPLQZZ0HZYQQGKQQQQQQQP7SQQQQRSQQ9Q9QY9QSQD9H904LKX3W0GXUCGYXDPZJCTUYTAGWKJPFWFZ9HUS6LPHK3W3SNPD9ENWQN29WJFK3XUAR2UV9NMX7HEU3806HS2X58A3PR3DJUWHCQ2XK0J4`

### 🎨Re-designed payment requests, pull payments and refunds pages

In v1.0.6.0, your favorite pages to receive and send payments have been overhauled. Now, it's way easier to request a payment or to issue a refund.

![](/images/PaymentRequest-1024x506.png)

![](/images/RefundClaimed-1024x625.png)

### 🆒Pay Button - QR Code

We've listened to your feedback and now provide a link to the payment button that you can share with people, or encode it in a QR code that can be printed out for quickly accepting donations/payments on demand, without reusing addresses or bypassing BTCPay Server's invoices and accounting.

![](/images/Capture-1024x530.png)

### ⚠️Zero-confirmation invoices warning

A small warning has been added for those trying to accept 0-confirmation invoice. While we can't prevent users from using 0-confirmation, we can educate and actively discourage it.

![](/images/DoubleSpending.png)

### 🔔Notifications Preferences

In this release we've added the ability to filter out the notifications on a user level as well as allowing server administrators to disable live notifications. From now on, you can de-clutter your inbox and only be notified on the events that matter to you.

![](/images/Notifications-1024x536.png)

### Greenfield Invoice API

Our new [invoice API](https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Invoices) is finally feature complete! We recommend that all new integrations are done using the [GreenField API](https://docs.btcpayserver.org/API/Greenfield/v1/) which enables much more functionality. The BitPay compatible invoice API will remain available.

### Greenfield API Webhooks

As part of achieving feature parity on the previously mentioned Invoice API with the bitpay version, we've build a a webhooks system. Webhooks allow you to receive notifications about events related to your BTCPay Server. For this initial version, we've focused on webhooks around your store's invoices. You can read more about it in our [API documentation.](https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Webhooks)

Those webhooks can be configured either via the User Interface, or via the Greenfield API (which you can browse by going to the /docs page of your BTCPay Server instance)

![](/images/image.png)

![](/images/image-1.png)

### Payment Button Vulnerability fix

Payment Button Patch

Users using the _**payment button**_ in any form are strongly encouraged to update their instances to v1.0.6.0 since it contains a patch for a privacy vulnerability we discovered.

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay Server > Server Settings > Maintenance > _**Update**_. If you prefer CLI, you can update with `btcpay-update.sh`.

## BTCPay Server Plugins

We've saved the best for last. BTCPay Server v1.0.6.0 introduces an entirely new concept - a **plugin system**.

Over the years, BTCPay Server has evolved from a simple payment server to a Bitcoin technology stack. The use-cases for the software expanded way beyond our wildest imagination and the feature requests keep pilling on. In order to allow greater flexibility and scalability while keeping the simplicity of software's core, we're introducing an _experimental_ plugin system.

![](/images/BTCPayServer-Plugins-1024x602.png)

The plugin system should allow developers to build easier on top of BTCPay without relying on the core team to develop, agree, or review the changes. These plugins can be maintained separately and activated by users on demand. This introduces a whole new vision for BTCPay, a payment platform or as we like to call it, the WordPress of Bitcoin.

Please be aware that any plugins you see in the available UI are just proof of concepts and won't work properly just yet. Our first goal is to clean up the UI, and add turn certain existing features that aren't widely used into plugins. The migration of these features will be a whole new challenge, but we're hoping to end up with simple, yet extendable UI, that can turn your BTCPay from a simple payment system into a customizable Bitcoin stack on which you can build your entire business on.

Furthermore, we have to take special care when it comes to security and education of using third-party plugins, that inevitably will be built by developers around the world. Please give us more time as we work on plugins. If you have any ideas or want to help us develop plugins, please reach out through our [chat](https://chat.btcpayserver.org/).

Once again, it's still early for the plugins! But we'll get there. It's a conceptual change in what BTCPay Server is and will take some time to get it right.

## Thank you to our contributors!

Huge thanks to all of you who’ve helped in making of the **v1.0.6.0**! We appreciate every single contribution and support.  
[bolatovumar](https://github.com/bolatovumar)  
[britttttk](https://github.com/britttttk)  
[dennisreimann](https://github.com/dennisreimann)  
[dstrukt](https://github.com/dstrukt)  
[kukks](https://github.com/kukks/)  
[mariodian](https://github.com/mariodian/)  
[nicolasdorier](https://github.com/nicolasdorier/)  
[pavlenex](https://github.com/pavlenex/)  
[rockstardev](https://github.com/rockstardev/)  
[sgarcia13](https://github.com/sgracia13)  
[zaxounette](https://github.com/zaxounette/)

As always, if you face any issues or notice a bug, please join our [community chat](http://chat.btcpayserver.org/) and let us know. 💚
