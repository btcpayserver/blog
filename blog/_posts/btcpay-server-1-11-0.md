---
title: "BTCPay Server 1.11.0 - Reports, sounds and forms 4 all"
date: 2023-07-27
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "Forms"
  - "Reports"
coverImage: "/images/BTCPayServer-1-11-thumbnail.png"
---

We are thrilled to unveil the latest major update of BTCPay Server - **version 1.11**!

This release introduces an exciting new reporting feature and significant improvements to the Point of Sale (PoS), including the addition of product categories and redesign of the cart view. 

As usual, the updates were implemented based on invaluable feedback received from our community. Alongside these enhancements, we've also addressed various bugs and made further optimizations to ensure a smoother user experience.

## 📊Brand-new reporting feature

Invoices are the heart of BTCPay Server. Nearly everything revolves around them. However, we understand that there are scenarios where payments are received directly to your wallet, or you require additional data beyond what invoices export offers. 

We are delighted to announce the launch of our **new reporting feature**, addressing these needs and empowering users with enhanced data insights.

![BTCPay Server Reports](/images/1-11/image1.png)

The new feature allows you to select the time-frame, type of data and showcase it in a table or raw view. Additionally, the convenience of exporting data to** CSV format**, making data management easier. 

Built with extensibility in mind, this feature can be further **enhanced by plugins**, giving developers the potential to customize the reporting experience even further. Sorting is available for all columns, allowing you an easier way to organize your data.

Currently we offer three types of **predefined reports**:

* **Payments ** - grouped by currency, payment-method or lightning address
* **On-chain wallet** - offering grouped overview per wallet and payment method
* **Products sold (POS app)** - providing a grouped view per app, currency, product, summarizing quantity and amount per product and even showcasing the processing vs settled invoices, for accurate reporting.

We’re aiming to add more reports based on feedback we receive. Off-chain reporting is on to-do for the next release. Furthermore, basic grouping features and filtering is also on the roadmap.

![BTCPay Server Additional Reports](/images/1-11/image2.png)

You can access the reporting feature through the sidebar by clicking on the **Reporting.** Invoice export still remains, but will eventually be moved into the reporting page. 

If you find the reporting feature useful or have any ideas for additional functionalities, we'd [love to hear from you](https://github.com/btcpayserver/btcpayserver/discussions). Your feedback is crucial in helping us shape this feature.

## 🛍️ Point of sale card redesign, categories and more

Last month, the entire BTCPay Server team had the fantastic opportunity to gather in Prague for the BTC Prague conference. Not only did we get to engage closely with the community, but we also had the privilege of witnessing a remarkable stress-test of our point of sale app. The app performed exceptionally well not only at our booth but also at [Paralelni Polis](http://paralelnipolis.cz/en/), where their BTCPay instance processed over **3000 transactions** during that thrilling weekend

We owe a huge thanks to Kx from Paralelni, who oversees the POS, for being incredibly supportive and providing invaluable feedback. In fact, Kx's feedback was so significant that we could have easily named this release the “'Kx’s release”!

Firstly, the POS** cart view received a redesign**. It’s now cleaner, faster and follows our design guidelines.

![BTCPay Server Revamped POS](/images/1-11/image3.png)

With this update, we’re introducing **product categories,** which allow you to group items from the POS for easier access. You can add categories when creating a new item, or simply assign to a category you’ve earlier added. We’ve also added **labels **to indicate when an item is running out of stock, sold out or when it’s a freebie.

Invoices view now includes **payment method icons**, to help easier distinguish and troubleshoot a problem with an invoice when working with a point of sale. The ability to upload your **files directly from the POS editor** has also been shipped with this release.

The **receipt **received improvements, now showcasing important metadata, such as the list of **products sold**.

## 🔊 Payment sounds

As we’re seeing growing usage of the physical point of sale terminals in retail, the retail checkout page preset includes sounds for:

* NFC successfully read
* NFC unsuccessful read 
* Payment received/settled sound 

Why did we decide to add these sounds? The answer is simple. In physical stores, customers often don't have direct visual access to the payment device. Instead, they tap an NFC card or compatible wallet on the device. In such scenarios, the introduction of sounds provides immediate audio feedback for both you and your customers, letting everyone know when payment has been successfully received or alerting in case of any issues. This audio notification ensures a smoother and more informed checkout process for everyone involved.

![BTCPay Server Sounds](/images/1-11/image4.png)

The new sound indicators are on by default in retail preset mode accessible from _Checkout Appearance_, but you can also enable the sound for your web. Once again, you can upload a custom sound file for the payment received sound; feel free to be creative!

## 🏪Improved store creation flow

As our continued effort to offer a smoother, more focused onboarding experience to new users, we’ve redesigned our store creation flow. New users creating a store will now see a more focused-full screen experience when setting up their stores. 

![BTCPay Server Store creation](/images/1-11/image5.png)

Going forward, we’re considering creating a more detailed store creation wizard that will offer additional options such as setting up a store branding or email’s SMTP and potentially the wallet setup. 

We’ve also added support for Serbian Dinar (**RSD**) and Uganda Shilling (**UGX**) 

## 💪Forms on steroids

The **form system** introduced in [1.8.0](https://blog.btcpayserver.org/btcpay-server-1-8-0/) has gained even more useful features. You can now create fields that will adjust the invoice amount, enabling use-cases like asking the user which **shipping method** they’d like to use, charging differently per country, or even offering a **discount **based on user input. Head over to our [form documentation](https://docs.btcpayserver.org/Forms) to see how to make use of this feature

## 🖇️Integrations

Our integration wizards worked hard on making our e-commerce plugins compatible with the latest and greatest updates:


* Prestashop integration now being [compatible ](https://github.com/btcpayserver/prestashop-plugin/releases/tag/v6.0.0)with Prestashop 8
* Magento 2 integration got many [fixes for Magento 2.4.x](https://github.com/btcpayserver/magento2-plugin/releases)  

## 🪲 Bugs squashing spree

Bugs, not to be eaten but to be squashed. As usual, we’ve hit a ton of bug fixes between 1.10.0 and 1.11.0; we’ve also included a small list of fixes in this major release. Let’s sum them up.

* Support NFC on modal 
* Fixed setting of minimum or custom price for LNURL POS items
* Preventing entering of negative tips and discounts in POS 
* Fixing display of amount paid on Receipt page

## 🚨 Beware of scammers!

Despite our numerous warnings in the past months, we’re still seeing that people are falling for a scam called [Bitcoin Bonus](https://blog.btcpayserver.org/bitcoin-bonus-scam/) or similar derivative, which is an ongoing scam that abuses our brand and software. Please be aware our team will only reach out to you through our official channels.  To be sure you're talking to our team members, ALWAYS join our official mattermost chat and verify if things are as they get proposed through other ways.

## 🫶 OpenSats Grant

[We received a grant from OpenSats](https://twitter.com/OpenSats/status/1680242478350303234?s=20) that will mean a lot for the project’s sustainability going forward. If you’re an individual wanting to support our work, you can donate to the BTCPay Foundation through [OpenSats](https://opensats.org/projects/btcpayserver).

## 💚 Thank you

As usual, if you have problems, feedback, or feature requests regarding BTCPay Server, feel free to reach out on our community chat. We hope you enjoy what this update has to offer. As always, thank you to our invaluable contributors, who directly participated in making 1.11.0 possible.

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making, and more! BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚
