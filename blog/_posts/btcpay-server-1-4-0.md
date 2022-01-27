---
title: "BTCPay Server 1.4.0 - The Year of Change"
date: 2022-01-27
author: Zaxounette
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "ui-ux"
  - "greenfield"
  - "api"
  - "update"
coverImage: "/images/BTCPayServer1.4.0.png"
---

At BTCPay Server, the year 2022 starts with a bang!
We are today releasing **BTCPay Server version 1.4.0**. This release is our biggest UX improvement in four years, and it will change the way you are onboarded and navigating BTCPay.

**BTCPay Server 1.4.0** is a major update that includes multiple items ranging from our massive UI revamp, new features, updates to our [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/) and several bug fixes. We won't cover them all in this release post, but the high-time preference crowd can view the [full Changelog](https://github.com/btcpayserver/btcpayserver/releases) directly.

To update, simply navigate to your **Server Settings > Maintenance** tab and click **Update** or type *btcpay-update.sh* in the command line.

## Easier onboarding 🎨

After six months of scoping, iterating, and nearly two months of implementation, tweaking, and testing, we are finally ready to move to the next chapter of the BTCPay Server book!

The goal behind these changes was to make the initial onboarding smoother. This includes better guidance during the store creation and wallet setup as accessible as possible to the new users while still enabling our power users to access the more advanced features available easily.

Starting 1.4.0, when you create a new store, you'll be greeted with a dashboard setup wizard indicating the required steps.

![](/images/1.4.0-Store-creation.png)

## New navigation 🏪

Since its first release in 2017, the `Store` has always been at the center of attention. However, our user interface never really reflected that. With this release, we're finally making sure that our front-end reflects the code in the back end.

![](/images/1.4.0-SidebarNav.png)

We've added a sidebar and a store-centered experience to ensure your productive navigation. Managing multiple stores is now easier with a switch button. In the future releases, we plan to add up better store reporting for all the stores you're managing.

These changes may be a bit disruptive at first, but we've been user-testing them for quite a while now. That said, we value your feedback, so please feel free to reach out to us on our chat if something isn't smooth or you have a question.

## Logging in improvements 🔐

Two new features have been added to improve the logging in security and experience:
- LNURL-Auth
- Login via code

### Two-step Lightning authentication ⚡

For quite a while, we've supported two-step authentication with hardware devices. Thanks to the LNURL-Auth integration protocol, you can authenticate with your Lightning wallet supporting LNURL-Auth. Select LNURL-Auth and scan the QR code presented with a supporting wallet to begin using the feature. Next time you log in, you'll be presented with a QR to scan in order to authenticate.

![](/images/1.4.0-lnurl-auth.png)

### Login codes 📱

We noticed that some of you use BTCPay across multiple devices. Imagine that you're on a desktop processing your invoices, but then you'd like to switch to your phone quickly so that you can issue a refund while you're checking on your dinner progress. Now you can easily switch to a different device just by scanning a generated QR code, and there's no need to authenticate.

![](/images/1.4.0-login-codes.png)

## Plugins 🔌

Plugins, plugins, plugins. We've been talking about them for few months now. But you've never really understood how they may be useful to you?

Today we're releasing LNBank, a plugin developed by [d11n](https://twitter.com/_d11n_) that allows server admins to enable Lightning payments for their users.

LNBank is a custodial L3 solution which gives server's users a lightning wallet within their store.

![](/images/1.4.0-lnbank.png)

Third party hosts should note that unlike enabling on-chain, this one is fully custodial and may bear security and legal risk of being a custodian, so enable on your risk.

Users of a third-party hosted server, should, for best security withdraw funds to an external wallet where they control the keys regularly.

## Invoice states 🧾

In this version, you may notice that we renamed our invoice states:

- Paid, confirmed = Processing
- Complete = Settled

We did this so that our UI reflects the back-end better and reflects our actual invoice states in the new Greenfield API.

![](/images/1.4.0invoice-state.png)

## Geeky improvements 🧑‍💻

Our Greenfield API got a few new additions and bug fixes in this update. We've migrated from .NET 3.1 to .NET 6.0 and are now using modern C# 10.0 features instead of older constructs. This release cleans up a four year old code with incremental changes, resulting in class and route renaming.


The full list of these minor changes can be viewed in the [Changelog](https://github.com/btcpayserver/btcpayserver/releases)

----

That's going to be all for highlights of this BTCPay Server 1.4.0 release!
It is now time for us to wish everyone the very best for the year 2022! 💚

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, we love you:

[@britttttk](https://github.com/britttttk) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@Kukks](https://github.com/kukks/) [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/)[@rockstardev](https://github.com/rockstardev/) [@Satwoo](https://github.com/satwo)[@ubolator](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey) [@Zaxounette](https://github.com/zaxounette)

The BTCPay Server team 💚
