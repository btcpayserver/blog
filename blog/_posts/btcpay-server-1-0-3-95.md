---
title: "BTCPay Server 1.0.3.95 Released (Invoice improvements, U2F support, Bitcoin Full Node connect to mobile via QR code, external storage support and more!)"
date: 2019-05-07
author: pavlenex
category:
  - "releases"
coverImage: "/images/BTCPay-New-Version-1.0.3.95-.jpg"
---

We've been silent for a while, but with good reason. Today, we're releasing a big update to BTCPay Server, a brand-new release v 1.0.3.95.

Version 1.0.3.95 includes lots of new features, bug fixes and user-experience improvements.

![](/images/Screen-Shot-2019-05-07-at-11.20.22.png)

BTCPay Server version 1.0.3.95 includes lots of new features,improvements and bug fixes.

## Invoice list updates

During the [WeAreAllhodlonaut crowdfunding,](http://weareallhodlonaut.com/) we identified several UX/UI problems with our invoices page. This release includes notable changes which should help users with invoice management and interaction. The following changes should help users, especially those with a large volume of invoices in real time to manage their incoming invoices
easier and identify those that require further action.

- Responsive status change
- Color labeling invoice stat
- Quickly expandable invoice details
- Filtering by date

![](/images/BTCPay-Invoices-1024x552.gif)

Updates on the invoice page were coded by [@r0ckstardev.](https://twitter.com/r0ckstardev)

## U2F Support added

One of the oldest [issues](https://github.com/btcpayserver/btcpayserver/issues/53) we had on our GitHub, is now closed thanks to our contributor [@MrKukks](https://twitter.com/MrKukks). You can now enhance the security of your account by enabling **Universal 2nd Factor (U2F).**

U2F allows users to further enhance the security of their accounts by physically confirming the authentication via a U2F compatible device.

Please understand that U2F protocol is not supported by all browsers. We've [conducted tests](https://twitter.com/pavlenex/status/1121475933817528320) with several well-known U2F devices and compatible hardware wallets in Chrome, Firefox, and Opera.

![](/images/btcpay-U2F-testing-1024x741.jpg)

BTCPay U2F should work with any device that supports U2F. We stress-tested it on plenty of devices before releasing the feature.

To enable U2F on your BTCPay account, go to your account page and then the U2F tab, plug in your U2F device or a hardware wallet and press the appropriate button on your device when prompted. Ledger hardware wallet users need to [install U2F app](https://support.ledger.com/hc/en-us/articles/115005198545-FIDO-U2F) and make sure to open it to enable U2F.

Since U2F protocol is still hard for mobile devices, if you often access your BTCPay Server via a mobile device, we recommend that you have both 2FA and U2F enabled, so that you can log in with the most suitable option and avoid getting locked-out.

## External storage service support

We've listened to the feedback and implemented a storage services in BTCPay. You no longer have to add your images and files to imgur and other websites to show them in BTCPay.

![](/images/Screen-Shot-2019-05-07-at-12.02.37-1024x573.png)

You can also set up the temporary expirable links for files, which we plan to merge into our apps, so that content creators can sell music, images, and videos through BTCPay, without having to use a CMS like WordPress.

The most important future use-case for external storage service will be Lightning Network static channel backups and the backup of the entire BTCPay Server.

## Internal Wallet improvements

[Nicolas Dorier](https://twitter.com/NicolasDorier) continues to improve and refactor the [internal BTCPay wallet](https://docs.btcpayserver.org/features/wallet), which allows users to use hardware wallets with their full nodes for maximum privacy and security. Some of the changes are preparation for the Partially Signed Bitcoin Transaction ([PSBT](https://github.com/bitcoin/bitcoin/blob/master/doc/psbt.md#psbt-howto-for-bitcoin-core)) support that's coming very soon to BTCPay.

Changes to the wallet include:

- Full Node P2P support - Allows you to connect wallets that support new bitcoin-p2p links (Blockstream's [Green Wallet)](https://blockstream.com/2019/03/19/en-the-all-new-blockstream-green-wallet/) to your full BTCPay node if you're using Tor Hidden Service and avoid leaking information to third-party servers. To connect, enable Tor and scan the QR code from a supported mobile wallet.
- Wallet rescan: Remove limitation reserved for SegWit only (PSBT will come to rescue)
- Wallet transaction list: Can show either relative date or absolute date of transactions

## Various bug fixes and UX improvements

- Header menu: Use icons for profile / sign in and sign out instead of text. @NicolasDorier
- Fix: Coinswitch exchange with altcoins popup not showing bug fix @amitasaurus
- Fix: Store Email Password not saving @MrKukks
- Show warning on apps if emails settings are not complete @MrKukks
- Fix date time issues on crowdfund/payment requests @MrKukks
- Various grammar fixes @bitcoinbrisbane

## Known Issues

- Ledger Wallet not working on chrome. The fix is coming in the next Ledger App update soon.

## Thank you to our contributors

As always, we would like to thank to all of our contributors. The following people contributed to the either by coding, testing, documenting or providing useful feedback.

In alphabetical order:

- amitasaurus
- bitcoinbrisbane
- boblechinois
- britttttk
- MrKukks
- NicolasDorier
- Pavlenex
- r0ckstardev

We would like to thank all translators who continuously make BTCPay available worldwide by translating the software and content. Also, check the improvements on our new website made by [vswee](https://twitter.com/vswee).

Update your BTCPay to 1.0.3.95

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay > Server Settings > Maintenance > _**Update**_.
