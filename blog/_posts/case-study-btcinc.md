---
title: "Built on Bitcoin: How BTC Inc Runs on BTCPay Server"
date: 2026-01-07
author: Pavlenex, Webworthy, RockstarDev
category:
  - "case-studies"
tags:
  - "case-study"
  - "point-of-sale"
  - "terminals"
  - "conference"
coverImage: "/images/case-study-btcinc/photo-featured.jpg"
---

[BTC Inc](https://b.tc), the company behind [Bitcoin Magazine](https://bitcoinmagazine.com) and organizer of the
industry's largest Bitcoin conferences, has been mission-driven from day one. Since its humble beginnings, the
organization has sought to operate on a Bitcoin standard, envisioning Bitcoin not merely as a reserve asset but as the
functional backbone of its entire enterprise.

[![BTC Inc x BTCPay Server Case Study Trailer](https://img.youtube.com/vi/zbCeN_pLArE/mqdefault.jpg)](https://www.youtube.com/watch?v=zbCeN_pLArE)

Realizing that vision required more than conviction. Running a global events and media company on Bitcoin meant
integrating many moving parts into a single, unified system. Staff would be paid in Bitcoin. Conference vendors would be
settled without intermediaries. Thousands of attendees would transact at conference booths in real time. The challenge
was clear: BTC Inc needed infrastructure that could vertically integrate these flows across different continents,
minimizing coordination overhead and eliminating the delays and fees of traditional payment systems. The solution also
had to support instant payments while giving the company full control over its funds through self-custody.

![](/images/case-study-btcinc/photo2.jpg)

[BTCPay Server](https://btcpayserver.org) met all of these requirements. As an open-source, self-hosted project, it gave
BTC Inc a way to unify every Bitcoin payment stream under one roof without relying on custodians or third-party
processors. Before settling on BTCPay, the team explored several external solutions but ran into friction. Custodial
setups introduced risk. Regulatory hurdles in different jurisdictions added complexity and slowed things down.
Off-the-shelf platforms made it difficult to adapt payment flows to the unique pace and structure of the business. It
became clear that a vertically integrated system, built with open tools and full control, was the only way to scale.

With BTCPay, BTC Inc built a custom-fit payment stack that aligned with its Bitcoin-standard model. From merchandise
sales and food vendors to payrolls and multi-sig treasury, every part of the operation now runs within a cohesive,
Bitcoin-native framework.

This case study explores how BTC Inc implemented BTCPay Server across its operations, strengthening technical
infrastructure while shaping an internal culture. The result is an organization where Bitcoin feels native at every
level, advancing BTC Inc's vision of a [hyperbitcoinized](https://bitcoinmagazine.com/hyperbitcoinization) world.

![](/images/case-study-btcinc/photo3.jpg)

## **Accepting Bitcoin in person, at scale**

BTC Inc's adoption of BTCPay Server began where the need was most immediate: enabling Bitcoin payments at its flagship
conferences. Each event brings together tens of thousands of attendees and more than a dozen vendors, creating a live
environment where Bitcoin is expected to work as a practical medium of exchange.

The team needed a solution that could handle a high volume of payments, operate under limited WiFi, support multiple
local currencies, and give vendors direct access to their funds. Just as importantly, it had to be easy to deploy and
free from processing fees or licensing constraints.

BTCPay Server provided exactly that. Merchants could bring their own wallets and connect them to the BTCPay web POS app
to receive payments directly. Customers could pay using any familiar Bitcoin mobile wallet. To bridge the transition
from fiat systems, BTC Inc used
the [Mark As Paid Plugin](https://plugin-builder.btcpayserver.org/public/plugins/markpaid) to log vendors' cash or card
sales across different systems, all within BTCPay. This gave each vendor a unified sales record regardless of payment
method and helped establish BTCPay as a complete reporting tool, not just a Bitcoin checkout. What began as a conference
payment solution quickly proved itself as core infrastructure. The team saw that BTCPay was not just solving one
problem - it was unlocking a new operating model. It was the first step in building a payment stack where Bitcoin felt
native to the entire business.

![](/images/case-study-btcinc/photo4.jpg)

## **Scaling across four major global events**

Starting with Bitcoin Asia 2024, BTC Inc implemented BTCPay Server at every conference, iterating on the deployment,
improving vendor onboarding, and refining operational processes. This resulted in a consistent pattern: Bitcoin usage
grew, vendors adopted it, and on-the-ground operations became increasingly Bitcoin-native.

### Bitcoin Asia 2024

The Hong Kong conference
marked [the first published case study](https://bitcoinmagazine.com/business/case-study-enabling-bitcoin-as-a-medium-of-exchange-at-the-bitcoin-asia-conference-in-hong-kong),
demonstrating how self-custodial tools could support real-world commerce at scale. It validated the principle that
businesses can run Bitcoin payment infrastructure with the same reliability expected of traditional point-of-sale
systems.

### Nashville 2024

At Bitcoin 2024 in Nashville, BTC Inc expanded its self-custodial approach across a larger vendor base and a more
complex event footprint. The conference embraced
a [Paid-In-Bitcoin](https://x.com/BtcpayServer/status/1853514433311502417) narrative, which later appeared in
the [documentary](https://www.youtube.com/watch?v=Rdd2SlBLRfU) filmed during the event. BTC Inc's team continued
improving the vendor experience, reducing onboarding friction, and building deployment playbooks that would carry into
future events.

### MENA 2024

The MENA rollout introduced BTCPay to an entirely different regional context. The operations team adapted the platform
to local currency (AED) expectations, supported new vendor categories, and gathered extensive insights on international
commerce requirements.

### Las Vegas 2025

The breakthrough moment came in Las Vegas. With improved infrastructure, Bolt Card support, and Lightning optimizations,
BTC Inc set
a [Guinness World Record](https://www.guinnessworldrecords.com/world-records/776977-most-cryptocurrency-point-of-sale-transactions-in-8-hours).

Record: Most cryptocurrency point-of-sale transactions in 8 hours

Total transactions: 4,187
Date: May 28, 2025

Attendees used NFC Bolt Cards and Lightning to make contactless NFC payments for merchandise, food, beverages, and other
items throughout the venue. This demonstrated that Bitcoin could support high-traffic, real-time commerce at a level
previously associated only with traditional payment systems.

What made the Bitcoin 2025 conference unique was that BTCPay Server point-of-sale terminals operated side by side
with [Square's traditional terminals, where Bitcoin payments were newly enabled](https://squareup.com/us/en/press/block-to-roll-out-bitcoin-payments-on-square).
The Guinness World Record captured the complete transition in real time: established payment infrastructure seamlessly
transitioning from fiat into Bitcoin-native commerce.

![](/images/case-study-btcinc/photo5.jpg)

The result of this four-conference evolution is clear: Bitcoin works at scale when supported by the right
infrastructure. BTCPay Server proved reliable across different continents, currencies, and vendor bases, showing that a
self-custodial, open-source system can handle real-world commercial environments with thousands of daily transactions.

These deployments were not theoretical experiments. They were live tests under pressure, with real vendors, real
customers, and real revenue on the line. Each event demonstrated Bitcoin's potential as a day-to-day medium of exchange
and reinforced BTC Inc's commitment to building a Bitcoin-native operational standard. What made these deployments even
more remarkable was the environment: major convention centers with strict vendor protocols, third-party staffing, and
limited time for setup. Temporary event staff with no prior exposure to Bitcoin were trained on the fly to operate
BTCPay POS terminals, and despite the scale and complexity, the system ran without disruption. The tools required little
explanation. The learning curve was minimal.

![](/images/case-study-btcinc/photo6.jpg)

## **Vendors and employees, paid in Bitcoin**

Following the success of BTCPay Server at its events, BTC Inc turned inward to solve another critical need: paying
contractors, partners, and remote team members in Bitcoin. With a growing global workforce and dozens of service
providers supporting operations, the company needed a payout system that matched the reliability and autonomy of its
event infrastructure.

The [VendorPay plugin](https://plugin-builder.btcpayserver.org/public/plugins/payroll) provided the foundation. It
allowed the finance team to manage outbound Bitcoin payments to vendors and contributors using structured workflows,
scheduled payments, and batching transactions to save on network fees. What began as a basic implementation quickly
evolved into one of the most used tools.

VendorPay has been used to successfully process over $1,000,000 in Bitcoin payouts to vendors, contractors, and
employees across multiple regions. No foreign exchange fees, no interchange fees amongst intermediary banks, no 3-5
business days, no cut-off times; just 24/7, peer-to-peer, auditable, near-instant monetary payments. BTC Inc does not
use Bitcoin because of its mission to hyperbitcoinize the world - it uses Bitcoin because it is objectively the best way
to transmit money globally.

As payout volume grew, BTC Inc's finance and engineering teams worked closely with BTCPay contributors to improve the
plugin through real-world feedback. They suggested enhancements and inspired new features, including support for
multi-signature payments.

## **Multisig treasury**

BTC Inc's use of VendorPay revealed an opportunity to strengthen how funds were managed across the organization. As the
volume of Bitcoin payouts increased, so did the need for a more structured approval process that could match the
company's commitment to self-custody.

To meet that need, the team adopted BTCPay
Server's [native multisig wallet support](https://docs.btcpayserver.org/Multisig/). Instead of relying on a single
keyholder, transactions could now require signatures from multiple team members.

The multisig workflow stayed fully self-hosted. BTCPay handled coordination, key management, and transaction flow
without the need for outside services. [Jade wallets](https://blockstream.com/jade/) by Blockstream connected through
BTCPay Vault made signing easy, and built-in notifications kept the right people informed as transactions progressed.

VendorPay and multisig worked hand in hand. Treasury managers could fund outgoing payments while maintaining shared
control over the process.

## **Converting fiat into Bitcoin**

As BTC Inc refined its internal treasury workflows, a final piece of the Bitcoin-native stack emerged: automatically
converting a portion of fiat revenue into Bitcoin. Emulating the familiar saying - stay humble, stack sats - and guided
by BTC Inc's finance team, a BTCPay plugin was developed to convert a percentage of Stripe payouts into Bitcoin on
supported exchanges.

Any business earning revenue through credit cards or online payments can configure a percentage of incoming funds to be
converted into Bitcoin, creating a seamless DCA flow directly into treasury. For BTC Inc, this became a powerful
extension of its operational standard. Since launching this program in January 2025, Bitcoin Stacker has accumulated
more than 6.5 BTC, with every Stripe payout automatically converted without fail.

![](/images/case-study-btcinc/photo7.jpg)

The result is a fully automated Bitcoin accumulation strategy that mirrors BTC Inc's broader vision of
hyperbitcoinization. This reduces reliance on traditional finance rails and lets Bitcoin become the unit of account for
long-term operations. In practice, Bitcoin Stacker turned routine revenue into continuous treasury growth, demonstrating
how companies can take concrete steps toward becoming Bitcoin-native organizations.

Automatically converting a percentage of daily cash receipts into Bitcoin for BTC Inc is a rules-based, conservative
treasury strategy rather than a speculative bet. By dollar-cost averaging, the company buys Bitcoin consistently over
time, smoothing out price volatility and avoiding market-timing decisions. At the same time, this steady DCA program
gradually builds a Bitcoin reserve that can be used as working capital for BTC-denominated activity.

With BTCPay Server, those Bitcoin reserves fund vendor payments, contractor payouts, global partners, or customer
incentives directly in BTC. By auto-converting earned dollars into Bitcoin every day, BTC Inc is feeding its own
circular Bitcoin economy: earning in fiat, stacking sats, and spending natively in BTC, with bigger plans ahead to
advance Bitcoin as a true medium of exchange and a superior form of currency for business.

![](/images/case-study-btcinc/photo8.jpg)

## Results

BTCPay Server has become a critical part of BTC Inc's operations, delivering measurable results across its workflows.

![](/images/case-study-btcinc/photo9.jpg)

These outcomes validated BTC Inc's approach. Bitcoin was not just accepted - it worked. And BTCPay Server made that
possible at scale.

## Summary

What began as an experiment in accepting Bitcoin at events grew into a company-wide transformation. By gradually
integrating BTCPay Server across payments, payroll, treasury, and automated Bitcoin accumulation, BTC Inc built more
than just a technical stack. It created a workplace where Bitcoin is used daily and a culture grounded in open-source
software.

BTC Inc's real-world feedback helped improve BTCPay for the broader ecosystem. As a global media and events company
committed to building bridges to Bitcoin and empowering humanity, it is now shaping its experience into a framework
others can adopt. By turning its operations into a replicable model for Bitcoin-native finance, BTC Inc is helping
others move closer to a hyperbitcoinized future.

You can [download a PDF of this case study on this link](/case-studies/btcinc.pdf).

