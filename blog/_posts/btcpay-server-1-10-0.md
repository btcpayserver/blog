---
title: "BTCPay Server 1.10.0 - Formbuilder UI, custom Roles and a lurking wife mode!?"
date: 2023-06-01
author: Bas
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "Forms"
  - "LNBank"
  - "Roles"
coverImage: "/images/BTCPayServer-1-10-thumbnail.png"
---

# BTCPay Server release 1.10.0

We are introducing the highly anticipated major release of BTCPay Server: version 1.10.0! After weeks of dedicated effort, we are thrilled to unveil a host of exciting enhancements and improvements.

Our team has been working to address any outstanding issues, resulting in enhancements and bug fixes but also an array of new features -  the new store role management system and the introduction of the hide sensitive information button, which allows you to effortlessly hide private information from prying eyes. Most notably, we are thrilled to present the fully refined user interface of the form builder!

## 🧾 New Form Builder Drag and Drop UI!

Ever since we’ve [introduced](https://blog.btcpayserver.org/btcpay-server-1-8-0/) custom forms, which allow you to collect various customer information during the checkout so you can process orders in a more personalized manner, we’ve been hearing your feedback around the complexity of using them. 

In this release, we’re introducing a drag-and-drop form builder UI, enabling you to design customizable forms to your liking.

Why tell you about the drag-and-drop form builder when we can show it? 
In this custom form, let’s use the restaurant use case as an example again. In Store Settings -> Forms -> Click on “Create a new form.” When creating a new form, we always start with a default blank field. Set the field values on the right side of the form builder. Once you’ve set it, we can click “Add new element” at the bottom of your first, for the second field, and so on. 

![BTCPay Server custom forms example](/images/BTCPayServerForms.gif)

Did you get to play around with forms already? Please share your experience with us on [Twitter](https://twitter.com/BtcpayServer/), [Nostr](https://snort.social/p/npub155m2k8ml8sqn8w4dhh689vdv0t2twa8dgvkpnzfggxf4wfughjsq2cdcvg) or come join [our Mattermost chat](https://chat.btcpayserver.org/)! We’d love to hear from you! For more details on form builder, check our [documentation](https://docs.btcpayserver.org/Forms/).

## 🔒 Custom role system 

Are you currently operating a store with a team of employees? If the existing guest and admin roles haven't quite met your requirements, we have some exciting news for you. v1.10.0 ships with a brand-new Custom Role management system.

This upgrade empowers you to tailor roles to your exact needs, granting your staff access to specific permissions within your store. Whether you need roles for cashiers, administrative personnel, or order pickers in your warehouse, you can now effortlessly create as many custom roles as necessary, streamlining and optimising your store's operations.

![BTCPay Server custom roles](/images/BTCPayServerHide.gif)

## 🥷 Hide sensitive information

If you ever opened your BTCPay in a coffee shop or a coworking space we’re sure you were nervous to not accidentally reveal your wallet balance or invoice amounts. The new privacy-enhancing feature within your Account Settings will allow you to conveniently hide such information from prying eyes. 

To try it out, click on your Account in the sidebar’s bottom left > Toggle "Hide Sensitive Information" to ON, all value fields will be hidden. From Dashboard to every field in an invoice, none are displayed with value; all are masked.

![BTCPay Server Hide sensitive info](/images/BTCPayServerHiden.gif)

## 📝 Improved Invoice filtering.

Does your invoice page look daunting? We recognize that it’s hard to do proper filtering on your invoices. While we made big changes to adding custom tags, we still left behind the improvements on the filtering, no longer tho! In this release, we rehauled the invoice filtering, now you can set proper filters and find those invoices you specifically were looking for. 

![BTCPay Server Hide invoice filter](/images/BTCPayServerInvoiceFilter.gif)


## 📒 Plugin updates

Every Major release comes with many improvements and upgrades on Plugins. As the plugin system is being built out longer and crazier every time, this release cycle saw great improvements in LNBank, Nostr, and even a new one in Auto-forward payments. 

### LNBank 

Together with the new BTCPay Server version, [LNbank v1.6](https://github.com/dennisreimann/btcpayserver-plugin-lnbank/blob/master/CHANGELOG.md) releases which incorporates the new "Hide Sensitive Info" setting and adds wallet balance graphs. A better admin overview of LNBank Wallets, what’s the current balance of those who use LNBank on your BTCPay Server instance. Users will now be warned when LNBank liabilities exceed the Lightning Node’s balance, API Access to LNBank wallets and LNURL Withdraw support has been added, which allows configurable LNURL withdrawal access per wallet. 

![BTCPay Server custom roles](/images/BTCPayServerRoles.gif)

### Nostr plugin 

Some extra purple love this release, Nostr plugin has gotten an update along with v1.10.0. If you've installed the Nostr plugin, from now on, all created LNaddresses on BTCPay Server will allow for Nostr use with no extra configuration! Furthermore, the plugin has been optimized for performance enhancement and stability. 

### Auto-forward Payments

Auto-forward Payments are meant to redirect payments to another address automatically. When a new invoice is settled, a payout will be automatically created for it, and when using the Payout processor, these will automatically complete the created payouts. A dashboard view is available to check the status of any redirected payment. Only BTC OnChain payments are currently supported! For further details on the plugin, please check the help section within the plugin!

## 📚 General quality of life improvements

### Point of Sale and Crowdfund settings move from YAML to JSON

A bunch of smaller but impactful quality-of-life improvements in this release. Let’s start with a change to the Point of Sale and Crowdfund app settings; these used to be saved in YAML format; this release ports these over to JSON format. Have you saved your Point of Sale items list by code? Copy the code from your BTCPay Server again and make a new backup! 

### Creating your first store

Before, we used to have a fairly unclean look to our initial server setup. We’ve touched this up by directly opening up with the first store creation wizard. 

### Improved refund flow

We’ve gone back once more to the refund flow. There was feedback regarding overpaid invoices. From release 1.10.0, selecting overpaid in the refund flow is possible. This will generate a refund based on only the overpaid amount. 


## 🪲 Bugs squashing spree

Bugs, not to be eaten but to be squashed. As usual, we’ve hit a ton of bug fixes between 1.9.0 and 1.10.0; we’ve also included a small list of fixes in this major release. Let’s sum them up. 

- When using LNbank, payments would sometimes not be detected by BTCPay Server.
- When the store’s default currency is SATS, the display on the Dashboard was broken.

## 🚨 Beware of scammers!

We posted a [blog last month](https://blog.btcpayserver.org/bitcoin-bonus-scam/) about an ongoing scam that abuses our brand and software. Please be aware our team will only reach out to you through our official channels. Here our team is clearly marked as contribs. We will never email you! We will never start a Telegram DM! Verify who you are talking to! 

To be sure you're talking to our team members, ALWAYS join our [official mattermost chat](https://chat.btcpayserver.org/) and verify if things are as they get proposed through other ways.

## 🫶 Donate via OpenSats

We're grateful that OpenSats partnered with us to help individuals donate to the BTCPay Server project. If you ever wondered how you could support BTCPay Server contributors without being a company, head on to [OpenSats](https://opensats.org/projects/btcpayserver) and feel free to throw a donation.

As OpenSats is a US Based public charity registered as a 501(c)(3), you can apply for a tax deduction on these donations. This wasn't previously possible, as BTCPay Server Foundation works differently. With the opportunity given by OpenSats, it's now possible to [donate](https://opensats.org/projects/btcpayserver) to BTCPay Server as an individual!

## 💚 Thank you

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 1.9.0 possible. 

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚

