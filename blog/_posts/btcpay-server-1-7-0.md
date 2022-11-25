---
title: "BTCPay Server 1.7.0 - Brand-new checkout, store branding, form builder (request shipping address)"
date: 2022-11-25
author: pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "checkout"
  - "form builder"
  - "shipping information
  - "update"
coverImage: "/images/BTCPay1-7-0.png"
---
The new major release of BTCPay Server is here - 1.7.0!

If we were to name it, its name would be "TookUs2yearsToListenToYourFeedback". We're introducing a new opt-in checkout page, store branding, server's white-labelling, and the ability to collect buyers' shipping information alongside many other improvements.

No contributors got hurt in the making of the release, but a few bugs got squashed. Check out detailed release notes [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.7.0).

Let's check what's new in 1.7.0!

## 🛒 New checkout

We've been listening to your feedback for over two years now. We heard all the typical problems customers face when interacting with the checkout. Our design team returned to the drawing board and created a bunch of explorations and prototypes. Seriously, thank you d11n and Dstruk_ for these past months!

![](/images/1.7.0-V2Checkout.png)

The new checkout page, for now, is an opt-in feature that completely abstracts the complexities and is focused only on you getting paid.

![](/images/1.7.0 CheckoutV2expandede-details.png)

Besides the cleaner design, we’ve made several critical improvements:
- Removing the invoice timer (We show the timer if less than 10% of the total time remains)
- Removed address copy (Tap on QR to copy the payment link)
- Unified scan and copy tabs
- We’ve hidden all non-critical information under details accordion

While checkout v2 aims to become the default, for now, we have it as an option. We’d love to invite you to test it out and let us know how we can further improve it, before we roll it out to everyone in one of the following major releases.

Enable Checkout v2 by going to Store Settings > Checkout appearance and flip the switch!

## 🧾 Unified QR code for on-chain and lightning

Lightning is bitcoin—end of the story. The end user should never consider the differentiation between the payment methods. Wallets should call the shots and do the calculations on which payment method to pick. We’ve had a unified QR code in BTCPay as an optional feature for two years, but the new checkout v2 pushes this one further by eliminating the tabs.

![](/images/1.7.0-UnifiedQRvsRerular.png)

All your customer sees is a QR code. If they have an on-chain wallet, it will pay on-chain. If they have a lightning wallet, it should default to lightning. If a wallet is both on-chain and lightning, it should prompt the user how they want to pay or make a decision for the user.

CashApp recently introduced a unified QR code as a default, and we feel more confident recommending it. If you aim to abstract all the complexities for your customer, you can enable this option, and a single QR will show - BAM. Just like with the v2 checkout page, the unified QR is experimental.

We’d love to hear how it works, especially if you encounter any problems with wallets. Unified QR can be activated as an option within the new V2 checkout, under Store Settings > Checkout Appearance.

## 🎨 Store and server branding

During the BTCPay Day in Riga this year, a lot of third-party hosts approached us and requested a better way of white-labeling their servers.

In this release, we’re making a first step towards easier server customizations. You can select a server logo that will replace our logo on the public pages. We intend to add more options towards white labeling in the next release.

![](/images/1.7.0 - CheckoutBrandingStore.png)

Additionally, we’re rolling out the ability to customize your store logo and brand color, which in 1.7.0 will be reflected through a checkout page and the logo in the sidebar. Right now, the logo and branding of the store will immediately reflect the new checkout page.

![](/images/1.7.0-CheckoutBranding.png)

Color and branding functionality will be extended to all public pages on a store level, such as payment requests, receipts, and refunds.

## 🚚 Form Builder (request shipping address)

Ok, you can now stop asking us “How can I collect buyer shipping information through BTCPay”?. In this release, we’ve added the ability to have a shipping address request form built into the point of sale app and payment requests.

The magic behind the scenes that allows this is something we named - the form builder. In the future, we intend to add more customization options allowing you to build your own form fields, but we’d like to hear your feedback on what kind of forms you’d find useful.

Note that any data you collect through forms is your own. To make things quite clear, BTCPay as a project never collects any data.

![](/images/1.7.0-Formbuilder.png)

## 🏪 OpenCart ecommerce integration
If you're a merchant using OpenCart as your e-commerce platform, we now have a full fledged integration with this CMS. Check our documentation [here](https://docs.btcpayserver.org/OpenCart/), and connect your BTCPay to your OpenCart in no-time!

## Greenfield API 👩‍💻

In this release we added a few new functionalities to our [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/).

- Store Rates Config
- Get Lightning invoices
- Create payment request invoices
- Allow marking payout status and payment proofs
- Wallet Objects
- Add crowdfund app create endpoint

We're noticing an uptrend in people building on top of BTCPay Server. If you're building something with our Greenfield API, we're always looking to get more feedback on how to improve it and we love to see what you've made!

## 🫶 Donate via OpenSats

We're grateful that OpenSats partnered with us to help individuals donate to the BTCPay Server projects. If you ever wondered how you can support BTCPay contributors without being a company, [head on to OpenSats](https://opensats.org/projects/btcpayserver) and feel free to throw a donation.

As OpenSats is a US Based public charity registered as a 501(c)(3), you can apply for a tax deduction on these donations. This wasn't previously possible, as BTCPay Server Foundation works differently. With the opportunity given by OpenSats, it's now possible to donate to BTCPay Server as an individual!

## Thank you 💚

As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, who directly participated in making 1.7.0 possible.

Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more!

BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚
