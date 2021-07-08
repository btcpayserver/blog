---
title: "BTCPay 1.0.3.127 released - Fixing a vulnerability, introducing wallet labels, comments and more"
date: 2019-08-10
author: pavlenex
category: 
  - "features"
  - "releases"
coverImage: /images/1.0.3.127.jpg
---

Today, we're proud to announce another BTCPay Server release - **1.0.3.127**.

The new version introduces a novelty feature - wallet labels and comments, fixes several minor bugs, brings UI/UX improvements and most importantly patches a security vulnerability that affects third-party hosts.

Notice

If you're a [third-party BTCPay Server host](https://docs.btcpayserver.org/deployment/thirdpartyhosting) (User registration enabled in Server Settings > Policies) it's highly recommend that you [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) your BTCPay instance to the latest version.

We will post a full security vulnerability disclosure once we are sure enough time was given to third-party hosts to update.

## Wallet labels

The highlight of the release are wallet labels and comments. We've enhanced user experience in the [internal web wallet](https://docs.btcpayserver.org/features/wallet) by adding labeling option. Labels enables easier managmend, filtering and distiniqushing of the transactions in the wallet.

![](/images/Screen-Shot-2019-08-10-at-12.17.23-1024x378.png)

In the future, we plan to add smart labels, which will automatically be assigned based on a certain filter, order or an app id. Eventually, the labels will be implemented in the wallet sending, allowing users better control of their UTXO and bringing privacy enchancements.

### Wallet Comments

Sometimes, labels don't give enough context, so we've added custom comments for each outgoing or incoming transaction in the wallet. By clicking on the comment icon, each transaction now has an optional text field.

![](/images/Screen-Shot-2019-08-10-at-12.18.35.png)

## 1.0.3.127 Changelog

BTCPay community keeps growing. With each release the number of contributors increases. We're thankful to our contributors who continuously improve ensuring an open future for businesses and individuals regardless of geographic, political or financial barriers.

![](/images/Screen-Shot-2019-08-10-at-12.39.08.png)

If you're a new or an experienced developer willing to contribute to BTCPay, we're organizing free coding sessions this month, so join us on [our chat in #development](https://chat.btcpayserver.org/) channel.
