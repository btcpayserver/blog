---
title: "BTCPay Server 2.3.0: Subscriptions, Server Monetization, Plugin Builder, Drupal 11 and EDD integrations"
date: 2025-12-18
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "2.3.0"
coverImage: "/images/btcpay-2-3-featured.png"
---

We’re releasing **BTCPay Server 2.3**, a major update introducing **subscriptions**, a long-awaited system for managing recurring payments, and **monetization**, a new feature built on top of it, that allows administrators to enable paid access to their BTCPay Server with a single click, making it possible for local Bitcoin community [champions](https://www.youtube.com/watch?v=NOeGlqefi-A) to sustainably support and onboard merchants while getting paid for the services they provide.

In addition, 2.3 delivers **Plugin Builder 1.0**, improving plugin discovery, reviews, verification, and release security processes, along with refinements to email rules, **14 new language packs**, **Easy Digital Downloads** and **Drupal 11** integrations. 

This version also includes bug fixes and smaller improvements. For a complete list of changes, see the [full release notes.](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.3)

## 🔄Subscriptions

[![Bitcoin Subscriptions](https://img.youtube.com/vi/CV5wckX7x80/mqdefault.jpg)](https://www.youtube.com/watch?v=CV5wckX7x80)

BTCPay Server 2.3 introduces **subscriptions**, a feature for anyone who sells products or services that renew over time. Whether you run a newsletter, a membership, a SaaS product, or accept recurring donations, you can now handle recurring payments natively inside BTCPay Server.

Recurring payments are easy in credit card based systems, a service can simply pull out funds out of customers account. Bitcoin operates differently, as a push mechanism that requires authorization (signature). There is no single, reliable way to automatically charge customers on a schedule, especially across multiple payment methods that we support. Instead of a traditional model, subscriptions are designed to be explicit and transparent, while still offering customers a smooth renewal experience.

Subscriptions adapt to how customers prefer to pay:

1. **Manual recurring payments**, where customers pay each billing period individually and receive reminders before the billing period expires.  
2. **Automatic recurring payments**, using a **credit balance model** where customers preload funds and the plan cost is deducted automatically at each billing interval.

Our subscriptions start with a simple structure. You create an **offering**, which represents what you sell, for example access to a newsletter. Under that offering, you define one or more **plans** such as Basic, Pro, or Enterprise. Plans let you set pricing, billing frequency, and access rules, and they give you a clean way to segment your users as your product grows.

Plans are flexible by design. You can choose how often they renew, from monthly billing to one time lifetime access. You can offer **trial periods** to onboard new users without immediate payment, and **grace periods** to avoid cutting off access the moment a renewal is missed. You can also control whether customers are allowed to upgrade or downgrade between plans.

Customers manage everything through a **subscription management portal**, a page where they can view their plan, top up their balance, upgrade or downgrade, and review their full payment history. On the merchant side, BTCPay Server includes subscriber management tools for suspending access, adding credits, or applying one off charges, making it easier to handle real world support cases.

If your server email is configured, subscriptions can also send **automated emails** based on subscription events. This includes things like payment reminders or expiration notices, helping customers stay subscribed without surprises.

Subscriptions are available starting with BTCPay Server 2.3 and are designed to scale from simple memberships to fully integrated SaaS products. If you want to explore the full setup, concepts, and API access, see the [documentation](https://docs.btcpayserver.org/subscriptions).

## 🤑Monetization

[![BTCPay Monetization](https://img.youtube.com/vi/THxH6jRrtgQ/mqdefault.jpg)](https://www.youtube.com/watch?v=THxH6jRrtgQ)

Built on top of the new Subscriptions system, **monetization**, is a feature designed for people who run BTCPay Server and allow other users to use it.

BTCPay Server has always been built to be shared. From the beginning, it was designed so a single instance could serve many merchants, not just one business. 

Over the years, this model has quietly worked at scale. Today, there are over **50 local community champions worldwide** running BTCPay Server for their regions, onboarding merchants, providing hands-on support, and growing local Bitcoin economies. Some instances already host **hundreds or even thousands of merchants** on a single server.

One prominent example is [Bitcoin Jungle,](https://blog.btcpayserver.org/case-study-bitcoin-jungle-cr/) a local Bitcoin circular economy in Costa Rica, which runs BTCPay Server to support its merchants. Their instance currently serves **over 700 merchants**. Another one is [Bitcoin Aruba](https://btcpay.btc.aw), providing service for hundreds of merchants worldwide.

Until now, many of these operators hosted BTCPay Server at their own expense, offering infrastructure, maintenance, and technical support for free or through informal arrangements. Monetization changes that.

With a single click, BTCPay Server admins can enable subscriptions for their own server and charge users a recurring monthly or yearly fee for access, support, or server usage, without ever taking custody of user funds. This makes it possible to sustainably run a BTCPay Server as a service, while staying fully aligned with Bitcoin’s self-custody principles.

Enabling monetization is simple. If you are running BTCPay Server 2.3, go to **Server Settings > Maintenance > Monetization** and activate it. BTCPay Server will automatically create a default subscription offering and plan, complete with a trial period and pre configured email notifications. New users who sign up to your server will be guided through a subscription checkout instead of a typical registration flow, and their ability to access the server will depend on their subscription status.

Monetization also works for existing server users. Admins can optionally **migrate existing non admin users** to the new subscription system if desired. From the user perspective, everything feels familiar. Users manage their subscription through the billing portal, receive renewal reminders, and can upgrade plans when required. If a subscription expires or is suspended, access to the server is automatically adjusted.

The current release focuses on periodic subscriptions, but it lays the foundation for more advanced models such as revenue based pricing and finer grained permissions. We are releasing monetization early because we want feedback from the people who will actually use it: local operators, educators, and community builders who are actively orange pilling merchants around the world.

If you are running BTCPay Server for others, this release is an invitation. Try monetization, charge for the value you provide, and help us shape it further.

## 🔌Plugin Builder 1.0

[![BTCPay Plugin Builder](https://img.youtube.com/vi/A9PEvJ9KAcY/mqdefault.jpg)](https://www.youtube.com/watch?v=A9PEvJ9KAcY)

After introducing the public plugin builder in [2.2](https://blog.btcpayserver.org/btcpay-server-2-2-0/), this release continues to improve what we believe is the backbone of BTCPay in the upcoming years - [plugin ecosystem](https://plugin-builder.btcpayserver.org/public/plugins). Plugin Builder 1.0 is now out.

At the center is a **ratings and reviews** feature. Verified users can leave star ratings, comments and version specific reviews, helping others understand how a plugin performs in practice and help build a network of trust around it. Reviews can be upvoted or downvoted so the most relevant feedback surfaces first, and reviewer profiles are visible to add accountability and context.

To support meaningful reputation, reviewers are required to complete **account verification** through GitHub or Nostr. GitHub verification uses a cryptographic proof flow, while Nostr supports both NIP-07 browser extensions and public note verification. 

**New sorting and filtering** make it easier to find what is new or what the community rates highly.

Each plugin has a dedicated **plugin page** that brings everything together. Users can review plugin details, see who maintains it, access official links such as source code repositories and social profiles, and read reviews before installing. The goal is to provide enough context to make informed decisions.

Plugin authors can associate a **GPG public key** with their account and publish cryptographically signed releases for their plugins.

Finally, **ownership management** has been expanded. Plugins now support primary and secondary owners, and primary ownership can be transferred. This makes collaboration, long term maintenance, and handover of plugins significantly easier.

These improvements make [the plugin ecosystem](https://plugin-builder.btcpayserver.org/public/plugins) easier, safer, and more sustainable to maintain as it continues to grow. Currently, there are over 35 plugins published by our community, with a dozen in beta testing.

## 📩Improved email rules

[![BTCPay Email Rules](https://img.youtube.com/vi/saDcbMohpac/mqdefault.jpg)](https://www.youtube.com/watch?v=saDcbMohpac)

Store email rules are now more flexible than ever. New conditions allow emails to be triggered based on specific events, enabling more customized workflows. Additional placeholders have been added, making more metadata available for use in email templates. CC and BCC fields are now also supported.

Server email rules now include several important preconfigured templates that can be easily customized. For example, password reset and welcome emails can now be tailored more easily to match your server’s communication needs.

:::warning
Changes to email rules in 2.3 may break older versions of some plugins (Vendor Pay, TicketTailor and legacy Subscription [plugin](https://github.com/Kukks/BTCPayServerPlugins/tree/master/Plugins/BTCPayServer.Plugins.Subscriptions)). While compatibility has been preserved where possible, any affected plugins will be **automatically disabled** after upgrading to 2.3. To continue using them, simply update the disabled plugins to the latest version. If you notice that any of your other plugins are affected, please inform the plugin author.
:::

## 💸Payment Requests redesigned

[![BTCPay Payment requests](https://img.youtube.com/vi/71n8sToTN2o/mqdefault.jpg)](https://www.youtube.com/watch?v=71n8sToTN2o)

As your Payment Requests grow beyond a handful of entries, reviewing revenue or finding specific requests becomes increasingly painful. In 2.3, we have significantly updated this part of BTCPay Server. Payment Requests now support labels, powerful search and filtering, and clear date-based organization - bringing them in line with other core payment flows like invoices and pull payments. Once categorized, you can generate a detailed report over a custom time range to understand revenue by payment method and category, turning payment requests into a proper financial overview instead of a flat list.

## 🌍14 new language packs

[![Language packs](https://img.youtube.com/vi/WKxcdVIDT04/mqdefault.jpg)](https://www.youtube.com/watch?v=WKxcdVIDT04)

With 2.3, server administrators can now download language packs submitted by the community and localize the entire server backend faster than before. There are 14 [languages available](https://github.com/btcpayserver/btcpayserver-translator/tree/main/translations) to choose from, and if your language is not listed, you can still translate it manually, or leverage AI and submit it so others can benefit from your work.

## 📥Easy Digital Download integration

[![EDD](https://img.youtube.com/vi/qAenGKJYM8I/mqdefault.jpg)](https://www.youtube.com/watch?v=qAenGKJYM8I)


We’ve often said that for Bitcoin to succeed, it needs to be integrated into as many applications as possible. BTCPay Server already supports integrations with over 30 popular e-commerce platforms, and this release expands that reach further.

Our friends at [CoinSnap](https://coinsnap.io) have added BTCPay Server compatibility to their **Easy Digital Downloads** plugin. Merchants selling digital products through WordPress and EDD can now accept Bitcoin directly into their own wallets, without intermediaries.

## 🛍️Drupal 11 integration

[![Drupal11](https://img.youtube.com/vi/qs5ESAIiyU4/mqdefault.jpg)](https://www.youtube.com/watch?v=qs5ESAIiyU4)

Drupal is one of the most widely used open source content management systems, powering **over a million websites worldwide**.

With this release, we have refactored the BTCPay Server Drupal Commerce integration to be **fully compatible with Drupal 11 and Drupal Commerce 3.x**. The plugin has also been updated to work with BTCPay Server’s [Greenfield AP](https://docs.btcpayserver.org/API/Greenfield/v1/)I, aligning it with our current integration standards and ensuring long-term maintainability.

## 💚Thank you

We’re excited to share this release with you. A huge thank you to our contributors for making it possible, and to our supporters for helping keep BTCPay Server sustainable, free, and open source.

Most of all, thank you for using BTCPay Server, sharing feedback, and spreading the word. Join the conversation in our community [channels](https://t.me/btcpayserver) to share your ideas and help shape what comes next.

The BTCPay Server team 💚