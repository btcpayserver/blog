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

Plugins, plugins, plugins. We've been talking about them for few months now. But you've never really understood how they may be useful to you? Well, today we're releasing LNBank, a plugin that allows server admins to enable Lightning payments for their users. LNBank is_________.

<!-- We need to add LNBank photo and explanation once we're sure it'll be released -->

## Invoice states 🧾

In this version, you may notice that we renamed our invoice states:

- Paid, confirmed = Processing
- Complete = Settled

We did this so that our UI reflects the back-end better and reflects our actual invoice states in the new Greenfield API.

![](/images/1.4.0invoice-state.png)

## Greenfield API 🧑‍💻

Our Greenfield API, as usual, also gets a few additions and bug fixes in this update.

* Adds a `missingPermission` field to 403 errors, to make it easier to identify why users are getting this error
* Adds a field `StoreId` to the payment requests
* Users can now create payment requests through Greenfield without specifying a currency in which case the payment request currency will be set to the store's default currency
* Improves permission error messages of Greenfield API
* Removes redundant/unused parameters in payment methods
* Fixes a payment request creation failure when expiry was specified
* Fixes guests not being able to change payment methods when using the internal LN node
* Fixes `created` field in payment requests to be a UNIX timestamp
* Fixes `CanViewStoreSettings` permission to enable fetching a fee rate

### **System upgrades** 💻

In 1.4.0, BTCPay Server also upgrades some if it's backend utilities:

* Migrates from .NET 3.1 to .NET 6.0
* Can now use more modern C# 10.0 features instead of older constructs
* Cleans up 4 years of incremental changes, resulting in Class and Route renaming

### **Misc.**

1.4.0 also includes minor changes, bug fixes and improvements all around the product, for example:

* Supports new TLS version of the SMTP server
* Fixes sending two emails for each invoice expiry, payment of confirmation/completion

The full list of these minor changes can be viewed in the [Changelog](https://github.com/btcpayserver/btcpayserver/releases)

----

That's going to be all for highlights of this BTCPay Server 1.4.0 release!
It is now time for us to wish everyone the very best for the year 2022! 💚

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, we love you:

[@britttttk](https://github.com/britttttk) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@Kukks](https://github.com/kukks/) [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@ubolator](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey) [@Zaxounette](https://github.com/zaxounette)

The BTCPay Server team 💚
