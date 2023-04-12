---
title: "BTCPay Server 1.8.0 - Custom checkout forms, store branding and much much more!"
date: 2023-03-01
author: Bas
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "checkout"
  - "NFC"
  - "BIP-329"
  - "Kraken-plugin"
coverImage: "/images/btcpay1-9-0-thumbnail.png"
---

# BTCPay Server release 1.9.0

We're excited to announce the version of BTCPay Server v1.9.0, bringing you many new features, improvements, and bug fixes. This major release is a big step forward, and we can't wait for you to try it out!

We've added some quality-of-life improvements aimed explicitly toward the retail experience of the software, better management features for your stores, and some touch-ups toward checkout V2. Most prominently, we’ve released a wallet integration with exchanges!

## 👛Exchange integration via plugins!

We meant it; 2023 is the year of plugins! Initially announced during the [BTCPay Day in Riga](https://twitter.com/BtcpayServer/status/1568300141517365249), the custodian wallet support through plugins is a reality! The introduction includes support for the Kraken exchange and is available immediately for beta testing with this release!

With the custodian wallet plugin, you can directly, out of your BTCPay Server, send the amounts of bitcoin necessary to the exchange and convert into fiat for suppliers. 

To get custodian wallets into your BTCPay Server, we must first enable experimental features in Server settings. Underneath the Policies tab, scroll down to Maintenance Settings, tick the box in front of "enable experimental features'' and save the server settings at the bottom. 
Now, in the left menu bar of BTCPay Server, you'll find "add custodian" below your Bitcoin and Lightning wallet. However, before we can add the custodian, you must install the Kraken plugin. Find "Manage plugins” in the left menubar and install the Kraken plugin, your BTCPay Server will restart. 

After installing the Kraken plugin, click "add custodian"; the only option available so far is Kraken. Select and click continue. Stay calm about the warnings; the plugin tries to connect immediately. Fill out the fields as instructed, and you should be set up with the Kraken custodian wallet plugin! For non-technical shopkeepers, all features can be automated using Zapier. Using the new custodian account framework, plugin developers are now able to code their own plugins and add support for exchanges and other custodians, like brokers or online payment systems to BTCPayServer. 
Wouter Samaey, who developed the custodian account framework, and the Kraken plugin, aims to keep adding more exchanges in the future. We welcome any developer to help expand the library of possible exchanges!

![](/images/btcpay1-9-0-custodian.jpg)


## 🛍️Point of Sale, NFC and receipts

You may have seen the videos of people using physical PoS devices on [social media](https://twitter.com/BitcoinBeachBR/status/1637920624000528384). We were donated a pair of them, and ever since, there have been a lot of questions and great feedback from real-world use cases. We’re carefully noting all the feedback from the retailers who use these devices.

![](/images/btcpay1-9-0-pos.jpg)

### Receipts
We’ve improved the digital receipts to better cater those devices. Print size and consolidating data on the receipt are addressed in 1.9.0. Find the new and optimized print views on invoices! 

### Improved NFC experience
Merchants utilizing NFC functionality will be happy that we’ve added additional improvements. Earlier, if a customer wanted to pay via NFC, a merchantT had to tap the "Pay By NFC" button. From now on, if the browser already has permission, you no longer have to click the button. Just tap the NFC card, and payment gets received! 


## 🎉 Checkout v2 gets further improvements

The next-gen checkout - V2 received additional improvements and is now a default for all new stores! 

Introduced a [couple of releases ago](https://blog.btcpayserver.org/btcpay-server-1-7-0/), the new checkout page continues to receive updates based on your feedback. We’re introducing new checkout presets to optimize the checkout experience. There are two options to choose from:, Retail mode and Online mode. These will effectively give a pre-setup store for either of the two purposes. You can still fully customize, but we recognize there are many features, and having a template to start from brings huge time-saving at set up. 
On the customer-facing side, when the client has paid your store or invoice, the Checkout will show the on-chain transaction status, and if it still needs to confirm, when it confirms, it's party time, and confetti now comes out! 
One more thing with Checkout V2. 

Remember, if you run custom styling, be aware that setting V2 might break your design! 

![](/images/btcpay1-9-0-checkout.jpg)

## 📒New recovery seed phrase view! 

After some deliberation and feedback, we will quickly switch up the recovery seed phrase view! Before we had you jump back and forth between lines 1 and 2, we've now structured it in just one plain simple list. No more chances to mess up the order of your seed! 

![](/images/btcpay1-9-0-seedphrase.jpg)

## 📚Wallet Labels export - BIP-329 

After adding the labels locally on your transactions, we've now gone ahead and implemented [BIP-329](https://github.com/btcpayserver/btcpayserver/pull/4799), where wallet labels are exportable. If you've set labels for your transactions and moved to another wallet (that supports BIP-329), you can take your labels with you! No longer a mess in recognizing what your transactions were! 

## 🤝Restructuring how metadata is viewed. 

You can now customize the [invoice metadata](https://docs.btcpayserver.org/Development/InvoiceMetadata/) for payments received through a Lightning Address. Additionally, Payment Proof will now appear in the receipt data.

Next to being busy giving you better data points, we've significantly improved the user experience. Your customer receipt will now display what items have been purchased.

Also a slight improvement in managing your transactions: you can now add labels to destination addresses. No more need to write down or remember everything. Just attach a label to the address! These labels will show up on your dashboard as well.

## 🚨 Deprecating MySQL and SQLite

In our ongoing initiative to [phase out](https://blog.btcpayserver.org/btcpay-server-1-8-0/#-phasing-out-mysql-and-sqlite) support for MySQL and SQLite, starting BTCPay Server using --sqlitefile or --mysql flags without being in the context of migration will result in server startup failure.  

To address this, we're introducing a new flag called --deprecated, which enables you to start with SQLite or MySQL even if they are deprecated. Please note that this flag will no longer be available in version 1.10 as we continue to streamline and prioritize newer technologies.

## 👾 We squashed plenty of bugs again! 

Bugs, they keep coming, and we'll make them go again. We've slowly begun changing the number of minor releases and aggregating the bug fixes in more clear and clean packages, well tested and proper fixes in place. In this Release, we have a couple of big fixes coming your way.

- Point of Sale's app ignored the store-set preferred currency through LNURL.
- Point of Sale fixes escaped HTML entities in the item title
- No longer will Lightning be proposed as an option if the [Lightning node fails](https://github.com/btcpayserver/btcpayserver/pull/4865).
- [Improved pagination](https://github.com/btcpayserver/btcpayserver/pull/4828) for better performance, no longer fetching all page counts.

## 🚨 Be warned of scammers!

We posted a [blog last month](https://blog.btcpayserver.org/bitcoin-bonus-scam/) about an ongoing scam that abuses our brand and software. Please be aware our team will only reach out to you through our official channels. Here our team is clearly marked as contribs. We will never email you! We will never start a Telegram DM! Verify who you are talking to! 

To be sure you're talking to our team members, ALWAYS join our [official mattermost chat](https://chat.btcpayserver.org/) and verify if things are as they get proposed through other ways.

## 🫶 Donate via OpenSats

We're grateful that OpenSats partnered with us to help individuals donate to the BTCPay Server project. If you ever wondered how you could support BTCPay Server contributors without being a company, head on to [OpenSats](https://opensats.org/projects/btcpayserver) and feel free to throw a donation.

As OpenSats is a US Based public charity registered as a 501(c)(3), you can apply for a tax deduction on these donations. This wasn't previously possible, as BTCPay Server Foundation works differently. With the opportunity given by OpenSats, it's now possible to [donate](https://opensats.org/projects/btcpayserver) to BTCPay Server as an individual!

## 💚 Thank you

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 1.9.0 possible. 

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚




