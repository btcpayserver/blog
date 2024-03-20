---
title: "Bitcoin Atlantis Conference: €115,100 from 8,750 Transactions in 3 Days, Showcasing Bitcoin's Role as a Payment Method"
date: 2024-03-20
author: Pavlenex, Webworthy
category:
  - "case-studies"
tags:
  - "case-study"
  - "point-of-sale"
  - "terminals"
  - "conference"
coverImage: "/images/bitcoin-atlantis-featured.png"
---

Held on the island of Madeira, known for its breathtaking landscapes, the [Bitcoin Atlantis](http://bitcoinatlantis.com) conference marked a milestone as the first of its kind hosted in a football stadium. Featuring a rich agenda across four stages, 3 workshop rooms, 200 speakers, and an array of satellite events, the conference attracted over 3,000 attendees, united by a keen interest in Bitcoin and its potential to give freedom and empower individuals and businesses around the world. 

![](/images/BitcoinAtlantis-1.png)

This case study explores the collaborative efforts of the conference organizers, BTCPay Server, Bitcoinize, Blink, and HodlHodl to onboard merchants and locals to adopt Bitcoin at the event, streamlining the payment experience resulting in over **8,750 transactions** with a volume of **2.029416** BTC valued **115,100€**, on **60 point-of-sale devices** and **18 merchant**s in just 3 days.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinAtlantis.pdf).

![](/images/BitcoinAtlantis-2.png)

## Background and challenge

Leveraging the success of the [Baltic Honeybadger](https://blog.btcpayserver.org/case-study-hodlhodl-2023/) conference, the organizers aimed to scale this model to an even wider audience with unique challenges:
- For merchants: Creating an experience on par with traditional credit card payments, minimizing Bitcoin's technical complexities whilst ensuring smooth operations and uptime.
- For customers: Make the system accessible to novices, ensuring a speedy, interoperable, user-friendly, and cost-effective experience.

### Objectives

- Demonstrate Bitcoin’s everyday utility and potential as a medium of exchange
- Introduce Bitcoin to Madeiran locals and empower them to adopt it in their everyday life or business

## Solution implementation

Implementing a seamless payment experience while navigating challenges involved several key technical and user experience innovations, complemented by open collaboration between multiple projects.

![](/images/BitcoinAtlantis-3.png)


### The infrastructure

A reliable payment processing system that could handle a large transaction volume without hiccups was achieved through the deployment of a dedicated [BTCPay Server](https://btcpayserver.org) instance. The lightning Network was used for instant and low-cost transaction settlement. Each merchant, had a dedicated store within BTCPay Server created. Each store had a wallet, and a web [point of sale app](https://docs.btcpayserver.org/Apps/#point-of-sale-app) which was loaded on Bitcoinize Point of Sale devices – enabling invoice generation, transaction previews, receipt printing, and refunds. 

#### Lightning Network

Liquidity issues and channel management on the Lightning Network were addressed by connecting stores to an external [Blink wallet](http://blink.sv) account via a BTCPay & Blink [plugin](https://www.blink.sv/blog/introducing-the-blink-plugin-for-btcpay-server), a custodial convenience option for Lightning payments available since BTCPay Server [1.12.0](https://blog.btcpayserver.org/btcpay-server-1-12-0/). The Blink team ensured node uptime and liquidity. This setup abstracted the complexities from end-users and merchants in particular.

#### Point of sale terminals

To ensure familiarity and ease of use, every merchant received a dedicated point of sale device, provided by [Bitcoiniz](https://bitcoinize.com). These devices are heavily optimized for BTCPay Server users and allow several key functionalities such as NFC reading and receipt printing. With this combination, customers can tap-to-pay with NFC cards (BoltCards), resulting in familiar UX and a seamless checkout experience as with credit cards.

![](/images/BitcoinAtlantis-4.png)

#### BoltCards

The introduction of [BoltCards](https://www.boltcard.org) provided by [CoinCorner](https://www.coincorner.com) was an enhancement in user-experience. It allowed quicker onboarding for the locals who had no access to bitcoin, it also reduced their fear of using an unknown technology. Since BoltCards look the same as credit cards, the tangibility and familiarity provided a quicker checkout process. 

The biggest innovation, at this conference, was that the entire process from initializing, topping up, and even resetting of the BoltCards was done within the BTCPay Server instance on the Point of Sale terminals. Five dedicated terminals were set up as Top-Up-Stations where attendees could check their card balance and top them up.

The technical foundations for the BoltCard setup were established by [pull payments](https://docs.btcpayserver.org/PullPayments/) and the new Bolt Cards Factory plugin by Nicolas Dorier, all running within the BTCPay Server. The plugin allowed organizers to pre-set certain parameters – for example, the value on the card and the mass-write of over 2,000 NFC cards at scale through a very simple UI. Since the plugin creates a web-page, any NFC-compatible device could generate Bitcoin cards. The only requirement there was to download the [Boltcard NFC Programmer app](https://play.google.com/store/apps/details?id=com.lightningnfcapp), which in combination with Bolt Factory generated a unique card for every attendee. 

This demonstrates that BTCPay Server was an end-to-end solution, for receiving payments, and generating the BoltCards that attendees used to pay, top them up, and even reset them for repurposing them later on.

![](/images/BitcoinAtlantis-6.png)


#### Onboarding and support

An important part of the project's success lay in efficiently onboarding merchants and familiarizing them with the new technology. Through a hands-on demo and continuous support during the event, merchants were able to adapt to the process smoothly, enhancing the overall experience for both vendors and attendees.

![](/images/BitcoinAtlantis-7.png)

## Results

The collaborative effort culminated in an enriching experience for both merchants and customers, manifesting in **8,750 transactions**, averaging **13,20 € per transaction**, aggregating to a value greater than **2.2 BTC** or **115,100 €**.

In a survey conducted with 8 merchants after the conference: 

- 100% of participants said that they would be willing to accept bitcoin at next year’s conference.
- 100% replied they would be open to offering bitcoin as a payment option in their business in the future.
- 80% said accepting bitcoin had a positive reaction from their customers.
- The transaction speed received very high average rating of 4.5/5.

![](/images/BitcoinAtlantis-8.png)

## Conclusion

The Bitcoin Atlantis Conference in Madeira has set a new benchmark in the practical application of Bitcoin as a medium of exchange, demonstrating that with the right collaboration and technology, Bitcoin can seamlessly integrate into everyday life. This event has proven that the barriers to adoption can be overcome through innovation, education, and community engagement. Paving the way for a future where bitcoin transactions are as commonplace and user-friendlier as traditional payment methods. 

The overwhelmingly positive feedback from merchants and attendees signals a growing readiness and enthusiasm for Bitcoin, suggesting a bright future for its adoption in commerce and beyond. This case study showcases the success of Bitcoin Atlantis, and it serves as a model for future events and businesses looking to embrace Bitcoin, underscoring its potential to empower and liberate in the digital age.

> The BTCPay Server system provided a smooth and reliable paying experience throughout the entire conference. It guaranteed service with no interruptions and minimal friction. - Merchant

> The lightning infrastructure that was created for the conference worked like a charm. Fast and reliable! It was one of the highlights, not only at the main venue but also on all the satellite events, including the Atlas Music Festival! - André Loja, Bitcoin Atlantis

![](/images/BitcoinAtlantis-9.png)

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/BitcoinPeople2024.pdf).