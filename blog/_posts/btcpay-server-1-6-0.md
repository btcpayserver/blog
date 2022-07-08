---
title: "BTCPay Server 1.6.0 - Lightning dashboard, receipts and automated emails"
date: 2022-07-08
author: pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "payouts"
  - "dashboard"
  - "payout processors"
  - "update"
coverImage: "/images/BTCPay1-6-0.png"
---

We're finally back from our coding caves! Now that we have vitamin D and a bit of fresh air, we're excited to show you the new BTCPay Server version - 1.6.0!

This release's highlights are the introduction of Lightning and point of sale data to the dashboard, customer receipt for customers, emails for invoice statuses, LNURL-withdraw support for refunds, and plenty of other UX improvements, bug fixes, and features. If you have a low-time preference, you can take a quick look at the changelog [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.6.0).

## Security vulnerability patch 🛡️

Before we show you what's new in 1.6.0, we have an announcement.

In the past six months, we fixed a critical security vulnerability in one of BTCPay's versions. The security vulnerability has been disclosed responsibly, and we granted a bounty to the security researcher who discovered it. As far as we know, this particular vulnerability has not been exploited in the wild as it depends on multiple factors. For security reasons, we will not publicly disclose details yet. Timeframe for public disclosure is 6-12 months. We already have a CVE number reserved for it.

It's very likely that by updating BTCPay Server in the past six months, you've already patched this vulnerability. To be safe, update your instance if you haven't done so in a long time.

Let's see what new features and improvements this version brings us!

## Dashboard improvements 📊

We listened to your feedback carefully and added new functionality to the dashboard that will allow you to get essential insights about your store at a glance.

These improvements include the addition of:

- Store currency balance toggle
- Lightning Network data
- Point of sale product data

### Balance currency toggle

Firstly, you'll notice that the dashboard allows you to toggle between BTC and store default currency. You can change the default currency in your Store Settings.

![](/images/dashboard-currency-switch.gif)

### Lightning dashboard data

In [1.5.0](https://blog.btcpayserver.org/btcpay-server-1-5-0/), we introduced a dashboard. However, it contained data for on-chain only. In 1.6.0, we're adding basic data for lightning. You'll now get information on how much funds in channels you have remote, locally, and even in the closing channels.

![](/images/dashboard-lightning-data.gif)

Furthermore, Lightning services such as RTL, ThunderHub, Spark, and Lightning Terminal are now accessible from the dashboard.

### Point of sale product data

If you're selling your products through our point-of-sale app, you'll see information about the products you've sold and the amounts. The crowdfunding tile has also been re-designed to use the same style, so if you have added perks, they'll appear similarly.

![](/images/posdatanew.png)

## Invoice receipts 🧾

One of the most common requests we've heard from you is that you'd like to have a receipt once the invoice is settled. This version offers the ability to enable invoice receipts in your `Checkout Settings`.

When the invoice is settled, the view receipt button will lead the customer to a page that contains information about their payment. You can optionally add a QR code, which is convenient if the receipt is supposed to be printed (a ticket for an event).

On the API, you can toggle invoices. You can specify additional data to show on the receipt. For example, if you were selling licenses or software, you could add the license key to the receipt page or even a link to download the purchased software.

![](/images/receipt.png)

In case you're wondering what happens with the "back to the store button" once the receipt is on, here are potential scenarios:

- If the receipt is on and there is a redirect URL set, both "back to the store" and a "view receipt" buttons will be shown.
- If the invoice shows in modal and the receipt is on, the "view receipt" button is shown and opens a new window.
- Only the receipt button will be shown when you've set the receipt URL, similar to the redirect URL.

If you have a specific use case for receipts or would like to suggest how to improve the functionality, let us know, we'd love to hear how you're using this feature.

## Automated & customized emails 📧

We've added preliminary support for sending out emails to your customers based on invoice updates. You can now create email rules if you have an SMTP configured in your store settings. This means you can send follow-up emails after the invoice is settled or an email to improve the bounce rate on your abandoned cart.

![](/images/customizedemails.png)

## LNURL-withdraw support for payouts 🔄

Issuing a refund via Bolt11 invoice can be a frustrating experience, especially when the expiration time is involved. For example, if you're a merchant creating a refund for your customer, they have an option to input bolt11. However, depending on their wallet, their expiration time can be significantly lower than your processing time. A merchant would see the refund request when it has already expired.

![](/images/lnurlwithdrawrefunds.gif)

By implementing LNURL-withdraw into our payouts (and refunds), customers can now claim and withdraw funds by scanning a QR code from a compatible wallet. There are still some limitations in this flow.

For example, if you're issuing a refund and would like to offer LNURL-withdraw, the target currency must be BTC. Our wizards will be working hard on improving in the next release.

## Greenfield API 👩‍💻

In this release we added a few new functionalities to our [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/).

* Basic API Get and Delete operations for apps
* Add Lightning balance endpoint
* Allow excluding unconfirmed UTXOs when creating a new transaction

We're noticing an uptrend in people building on top of BTCPay Server. If you're building something with our Greenfield API, we're always looking to get more feedback on how to improve it and we love to see what you've made!

## Joomla VirtueMart integration 🛍️

We're excited to add one more e-commerce plugin. While not explicitly tied to this release, we launched a Joomla VirtueMart integration that allows you to accept bitcoin in your Joomla VM store. If you'd like to help us test this out, you can check [our documentation](https://docs.btcpayserver.org/VirtueMart/) and get started right away. We're really looking forward to getting feedback on how it works for you and what we can do to make that merchant experience even smoother!

## Cloudflare tunnel support ☁️

People running BTCPay Server locally on home-devices like Raspberry Pi, will be happy that we finally figured out a way to safely expose it to Cloudflare.

Cloudflare can see or modify all of your traffic, as it acts as a middleman between the client's browser and your local server. If you’re interested in learning how this works, check out our extensive doc on [this link](https://docs.btcpayserver.org/Docker/cloudflare-tunnel/).

## Plugins 🔌

Besides our beloved payment button becoming a plugin, here are a few more plugins to highlight.

### LNURL NFC Support

If you have a [browser-compatible](https://caniuse.com/webnfc) NFC phone, (ehm, currently only Chrome on Android, you can use our point-of-sale app to make NFC payments. [David Cohen](https://twitter.com/thedavidcoen) made a few videos and tweets explaining how this works if you’d like to try it out. Bear in mind, it only works when LNURL is a payment method and only on Chrome on Android.

[![](https://img.youtube.com/vi/4m-FQoUAs50/mqdefault.jpg)](https://www.youtube.com/watch?v=4m-FQoUAs50)

### TicketTailor

In case you’re organizing a bitcoin event, a conference or a concert, TicketTailor is a ticket management system that handles everything for you. The TicketTailor plugin allows you to connect your BTCPay Store to their system and accept Bitcoin payments for your dream event!

This integration is already being used in the wild by [Baltic HoneyBadger 2022](https://baltichoneybadger.com/buy-tickets) organizers.

### LNBank

A plugin which allows server admins to enable wallets creation on top of their Lightning node, essentially creating another layer on top that allows everyone to accept lightning payments via BTCPay has received an update. V1.2.3 LNBank improves API responses and send error message handling and on top of that now allows zero confirmation invoices creation.

## Thank you 💚

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, who directly participated in making 1.6.0 possible.

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more!

BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚
