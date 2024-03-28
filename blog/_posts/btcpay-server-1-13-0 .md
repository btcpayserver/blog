---
title: "BTCPay Server 1.13.0 - Easy user onboarding, admin store view, new store roles & keypad item mode"
date: 2024-03-28
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "pos"
coverImage: "/images/btcpay1-13-0-featured.png"
---

We're thrilled to announce the release of the new BTCPay Server version **1.13.0**! This major release introduces several brand-new features, improvements, bug fixes and stands ready for immediate usage!

## 🎉 Key features

In line with our mission to provide admins with enhanced flexibility and greater control over their instances, we've implemented several important features:

- Server branding & contact option
- View-only admin overview of all the stores on their instance
- Invite new users to the server via email or link 
- New store roles: Manager and Employee
- Brand-new items functionality for the keypad Point of Sale

Full changelog can be found [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.13.0).

### 🎨 Server Branding

![](/images/1-13-0ServerBrandingSettings.png)

In version 1.13.0, we're introducing enhancements designed to personalize the user interface for [ambassadors](https://blog.btcpayserver.org/bitcoin-2024-the-year-of-ambassadors/) and users who share their instance with others

Server owners can now apply **custom name** to their server. This functionality complements the previously added capability to upload custom logos, allowing for a branded user interface. 

![](/images/1-13-0ServerBrandingLogin.png)

Additionally, a new **contact input** feature allows you to specify an email or an URL. This will be displayed on publicly visible pages of your server and in the sidebar for server’s users, enabling them to easily contact you for support.  

### 🏪 Overview of stores

We've listened to your feedback! Understanding who is using your instance and how is crucial. To further enhance server owner flexibility, we’ve introduced the ability for owners to easily **overview the stores** created on their server. Currently, admins can access these stores in **view-only mode**.

![](/images/1-13-0-StoreOverview.png)

