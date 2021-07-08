---
title: "How to accept Bitcoin Donations - privately, securely and without middleman"
date: 2019-04-25
author: pavlenex
category: 
  - "guides"
tags: 
  - "apps"
  - "plugins"
  - "pos"
coverImage: "/images/How-to-accept-Bitcoin-donations.jpg"
---

If you're a non-profit, charity, content creator, developer or just a regular Joe trying to accept Bitcoin donations, you're at the right place.

Accepting censorship-resistant donations is one of the greatest use-cases for Bitcoin, however, very few people do it in a truly private and decentralized way.

![](/images/How-to-accept-Bitcoin-donations-1024x576.jpg)

Displaying a static address or a QR code on your webpage may look like a walk in the park, however having a single address is a notoriously poor privacy practice. Re-using a single address is simply bad, not only for receiving part but for the sender as well. Since privacy likes company, by [re-using the address](https://en.bitcoin.it/wiki/Address_reuse) you're weakening privacy for a large number of participants in the blockchain. Most Bitcoiners care about privacy and your chances of accumulating BTC are higher if it does not invade the privacy of the network participants.

In this article, we will focus on how to use BTCPay Server, a decentralized, fully open-source, cryptocurrency payment processor to accept Bitcoin donations. By using BTCPay, you're [avoiding address-reuse](https://en.bitcoin.it/wiki/Receiving_donations_with_bitcoin#Improving_privacy_by_avoiding_address_re-use) and involvement of a third-party.

Furthermore, if you self-host BTCPay Server, you're running [a full node](https://en.bitcoin.it/wiki/Full_node), which means transaction information is not leaked to a third-party and every consensus rule is validated. Don't trust - verify.

Most importantly, there will be **no fees** of any sort, since you'll be operating as your own payment processor. Funds go straight from donor to your wallet.

This article provides an overview and examples of ways in which individuals, businesses or non-profit organizations can use BTCPay to accept donations. Not sure yet which feature is best for you? No need to decide now, BTCPay comes equipped with all the following features. Try them all out for yourself. For exact step by step instructions on how to use a particular feature, check the installation links and videos in each section.

If you would like to learn how to deploy BTCPay, check out our [deployment documentation.](https://docs.btcpayserver.org/deployment/deployment) For a general overview and features take a look at [our website](https://btcpayserver.org).

## Donation Button

The most common way to accept tips and donations, regardless of the CMS powering your website, is a tipping (pay) button. Create and customize a tipping button according to the look of your website. Easily embed it into an HTML page.

   

Out of the box, we offer 3 different types of tipping buttons:

- Fixed
- Custom
- Slider

To create a pay button, go to your BTCPay Server Store Settings > Pay Button. Allow invoice creation and customize the appearance and amounts. Video below guides you through the process of creating and also embedding a donation button into your web-page. The process is the same regardless of the button type.

<iframe src="https://www.youtube-nocookie.com/embed/MIWGvl6_WzI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;">﻿</span></iframe>

## Crowdfunding

Crowdfunding is an application which you can launch from BTCPay Server interface that allows you to create a self-hosted funding campaign, similar to Kickstarter or Indiegogo. Unlike traditional crowdfunding platforms, the creator of the campaign is the owner of the platform. Funds go directly to the creator’s wallet without any fees.

<iframe src="https://www.youtube-nocookie.com/embed/tFbfyneDj88" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;">﻿</span></iframe>

The Crowdfund App is highly customizable. Users can modify the appearance, donor perks, denomination type, crowdfund goals, etc. Everyone can see live contribution stats and even custom sounds when someone donates. BTCPay's Crowdfunding App was recently used as a donation platform for the [#WeAreAllHodlonaut](https://weareallhodlonaut.com/) community crowdfunding campaign.

## Payment Requests

While primarily made for freelancers, the Payment Request feature in BTCPay can be used by charities for invoicing and getting paid or donations in Bitcoin just by sharing a link.

Funds paid to a payment request use the exchange rate at the time of payment. This allows users to make payments at their convenience without having to negotiate or verify exchange rates with the store owner at the time of payment.

Users can pay requests in partial payments and the request will remain valid until it is paid in full or if the store owner requires an expiration time. Addresses are never reused. A new address is generated each time the user clicks pay to create an invoice for the payment request.

<iframe src="https://www.youtube-nocookie.com/embed/j6CvwDPvfzQ" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Want to see this feature in action? Check out this [Live Payment Request](https://btcps0.com/payment-requests/e6a6fbee-193d-4e0c-8f09-b106d0ae1801) for donations to purchase a Trezor One wallet for one of our BTCPay developers to implement Trezor as a supported wallet in BTCPay.

## LibrePatron (for recurring payments)

One way you can accept donations on a regular basis is to use subscriptions + Bitcoin with the LibrePatron feature. At the moment, automatically withdrawing recurring payments in Bitcoin can't be achieved due to protocol limitations, but you can send recurring requests via the email to subscribers using this feature.

[LibrePatron](https://librepatron.com/) is a self-hosted, open-source Patreon competitor where creators are owners of the entire platform. The software is free and open-source for anyone to use. You can easily install a LibrePatron instance as it's a plugin that uses BTCPay Server to receive Bitcoin payments on a recurring basis.

![](/images/Screen-Shot-2019-04-02-at-17.59.17-1024x519.png)

## Modified Web Point of Sale

Our web point of sale app is used mostly by merchants in retail, but it can be modified slightly to allow users to accept donations.

### Example 1: The Donation Page

When creating a PoS app in BTCPay, make sure to have "cart" option unchecked and add perks for professional looking donation pages. BTCPay will produce the donation page for you as a part of your BTCPay PoS app. No need to purchase extra domains, your BTCPay provides an unlimited number of donation pages for you to use [like this one below](https://mainnet.demo.btcpayserver.org/apps/87kj5yKay8mB4UUZcJhZH5TqDKMD3CznjwLjiu1oYZXe/pos).

![](/images/Screen-Shot-2019-04-24-at-16.13.17.png)

### Example 2: Social Media Donation Page

Instead of adding perks to your PoS page, you can create a simple custom tip donation page. It can easily be used for social media accounts. Leave the cart mode turned off and don't add any items to the PoS. Post the link to your PoS in your profile. Start accepting Satoshis directly to your wallet for your awesome memes.

![](/images/TwitterDonations-300x182.png)

## Summary

The easiest way to [accumulate Bitcoin](https://blog.btcpayserver.org/how-to-earn-bitcoin-btcpayserver/) is to start accepting it, any way you can. BTCPay provides so many options and apps for anyone to start receiving BTC payments and donations.

You don't need to have a business degree or an advanced e-commerce store. You just need to create opportunities for yourself to start accepting Bitcoin. Join the diverse community of people who are already trying it out. Share your experiences and ideas for feature improvements in any of our community links. We are constantly improving and building BTCPay together.

If at any point you face issues or have questions, drop by on our [community chat](https://chat.btcpayserver.org), where contributors all over the world will try to answer your questions. Our developers would gladly provide our software initial setup help for non-profits and charities.

_Written by [britttttkelly](https://twitter.com/britttttkelly/) and [pavlenex,](https://twitter.com/pavlenex/) proofread by [Kukks](https://twitter.com/MrKukks/)._
