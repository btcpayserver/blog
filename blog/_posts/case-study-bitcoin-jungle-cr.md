---
title: "Bitcoin Jungle enables 200+ stores in Costa Rica to embrace Bitcoin"
date: 2023-12-1
author: Pavlenex, Webworthy
category:
  - "stories"
tags:
  - "case-study"
  - "ambasadors"
  - "circular-economy"
  - "point of sale"
coverImage: "/images/bitcoin-jungle-cr-featured.png"
---

[Bitcoin Jungle](https://www.bitcoinjungle.app/) is a community project in Costa Rica that provides the education, technology & resources needed for local businesses to accept Bitcoin as payment. Our goal is to create, expand & maintain a circular Bitcoin economy in Costa Rica. We want to make it as easy as possible for merchants to accept Bitcoin as payment, both on-chain and over lightning. This includes both physical retail & e-commerce, sole proprietors & large enterprises, long-time hodlers & first time users, and everything in between. 

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinJungleCR2023.pdf).

BTCPay Server was a natural choice for us. It’s a well-designed & mature product that “just works”. It’s intuitive enough that anyone can use it, while having the depth needed to satisfy more advanced users. It’s stable enough to deploy without constant worrying, yet innovate enough to continue adding new features without making the product worse overall.

Whenever a payment is collected on BTCPay Server, it should be immediately forwarded to that user’s Bitcoin Jungle wallet. To achieve this, we leveraged BTCPay Server’s Webhooks feature. Each time an **invoice is paid**, a **webhook is triggered**. This webhook is responsible for forwarding the Bitcoin received in the merchant’s wallet using the LNURL protocol. The webhook also allows us to split up the Bitcoin in various ways - the service provider can **optionally retain a processing fee & tips received** can be split up and delivered amongst staff members evenly. This happens in under a second and is perceived to be “real-time” by the merchant.

![](/images/BitcoinJunglecr1.jpg)

We also wanted our BTCPay Server to use the BTC/CRC price set by Bitcoin Jungle Wallet, to avoid mis-match in fiat calculations between the Point of Sale and the Wallet. To achieve this, we created a **custom rate provider** in our BTCPay Server instance. This was a straightforward process - copy an existing rate provider & then modify the code to make a RPC call to Bitcoin Jungle to retrieve the current price of BTC.

Overall, the integration was very straight-forward. The main challenge we faced was the handling of on-chain payments received, as we decided to forward all payments over Lightning Network. We automated this case utilizing **Lightning Loop**.

![](/images/BitcoinJunglecr2.jpg)

## Features and Benefits

Prior to our BTCPay Server integration, we only offered a Payment Link to our users (e.g. https://pay.bitcoinjungle.app/username), which is powered by Galoy.
This integration greatly enhanced the user experience for merchants. BTCPay Server allows them to create multiple Point of Sales (say if they have multiple locations) and track them separately, integrate with popular ecommerce platforms, have a login to view/export invoices to Excel for accounting, and accept payments on-chain in addition to Lightning.

![](/images/BitcoinJunglecr3.jpg)

## Results

We have received far fewer support requests than expected after our integration with BTCPay Server. The whole process is pretty seamless & intuitive. **Any business owner can start accepting Bitcoin payments in <2 minutes**. To date, we haven’t received any feature requests that were not already planned by the BTCPay Server dev team (and almost all have already been implemented). 

Our single BTCPay Server instance ~**200 stores** supports , totalling ~5k invoices to date. It continues scaling efficiently without any issue.

![](/images/BitcoinJunglecr4.jpg)

## Conclusion

One thing we learned was that it’s crucial to allow users to pay on-chain, even if you prefer Lightning Network. We’ve found some visitors to our circular economy don’t yet have a Lightning wallet. They see the Bitcoin Accepted Here sticker at a store, get excited because they have Bitcoin (usually on Coinbase), but then scan a Lightning QR and can’t pay the merchant. Once we added On-chain capabilities for merchants using BTCPay Server, we noticed an uptick in payments.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinJungleCR2023.pdf).