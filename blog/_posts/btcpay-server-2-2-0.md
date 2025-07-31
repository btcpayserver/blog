---
title: "BTCPay Server 2.2.0: Enhanced Reporting, Public Plugin Builder, Miniscript Support, LSP Plugin & GiveWP Integration
"
date: 2025-07-31
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "2.2.0"
coverImage: "/images/2-2/btcpay2-2-featured.png"
---

We're excited to announce the release of [BTCPay Server 2.2.0](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.2.0). This major update improves accounting and coin management workflows, simplifies Lightning node management with the new LSP plugin, and brings significant enhancements to the plugin builder. It includes numerous performance and security bugfixes, and we plan for it to be the stable release upon which further updates will be built. We **strongly encourage you to update** as soon as possible to take advantage of all the improvements.

## **🚨Breaking Changes**

In this version, we've renamed and reordered columns in what was previously known as the Legacy Invoice Export (now simply called the Invoice Export). This change introduces clearer terminology and improved structure. We understand that it may affect existing automated workflows or integrations reliant on the old format. If you need to maintain compatibility, you can easily restore the legacy version by installing the [Legacy Invoice Export plugin](https://plugin-builder.btcpayserver.org/public/plugins/legacy-invoice-export). We encourage transitioning to the new export for its added benefits, but this option ensures a smooth upgrade path.

## **⭐Key Features**

* Reporting & accounting improvements  
* Bitcoin wallet improvements  
* Plugin Builder Improvements  
* LSP Plugin   
* NGU to BTC plugin  
* Miniscript Support  
* GiveWP integration

