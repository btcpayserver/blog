---
title: "Accept Pix Payments with BTCPay: Introducing the DePix Plugin"
date: 2025-09-04
author: r0ckstardev, thgoo
category:
  - "announcements"
tags:
  - Pix
  - Brazil
  - DePix
  - Liquid
  - Plugin
  - Stablecoin
permalink: /depix-plugin
description: Announcing the DePix plugin for BTCPay Server - accept Pix payments and settle to a BRL-pegged stablecoin on the Liquid Network.
coverImage: "/images/depix-plugin-featured.jpg"
---

Brazil's Pix payment system has rapidly become a dominant payment method since its 2020 launch. It reaches around 76% of the population and handles millions of transactions monthly, making it one of the most widely used payment rails in the country ([GFMag](https://gfmag.com/transaction-banking/pix-becomes-brazils-top-transaction-method/), [BusinessWire](https://www.businesswire.com/news/home/20250121148825/en/Pix-Transactions-Exceed-6-Billion-Monthly)).

However, existing Pix infrastructure often relies on intermediaries or centralized systems, which can dilute user sovereignty.

With the DePix Plugin for BTCPay, merchants can accept Pix payments directly - settling to DePix, a BRL-pegged stablecoin on the Liquid Network. This bridges everyday Brazilian commerce with Bitcoin-native infrastructure.

[![Watch the plugin in action](https://i.ytimg.com/vi/UdHxwtMe9mQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=UdHxwtMe9mQ)

Seamless by design: the plugin adds Pix and DePix as payment methods directly within BTCPay invoices and the Point of Sale. Built on BTCPay Server's plugin architecture (C#), it plugs into the existing UI so you can enable Pix without changing your checkout flow. At checkout, customers see a Pix option and QR; settlement goes to your DePix wallet on Liquid, and payments are tracked natively in BTCPay.

## Technical details

GitHub repo: [btcpayserver-plugin-depix](https://github.com/thgO-O/btcpayserver-plugin-depix)

### Setup flow

1. Install the DePix plugin in BTCPay Server (v2.1.6 or above).
2. Navigate to Wallets → DePix to create or configure your stablecoin wallet.
3. Obtain a DePix API key from [depix.info/#partners](https://www.depix.info/#partners) and enter it in settings.
4. (Optional) Register a webhook with the DePix Telegram bot for real-time update notifications.

Once configured:

- Pix becomes available as a payment method.
- Funds are received in your DePix wallet on Liquid.
- All UI integration and wallet tracking happen natively via BTCPay.

## Where to from here?

- Try it: Install the plugin on your BTCPay Server deployment today.
- Evaluate: Review setup and code on [GitHub](https://github.com/thgO-O/btcpayserver-plugin-depix).
- See it work: Watch the [demo video](https://www.youtube.com/watch?v=UdHxwtMe9mQ).
- Contribute: Share feedback, file issues, or submit pull requests as enhancements or localization contributions.

We're excited to witness the launch of the first version of the DePix plugin. It's designed to be genuinely useful for merchants in Brazil, and we hope to see it keep improving as adoption grows. If you're using it, [share your feedback with Thgoo](https://x.com/thgO_O) - together we can make payment acceptance in BTCPay Server even better!

## Acknowledgments

- [Vinteum](https://vinteum.org), for supporting open-source Bitcoin infrastructure in Brazil and development of this plugin.
