---
title: Introducing Pay Request - Get paid in BTC by sharing a link
author: pavlenex
date: 2019-02-22
category: features
coverImage: /images/Screen-Shot-2019-03-05-at-14.01.58.png
permalink: /payment-requests
---

> I regularly pay freelancers with bitcoin. When we agree on the price in fiat, due to volatility, the numbers never add up. I have to pay again, or they have to refund me. If we agree on the amount a few days in advance, someone is always at financial or time loss. Making sure they don’t re-use the address is a story for another day, but you feel the pain. (GitHub #[314](https://github.com/btcpayserver/btcpayserver/issues/314) )

[![Introducing Payment Requests - Invoice clients & get paid in Bitcoin](https://img.youtube.com/vi/j6CvwDPvfzQ/mqdefault.jpg)](https://www.youtube.com/watch?v=j6CvwDPvfzQ)

BTCPay is free and open-source cryptocurrency payment processor. In this article we would like to share how we addressed the above problem for our users.

### The Problem

Our good old client Satoshi wants to pay us for a logo we designed.

![](/images/BitcoinPayLink.png)

- Satoshi needs to ask for the exact **amount**.
- Satoshi needs our **address**
- Satoshi needs to make sure there is **no address re-use**, since that’s a huge privacy issue
- Satoshi’s **ISP may** [**block**](https://old.reddit.com/r/Bitcoin/comments/agru8z/email_provider_blocking_messages_with_bitcoin_word/) the email if he mentions Bitcoin.
- Satoshi does not have enough BTC, he needs **repeat** the same process
- All this time the **rates change**
- Satoshi has **no invoice confirmation** to print for his accountant

### The Solution

Introducing - **Payment Requests**, a new type of time-sensitive invoice pages built into BTCPay that allow you to get paid in cryptocurrency just by sharing a simple URL.

![](/images/BitcoinPayLink2.png)

- Seller creates an invoice, adds expiration date, customizes it and shares as a regular link.
- Buyer can pay invoice whenever preferred. The exchange rates update accordingly.
- Buyer can pay right away or later, on-chain or via the Lightning Network. The invoice can even be paid partially with LN and partially on-chain, or even with multiple coins.
- The exchange rate is determined when buyer tries to pay the invoice.
- Buyer can print the paid invoice.
- Seller can export all the relevant data as CSV later and send it to accountant.
- Since they’re using BTCPay, money goes directly from one wallet to another, no custodians, no fees.

**![](/images/BTCPay-payment-Requests-1.gif)**

### How it works?

1. Create a payment request (enter the amount, the expiration time, and description)
2. Customize the design (optional)
3. Share the URL.

***Creating a payment request in BTCPay:***

![](/images/BTCPay-payment-Requests.gif)

We’ve added lots of flexibility, so you can use custom CSS, or add a ready-made BootStrap theme.

![](/images/BTCPayRequestDesign.gif)

You can save the invoice for later and preview it, or publish it right away and send it to your customers.

### Features

- Set the expiration time
- Printer-friendly mode
- Customizable design (css/theme)
- Custom or fixed amount

***Print invoices with ease:***

![](/images/Print-Preview-BItcoin-Invoice.png)

### Roadmap

We plan to further develop and improve the payment requests based on your feedback.

Short term improvements we plan to implement are:

- One-Time or Recurring requests (subscriptions)
- Send a request automatically via an e-mail (SMTP integration)

### Try it out

Excited? Here’s how you can create a payment request quickly:

1. Register [on our demo server](https://mainnet.demo.btcpayserver.org/register) (you can [self-host](https://docs.btcpayserver.org/deployment/deployment) BTCPay or use a [third-party host](https://docs.btcpayserver.org/deployment/thirdpartyhosting))
2. [Create a store](https://docs.btcpayserver.org/btcpay-basics/gettingstarted#creating-btcpay-store) and connect your wallet (no private keys required).
3. Payment Requests > Create.

We’re very proud of this feature. In order to improve it further, we need more people to use it. Give it a try, and share your invoices and experiences with us on [Twitter](https://twitter.com/BtcpayServer).