[![BTCPay 2.2.0](https://img.youtube.com/vi/bBkwVfELgjI/mqdefault.jpg)](https://www.youtube.com/watch?v=bBkwVfELgjI)

### **🧾 Reporting improvements**

Streamlining your accounting workflow was our focus in this release. We’ve redesigned several features from the grounds up, based on feedback we’ve received:

* **New Invoice Report:** The redesigned invoice report presents data in a clearer and more structured way.  
* It’s finally possible to see all **Invoice Metadata** associated with your invoices directly into the report. Whether you're capturing item codes from a point-of-sale, custom fields from [Forms](https://docs.btcpayserver.org/Forms/) (such as customer emails, product sizes, or variations), or any other complex data, it now appears as a dedicated column in the invoice report\!  
* **Transaction Fee and Rate.** The *Transaction Fee* column displays the cost of the transaction, while the *Rate* column shows the exchange rate at the time the transaction occurred. Both of these new columns are visible in the “Wallet report”.  
* **Automatic Exchange Rate Tracking for Transactions**: Exchange rates are now captured automatically when a transaction is detected. If the transaction is linked to an invoice, it uses the invoice's rate. Otherwise, it records the rate at the moment of receipt, ensuring precise historical data. Exchange rate details are now available in the wallet transaction list, wallet report and invoice report, providing a unified view that complements the new metadata exports.  
* **Multi-currency accounting**: In your store settings, you can now specify additional currencies (e.g., USD or GBP) to track alongside your store’s default. These rates will be included as extra columns in both invoice and wallet reports.  
* **Improved UI** allows easier access for different report types (Invoice, Payments, Payouts, Refunds, Sales, Wallet).

![2-0 Reporting](/images/2-2/2-0-reporting.gif)

### **🔨 Bitcoin wallet improvements**

Since our last major release, we've made significant strides in improving the Bitcoin wallet experience in BTCPay Server \- specifically around coin selection and address reservation.

**Coin selection** has long been a core feature, but with the latest updates, it's now optimized for speed and scalability. Even users managing thousands of UTXOs can quickly filter, sort, and select the exact coins they want to use for a transaction with minimal friction.

![2-0 Coin Selection](/images/2-2/2-0-coin-selection.gif)

Another major improvement is in **address reservation**. Previously, it was difficult to track which addresses were in use. Thanks to contributions from Thgoo, you can now clearly see addresses that have been labeled, along with when that happened. This is especially useful if you're managing a Bitcoin wallet as a team.

![2-0 Address Reserve](/images/2-2/2-0-reserved-addresses.gif)

Combined with the multisig signing features [highlighted in earlier blog posts](https://blog.btcpayserver.org/btcpay-server-2-1-0), these enhancements make BTCPay Server 2.2 a powerful tool for managing your Bitcoin. If you haven't already, we highly encourage you to try the built-in wallet - we think you'll find it useful!

### **🏪 Plugins**

Plugins remain central to our [roadmap](https://blog.btcpayserver.org/2024-year-in-review/#looking-ahead-to-2025). Aligned with the BTCPay Server 2.2.0 release, we're also finally releasing the public 1.0 of Plugin Builder.

![2-0 Plugin Builder](/images/2-2/2-0-plugin-builder.gif)

To view available BTCPay plugins, you'll be able to visit our [Plugin Builder website](https://plugin-builder.btcpayserver.org/public/plugins/) and explore what's offered:

To improve clarity and reduce confusion, we've made changes to how **plugins are displayed**.
When you now navigate to the Manage Plugins page of your BTCPay Server, by default, only high-quality, open-source plugins are shown. Specifically those that have been tested by many users, promoted publicly, and created by authors who have verified their contact emails. This helps users focus on well-maintained, production-ready options.

All other plugins are still available - just type their name into the search bar to find them.
If you're a plugin author and your plugin isn't showing by default (and you'd like it to be), please ensure source code for your plugin is available on GitHub and your Plugin Builder email + GitHub is verified. Then reach out to us on [chat.btcpayserver.org](http://chat.btcpayserver.org).

Thanks to contributions from [TChukwuleta](https://github.com/TChukwuleta) and [Thgoo](https://github.com/thgO-O), we now have an automated CI system to support ongoing development of the Plugin Builder. This provides the foundation for continued UI/UX improvements - especially now that each author can manage the public page of their plugins.

Besides this, there are notable changes in existing, and a few new plugins.

#### **⚡LSP Plugin**

The new LSPS1 plugin, developed by [Megalithic](https://megalithic.me) implements the client-side of the LSPS1 standard ([BLIP 51](https://github.com/lightning/blips/blob/master/blip-0051.md)) to help Lightning Network nodes acquire inbound channels quickly. It's meant for BTCPay users needing inbound capacity to receive payments. 

Plugin allows you to pick an LSP from the list of multiple LSPS1-compliant Lightning Service Providers (LSPs), choose a channel size and opt for public or private channels. 

![LSP Plugin](/images/2-2/lsps1-pljugin.gif)

The plugin currently supports the following providers. Any LSP that is BLIP51 compliant can contribute and add themselves to the list.

* [megalithic.me](https://megalithic.me/)  
* [olympusln.com](https://olympusln.com/)  
* [flashsats.xyz](https://flashsats.xyz/api-docs/index.html)

Check out the details on [GitHub](https://github.com/MegalithicBTC/BTCPayserver-LSPS1)

#### **🇳🇬 BTCPay Naira Payment** 

This [plugin](https://github.com/TChukwuleta/BTCPayServerPlugins/tree/1bbe97b20259fe4a81febfc2a067059f6847b727/Plugins/BTCPayServer.Plugins.NairaCheckout), built by [TChukwuleta](https://github.com/TChukwuleta), enables customers to pay merchants in Nigerian Naira (NGN) via bank transfer, while merchants receive Bitcoin, directly to their BTCPay lightning wallet. It helps merchants hedge against the inflation of the local currency. The plugin uses [MavaPay](https://mavapay.co) as the offramp service.

![Naira Plugin](/images/2-2/mavapay_plugin.gif)

#### **🕹️ Bitcoin Switch** 

Bitcoin switch, by [Kukks](https://github.com/Kukks), allows you to connect a BTCPay Server instance to the [Bitcoin Switch](https://bitcoinswitch.lnbits.com) hardware. 

#### **🔄 Plugin updates**

* [Satoshi ticket:](https://github.com/TChukwuleta/BTCPayServerPlugins/tree/e8374620621ff19155cab566e69726682fe5039c/Plugins/BTCPayServer.Plugins.SatoshiTickets) Added check-in functionality, including: Manual check-in QR code scanning check-in plugin UI and tickets improvements.   
* [BigCommerce](https://docs.btcpayserver.org/BigCommerce/): Now captures taxes and additional fees during payment.

### **🎁 GiveWP Integration**

[![GiveWP Bitcoin](https://img.youtube.com/vi/xpjyTJd47tA/mqdefault.jpg)](https://www.youtube.com/watch?v=xpjyTJd47tA)

Our new GiveWP integration allows **100 000+** GiveWP users to accept Bitcoin donations to their website, directly to their wallet, without fees. [GiveWP](https://givewp.com) is a top-rated donation plugin for WordPress, used by nonprofits and creators to raise money online.

Check out our [setup guide](https://docs.btcpayserver.org/GiveWP/) to get started.

## **🐛 Bug Fixes and Improvements**

This release also addresses several issues to improve stability and user experience:

* Fixed line break rendering in dropdowns using html-translate [(#6820](https://github.com/btcpayserver/btcpayserver/pull/6820) 
* Fixed timezone mismatch in receipts [#6832](https://github.com/btcpayserver/btcpayserver/pull/6832) [#6756](https://github.com/btcpayserver/btcpayserver/pull/6756)
* Fixed problem that plugin could not use types provided by another plugin. [#6851](https://github.com/btcpayserver/btcpayserver/pull/6851)   
* Fixed crowdfund number formatting for non-English locales [#6863](https://github.com/btcpayserver/btcpayserver/pull/6863) 
  Improved responsiveness and UX of the Reporting page [#6846](https://github.com/btcpayserver/btcpayserver/pull/6846)
* Added a "Reporting" button for easier access to reports from the invoice and wallet transactions lists [#6841](https://github.com/btcpayserver/btcpayserver/pull/6841) [#6835](https://github.com/btcpayserver/btcpayserver/pull/6835)

## **💚 Thank you**

We’re excited to share this update with you. Huge thanks to our contributors for making it possible, and to our supporters for helping keep BTCPay Server sustainable, free, and open-source.

Most of all, thank you for using BTCPay, sharing feedback, and spreading the word. Join the conversation in our community channels to share your feedback and ideas and help us keep improving.

The BTCPay Server team **💚**