*In the next major version, we’re exploring the addition of an edit mode for server owners, and a view-only mode for server managers (potentially introducing a new role). Let us know what you think about it [here](https://github.com/btcpayserver/btcpayserver/discussions/5876).*

### 👥 Invite new users via email/link

We’ve redefined how users can be onboarded to a server. **Inviting users** to your BTCPay Server is now much easier. As a server owner, willing to onboard merchants, you can now invite them **through email or by sharing a link**. Instantly granting them access to their accounts.

![](/images/1-13-0-InviteUsers.png)

In addition to this, we’ve also added **approval for new accounts**. If you allow user registration on the server, you now have the ability approve new users before they start using your instance.

### 💁🏻 New store roles: Manager and Employee

This release introduces two new store roles: **Manager** and **Employee**. Alongside the existing Owner and Guest roles these roles are designed to streamline the management of user access to your store, making it easier than ever to delegate responsibilities while maintaining tighter access to private data. 

![](/images/1-13-0-StoreRoles.png)

*In an upcoming version we might remove the Guest role, because the new roles provide a better permission structure.*

Now, inviting users to join your store has become more straightforward — either via email or by sharing a link. You can assign them any predefined or custom role, and receive instant notifications once they accept your invitation. For needs that go beyond these roles, the flexibility of **custom roles** introduced in version [1.11.0](https://blog.btcpayserver.org/btcpay-server-1-10-0/#-custom-role-system) remains at your disposal.

### 🛍 Items list for keypad Point of Sale

Our point of sale system was recently [battle tested in Madeira](https://blog.btcpayserver.org/case-study-bitcoin-atlantis/). With a record of **8750 transactions** and over **2.02 bitcoin** processed during just 3 days, it allowed us to directly observe software used at scale. This resulted in several key enhancements in our point of sale app, based on real-world feedback. 

We’ve noticed that while most merchants preferred to have a simple keypad point of sale, some asked if there’s a way to have a product/items view. Additionally, those merchants wanted to have items on the receipt, so they could fulfill the order more efficiently. Based on this feedback, we’re introducing a brand-new, opt-in **item view into our keypad** point of sale.

The new mode allows merchants to navigate between a simple keypad and a more detailed product list.

![](/images/1-13-0-PosKeypadItems.gif)

Furthermore, we've refined the receipt printing, making receipts smaller, and introduced a feature to share the web point of sale with an external device via QR code, significantly streamlining the merchant onboarding process.

### 🤳🏻 Better Bitcoin QR Support
We’re trying our best to keep up to date with evolving standards in the Bitcoin ecosystem. This release adds support for [BBQr](https://bbqr.org), which is a new way of encoding bigger chunks of data and larger files into a series of QR codes.

## 🖇️ Integrations

We strongly believe that for Bitcoin to persist in its success and broaden the adoption, it’s imperative that it integrates into existing systems and workflows. That’s why e-commerce integrations are amongst our [priorities in 2024](https://blog.btcpayserver.org/bitcoin-2024-the-year-of-ambassadors/). Our integration team of contributors (Ndeet, BitcoinMitchell, Nisaba and 021) is proud to introduce three new e-commerce integrations:

- [nopCommerce](https://www.nopcommerce.com/en/btcpay-server-accept-bitcoin-payments)
- [GrandNode](https://grandnode.com/btcpay-server-accept-bitcoin-payments)
- [XenForo](https://github.com/btcpayserver/xenforo/releases)

Integrations are freely available on dedicated marketplaces for immediate usage. We’re inviting you to try them out and let us know in case you come across any bugs.

### 🚚 nopCommerce

NopCommece powers 60,000+ online stores and has been an established free and open-source CMS for 12+ years with a vibrant community and extensive marketplace. [Our plugin](https://www.nopcommerce.com/en/btcpay-server-accept-bitcoin-payments) allows you to instantly connect your BTCPay to your nopCommerce store and start accepting Bitcoin instantly. Check our [documentation](https://docs.btcpayserver.org/Nopcommerce/) to get started.

![](/images/1-13-0-NopCommerce.png)

### 🛍️ GrandNode

GrandNode is free and open-source e-commerce built on ASP.NET Core framework focused on high-performance and advanced capabilities for entire supply-chain management. The plugin can be downloaded through [GitHub](https://github.com/btcpayserver/nopcommerce). For more information, see our [documentation](https://docs.btcpayserver.org/Grandnode/).

![](/images/1-13-0-GrandNode.png)

### 💬 XenForo

XenForo is one of the world’s most popular forum software. Our new add-on allows server admins to connect BTCPay with XenForo through the payment profiles. This allows for a great flexibility as any purchase goes through this abstraction for payment processing. While the use-cases can vary, users can now accept Bitcoin for memberships, profile upgrades and more!  The add-on is available for download on [GitHub](https://github.com/btcpayserver/xenforo/releases), offering an easy path for forums to embrace Bitcoin payments and enhance their financial independence.

![](/images/1-13-0XenForo.png)

### ℹ Other integrations

- Some users using [Shopify plugin](https://docs.btcpayserver.org/Shopify/) are receiving emails about deprecated API calls, thus far these emails were all checked by the team, and our plugin is not impacted by these changes, so you can continue using Shopify with BTCPay Server normally. In case you notice a problem, let us know.
- [PrestaShop](https://docs.btcpayserver.org/PrestaShop/) plugin received a new update (Kudos BitcoinMitchell)
- There’s a new version of our [PHP Library](https://github.com/btcpayserver/btcpayserver-greenfield-php/releases/tag/v2.4.0) (shipped by Ndeet)
- WHMCS integration is now available on their [marketplace](https://marketplace.whmcs.com/product/7348-accept-bitcoin-payments-with-ease-and-no-fees-btcpay-server-for-whmcs)

## 🔌 Plugins

We’re continuing to see an increased interest of developers to build plugins for BTCPay Servers. After a successful [integration with Blink](https://www.blink.sv/en/btcpay-blink-plugin), allowing users to use lightning in a custodial way by outsourcing channel management to Blink, we’re happy to highlight two new plugins:

### 💶 Bringin

The new Bringin plugin developed by Kukks offers merchants located in the EU to automatically **exchange all or partially your incoming Bitcoin revenue to Euro**. Bitcoin funds accumulate on your Bitcoin wallet (lightning, onchain coming soon), which then get forwarded using a combination of BTCPay Server’s payouts and payout processors features when a threshold is reached and are exchanged to Euro. You can read more about this [here](https://l.kukks.tech/bringin).

### ⚡ Breez

While currently in beta, a new plugin by Kukks now offers Breez SDK powered by Blockstream Greenlight as a way to instantly **spin up a new lightning node for your stores with automated liquidity management** and very minimal burden on your server. You can read more about this [here](https://l.kukks.tech/breez).

### ⚠️ Breaking changes for some plugins 

Upon update, you may notice that certain plugins, incompatible with the current version of BTCPay Server, may automatically be disabled. Once updated to 1.13.0, BTCPay Server will let you know through notifications and you can update plugins for continued use.

## ❌ Deprecating custodian

We’ve decided to deprecate custodian experimental feature added in [1.9.0](https://blog.btcpayserver.org/btcpay-server-1-9-0/#-exchange-integration-via-plugins-) as an attempt to bring exchange integration to BTCPay Server. Custodian will be removed in our next major release, including the API calls. We're now working on a liner system based on the above mentioned Bringin plugin. If you’re depending on this experimental feature, let us know to help you during the migration process.

## 🚨 Beware of scammers!

Despite our numerous warnings in the past months, we’re still seeing that people are falling for a scam called [Bitcoin Bonus](https://blog.btcpayserver.org/bitcoin-bonus-scam/) or similar derivative, which is an ongoing scam that abuses our brand and software. Please be aware our team will only reach out to you through our official channels. To be sure you're talking to our team members, ALWAYS join our official mattermost chat and verify if things are as they get proposed through other ways. Pay attention to people sending you direct messages on Telegram. Our team members will never DM you first.

## 🫶 Support us

If you’re finding BTCPay Server useful, you can support us as an individual donor through our [OpenSats page](https://opensats.org/projects/btcpayserver).  If you're a corporate donor willing to provide more substantial support through contributors grants - reach out to BTCPay Foundation  through the [contact form](https://foundation.btcpayserver.org/index.html#membership).

## 💚 Thank you

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our community chat on [Mattermost](https://chat.btcpayserver.org/) or [Telegram](https://t.me/btcpayserver).

We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 1.13.0 possible:

dennisreimann, dstrukt, kukks, ndeet, nicolasdorier, nisaba, rockstardev and tchukwuleta.

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