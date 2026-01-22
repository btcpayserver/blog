---
title: "BTCPay Server 2025 Progress Report"
date: 2026-01-22
author: Pavlenex
category:
  - "releases"
tags:
  - "btcpay-server"
  - "roadmap"
  - "report"
coverImage: "/images/2025-report-featured.png"
permalink: /2025-report
---

This report outlines our progress over the past year. We remain focused on building free, open source payment infrastructure that enables businesses and individuals to embrace Bitcoin payments, regardless of geographic, political, or financial barriers.

## **Supporters and team**

Our team grew to nine members this year, including a new full time contributor, [Thg0.0](https://x.com/thgO_O/status/1951329983789445413?s=20), and a renewed grant for [Tobses](https://x.com/TChileta/status/1867910959538598026?s=20). Both roles were made possible through co-funding partnerships: Tobses is supported together with [Btrust](https://www.btrust.tech), and Thg0.0 together with [Vinteum](https://vinteum.org). CodeInVenis [received a grant](https://x.com/bitshala_org/status/1991785130906861656?s=20) to work on BTCPay localization and deployments in India by [BitShala](https://bitshala.org).

We are also grateful to our supporting partners: Spiral, OpenSats, Tether, Human Rights Foundation, LunaNode, Wallet of Satoshi, Coincards, IVPN, and Unbank. Every supporter renewed their commitment in 2025, and we did not lose any supporters. As a result, we are in a strong financial position and expect to remain sustainable through the coming year.

![](/images/Report2025/Report-1.jpg)

## **Product updates**

### BTCPay Server

Product development in 2025 focused on delivering long planned features while continuing to improve stability and user experience. We shipped **three major releases**: 2.1, 2.2, and 2.3, alongside dozen minor releases that delivered incremental improvements and bug fixes.

* [Version 2.1](https://blog.btcpayserver.org/btcpay-server-2-1-0/) introduced a redesigned multisig [experience](https://www.youtube.com/watch?v=V95pLvVTAqM), making collaborative custody easier, alongside improvements to fee acceleration and new e-commerce integrations (Shopify V2, ECWID and Ghost).   
* [Version 2.2](https://blog.btcpayserver.org/btcpay-server-2-2-0/) followed with reporting and accounting improvements, based on real-world [feedback](https://blog.btcpayserver.org/case-study-btcprague/), Miniscript support, and the introduction of a brand new [plugin builder](https://plugin-builder.btcpayserver.org/public/plugins), laying the groundwork for a more sustainable and lean development through a modular plugin ecosystem.   
* [Version 2.3](https://blog.btcpayserver.org/btcpay-server-2-3-0/) was the largest release of the year and marked a major milestone for the project, introducing [subscriptions](https://www.youtube.com/watch?v=CV5wckX7x80) and the ability for operators to [monetize](https://youtu.be/THxH6jRrtgQ?si=YK7_AV3Pai6yQLNu) their BTCPay Server instances, 14 language packs and new integrations.

![](/images/Report2025/Report-2.jpg)

### BTCPay App

Most of the objectives [outlined at the start of the year](https://blog.btcpayserver.org/2024-year-in-review/) were realized, one notable exception was the [BTCPay App](https://github.com/btcpayserver/app), where development was paused in Q2 due to a lack of available contributors. We intend to resume work in this area when capacity allows. Our conviction in retail payments remains strong. This view has been further validated when Square enabled Bitcoin payments for millions of merchants.

### Integrations and plugins

#### Plugins

The plugin ecosystem continued to mature in 2025 and remains central to our 2026 roadmap. Plugins allow new functionality to be developed and shipped independently of BTCPay Server core, making iteration faster and lowering the barrier for experimentation. This approach enables developers to build on top of BTCPay without being constrained by our development cycles, while still benefiting from immediate validation from an established user base.

Over the year, the [ecosystem](https://plugin-builder.btcpayserver.org/public/plugins) grew to **more than 40 published plugins**, with over a dozen additional plugins actively being developed or beta tested.

Notable 2025 additions included plugins such as: [LSP](https://x.com/BtcpayServer/status/1950924435612897546?s=20), [Exolix](https://plugin-builder.btcpayserver.org/public/plugins/exolix-plugin), [DePix](https://x.com/thgO_O/status/1963649535411880112?s=20), [Branta](https://x.com/BtcpayServer/status/1981029395818025195?s=20), [Peach](https://x.com/proofofsteph/status/1981076497327645174?s=20), [MavaPay](https://x.com/LilianNwamaife/status/1992502563351245262?s=20), [MarkAsPaid](https://plugin-builder.btcpayserver.org/public/plugins/markpaid) and [Shopstr](https://x.com/BtcpayServer/status/2004236805265396138?s=20), each addressing specific merchant, operational, or ecosystem needs. More advanced protocol level work was also enabled through plugins, including [Boltz](http://Boltz), [Cashu](https://x.com/d4rp4t/status/1924474491624714507?s=20) and Ark plugin, which [debuted](https://x.com/mariusoffchain/status/1954491306505277576?s=20) on mainnet and was used to onboard merchants in Riga.

![](/images/Report2025/Report-3.png)

#### Integrations

Integrations remain a cornerstone of our mission to make Bitcoin a practical payment option within existing merchant workflows. By connecting  to established e-commerce platforms and services, we aim to reduce adoption friction and allow merchants to accept Bitcoin without rethinking their operational stack.

The integration ecosystem now includes **over 30 e-commerce platforms**. During the year, we expanded integrations with [Cal.com](https://x.com/BtcpayServer/status/1953487622480814403?s=20), [Zaprite](https://x.com/ZapriteApp/status/1882811806382461162?s=20), [Ghost](https://x.com/BtcpayServer/status/1923391823059333356?s=20), [Shopify V2](https://x.com/BtcpayServer/status/1910347038140608901?s=20), [ECWID](https://x.com/BtcpayServer/status/1924865412149477765?s=20), [GiveWP](https://x.com/BtcpayServer/status/1950925269033791646?s=20) and others further extended BTCPay Server’s reach into established merchant ecosystems. 

These integrations and plugins have helped establish stronger working relationships with companies and projects beyond the Bitcoin ecosystem.

## **Adoption and education**

Adoption in 2025 reflected BTCPay Server’s continued use as production payment infrastructure across a wide range of use-case. Bitcoin was embraced by established organizations such as the [European Squash Federation](https://x.com/SatoshiConsult/status/1883973446138265650?s=20) and [Oslo Airport’s TaxFree](https://x.com/SatoshiConsult/status/2001610418586779653?s=20) service, as well as the largest datacenter provider in Costa Rica [integrating](https://x.com/Boltzhq/status/1925116813550985670?s=20) Bitcoin payments into operations.

Community-led merchant onboarding remained an important driver of adoption. In Prague, coordinated efforts resulted in more than [25 in-person merchants accepting Bitcoin](https://x.com/BtcpayServer/status/1956022540423327982?s=20) using BTCPay.

At an enterprise level, BTCPay Server continued to be used for large-scale payments. Namecheap processed a [2M USD Bitcoin payment](https://x.com/BTCTimescom/status/1966047483554885801?s=20) using BTCPay Server, the largest Bitcoin domain sale recorded to date. Payment focused businesses also continued to build on top of the platform, including Unbank, which surpassed [40M payments within six months](https://x.com/BtcpayServer/status/1892257773397672067?s=20), and Lightning Checkout, which operates a [payment processing business](https://x.com/LNCheckout/status/1900566278722519133?s=20) using BTCPay Server as its core infrastructure. We demonstrated operational reliability at scale by supporting a deployment in Las Vegas Bitcoin 2025 conference that set a [Guinness World Record](https://www.guinnessworldrecords.com/world-records/776977-most-cryptocurrency-point-of-sale-transactions-in-8-hours) for the most cryptocurrency point-of-sale transactions processed in eight hours **4,187.**

New tutorials were published covering [multisig usage](https://x.com/BtcpayServer/status/1914364935376609430?s=20), [USDT plugin](https://x.com/planb_network/status/1884282874654003290?s=20), alongside contributor onboarding initiatives aimed at expanding the [pool of active developers](https://x.com/BtcpayServer/status/1922699240033206411?s=20). These materials were complemented by in person education, including [BTCPay Day in Prague](https://www.youtube.com/watch?v=sXO3NU-67rs), workshops, and local training sessions led by our community.

![](/images/Report2025/Report-4.png)

## **Conferences and community events**

Community engagement in 2025 focused on sustained presence and local circular economies education. Over the course of the year, our contributors participated in more than **25 conferences, workshops, meetups, and community events** across Europe, Africa, Asia, and Latin America, alongside **15+ podcasts and interviews.**

A notable highlight was [BTCPay Day in Prague,](https://x.com/BtcpayServer/status/1936870817352339632) which brought together over **130 attendees** for a full day dedicated to our project, with guests across the industry such as Samson Mow, Francis Pouliot and Kilian Rausch.

[![](https://img.youtube.com/vi/WqyNp7W1TEQ/mqdefault.jpg)](https://www.youtube.com/watch?v=WqyNp7W1TEQ)

Workshops and hands-on sessions played an important role, enabling local communities to deploy BTCPay Server in [real environments](https://www.youtube.com/watch?v=PJSVJkOHTR0) and adapt it to regional needs. Ongoing presence builds trust, transfers knowledge, and keeps us focused on real-world use cases. It ensures that development priorities continue to be informed by how BTCPay Server is actually used, rather than by abstract assumptions.

[![](https://img.youtube.com/vi/sXO3NU-67rs/mqdefault.jpg)](https://www.youtube.com/watch?v=sXO3NU-67rs)

## **Summary** 

Despite 2025 being full of unique challenges, the project remained resilient. We shipped three major releases, expanded the plugin ecosystem to support enterprise-scale payments, set a Guinness World Record in Las Vegas, ran payments infrastructure at the largest European Bitcoin conference, produced educational content and documentaries, and helped drive Bitcoin adoption across multiple regions.

We also stabilized the team, welcomed new contributors, and saw individuals step into larger roles, laying the groundwork for the next generation of free and open-source software leaders in the Bitcoin ecosystem.

None of this would have been possible without the continued trust and support of the community, from those who follow our work and advocate for it publicly, to the [BTCPay Server Foundation](https://foundation.btcpayserver.org) supporters who back us financially. This support is what allows us to remain independent, focused, and resilient, and gives us the freedom to keep building open infrastructure that serves merchants, developers, and communities worldwide.  

We wish you a successful and productive 2026, and thank you for being part of this journey.  💚