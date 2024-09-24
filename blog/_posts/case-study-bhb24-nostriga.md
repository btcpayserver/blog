---
title: "Two Conferences, One MoE: €27,582 in Bitcoin Revenue from 2,998 Lightning Network Payments During Riga Bitcoin Week"
date: 2024-09-25
author: Pavlenex, Webworthy
category:
  - "case-studies"
tags:
  - "case-study"
  - "point of sale"
  - "conference"
  - "research"
coverImage: "/images/BHB24-featured.png"
---

The [Baltic HoneyBadger](https://baltichoneybadger.com) conference, Europe’s longest-standing Bitcoin-only event, celebrated its 6th anniversary this year in Riga, Latvia. Joining the event was [Nostriga](https://nostr.world), an unconference focused on the Nostr protocol. For the first time, the Nostr conference made its way to Europe, adding an exciting new approach and culture to the gathering. With both conferences joining forces, attendees were treated to an entire week of events, giving them plenty of opportunities to dive deep into Bitcoin, decentralized communications, and everything freedom tech. With the main focus being decentralization, conference organizers made sure that all payments were free of intermediaries, leaving attendees free to focus on collaboration, and sharing ideas that push innovation. 

Whether attendees were grabbing coffee, a burger or buying merchandise, conference organizers wanted to ensure they could pay in bitcoin.

This case study explores the collaborative efforts of the conference organizers ([HodlHodl](https://hodlhodl.com/) & [Nostriga](https://nostr.world)), [BTCPay Server](https://btcpayserver.org), together with [Blink](https://www.blink.sv), [Bitcoinize](https://bitcoinize.com), [MyPlebTag](https://plebtag.com/), and [BoltCard](https://www.boltcard.org) in onboarding local merchants to adopt Bitcoin payments at the event. With this we aim to highlight the setup, inspire local communities to replicate the process, and demonstrate the practical use of Bitcoin as a medium of exchange.

![](/images/BHB24-1.png)

[Download a PDF version of this case study](https://btcpayserver.org/case-studies/bhb24-nostriga.pdf).

## Background and challenges

Building on the success of the BH2023 and [Bitcoin Atlantis](https://blog.btcpayserver.org/case-study-bitcoin-atlantis/) conference, the goal this year was to take things further and improve the experience for everyone involved.


*Before the events, most participating merchants had limited experience with Bitcoin. A survey conducted post-event revealed that **50%** of merchants rated their understanding of Bitcoin as a 2 out of 5, with **25%** rating it as **1**. Additionally, **75%** had never considered accepting Bitcoin payments in their businesses before attending the conference.*

This highlighted a clear challenge: how to onboard merchants with little or no Bitcoin knowledge start accepting it, while making sure the payment process is smooth and easy for both them and their customers?

* For **merchants**, the focus was on providing an experience that matched the ease of traditional credit card payments, while reducing technical headaches, volatility of bitcoin, and ensuring no downtime.
* For **attendees**, it was all about making the system easy to use, even for beginners who never had bitcoin. The priority was a fast, user-friendly effective experience that worked seamlessly in an environment where internet connection may not be reliable.

![](/images/BHB24-2.png)

## Solution implementation
 
Setting up a smooth Bitcoin payment system for the Baltic HoneyBadger and Nostriga conferences involved a mix of technical solutions and open-source tools. Collaboration between multiple projects and companies played a key role in making it all work.

### Merchant onboarding

A big part of making this successful was getting merchants comfortable with the new payment system. BTCPay contributors and conference volunteers gave merchants a hands-on demo and walked them through how it all worked - from generating invoices to printing receipts. Throughout the event, the team provided continuous support, ensuring merchants could handle the system confidently and that any issues were quickly resolved.

![](/images/BHB24-3.png)

### Payment infrastructure

Behind the scenes, a dedicated BTCPay Server instance was deployed to handle all the payments. To keep things fast and affordable, the **Lightning Network** was used for payments. Each merchant had their own web-based point of sale (POS) app, running onBitcoinize terminals which allowed them to generate invoices, preview transactions, print receipts, and process refunds with ease. This setup made the whole process as smooth as using a regular credit card system.

![](/images/BHB24-4.png)

#### Lightning Network

Managing liquidity and handling Lightning Network channels can be challenging, to simplify this, amerchants connect their Blink wallet to their BTCPay Store. The Blink team handled all the technical aspects of ensuring uptime and liquidity. This ensured that the system worked seamlessly, even when dealing with high volumes of transactions. It’s important to note that even though each merchant had their own wallet, and conference organizers didn’t have custody of the funds, Blink was a custodian of the merchant's funds. The upcoming BTCPay App aims to make the entire flow self-custodian in the future.

![](/images/BHB24-5.png)

#### Mitigating volatility

To mitigate volatility, merchants received payments in their Blink wallets, where their Bitcoin was automatically hedged using [Stablesats](https://stablesats.com). With **Stablesats**, the Bitcoin they received was instantly converted to match the value of the US dollar. This allowed merchants to accept Bitcoin without worrying about price fluctuations. From there, they had the flexibility to either withdraw funds through Stablesats to a local exchange for conversion to their local currency or keep the balance in Bitcoin, depending on their preference. Additionally, users can withdraw their Stablesats to any Bitcoin wallet as Bitcoin, since what underlies Stablesats is bitcoin itself, providing them with even more options for managing their assets.

#### Familiar payment terminals

Each merchant was given a Bitcoinize POS terminal, optimized for BTCPay Server. These terminals were easy to use and offered all the key features merchants needed—NFC reading, receipt printing, and more. For customers, it felt just like using a regular credit card, which helped make Bitcoin payments feel familiar and straightforward.

![](/images/BHB24-6.png)

#### NFC cards for easy payments

One of the standout improvements in user experience was the introduction of *BoltCards*. These NFC  cards functioned like debit cards, allowing conference organizers to preload them with Bitcoin and distribute them to attendees. This provided an easy, tap-to-pay method for things like coffee, lunch, and other purchases, making Bitcoin accessible to even those unfamiliar with the technology. A key advantage of BoltCards was that they could be used without an internet connection, further simplifying the experience.

At the *Nostriga* conference, BoltCards played a dual role—not only were they used for payments, but they also served as entry tickets. Upon arrival, each attendee received a preloaded card with around **€21** in Bitcoin, which they could use throughout the event. BoltCards proved highly popular, accounting for approximately **86.8% of total payments** (**1,273** out of 1,467 transactions). This practical, hands-on experience helped demystify Bitcoin for newcomers, making payments as easy as using a traditional debit card.

### Continuous support

Throughout both events, merchants had access to real-time support, ensuring everything ran smoothly. Any questions or issues were handled on the spot, which kept things moving without a hitch. This level of support gave merchants confidence in the system and helped ensure a positive experience for everyone involved.

![](/images/BHB24-7.png)

## Survey insights

A post-conference survey was conducted with the participating merchants to gauge their understanding of Bitcoin and the impact of accepting it during the event. The results were overwhelmingly positive:

* **75% of the merchants** had little to no understanding of Bitcoin before the conference, and **75% had never considered** accepting Bitcoin before.
* Despite this, **100%** of the merchants reported that their customers responded very positively to the option of paying with Bitcoin.
* **75% of merchants** agreed that accepting Bitcoin had a positive impact on their business during the event, with 50% rating it as highly positive.
* When asked about the future, **100%** of merchants expressed interest in accepting Bitcoin payments at next year’s conference, and **75%** were open to accepting Bitcoin at their business outside of the event as well.

This feedback highlights the importance of **community-driven onboarding and education efforts**. Despite initial hesitation, the merchants experienced the benefits firsthand and are now more inclined to adopt Bitcoin payments going forward.

![](/images/BHB24-8.png)

## Results

Across the two conferences:

* **Nostriga**  1,467 transactions, with **1,273** processed through BoltCard via NFC and 194 through attendees' wallets by scanning a QR code.
* During the **Baltic Honeybadger** we had **1,531** transactions (all payments were from attendees wallets as BoltCards weren’t utilized)

In total, there were **2,998 transactions**, with **€27,582.94** in revenue, slightly higher than last year. **Nine merchants** participated this year, with a few returning from BHB23, showing how relationships built at previous events are growing stronger and ensuring easier adoption and onboarding. 

## Summary

The successful integration of Bitcoin payments at the **Nostriga** and **Baltic HoneyBadger 2024** conferences demonstrated the power of community collaboration and open-source technology. By partnering with BTCPay Server, Blink, Bitcoinize, MyPlebTag, and BoltCard, the event organizers were able to seamlessly onboard merchants—many of whom had little to no prior experience with Bitcoin. Through a combination of education, continuous support, and familiar payment tools, merchants quickly adapted to the system, offering attendees a smooth and reliable payment experience.

With **2,998 transactions** and **€27,582.94 in revenue** processed, the events showed that Bitcoin can easily serve as a medium of exchange, even for newcomers. The introduction of NFC cards during Nostriga made Bitcoin payments feel as familiar as using a debit/credit card, further encouraging adoption. Looking ahead, with 100% of surveyed merchants expressing interest in accepting Bitcoin at future events and 75% open to continuing Bitcoin payments outside of the conference, the groundwork has been laid for broader Bitcoin adoption in real-world business environments.

The experience also underscored that **Bitcoin adoption goes beyond technology**—it’s about building relationships, abstracting technological complexities through familiar UX, and supporting merchants through the process. 

As we look forward to future events, it's clear that with the right tools and community support, Bitcoin can easily be integrated into real-world commerce, opening up new possibilities for businesses anywhere in the world.

![](/images/BHB24-9.png)

[Download a PDF version of this case study](https://btcpayserver.org/case-studies/bhb24-nostriga.pdf).