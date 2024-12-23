---
title: "BTCPay Server 2.0: our biggest update yet!"
date: 2024-10-29
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "2.0"
coverImage: "/images/btcpay2-0-featured.png"
---

We are thrilled to announce the release of **BTCPay Server 2.0**, our most significant update since the project began in 2017!

This version is packed with new features, bug fixes, and crucial backend updates designed to set a solid foundation for the future and make BTCPay more powerful than ever before.

BTCPay Server 2.0 realigns the internal architecture with the lessons we’ve learned since 2017, positioning us to better support both plugin developers and ourselves as we implement new features. While it may not seem immediately obvious, we expect users to see the full potential of 2.0 in the upcoming months, as the ecosystem continues to thrive and build on top of it.

## 🔑 Key features

- New interface localization
- New sidebar-only navigation
- New onboarding flow for new users and Point Of Sale
- Three new e-commerce integrations (Wix, Odoo & BigCommerce)
- Checkout v2 default (removal of the legacy checkout)
- Branding enhancements

Full changelog can be found [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v2.0.0).

## ⚠️ 2.0 breaking changes

With BTCPay Server 2.0, we’re introducing breaking changes in our API that allow us to get rid of technical debt that accumulated over the years. While these changes are necessary to future-proof BTCPay and enable exciting new features, we understand that they may affect some users.

For most, the transition to 2.0 will be seamless, but if you rely on **custom integrations or plugins**, you will need to update them to ensure compatibility with our 2.0 API.

We’ve done our best to make this process as straightforward as possible, and we strongly recommend updating your integrations immediately after the BTCPay Server update. If you're unsure whether these changes will impact you, please check our [breaking changes documentation](https://github.com/btcpayserver/btcpayserver/issues/5964) for detailed guidance.

BTCPay Server started in 2017, and over the past seven years, we’ve learned a lot as a community. New protocols have emerged, and users have continuously requested new features. Throughout this journey, our main challenge in product development has been to move slowly and steadily, ensuring we avoid breaking changes for our users. Stability is critical because it allows merchants to focus on running their businesses without worrying about infrastructure or payment integrations.

Commitment to stability meant that BTCPay evolved organically, always maintaining backward compatibility. While this benefits users, it has placed increasing pressure on our developers and plugin creators, making it harder and slower to meet new expectations, a challenge known as the "technical debt tax"; that we will now eliminate.

During the transition from 1.0 to 2.0, larger instances may experience **a few minutes of database migration**. Once this initial migration is complete, BTCPay will be fully operational, though it will continue migrating some data in the background. For instance, some invoices may not immediately appear in reports or searches, but newer data is migrated first, so we expect minimal disruption.

As an example, our mainnet demo database, containing around 400,000 invoices, took one to two minutes to start and about 15-20 minutes to fully update all invoices in the background.

## 🔄 Updating to 2.0

:::warning
Update: As of December 23, 2024, users updating BTCPay Server will automatically migrate to version 2.0.
There's no need to manually git checkout the 2.0 branch anymore. Users on the 2.0 branch will be seamlessly transferred back to the master branch during their next [regular update](https://docs.btcpayserver.org/FAQ/ServerSettings/#how-to-update-btcpay-server).
:::

**Paragraph below is now outdated!**

*Updating to BTCPay Server 2.0 is a one-way process with no option for rolling back. Because of that, we're making it opt-in, requiring that you [SSH into your server](https://docs.btcpayserver.org/FAQ/ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps) and run:

```bash
cd $BTCPAY_BASE_DIRECTORY/btcpayserver-docker
git fetch -a
git checkout 2.0
./btcpay-update.sh
```*

