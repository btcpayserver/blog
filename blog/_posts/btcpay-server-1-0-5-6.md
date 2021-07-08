---
title: "BTCPay Server 1.0.5.6 is here!"
date: 2020-10-01
author: pavlenex
category:
  - "releases"
coverImage: "/images/BTCPay10506.png"
---

Today we're happy to announce the release of the BTCPay Server v 1.0.5.6.
The highlight of this version is the long-awaited Shopify support, along with other new features, improvements and bug-fixes.

## What's new in 1.0.5.6? 🆕

### Shopify Support 🛍️

On the 18th of January 2018, a user named **sysout** opened a notorious feature request titled "_Any idea about Shopify integration_? The "Wen Shopify" issue [#36](https://github.com/btcpayserver/btcpayserver/issues/36) has been haunting us ever since.

As a self-hosted software solution, it wasn't easy for us to get the integration working. Luckily, our friend [Rui Gomes](https://github.com/ruigomeseu) from [OpenNode](https://www.opennode.com/), pinpointed a work-around that was later implemented by community member [DJSeeds](https://github.com/djseeds), who on-boarded quite a few merchants, including [TFTC](https://tftc.io/merch/).

It took us a bit of time to brainstorm an ideal solution that could be built on top of the original idea, but at the same time also provide easier UX and improved functionality. This challenging task was manhandled by our two wizards, [r0ckstardev](https://github.com/rockstardev) and [Kukks](https://github.com/Kukks) and the end-result of their coding wizardry was, as always, pure magic.

As you may have guessed by now, starting with v1.0.5.6 you can now finally accept Bitcoin payments in your Shopify store via BTCPay Server!

If you own a Shopify store and would like to use BTCPay Server to accept payments, follow our official [Shopify Integration Guide.](http://docs.btcpayserver.org/Shopify/)

The video below showcases the workflow step by step.

https://youtu.be/0Z8vraKab64

### Simple Point Of Sale 🛒

It's been a while since our good ol' [mariodian](https://github.com/mariodian) appeared on the release-notes. For those of you who don't know, he implemented the [cool, advanced point of sale cart app](https://blog.btcpayserver.org/bitcoin-pos/) into the BTCPay Server. Mario re-appearing meant only one thing - the PoS app now has a new feature - the light view.

![](/images/BTCPaySimplePoS-1024x486.png)

The light-view option in the pos app allows you to have a minimal-looking keypad point of sale system enabling quick invoice creation on the go.

### Partial Invoice Refund 🧾

In [v1.0.5.0](https://blog.btcpayserver.org/btcpay-server-1-0-5-0/) we introduced invoice refunds, for easier payment management. Sometimes, a merchant needs to issue a refund for a portion of the order. Starting with this release, you will be able to issue partial refunds with a custom amount and currency of your choice.

![](/images/Screenshot-2020-09-30-at-10.49.34-1024x457.png)

![](/images/Screenshot-2020-09-30-at-10.49.51-1024x580.png)


### New labels for payment requests, apps and payouts 🏷️

As a part of our ongoing efforts of improving users privacy by providing better UTXO management, we now have new automatic labels for apps and payment requests.
This allows you to use the coin control feature with more clarity on the transaction origins and without having to label them manually.

![](/images/Screenshot-2020-09-30-at-10.54.00-1024x470.png)

### Fiat entry in wallet 💲

Quite a few of our community members requested to have a fiat denomination entry in the wallet so they can send funds to family and friends more easily. An additional field has been added in Wallet > Send tab to cater to that need.

![](/images/Screenshot-2020-09-30-at-10.57.03-1024x579.png)

### Invoice log severity 🚨

When you're dealing with payments, you probably want to have a clear look on the invoice log in case something goes wrong. Our invoice log section has been re-wrapped and now adds a clearer warning message in case of an error so that you can pinpoint the problem in no time.

![](/images/eyMO9M3-1024x361.png)

### Invoice API 🧑‍💻

We're very proud of the new API improvements. Today we're bringing you the new invoice API. Bear in mind it's still not fully complete and that we will finalize it in the next release. The current BitPay compatible invoice API will stay fully functional and will not be going away.

## Improvements and bug fixes 🐛

Besides the fresh features, this release brings in quite a lot of improvements

- Update PSBT and PSBT sent to Hardware wallet will include `non_witness_utxo` by default, when possible, to match Bitcoin Core 0.20.1 behavior.
- Adjust invoice badge styling
- Invoice notification email improvements
- Improvement of the UX flow for requesting an API Key of a BTCPay Server user
- Don't send notification email for expired invoices
- Greenfield API: Add `Roles` property to the user data.
- Remove Changelly integration
- Better wording in transaction list page
- Fix alerts text break.
- Remove Tor link from navbar
- Improve invoices list view
- Improve sync progress dialog
- Show index of payment address for on-chain payments

We've fixed several bugs in this release. You can take a look at which bugs have been squashed below.

- When an invoice is partially paid on-chain and allow off-chain, a new lightning network invoice should be created for the remainder of the payment.
- Changing the inventory of a PoS item was not working properly
- Greenfield API: The internal lightning API was returning error 403, even when used as an administrator
- Using lightning charge as lightning network invoice provider over HTTP was not working properly
- Fix: If the hot wallet failed to sign a PSBT, should not show a blank page crash
- Fix bug: The wallet was sending only round amount of sat per byte
- "Attempt MySql Fix"
- Fix HitBTC rate provider

For more details on the changes, please check our full changelog [here](https://github.com/btcpayserver/btcpayserver/blob/master/Changelog.md#1056).

## How to update?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay Server > Server Settings > Maintenance > _**Update**_. If you prefer CLI, you can update with `btcpay-update.sh`.

## Thank you to our contributors!

Huge thanks to all of you who’ve helped in making of the **v1.0.5.6**! We appreciate every single contribution and support.

[apotdevin](https://github.com/apotdevin)
[astupidmoose](https://github.com/astupidmoose)
[bolatovumar](https://github.com/bolatovumar)
[britttttk](https://github.com/britttttk)
[dennisreimann](https://github.com/dennisreimann)
[dspicher](https://github.com/dspicher)
[dstrukt](https://github.com/dstrukt)
[eskyee](https://github.com/eskyee/)
[kukks](https://github.com/kukks/)
[l33d4n](https://github.com/l33d4n/)
[maltokyo](https://github.com/maltokyo/)
[mariodian](https://github.com/mariodian/)
[mlkui](https://github.com/mlkui/)
[nicolasdorier](https://github.com/nicolasdorier/)
[pageman](https://github.com/pageman/)
[pavlenex](https://github.com/pavlenex/)
[rockstardev](https://github.com/rockstardev/)
[sotblad](https://github.com/sotblad/)
[xpayserver](https://github.com/xpayserver/)
[zaxounette](https://github.com/zaxounette/)

As always, if you face any issues or notice a bug, please join our [community chat](http://chat.btcpayserver.org/) and let us know. 💚
