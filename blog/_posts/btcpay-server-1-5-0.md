---
title: "BTCPay Server 1.5.0 - New dashboard, automated payout processors
date: 2022-04-28
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
coverImage: "/images/BTCPay1-5-0-desk.png"
---

After a long wait, we're finally out of our coding cave, ready to introduce a new major BTCPay Server version - 1.5.0! 

This release brings in a brand-new dashboard for easier analytics and management, payout processors and schedule for later wallet payments for batching your payments and refunds and more!

## New dashboard 📊

We know that having a quick glance at your store's performance is essential. Also we understand that as a user, you would like to have an easy way to access and manage recent invoices and refunds. That's why we're introducing a **dashboard**!

![](/images/1-5-0-dashboard-1.png)

![](/images/1-5-0-dashboard-2.png)

Dashboard visually showcases critical store's data, providing you with a way to better understand your store's performance, so that you can make more informed decisions. Furthermore, a dashboard should help with easier management of recent invoices and pending payouts and refunds.

Currently, the dashboard shows data for an on-chain payment method, pending payouts and refunds, recent invoices & transactions and the data for the crowdfunding app.

![](/images/1-5-0-dashboard-3.png)

![](/images/1-5-0-dashboard-4.png)

For more information on dashboard functionality, [check our docs](https://docs.btcpayserver.org/Dashboard/).

We're building the dashboard with flexibility in mind, and the goal is extend its functionality via the plugin system. 

We'd love to hear what do you think about the dashboard and how it works for you. Let us know what kind of data would you help you better manage your store.

## Payout processor 🤖

A payout processor is a new concept hooked into the [pull payment system], specifically the [payout part of it]. This new functionality allows you to automate the flow of the payouts.

![](/images/1.5.0-payout-processor-1.png)

Currently, we support payout processors for on-chain and off-chain payment methods. You can schedule payouts for on-chain, bolt11, lightning address, lnurl, etc.

Set up a time interval in your store settings upon which your payouts will be batched and broadcasted to the network. 

![](/images/1.5.0-payout-processor-2.png)

Payout processors in a current shape and form allows you to save on transaction fees by batching the store's payments (wallet payments, refunds, payouts) and broadcasting them at a specific, pre-set time interval, for example, hourly, daily, weekly and more.

### Schedule for later 📆

We understand that the payout processors may sound a bit abstract, and that's why we've added a concrete use-case for it through our brand-new **schedule for later** function in the wallet.

![](/images/1-5-0-schedule-transaction1.png)

This means that now, instead of signing and broadcasting a transaction, you have the option to schedule it for later on at a pre-set time interval.

And since our refunding system goes through the wallet, the scheduling option now allows you to batch your customer's refunds and save on fees.

![](/images/1-5-0-schedule-transaction2.png)

We plan to introduce a better permission system and hook it into the store so that in a particular store role, the store manager can create payouts, for example, refunds, but only the store owner can send them out.

## NBXplorer updates 🔎

In case you've missed it, our dependency NBXPlorer has undergo a major performance refactoring. Most of the refactoring was done to cather the way data is handled in the dashboard, but also to improve the performance for larger enterprise users.

You can read more about the NBXplorer updates [in this blog post](https://blog.btcpayserver.org/nbxplorer-postgres/).

## UX/UI improvements 🎨

- Improved the lightning services access 
- 


## Greenfield API 👩‍💻


The BTCPay Server team 💚
