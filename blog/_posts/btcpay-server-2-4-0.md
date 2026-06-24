---
title: "BTCPay Server 2.4.0: Global Search, Passkeys, Multisig Setup, Wallet Permissions and POS Improvements"
date: 2026-06-23
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "2.4.0"
coverImage: "/images/btcpay-2-4-featured.png"
---

We are excited to announce the release of **BTCPay Server 2.4.0**! This release introduces a new global search bar, clearer navigation, passwordless passkey authentication, a guided multisig wallet setup flow, more granular wallet permissions, subscription improvements, Point of Sale tax controls, new Lightspeed and Jumpseller integrations, wallet transaction filters and a lot of other improvements.

For a complete list of changes, see the [full release notes](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.4.0).

## 🔑 Key Features

- New global search bar and navigation improvements
- New guided multisig wallet setup
- Loginless and passwordless passkey authentication
- Improved translation system and new language packs
- More granular wallet management permissions
- Subscription refunds and notification email improvements
- Point of Sale tax configuration for tips and tax-inclusive pricing
- New e-commerce and Point of Sale integrations
- Wallet transaction search and date filters
- Shopify plugin update required
- Lightning Network component updates

## 🔎 Global Search and Navigation

BTCPay Server keeps getting more powerful, but with that comes a familiar challenge: finding the exact page, setting, wallet, invoice or feature you need should not depend on remembering where everything lives.

That is especially true for users who are both **store operators** and **server administrators**. Store settings, account settings, server settings and plugin management all have different scopes, but they have historically competed for the same navigation space. In 2.4.0, we are continuing to clean this up.

Going forward, the left sidebar is becoming more focused on **store-level workflows**. User account settings, server settings and plugin management are moving into the top navigation area, creating a clearer separation between what belongs to your store and what belongs to your user account or server instance.

The new **global search bar** is the next step in that direction. Instead of clicking through multiple menus, you can search for what you need directly. You can search for pages, settings, wallets, invoices, addresses, transaction IDs, order IDs, plugin features and other common BTCPay objects.

For fast navigation, BTCPay can search known pages and settings instantly in the browser. When you search for something more specific, such as an invoice ID, order ID, Bitcoin address or Bitcoin transaction, BTCPay can ask the server and return matching results. You can also focus the search bar with `/` on your keyboard and start typing right away.

The goal is simple: if you know what you are looking for, BTCPay should help you get there quickly. We expect this area to keep improving as more features and plugins become searchable, and we are looking forward to hearing how it works in real usage.

## 🔐 Passkey Authentication

BTCPay Server 2.4.0 introduces **passkey authentication**, giving users a faster and safer way to sign in without typing a password.

With passkeys, you can log in using the same method you already use to unlock your device, such as Face ID, Touch ID, Windows Hello, Android biometrics or a hardware security key. Instead of remembering another password, your trusted device confirms that it is really you.

This makes signing in more convenient, but it also improves security. Passkeys cannot be guessed, reused across sites or phished in the same way as traditional passwords. For users managing payments, stores and server settings, reducing password exposure is a meaningful security improvement.

Passkeys work alongside existing login methods, so you can adopt them gradually. Users who prefer traditional login flows can continue using them, while those with modern devices and browsers can switch to a smoother passwordless experience.

## 🛡️ Guided Multisig Wallet Setup

The new guided multisig wallet setup helps store owners create a multisig wallet directly inside BTCPay Server without coordinating everything manually. You can start a setup, choose the signing policy, invite other store users to provide their signer keys, review generated addresses and create the wallet once all required signer keys have been collected.

Signer keys can be submitted manually or through BTCPay Server Vault, which makes the flow easier for teams using hardware wallets. BTCPay also shows multisig setups in progress on the dashboard and wallet list, so it is clear when a wallet is still waiting for participants.

Email notifications help everyone stay in sync during the process. Participants can be notified when their signer key is requested, when keys are submitted, when the wallet is created and when multisig transaction signatures are pending.

This is a major usability improvement for teams, organizations and businesses that want shared custody without relying on a third-party coordinator. BTCPay can now help coordinate the setup flow while keeping the signing model self-custodial.

## 🔑 Granular Wallet Permissions

As more businesses use BTCPay Server with teams, integrations and plugins, wallet permissions need to be precise. Not every user or API key should have the same level of wallet access.

BTCPay Server 2.4.0 adds more granular permissions for wallet management, making it easier to separate responsibilities. Viewing wallet data, creating transactions, signing transactions, broadcasting through BTCPay Server, and managing wallet settings can now be controlled more carefully.

The Greenfield API now follows the wallet permission model more closely as well, aligning API access with what users can do in the BTCPay interface. This gives store owners and server administrators better control when delegating wallet-related actions to team members, apps and external systems.

## 🔄 Subscription Improvements

Subscriptions were introduced in BTCPay Server 2.3.0 as a native way to manage recurring payments, memberships, recurring donations, SaaS access and server monetization. In 2.4.0, we are continuing to improve the practical day-to-day flows around them.

Store owners can now issue **credit refunds through Pull Payments**. This is useful when a customer has prepaid a subscription balance and needs part of that balance returned. Instead of handling the refund outside the subscription flow, merchants can use BTCPay's existing Pull Payments system to let the customer claim the refund directly.

Subscribers and customers can also manage their **notification email** in the subscription portal. This is a small but important usability improvement. The email address a customer uses for subscription reminders is not always the same one they used during checkout, and customers should be able to keep that information up to date without contacting the merchant.

These changes make subscriptions feel more complete as a real customer-management system, not just a billing schedule. Merchants get better tools for handling support cases, while customers get more control over how they receive important subscription updates.

## 🧾 Point of Sale Tax Improvements

BTCPay Server 2.4.0 adds configuration for **tax on tips**. Merchants can decide whether tips should be included in the taxable amount, helping restaurants, cafes and service businesses match the way they are required to handle taxes in their jurisdiction.

This release also adds support for configuring whether Point of Sale prices are **tax-inclusive or tax-exclusive**. Some merchants enter prices that already include tax. Others prefer to enter a base amount and have tax added on top. The keypad Point of Sale can now better support both workflows.

Together, these improvements make the Point of Sale app more practical for everyday in-person payments, especially for merchants who need cleaner receipts, more predictable totals and fewer manual accounting adjustments after checkout.

## 🌍 Improved Translation System and New Language Packs

BTCPay Server speaks more languages than ever, and 2.4.0 makes managing them far simpler.

A redesigned Translations page - The Translations page has been rebuilt so you can see every supported language at a glance and install a language pack with one click. Each language also shows its maintainer, making it clear who keeps it accurate.

Languages can now have a dedicated maintainer. Contributors can claim a language directly in the translator repository, giving the community a clear, low-barrier way to keep BTCPay Server accurate in their own language. Several languages already have maintainers, including French, Spanish, Portuguese (Brazil) & Serbian.

Language packs are now distributed through a manifest that BTCPay Server reads directly, so packs stay in sync as new strings are added across the app. For 2.4.0, every existing language pack was reviewed and refreshed against the current strings.

If you can help with a language we do not cover yet, or want to improve an existing one, contribute at the [translator repository](https://github.com/btcpayserver/btcpayserver-translator/issues).

## 🔍 Wallet Transaction Search and Filters

Wallet histories can grow quickly, especially for busy stores and long-running servers. In 2.4.0, wallet transactions get search and date filtering improvements that bring the wallet view closer to the experience already available in invoices and payment requests.

You can now search wallet transactions by transaction ID and related metadata, and use filters for labels, unlabeled transactions and incoming or outgoing direction. Date filters make it easier to review recent activity, narrow down a custom period or prepare exports for accounting.

The result is a wallet view that is easier to work with when you need to find a specific payment, investigate a transaction or export a filtered set of wallet activity.

## ⚡ Lightning Network Updates

BTCPay Server 2.4.0 also updates supported Lightning Network implementations:

- **LND** is updated from `v0.19.3-beta` to `v0.21.0-beta`
- **Core Lightning** is updated from `v25.05` to `v26.06.1`
- **phoenixd** is updated from `0.6.3` to `0.8.0`

These updates bring BTCPay Server in line with newer releases, but there is one important compatibility note: the newer CLN and LND versions do not work properly on BTCPay Server 2.3.9 because of deprecated routes that were still being used there. We recommend users using Lightning to update to BTCPay 2.4 to resolve any of these issues.

## 🛒 E-commerce and Point of Sale Integrations

BTCPay Server's reach continues to grow with two new integrations that bring Bitcoin payments to more merchants where they already sell.

### Shopify Plugin Update

If you are using [Shopify with BTCPay Server](https://docs.btcpayserver.org/ShopifyV2/), this release includes a breaking change for the Shopify integration. To continue operation after upgrading to BTCPay Server 2.4.0, you will need to update the Shopify plugin to the latest version.

### Lightspeed

The new Lightspeed integration lets merchants accept Bitcoin and Lightning payments directly at the Lightspeed Retail Point of Sale. For physical shops already running one of the most widely used retail POS systems, this means adding Bitcoin at the counter without changing how they operate, with funds settling straight to their own wallet.

### Jumpseller

The new Jumpseller integration brings the same to online stores. Merchants running a Jumpseller storefront can now accept Bitcoin through BTCPay Server. This extends BTCPay's e-commerce coverage to another established storefront platform and the merchants who rely on it.

## 🛠️ Other Improvements

As always, this release includes many smaller bug fixes, UI refinements and internal improvements that make BTCPay Server more stable for everyone.

Server administrators can now set the **maximum number of stores per user**, which is useful for hosted instances and community servers that need clearer resource limits. Admins using server monetization also get more control over whether invited users should subscribe to monetization during onboarding.

Developers and integrators get a separate `CanSendStoreEmail` permission for the store email API, making email-related access more explicit. The 403 page now shows missing permissions, which should make troubleshooting access issues easier for users, admins and plugin developers.

We also added a new **Bitcoin.co.ke** rate provider, updated Bylls branding to Bull Bitcoin in rate sources, fixed invalid Yadio rate handling, improved iOS behavior on Keypad Point of Sale item buttons, fixed invoice archiving with custom range filters, and removed the deprecated Shopify Scripts integration.

## 💚 Thank You

A huge thank you to everyone who contributed to BTCPay Server 2.4.0, including Abhijay007, bitcoinbrisbane, BuffaloDyl, BullishNode, NicolasDorier, sixside, Sup3rlativ3, TChukwuleta, teamssUTXO, thgO-O, Wiredancer and everyone who tested, reviewed, translated, reported issues or gave feedback.

Most of all, thank you for using BTCPay Server, sharing feedback, building plugins, running community instances and helping merchants accept Bitcoin on their own terms. Join the conversation in our community [channels](https://t.me/btcpayserver) and let us know what you would like to see next.

The BTCPay Server team 💚
