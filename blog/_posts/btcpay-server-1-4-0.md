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

At BTCPay Server, the year 2022 starts out with a bang!
We are today releasing **BTCPay Server version 1.4.0**. While this release has no code breaking changes, this update contains huge UI changes that may take some time to get used to, particularly for our power users and compagnies that may have high-volume instances running that requires staff to access their BTCPay Server. **We recommend those community members to spin up a fresh instance**, or to check out our [testing instance](https://chat.btcpayserver.org/btcpayserver/channels/testers) to get a feel of the massive UI changes that are included before updating their production instance.

**BTCPay Server 1.4.0** is a major update that includes multiple items ranging from our massive UI revamp, new features, updates to our [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/) and several bug fixes. We won't cover them all in this release post, but as usual, the high-time preference crowd can view the [full Changelog](https://github.com/btcpayserver/btcpayserver/releases) directly.

To update, simply navigate to your **Server Settings > Maintenance** tab and click **Update** or type *btcpay-update.sh* in the command line.

## **UI overhaul** 🎨

After six months of scoping, iterating, and nearly two months of implementation, tweaking, and testing, we are finally ready to move to the next chapter of the BTCPay Server book.
The goal behind these changes was to make the initial onboarding easier. This includes, better guidance during the store creation and wallet setup as easy as possible to the new users, while still enabling our power users to have easy access to the more advanced features available.

![BTCPay 1.4.0 Payment Methods view](/images/1.4.0_payment_methods.png)

Without going into too much details (that you can find in our fully transparent [roadmap](https://github.com/orgs/btcpayserver/projects/19)), this overhaul is but a step into getting plugins as well as centralized store and instance dashboards into BTCPay Server.
We hope you like these chages, and if you have any feedback feel free to reach out in our [community chat](https://chat.btcpayserver.org/), we'll be glad to have you.

### **Greenfield** 🔌

Our Greenfield API, as usual, also gets a few additions and bug fixes in this update.
Namely:
* Adds a `missingPermission` field to 403 errors, to make it easier to identfy why users are getting this error
* Adds a field `StoreId` to the payment requests
* Users can now create payment requests through Greenfield without specifying a currency in which case the payment request currency will be set to the store's default currency
* Improves permission error messages of Greenfidl API
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
* Changes the UI terminology for invoices to Processing/Settled, instead of Paid/Confirmed/Complete

The full list of these minor changes can be viewed in the [Changelog](https://github.com/btcpayserver/btcpayserver/releases)

----

That's going to be all for highlights of this BTCPay Server 1.4.0 release! 
It is now time for us to wish everyone the very best for the year 2022! 💚

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, we love you:

[@britttttk](https://github.com/britttttk) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@Kukks](https://github.com/kukks/) [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@ubolator](https://github.com/bolatovumar) [@woutersamaey](https://github.com/woutersamaey) [@Zaxounette](https://github.com/zaxounette)

The BTCPay Server team 💚
