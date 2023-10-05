---
title: "Case Study: How Hodl Hodl used BTCPay to accept bitcoin payments at a conference"
date: 2023-09-21
author: Pavlenex, Webworthy
category:
  - "stories"
tags:
  - "case-study"
  - "point of sale"
  - "conference"
  - "research"
coverImage: "/images/CaseStudyHodlHodl-featured.png"
---

The [Baltic HoneyBadger](https://baltichoneybadger.com/) conference, celebrated for being the oldest and most focused Bitcoin conference in Europe, identified a substantial shortcoming in its 2022 iteration - the inability for attendees to make payments using bitcoin. Thus, in its 5th year running, [Hodl Hodl](https://hodlhodl.com/), the organizer behind the conference and a reputed bitcoin P2P trading platform, kick-started a collaboration with [BTCPay Server](https://btcpayserver.org/) to streamline bitcoin transactions for its attendees.

![](/images/payingBtcpay_2.20_1.png)

The effort ended up launching a tight collaboration within several projects in the industry, such as Bitcoinize, GetAlby, LNbits, PlebTag, Liquid (by Blockstream), LND (by Lightning Labs) and SideShift, putting them under a significant challenge:`

> Can paying and receiving payments in bitcoin be easy for someone who has never used it before?

## Background and Challenge

Addressable concerns of the merchants were bitcoin's volatility, technical complexity and doubt that customers had bitcoin to spend.

![](/images/buyingColdCard_2.21_1.png)

These concerns were addressed by hypothesizing that:

- Merchants wanted to accept bitcoin without experiencing its volatility
- Payment process should be user-friendly, instant and familiar
- Customers own some bitcoin for making purchases

## Solution Implementation

BTCPay Server provides a plethora of rich features by default but also offers a wide variety of plugins that enhance and expand its experience. The Baltic HoneyBadger conference made extensive use of these features and plugins, notably:

- [Payouts](https://docs.btcpayserver.org/Payouts/) - allows payments to be scheduled and processed later.
- **Prism plugin** - allows automatic forward of the incoming funds to multiple destinations based on a percentage split and an amount threshold. This creates payouts, which are then processed by a payout processor.
- **Payout Processors** - allows processing of payments using a configured criteria, for example - a timer.
- **Sideshift plugin** - allows conversion of the funds to other assets, such as the Tether stablecoin issued over the Liquid Network. This plugin interacted with the Prism plugin by providing a destination for Prism, which would take the incoming lightning funds and forward them to the merchant's Liquid wallet.

![](/images/projectMap.png)

A multi-step procedure was established:

1. Bitcoin payments were received via the [lightning network](https://docs.btcpayserver.org/LightningNetwork/), enabling instant settlement and reduced fees.
2. Once the store amassed 100,000 satoshis, it forwarded the payment to SideShift through the payout processor.
3. **SideShift** converted the payment into USDT (a stablecoin on the Liquid network) and returned it to the merchant's USDT Liquid wallet, such as Green Wallet or Aqua.
4. Merchants had the flexibility to retain the payment in USDT, convert it to fiat, or keep it in bitcoin all of that through the **Hodl Hodl platform**. 

## Streamlining the payment process

Ensuring a smooth user experience meant the payment process must be quick and reliable. Customers or merchants should never face a technical difficulty that could stop them from making a transaction. A dedicated BTCPay Server instance was deployed (6 cores, 16GB RAM at ~13 EUR per month). BTCPay Server's optimizations throughout the years ensured a reliable experience for merchants and customers.

> Good user experience means that payments need to be settled instantly and without fees.

This means that on-chain bitcoin wasn’t an option and the lightning network was used.

BTCPay Server allows users to easily connect to an external bitcoin lightning node. Due to time-constraints, complexity of managing channels and liquidity, ensuring high throughput and uptime, - [Alby’s](https://getalby.com/) integration came in as a life-saver. Thanks to [LndHub.go](https://blog.getalby.com/announcing-lndhubgo/), an account system on top of Alby’s lightning nodes, every user can connect his own Alby account to BTCPay Server for high-reliability of payments being routed without liquidity issues. To mitigate the risk of custodianship, the Prism plugin pulled payments out of the node and forwarded it to SideShift every time 100 000 satoshi balance was reached.

To demystify Bitcoin transactions for the merchants, Hod lHodl introduced point-of-sale machines from [Bitcoinize](http://bitcoinize.com), resembling traditional payment terminals. These devices facilitated the generation of invoices through the BTCPay Server [Point Of Sale plugin](https://docs.btcpayserver.org/Apps/#point-of-sale-app), fostering a familiar user experience.

### How much do you agree that the point-of-sale machine facilitated a smoother payment process?

![](/images/CaseStudyHodlHodl-survey-2.png)

## Ensuring customers have bitcoin to pay

Ensuring attendees had access to bitcoin for making purchases was paramount. BTCPay Server checkout page is compatible with NFC with tap to pay. Thanks to [LNBits](https://lnbits.com/) and [PlebTag](https://plebtag.com/) over 500 NFC voucher cards have been created and pre-loaded with approximately 21$ USD worth of bitcoin.

Every guest received a custom designed, event-specific card to enrich their paying experience. The card illustrated a honey badger whose eyes would light up every time the NFC cards came in contact with a point of sale device - which made the experience not only easy but also fun.

![](/images/Group2.png)

**Furthermore, when customers use an NFC card, no internet access is needed on their end**

This can sometimes be a challenge at large conferences. An increase of the engagement on social media was noticeable since a lot of users referenced their experience of paying with bitcoin and by using NFC cards that light up in their posts on social media.

## Onboarding and Training Merchants

Even though this step seemed to be the biggest fear before the project kick-started in practice it turned out to be the smoothest. Due to all the earlier efforts in making the experience familiar and easy, 20 merchants were onboarded in under an hour by the BTCPay Server team. 

![](/images/CaseStudyHodlHodl-survey-3.png)

In a survey conducted after the event, on a scale from very complicated (1) to very simple (5) 83.3% of merchants rated the onboarding experience as very simple.

The onboarding included a short person to person explanation on how to use a device, providing the merchant with a sticker to receive tips and asking them to join a group chat where they could raise their concern in case of a problem or simply ask a question. This communication channel turned out to be fruitful not only because the team could react rapidly in case of a problem, but also because of the feedback merchants provided.

![](/images/truck-close.png)

## Results

The collaborative effort of Hodl Hodl, BTCPay Server and several other projects culminated in an enriching experience for both merchants and customers, manifesting in **2944 transactions** averaging **9.20€ per transaction**, aggregating to a value greater than **1.1 BTC or 27,079.99€**.

In a survey conducted on merchants after the conference:

- **83.3%** of participants said that they would be willing to accept bitcoin at next year’s conference. 
- **80%** said accepting bitcoin had a positive reaction from their customers.
- **50%** merchants replied they would be open to offering bitcoin as a payment option in their business in the future.

### Would you be open to accepting bitcoin payments at next years conference?

![](/images/CaseStudyHodlHodl-survey.png)

The easy onboarding process and the familiar transaction procedures played pivotal roles in its success, erasing the preconceived notions held by merchants about Bitcoin transactions. 

From a user perspective everyone got a branded NFC-card as a memory of the conference that they can further use in their daily life. This will most likely lead to even more users that learn about bitcoin and how easy it is to use.

The inclusion of QR codes for tipping was an additional feature that merchants greatly appreciated.

> “Everything was very simple and well thought out. Thank you very much for prompt support in case of confusion.”

> Bitcoin payments have been our main struggle since year one. And this has probably been the most exciting thing we have dealt with since the first Baltic Honeybadger. Onboarding the merchants and handling the whole setup was a big experiment, but we made it work, everything at the conference was payable with Bitcoin! Huge thanks to the BTCPay team; all of this was only possible because of their hard work.” - Hodl Hodl

## Conclusion

This case study provides a detailed systematic approach undertaken to overcome identified challenges, demonstrating the adoption of bitcoin in a real-world setting.

By addressing the volatility concerns, simplifying the transaction process, and ensuring attendees had the necessary resources to make bitcoin transactions, a system was created that replicated the familiarity of fiat currency transactions while leveraging the benefits of bitcoin.

The significant number of transactions processed and the positive feedback received from merchants and customers indicate that the initiative not only addressed the concerns raised in the previous conference but also laid a strong foundation for the more significant adoption of bitcoin in similar future events.

[The success story](https://x.com/hodlhodl/status/1701624248849039760) from the Baltic HoneyBadger conference could serve as a blueprint for similar events and potentially for a broader array of retail businesses looking to integrate bitcoin into their operations seamlessly.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/hodlhodl2023.pdf).