---
title: "Bitcoin People built a mobile app on top of BTCPay’s API to scale bitcoin to 270 merchants in Italy with a total of €406,283 in transaction volumes"
date: 2023-12-18
author: Elha, Pavlenex, Webworthy
category:
  - "stories"
tags:
  - "case-study"
  - "ambasador"
  - "API"
  - "mobile-app"
coverImage: "/images/bitcoin-people-featured.png"
---

BPay is a mobile app developed with [Flutter](https://flutter.dev/multi-platform/mobile) and BTCPay’s [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/), that helps merchants in Italy accept Bitcoin. The app, which is available for [iOS](https://apps.apple.com/app/bitcoin-people-bpay/id6464040494) and [Android](https://play.google.com/store/apps/details?id=it.bitcoinpeople.pay&pli=1) is developed by [BitcoinPeople.it](https://www.bitcoinpeople.it/), a company that aims to onboard merchants to Bitcoin by offering education, consulting services, training and BTCPay-powered infrastructure technology. 

![](/images/BitcoinPeople-1.png)

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinPeople2024.pdf).

Being a BTCPay Server host for their clients since 2021,  the company realized that merchants need a smoother, instant and more tailored experience when accepting bitcoin payments in retail.

> Most Bitcoin adopters don’t care about the technicalities and want an easy, native experience without the burden of understanding what is going on under the hood.

The company made a choice to **build an in-house native app** which  allows them to streamline the payment process for clients they are onboarding.  

> We are making the most of increasingly powerful APIs to empower an app that uses BTCPay as the back end.

The need for something like BPay arose as the number of merchants using their shared server increased and they needed an app to make the onboarding faster. The goal was to allow for BTCPay usage without the need to know anything about BTCPay Server, Docker, NBXplorer, LND and so on. 

![](/images/BitcoinPeople-2.png)

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinPeople2024.pdf).

## Why an app, can’t merchants just use one of many wallets?

According to Elha from BitcoinPeople.it, merchants can indeed be onboarded through a regular bitcoin wallet, but these wallets don’t really scale for a growing business. BPay allows merchants the full power of a BTCPay Server engine - invoice management, accounting, refunds and reporting. They are able to provide all of that to their clients without having the custody of their funds for on-chain payments and relying on open-source security and technology.

> No need for server setting or manual configuration whatsoever: the merchant downloads the app, enters company data, writes down the seed, and they are ready to receive payments with an account, store and PoS on a shared BTCPay Server.

## App Features

- Better user experience
- Non-custodial and custodial capabilities
- Instant conversion
- API key connection
- BTCmap integration
- Easier processing during onboarding

![](/images/BitcoinPeople-3.png)

## Choice of BTCPay Server

In 2021, the company wanted to build an entire payment processing service, but became aware of [BTCPay Server](https://btcpayserver.org) and realized it fulfills all of their needs and the MIT license allowed them to white-label and commercialize their efforts.

> We fell immediately in love with the open-source tech stack and since then we have always been thinking of ourselves as cells within the BTCPay ecosystem.

> We chose BTCPay because we felt and still feel safe, ethically, technically and commercially: we rely on a whole community of developers to secure the service we offer.

![](/images/BitcoinPeople-4.png)

## Implementation

[The Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/) allowed them to create endpoints to allow BPay to create new users into the existing BTCPay Server, or connect any existing users via API keys. From there they were able to handle every step of the process through the API - create more stores if the user needs, check invoices per store, and create new invoices.

> It was easy to integrate the API within our app, the documentation is clear, and the community was always willing to help and understand any concerns we had.

The new app allows them to onboard merchants to Bitcoin smoother. Merchants who don’t want to hold bitcoin can settle the payments in fiat through BitcoinPeople.it service.

## Merchant stories

We do a lot of fieldwork visiting merchants who might be familiar with Bitcoin but need to gain the knowledge to accept payments. With the Bpay app, onboarding them to our BTCPay Server is streamlined, enabling us to set them up in less than 3 minutes.


Among our merchants, many businesses use the Bpay app to work with countries with limited banking infrastructure. For instance, one of our earliest adopters of the Bpay app utilizes it to import spices from various parts of Asia and Africa bringing cost for crossborder payments virtually to zero into Italy. We also support 34 e-commerce merchants, and one has reported a **50% increase in revenue from the USA since integrating BTC payments** on our shared BTCPay Server.

The community appreciates the merchants who are brave enough to start accepting Bitcoin. We observe a significant increase in interest from local Bitcoin enthusiasts. These shops throughout Italy have given them the confidence to convene, be seen, and strengthen their community ties. We've received reports of groups of Bitcoiners traveling as much as 100 kilometers just for the experience of paying for a pizza with Bitcoin.

![](/images/BitcoinPeople-5.png)

## Conclusion

In the end, thanks to license, good API, documentation, and prompt community support, BitcoinPeople.it was able to create an app which allows them to onboard their users much quicker. From multiple steps that they had to do in the past, they were able to streamline the onboarding to just 4 steps.

In 2023, the company **helped process an impressive €406,283** in transaction volumes on their BTCPay Server. The number of paying businesses using the service more than doubled, contributing to a total of **270 active venues**.

![](/images/BitcoinPeople-6.png)

> We learned that resources within the Bitcoin community are enormous. We have been able to upgrade our offering just using the Greenfield API, and we are excited about everything that is to come in the BTCPay Server ecosystem.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinPeople2024.pdf).