Please note that the database migration might take a few minutes, depending on the size of your installation. Enjoy BTCPay 2.0 and [let us know your thoughts](https://github.com/btcpayserver/btcpayserver/discussions/6294)!

### ✔ Post-update checklist

- If your server **crashed** during the update (it shouldn’t, we’ve done extensive testing), please post server logs [here](https://github.com/btcpayserver/btcpayserver/discussions/6296), we will prioritize support for instances that experienced problems during migration
- If you use **plugins in BTCPay**, not all of them are 2.0 compatible yet. We automatically deactivate the incompatible plugins (communicate this to a plugin dev and kindly ask them to update their plugins, once they’re compatible you can update them)
- If you use **e-commerce integrations** (Woocommerce, Shopify, etc) update those plugins to their latest version in their dedicated stores as they ensure 2.0 compatibility
- If you’re a **developer** leveraging BTCPay’s Greenfield API, check our [breaking changes](https://github.com/btcpayserver/btcpayserver/issues/5964) to ensure 2.0 compatibility
- If you’re a **plugin developer**, make sure your plugins are 2.0 compatible. To start, bump plugin to 2.0 submodule and fix errors
- If you’re using **Translations**, report any missing strings [here](https://github.com/btcpayserver/btcpayserver/discussions/6295)

## 🌍 Interface localization

BTCPay 2.0 introduces a **full interface translation**. While customer-facing parts of the UI have been multilingual for some time, this update allows you to translate the entire BTCPay Server back office with ease. All translation strings are in a single text box, easy to copy over to AI tools like ChatGPT, making the process of translating strings and pasting them back super-easy. This gives you full control to localize your BTCPay Server in any language quickly and efficiently.

If you come across any missing strings, please report them [here](https://github.com/btcpayserver/btcpayserver/discussions/6295). We’ll continue to refine and complete all translations in the next few minor releases, and we’re adding several predefined languages to further enhance your experience.

![Interface localization](/images/2-0-Translation.png)

## 🧭 New sidebar navigation

In BTCPay Server 2.0, we have moved all navigation elements into a **unified sidebar**. This redesign ensures a clear information hierarchy and provides consistency when navigating different pages, allowing us to standardize all call-to-action buttons by keeping them prominently accessible at the top of the page.

We understand that navigational changes can be sensitive and may require an adjustment period. However, feedback from our early beta testers suggests that the new sidebar navigation improves efficiency once you become familiar with it.

![New sidebar navigation](/images/2-0-SidebarNav.png)

We value your input and invite you to share your thoughts on this new feature [here](https://github.com/btcpayserver/btcpayserver/discussions/6293).

## 🫂 Improved onboarding flow

As part of our [mission](https://blog.btcpayserver.org/bitcoin-2024-the-year-of-ambassadors/) to help ambassadors onboard local communities to BTCPay Server faster, we have enhanced the onboarding experience and added personalization features to user profiles. If you're hosting BTCPay for others, they can get up and running by scanning a QR code or clicking the link.

Additionally, users can now upload a profile photo and set a nickname for their accounts, adding a personal touch to the whole experience. We’re not adding these just for fun, we plan to leverage them in our upcoming BTCPay App.

## 🛍️ Point of sale QR onboarding

Our recent testing of BTCPay Point of Sale in [Riga](https://blog.btcpayserver.org/case-study-bhb24-nostriga/) and [Nashville](https://x.com/BtcpayServer/status/1816205569612804267) allowed us to dog food our own product and make further improvements. With 2.0 you can now even easier onboard existing users to the POS app, again just by scanning a QR from the point of sale. This allows ambassadors who onboard merchants to log in users instantly on POS devices.

![Point of sale QR onboarding](/images/2-0-POS-QR.gif)

## 🚀 Checkout 2.0 default

In 2.0 we’re discontinuing our legacy checkout page and our new checkout becomes the standard for all the stores. The 2.0 checkout has been battle-tested for a while now, and we’re fully confident it brings not only more functionality through features like NFC but also much better and tailored UX through our new branding options.

## 🎨 Backend branding

We believe branding your instance should give you the ability to customize the experience, with just the ability to select a color or a logo. And while this applies to all public-facing pages, such as checkout and payment requests for customers, we’ve now added an optional feature that allows you to apply your branding colors to the back office as well.

![Backend branding](/images/2-0-Branding.png)

## 🛒 New e-commerce integrations

Seamless integration into existing systems remains one of our top priorities, and we’re excited to introduce three new e-commerce integrations that expand the possibilities for merchants:

- **Wix**
- **Odoo**
- **BigCommerce**

These integrations offer enhanced flexibility and an easy way for businesses to adopt Bitcoin in their existing e-commerce stores.

### Wix

Wix is one of the world’s largest website-building platforms, powering over 200 million websites globally. Known for its ease of use and flexibility, Wix enables businesses of all sizes to create fully customizable websites, including e-commerce stores. With our new BTCPay integration, Wix users can now accept Bitcoin payments, offering their customers more payment options and expanding their reach to the growing Bitcoin economy. This integration is a game-changer for small to medium-sized businesses looking to embrace Bitcoin, bringing it into the mainstream for millions of merchants worldwide.

[![Wix Integration for BTCPay Server](https://img.youtube.com/vi/4b00htzxA7k/mqdefault.jpg)](https://www.youtube.com/watch?v=4b00htzxA7k)

Follow our [Wix setup guide](https://docs.btcpayserver.org/Wix/) to install it to your Wix store.

### Odoo

Odoo, an open-source business management software with a vast user base, is a comprehensive suite that covers everything from inventory management, point of sale to e-commerce. Our new plugin for Odoo versions [16](https://github.com/btcpayserver/odoo/blob/16.0/payment_btcpayserver/README.md) and [17](https://apps.odoo.com/apps/modules/17.0/payment_btcpayserver) allows you to easily connect BTCPay with your Odoo store, enabling Bitcoin payments with minimal setup. You can even use it for ticket sales or any other module using online payment methods. It’s even possible to use it in Odoo Point Of Sale (PoS) by enabling online payments there.

[![Odoo Integration for BTCPay Server](https://img.youtube.com/vi/DnASnEdegn4/mqdefault.jpg)](https://www.youtube.com/watch?v=DnASnEdegn4)

Get started by downloading the [plugin on GitHub](https://github.com/btcpayserver/odoo) and following our [Odoo documentation](https://docs.btcpayserver.org/Odoo/).

### BigCommerce

BigCommerce is a leading e-commerce platform designed for scalability and focused on enterprise-level merchants. We’re bringing Bitcoin payments to BigCommerce users with our latest integration.

[![BigCommerce Integration for BTCPay Server](https://img.youtube.com/vi/lSsk80P91Jo/mqdefault.jpg)](https://www.youtube.com/watch?v=lSsk80P91Jo)

To start accepting Bitcoin for your BigCommerce store, check our [documentation](https://docs.btcpayserver.org/BigCommerce/).

### Other integration updates

We’ve done extensive tests for all of our ecommerce integrations. Kudos to our integration expert **Ndeet** for conducting comprehensive hard field work, [testing](https://docs.google.com/spreadsheets/d/1nfrZhchAm7AIk1dTvSSnFvnHdJ8con8XvJQqQ29khA4/edit?gid=0#gid=0) each and every one of them.

**All of our official e-commerce integrations are 2.0 compatible.**

However, if you face issues with 2.0 and any official e-commerce integration, please [report it here](https://github.com/btcpayserver/btcpayserver/discussions/6300), and we’ll prioritize those reports. We continue to monitor feedback from the community and ensure existing integrations stay up-to-date.

If you're using our **Shopify** plugin, rest assured that it’s not impacted by recent API changes, and you can continue to use it without issues. We’re aware of Shopify discounting certain API calls at the end of this year, and we’re already working on shipping a brand new plugin before that happens.

Additionally, our **PrestaShop** plugin received a [new update](https://github.com/btcpayserver/prestashop-plugin/releases/), thanks to our contributor BitcoinMitchell, and the PHP Library has been updated to be [compatible with BTCPay 2.0](https://github.com/btcpayserver/btcpayserver-greenfield-php/releases) as well.

## 🔌 Plugins

If you use plugins with your BTCPay Server, you may notice that some are disabled following updates - we do this to prevent server crashes. If you rely heavily on plugins for your BTCPay operations, we recommend that you double-check compatibility and look for announcements from plugin developers regarding their support for version 2.0 before proceeding with the upgrade.

Plugin developers should update their submodules to 2.0 and fix any errors to ensure compatibility. Review the [example PR from Nicolas on Payroll plugin](https://github.com/rockstardev/BTCPayServerPlugins.RockstarDev/pull/45) or take a look at how [Boltz updated their plugin](https://github.com/BoltzExchange/boltz-btcpay-plugin/commit/326d13b7e600a81784b1c64cb7363b4566b1411a). After resolving issues and thoroughly testing their plugin, developers should publish an updated release on [plugin-builder.btcpayserver.org](https://plugin-builder.btcpayserver.org).

Currently, maintaining multiple versions of a plugin (for example, one branch for version 1.x and another for version 2.0) is not possible. If you need to publish updates, continue with the 1.x version and release new versions of the plugin until you reach a feature freeze. Once you've achieved this, you can update the submodule reference and release a new version of the plugin starting from 2.0.

We strongly urge all developers to prioritize upgrading to version 2.0.

### List of currently incompatible plugins

List of currently incompatible plugins, at the time of publishing this blog post, **all other plugins are 2.0 compatible**.

- BTCPayServer.Plugins.Strike (1.3.2.0)
- BTCPayServer.Plugins.B2PCentral (1.0.1.0)
- BTCPayServer.Plugins.Trocador (1.2.5.0)

## 💚 Thank you

With 2.0 we wanted to do all the hard work, most of which may be invisible, but it sets a great base on what we’re aiming to do in 2025. Keep an eye on the upcoming minor releases that we’ll ship if we notice any bugs. In the next few big releases we’re hoping to ship some of the most requested features that further enhance our mission.

Super-special shout out goes to our community testers, who went beyond and above testing the 2.0: decentralizedb, djuri, j7tx21 & stc786.

We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 2.0 possible: dennisreimann, dstrukt, jackstar12, kukks, ndeet, nicolasdorier, nisaba, pavlenex, rockstardev, tchukwuleta, and webworthy.

The BTCPay Server team 💚
