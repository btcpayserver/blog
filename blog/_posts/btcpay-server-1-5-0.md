---
title: "Introducing BTCPay Server 1.5.0 - Dashboard and payout processors"
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

This release brings in a brand-new dashboard for easier analytics and better data visualization, payout processors and schedule for later for better payout management payments, batching your payments and refunds, several UX/UI improvements, Greenfield API additions and a few non-critical bug fixes.

## New dashboard 📊

We know that having a quick glance at your store's performance is essential. Also we understand that as a user, you would like to have an easy way to access and manage recent invoices and refunds. That's why we're introducing a **dashboard**!

![](/images/1-5-0-dashboard-1.png)

![](/images/1-5-0-dashboard-2.png)

Dashboard visually showcases critical store's data, providing you with a way to better understand your store's performance, so that you can make more informed decisions. Furthermore, a dashboard should help with easier management of recent invoices and pending payouts and refunds.

Currently, the dashboard shows data for an on-chain payment method, pending payouts and refunds, recent invoices & transactions, and the data for the crowdfunding app.

![](/images/1-5-0-dashboard-3.png)

![](/images/1-5-0-dashboard-4.png)

For more information on dashboard functionality, [check our docs](https://docs.btcpayserver.org/Dashboard/).

We're building the dashboard with flexibility in mind, and the goal is extend its functionality via the plugin system. 

We'd love to hear what do you think about the dashboard and how it works for you. Let us know what kind of data would you help you better manage your store.

## Payout processor 🤖

A payout processor is a new concept hooked into the [pull payment system](https://docs.btcpayserver.org/PullPayments/), specifically the [payout part of it](https://docs.btcpayserver.org/PullPayments/#approve-and-pay-a-payout). This new functionality allows you to automate the flow of the payouts.

![](/images/1.5.0-payout-processor-1.png)

Currently, we support payout processors for on-chain and off-chain payment methods. You can schedule payouts for on-chain, bolt11, lightning address, lnurl, etc.

Set up a time interval in your store settings upon which your payouts will be batched and broadcasted to the network. 

![](/images/1.5.0-payout-processor-2.png)

Payout processor, in its current state, allows you to save on transaction fees by batching the store's payments (wallet payments, refunds, payouts) and broadcasting them at a specific, pre-set time interval, for example, hourly, daily, weekly and more.

### Schedule for later 📆

We understand that the payout processors may sound a bit abstract, and that's why we've added a concrete use-case for it through our brand-new **schedule for later** function in the wallet.

![](/images/1-5-0-schedule-transaction1.png)

This means that now, instead of signing and broadcasting a transaction, you have the option to schedule it for later on at a pre-set time interval.

And since our refunding system goes through the wallet, the scheduling option now allows you to batch your customer's refunds and save on fees.

![](/images/1-5-0-schedule-transaction2.png)

We plan to introduce a better permission system and hook it into the store so that in a particular store role, the store manager can create payouts, for example, refunds, but only the store owner can send them out.

## Enable/disable users

Server admins now have the options to disable or re-enable users, allowing them to better manage people who use their instance. 

![](/images/1-5-0-enable-disable-users.png)

This functionality can be handy for third-party hosts or services building on top of BTCPay Server or offering BTCPay third-party hosting.

## NBXplorer updates 🔎

In case you've missed it, our dependency NBXPlorer has undergone a major performance refactoring. 

We did most of the refactoring in service of how data is handled in the dashboard and improved the performance for larger enterprise users.

You can read more about the NBXplorer updates [in this blog post](https://blog.btcpayserver.org/nbxplorer-postgres/).

## UX/UI improvements 🎨

As usual, we're ironing out the user interface with every release, making incremental changes based on our understanding of how you use BTCPay Server. Your feedback is always a critical factor when we're making such changes.

- Better **lightning services access** - access lightning network services in a click of a button.
- **Store default currency for entities** - introduced in an earlier release, the default currency is now pre-set, but easily configurable when you're creating invoices, pull payments, pay button or payment requests.
- Add additional rate providers supported by CoinGecko.

## Greenfield API 👩‍💻

In this release we added a few new functionalities to our [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/).

* Add transaction info for on chain wallet 
* Add label filter for on chain wallet transaction
* Add lightning payment info 

We're noticing an uptrend in people building on top of BTCPay Server. If you're building something with our Greenfield API, we're always looking to get more feedback on how to improve it and we love to see what you've made!

## Thank you 💚

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, who directly participated in making 1.5.0 possible:

[@dafunction](https://github.com/dafunction) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@Kukks](https://github.com/kukks/) [@leesalminen](https://github.com/leesalminen/) [@NicolasDorier](https://github.com/nicolasdorier/) [orangesurf](https://github.com/orangesurf) [@bolatovumar](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey).

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! 

BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚
