---
title: "BTCPay Server 1.0.5.4 is out!"
date: 2020-08-05
author: pavlenex
category:
  - "releases"
coverImage: "/images/v10050-1024x576-1.jpg"
---

Today, we released the new BTCPay Server - **[v1.0.5.4](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.5.4)**. This release introduces a new, default Bitcoin-only build, UX and UI improvements, fixes several bugs and two low-risk security vulnerabilities.

## 🆕What's new in v1.0.5.4?

### ⚒️ Bitcoin-only build

While Bitcoin has always been the focus of the project, we've allowed altcoin communities to integrate [altcoins](https://docs.btcpayserver.org/Development/Altcoins) and maintain them. In the beginning, the impact on the source code has been minimal.

However, people started requesting and adding cryptocurrencies with radically different designs such as: Monero, Liquid and recently [ETH/ERC20](https://github.com/btcpayserver/btcpayserver/pull/1730). Adding cryptocurrencies with different designs presents a risk that a bug in one of them may affect the stability of the entire software, even for people that don't enable them.

BTCPay Server now has **two separate builds.**

**The Bitcoin only** build and the **Altcoin build**. The Bitcoin build is the new _default_ and excludes every bit of code related to altcoins from the source code. The Altcoin build includes the source code of all altcoins integration. We discussed this with the contributor who is working on ETH support and they built the additional Bitcoin-only mode as part of their efforts.

We considered creating a separate BTCPay Server fork for altcoins and let each coin maintain their own fork. This strategy used by Electrum. But from experience, it means a fragmentation of the contributors and a decrease of overall quality of the software (some bugs are not fixed everywhere and some features are not available everywhere).

#### What does this mean for BTCPay Server users?

- If you don't have altcoins enabled, by default you'll be running the bitcoin only build, where no code related to altcoins is included.
- If you have altcoin(s) enabled, you'll be running the altcoin build.
- To disable the altcoin build, simply [remove altcoin(s)](https://docs.btcpayserver.org/FAQ/FAQ-Altcoin/#how-to-remove-a-coin-from-btcpay) from your setup and re-run it.
- When you switch from altcoin to bitcoin only build, all altcoin related payment data in the invoices will no longer be visible.
- If you are unsure whether or not to accept altcoins, we advise you to use Bitcoin only. It will decrease the attack surface, improve the stability, and decrease the resource consumption needed to operate your server.

### What does this mean for BTCPay Server developers?

- The `Debug` and `Release` configuration of BTCPay Server are Bitcoin only.
- The development time dependencies `BTCPayServer.Tests/docker-compose.yml` do not have any altcoin related images anymore.
- The default launch profile (`Bitcoin`) does not connect to any altcoin dependency anymore.
- Our CI is running all the tests on the `Altcoins-Release` build (it increases test coverage)
- If you are interested into altcoins support development, read [our documentation](https://docs.btcpayserver.org/Development/LocalDev/#local-development).

Since the CI tests are using the `Altcoins-Release` build, it is possible that your PR is working locally, but fails on CI.

- If the compilation fails, check if you can easily fix it.
- If a test fails, check if that's a real bug in your code. (activating altcoins may reveal bugs that also exists in the Bitcoin only build but were not exposed)
- If your PR revealed a bug in an altcoin, you can just deactivate the test, we will not ask you to fix it, nor we will refuse to merge your PR for this. We will notify the altcoin maintainer. (The person who created the PR for the integration of a particular altcoin)

### 👨‍💻Login page re-designed

Our login page has been re-designed once again for a sleeker look with less distractions.

![](/images/89307536-7f15b900-d671-11ea-9a3d-5dbcc539ee38-1024x506.png)

### ✔️Recovery phrase page

When generating a new wallet, we will now show the recovery phrase on a separate page with clearer instructions on what you have to do. The text will be different for hot wallet (where the private key remains on the server) and regular wallet where the key is wiped after you back it up.

![](/images/recoveryphrase-1024x502.png)

![](/images/89307301-36f69680-d671-11ea-8ddf-b091c7300d8f-1024x483.png)

### 🔔Multi-selection of invoices and notifications

You'll now receive a notification when a new version of BTCPay Server has been released (varies on deployment method).

With v1.0.5.4, it's possible to select multiple invoices and notifications and perform a batched action.

![](/images/invoices-1024x296.png)

![](/images/notifications-1-1024x237.png)

## 🐛Bug Fixes

- Fix: In the PoS app, embedded CSS was ignored
- Fix error when modifying user who does not have admin right
- Fix null instance on invoice when using paymentCurrencies
- Fix: Sluggish scrolling in pages having a rich text editor
- Fix: Crash in payment request if there is several invoice in "new" state
- Fix: Crowdfund app doesn't count old invoices

## 🔐Security fixes

In this release, we've fixed two security vulnerabilities, both properly disclosed by [benichmt1](https://github.com/benichmt1).

- Prevent script injection via X-Forwarded-For
- Prevent script injection via the csv invoice export

The full changelog is available [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.5.0).

## How to update?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay Server > Server Settings > Maintenance > _**Update**_. If you prefer CLI, you can update with `btcpay-update.sh`.

## BTCPay Server Foundation website

We've redone the design of the [BTCPay Server Foundation](http://foundation.btcpayserver.org/) website. It is now consistent and optimized according to our [design guidelines](https://design.btcpayserver.org/).

![](/images/foundation-website-1024x764.png)

## Thank you to our contributors

Huge thanks to all of you who’ve helped in making of the **v1.0.5.**4\. We appreciate every single contribution and support.

[benichmt1](https://github.com/benichmt1)
[bolatovumar](https://github.com/bolatovumar)
[britttttk](https://github.com/britttttk)
[dennisreimann](https://github.com/dennisreimann/)
[dstrukt](https://github.com/dstrukt)
[eskyee](https://github.com/eskyee/)
[kukks](https://github.com/kukks)
[msafi](https://github.com/msafi)
[nicolasdorier](https://github.com/nicolasdorier)
[rockstardev](https://github.com/rockstardev)
[xpayserver](https://github.com/xpayserver)

As always, if you face any issues or notice a bug, please join our [community chat](http://chat.btcpayserver.org/) and let us know.
