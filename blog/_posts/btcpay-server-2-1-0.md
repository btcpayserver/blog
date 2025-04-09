---
title: "BTCPay Server 2.1.0: New MultiSig, Fee Acceleration, 3 new integrations and more!"
date: 2025-04-08
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "2.0.1"
coverImage: "/images/btcpay2-1-featured.png"
---

# BTCPay 2.1.0

After five minor releases since our last [major](https://blog.btcpayserver.org/btcpay-server-2-0/) update, we are excited to announce the release of **BTCPay Server v2.1.0** 

This update brings in a redesigned interface for MultiSig wallets, removing ZCash and Monero from the core codebase and turning them into plugins, improved fee-acceleration capabilities and 3 new e-commerce integrations (Shopify V2, Ghost & ECWID).

## **Key features**

* Refined multisig support  
* New fee acceleration UI (RBF & CPFP)  
* ZEC and XMR moved to plugins  
* New e-commerce integrations (Shopify V2, Ghost, ECWID)  
* New Plugins (Cash Payment Method & Satoshi Tickets)

Full changelog can be found [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.1.0) 

### Refined MultiSig support 

[![MultiSig in BTCPay Server](https://img.youtube.com/vi/V95pLvVTAqM?/mqdefault.jpg)](https://www.youtube.com/watch?v=V95pLvVTAqM)

BTCPay Server has supported multisig wallets for a while, but version 2.1.0 brings a complete redesign of the user experience and introduces powerful new features aimed at improving security, collaboration, and flexibility. 

Here are the highlights: 

* **Collaborative custody**: Create wallets that require multiple signatures to authorize a transaction.  
* **Self-hosted multisig coordination**: Keep control of your company’s public keys and signing flow without relying on a third-party.  
* **Hardware wallet support**: Works seamlessly with the [BTCPay Vault](https://docs.btcpayserver.org/HardwareWalletIntegration/) and is compatible with majority hardware signing devices.   
* **Notification system**: Stay informed with email alerts when transactions are created, pending, (requiring sufficient amount of signatures), and broadcasted.  
* **Integration with plugins**: Works with Vendor Pay and future features, enabling multisig-based payouts. Integrates with Xpub Extractor, allowing all multisig participants to easily get appropriate format

Whether you're managing company funds, implementing shared custody, or simply want more control, the new multisig experience is built to scale with your needs.

For more details, [check the documentation](https://docs.btcpayserver.org/Multisig/).

### New fee acceleration UI and RBF support

We’ve made significant improvements to **fee acceleration**, a critical feature during high-fee environments and network congestion. You can now easily accelerate both incoming transactions through **Child-Pays-for-Parent (CPFP)** and outgoing transactions via **Replace-By-Fee (RBF)** without relying on external fee acceleration services that charge extra fees.

This enhancement is valuable in scenarios where customers pay invoices with wallets that incorrectly estimate fees. With CPFP, merchants can perform fee acceleration on behalf of the customer. On the other hand, RBF is useful for outgoing transactions, such as sending salaries to employees or making withdrawals to exchanges, where transactions may get stuck in the mempool, in some cases for weeks.

While RBF is applied per transaction, CPFP allows merchants to **batch multiple incoming transactions** and accelerate them all at once, resulting in cost savings. 

Check out the implementation [here](https://github.com/btcpayserver/btcpayserver/pull/6581).

[![Fee acceleration in BTCPay Server](https://img.youtube.com/vi/PW7Vtc3J3o0?/mqdefault.jpg)](https://www.youtube.com/watch?v=PW7Vtc3J3o0)

### **Pluginizing ZCash and Monero**

A major motivation behind [BTCPay Server 2.0](https://blog.btcpayserver.org/btcpay-server-2-0/) was to make the codebase more extensible, allowing various payment method integrations to be maintained as separate repositories by different contributors. To streamline the codebase, version 2.1.0 **removes native support for ZCash and Monero, transitioning them to plugins**.

Merchants who previously used ZEC or XMR will be prompted to install the relevant plugins after upgrading to 2.1.0. These plugins maintain feature parity with previous core integrations, **ensuring compatibility** while allowing independent maintenance and updates from now on.

Modularization of the payment method support is another step towards having a leaner BTCPay core codebase, while altcoin and other external features can evolve independently under the supervision of their own maintainers. 
This approach prevents unmaintained code from lingering in the core and removes BTCPay developers as a bottleneck for external feature development. It’s a win-win for both the core development team and the outside collaborators and altcoin communities. Learn more about this change [here](https://github.com/btcpayserver/btcpayserver/pull/6535).

Looking ahead, this plugin-based architecture paves the way for integrating new payment methods such as Cashu, Stripe, and anything else we can imagine, all independently developed through an opt-in plugin system.

### **New Integrations**

Integrations are a cornerstone of our [mission](https://blog.btcpayserver.org/2024-year-in-review/) to seamlessly incorporate Bitcoin into everyday merchant operations. By connecting with leading e-commerce platforms and services, we aim to empower merchants' adoption.   
The latest release introduces several new integrations designed to accelerate Bitcoin as a medium of exchange.

#### Shopify V2

[![Shopify Integration for BTCPay Server](https://img.youtube.com/vi/CtOCxBiN0pY?/mqdefault.jpg)](https://www.youtube.com/watch?v=CtOCxBiN0pY)

​The launch of [Shopify V2](https://docs.btcpayserver.org/ShopifyV2/) integration is an overhaul of the previous Shopify plugin. The new version ensures compatibility with Shopify's upcoming API changes, which will affect all users by **August 2025**. Notably, the V1 integration ceased functioning for new merchants on **December 31, 2024**, and existing users should migrate to V2 before the August deadline to maintain seamless operations.​

Shopify stands as a leading e-commerce platform, powering over **4.6 million live websites** globally. With approximately **2.1 million daily active merchants**. 

**Shopify V2 plugin** is now available to all users and has been thoroughly beta-tested to ensure compatibility and reliability. We encourage merchants to transition promptly to avoid disruptions caused by the upcoming API changes. While the plugin is ready for use, we invite merchants to give it a try and provide feedback to help us improve the integration further. Detailed documentation can be found [here](https://docs.btcpayserver.org/ShopifyV2/).

#### Ghost 

[![Ghost Blog Integration for BTCPay Server](https://img.youtube.com/vi/L61fs3gzXOw?/mqdefault.jpg)](https://www.youtube.com/watch?v=L61fs3gzXOw)

​Ghost is a modern, open-source publishing platform designed for professional publishing, with over **100 million installs to date**. Our new integration, enables content creators and publishers to seamlessly accept Bitcoin payments including:​

* **Donations:** Enable readers to support your work directly through Bitcoin contributions.​  
* **Paywalled Content:** Restrict access to premium articles, or other content, unlocking it via Bitcoin payments.​  
* **Memberships:** Offer content to members and subscribers across various tiers, with Bitcoin as a payment option.​

#### ECWID

The new **Ecwid integration**, allows merchants on this versatile e-commerce platform to seamlessly accept Bitcoin payments. Ecwid is known for its powerful **social media integrations**, enabling merchants to easily sell across platforms like Facebook, Instagram, and TikTok directly from their store. With over **665,000 live websites** using Ecwid, this integration potentially unlocks Bitcoin adoption for a broad user base.

[![ECWID Integration for BTCPay Server](https://img.youtube.com/vi/5NOJBnQjsLc?/mqdefault.jpg)](https://www.youtube.com/watch?v=5NOJBnQjsLc)

### Removing Watch-Only wallet creation by default

To minimize user risks, v2.1.0 disables watch-only wallet creation for non-admin users by default. This decision addresses cases where users lost access to funds by failing to back up their seed phrases. Server administrators can still enable this feature, but users are encouraged to create watch-only wallets externally and connect them to BTCPay instead. This default behavior reduces support cases related to lost funds, promoting safer wallet management practices. Users who already have watch-only wallets, remain unaffected, as this feature only activates for new users.mFind more details [here](https://github.com/btcpayserver/btcpayserver/pull/6626).

### Plugin store improvements

Our plugin ecosystem is a cornerstone of our long-term vision, and we remain committed to improving the infrastructure around plugins while supporting developers in building innovative features.

Over the past quarter, we introduced enhancements to the Plugin Builder’s administration, giving admins better tools to manage published plugins. These improvements lay the foundation for a smoother plugin release experience, which will continue to evolve in upcoming updates.

As a first step toward strengthening the integrity and security of published plugins, we’ve introduced **email verification as a requirement before publishing**. Please note that this will be mandatory for all future plugin versions published on [https://plugin-builder.btcpayserver.org](https://plugin-builder.btcpayserver.org).

The next step in this effort is GitHub account verification. While available today, it remains optional for now. In future versions, it will become a requirement. This phased rollout allows us to improve plugin authenticity without disrupting developer workflows.

The next release of Plugin Builder will also include improvements to author verification, further streamlining the plugin publishing process and enhancing overall trust. We’re additionally working on **Featured Plugins**, which will highlight widely used and trusted plugins from reputable authors to help users discover the most reliable tools available.

### Plugin Updates

As part of our ongoing efforts to improve the plugin ecosystem, we're excited to highlight several new plugins and important updates to widely-used ones:

* **Cash Checkout** – Adds a cash payment option to the checkout, ideal for physical merchants using the BTCPay POS app.  
* [**Satoshi Tickets**](https://github.com/TChukwuleta/BTCPayServerPlugins/tree/main/Plugins/BTCPayServer.Plugins.SimpleTicketSales) – Event organizers, conference hosts, and community managers can now create and manage events directly from their BTCPay Server instance, with built-in ticketing.  
* [**Vendor Pay**](https://x.com/r0ckstardev/status/1780741047523381631) – Formerly known as Payroll, this plugin has been renamed to better reflect its purpose. Recent improvements include: email flows for invoice reminders and payment confirmations, support for multiple invoice/receipt uploads, new settings, improved CSV exports, and more.  
* [**Xpub Extractor**](https://x.com/r0ckstardev/status/1899891677646774653) – A utility for easily extracting xpubs from hardware wallets via BTCPay Vault. Especially useful for multisig setups.  
* **TicketTailor** – A new version of the plugin has been released to address a breaking API change that previously misrepresented ticket prices.  
* **CoinJoin** & **Nostr** Plugins – Minor updates focused on bug fixes and overall stability.

## Thank you

We hope you enjoy everything this update brings. As always, our deepest thanks go to the invaluable contributors who made this release possible. We are also grateful to our supporters whose financial and strategic backing helps keep BTCPay Server sustainable, free, and open-source, and brings us closer to our mission of enabling financial sovereignty through freedom payment infrastructure. And finally, thank you - for using BTCPay, sharing your feedback, and helping us grow by spreading the word.

The BTCPay Server team 💚