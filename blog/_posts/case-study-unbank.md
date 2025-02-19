---
title: "$40 Million Volume and 41,416 Bitcoin Transactions In Six Months: How Unbank Deploys BTCPay Server At Scale"
date: 2025-02-19
author: Pavlenex, Webworthy, Unbank team
category:
  - "case-studies"
tags:
  - "case-study"
  - "enterprise"
  - "merchants"
  - "atm"
coverImage: "/images/unbank-featured.png"
---

[Unbank](https://unbank.com), founded in 2014, is the oldest and most established Bitcoin ATM network in the U.S. 

As an early bitcoin exchange and cash-focused financial service, operating a network of over 850 ATMs across the country, Unbank stands as one of the largest of such networks. 

![](/images/unbank-1.png)

Bitcoin ATMs cater to the underserved population and those who prefer cash transactions. Through Unbank, individuals who want privacy and security can have instant access to bitcoin for various uses, including investments, transfers, or payments as an alternative financial solution.

Unbank offers a large array of payment methods. The main volume driver is cash transactions through three different channels: purchases on Unbank’s own ATMs, purchases at retail registers, and finally cash-outs at partner ATMs.

After years of operating bitcoin ATMs, Unbank realized in 2021 that it was time to develop a mobile app to enhance its offerings and improve services. Through the Unbank app, users can buy and sell bitcoin faster than ever before. 

In addition to supporting cash transactions, users can also sell bitcoin and receive funds via digital payment methods like Venmo, PayPal, or debit cards. Furthermore, they can withdraw cash at over 26,000 conveniently located ATMs at partner locations such as CVS, Walgreens, or Rite Aid.

## Considerations on Switching to BTCPay Server

Unbank’s key benchmarks for software were reliability, scalability, and cost. But further, the team was in search of a non-custodial and secure software that would seamlessly integrate into existing user flows. 

The preceding provider caused business interruptions due to regular API-related issues. It was expensive for the limited options it had, and it was never able to meet Unbank’s reliability needs. 

As for any financial company, security is always the top priority and that means any new software has to meet high requirements for quality assurance and security. With BTCPay Server, Unbank found a solution that meets their needs for a robust, customizable, and non-custodial solution.

The BTCPay Server project has come a long way; it has matured into a robust enterprise solution that powers not just small online shops but also caters to high-volume requirements such as exchanges or payment providers.

Processing almost 200 transactions per day demanded a solution capable of processing high volumes during peak hours without any compromises.

## Building Non-Custodial Exchange Flows

The core objective of the implementation was to build a robust exchange that would drive buy and sell transactions on their app. Unbank’s business model is fully non-custodial and with BTCPay the core transaction flow remains unchanged, matching its existing flows and user experience.

End users bring their own wallets to interact with Unbank’s services to either purchase bitcoin or sell their bitcoin to get cash. When the customer is sending or receiving bitcoin, Unbank never accesses the customer’s wallets.

Unbank founder, Emilio Pagan-Yourno, had the unfortunate experience of having bitcoin on Mt. Gox when the infamous exchange collapsed. That experience made him aware of the risks that come with custodial exchanges; hence he designed Unbank as a non-custodial service. 

BTCPay Servers' non-custodial architecture was therefore a perfect fit for Unbank’s operations.

While self-hosting isn’t always smooth sailing and comes with responsibility, the Unbank team decided that hosting a BTCPay Server instance on a dedicated VPS was within the realm of possibility and maintenance would be reasonable.

The conclusion was that BTCPay would allow quick deployment of a highly robust and secure system without a third-party intermediary and costly SLAs. With BTCPay, the exchange flow was seamless and processed extraordinarily quickly.

![](/images/unbank-2.png)

## Easy to Implement, Easy to Learn

BTCPay Server has set a high bar for Bitcoin payment processing solutions. The project has grown to a large team and thankfully received sufficient financial support to maintain its complex software. 

BTCPay Server made it straightforward for Unbank’s technical team to integrate and deploy a self-hosted and robust bitcoin payment system with minimal friction.

### Docker-Based Deployment

Docker-Based Deployment
Since Unbank already utilizes Docker for containerized applications, deploying BTCPay Server as a self-hosted solution was seamless. The team could spin up the server with a simple docker-compose setup, making installation, upgrade, and maintenance as easy as working at McDonald’s.

### Pre-Built Integrations 

BTCPay Server supports various e-commerce platforms and APIs, reducing the need for extensive custom development. The Unbank team leveraged its built-in webhooks, APIs, and invoice-handling support, simplifying the connection to our backend and mobile applications.

### Customizable and Extensible Software 
BTCPay Server's open source nature gave Unbank complete flexibility to customize the software to its specific business needs. Whether tweaking invoice settings, adjusting settlement flows, or integrating with internal reporting systems, BTCPay allows the team to stay in full control.

BTCPay Server further impresses with its web interface and stunning dashboard which helps to manage payment settings, invoices, and store configurations without requiring deep technical expertise.

If Unbank’s operations team has technical support demands that in-house developers can’t solve, reaching out to the BTCPay developer community always gets quick feedback. The community is very active and offers numerous learning resources. The Unbank team found it easy to troubleshoot and optimize their integration.

By being both developer-friendly and straightforward to deploy, BTCPay Server allows rapid innovation with a minimal learning curve and maximum flexibility.

## Leveraging BTCPay Server as a Small Team

For start-ups and small teams, resources are everything but abundant. Allocation of engineering hours requires meticulous planning, or else teams risk burning out. Failure to meet deadlines could ultimately lead to disaster.

BTCPay Server has dramatically reduced Unbank’s risks. With features like docker install, documentation, and direct support, the whole environment is meant to enable fast builds and agile development.

The official BTCPay Server documentation provides clear guidelines on installation, API usage, and customization, allowing developers to get up to speed quickly. Unbank’s backend developers could easily interact with BTCPay Server through its API, making it effortless to generate invoices, track payments, and trigger automated workflows via Unbank’s console. 

> We’re a small team, we aren’t venture-backed, everything is bootstrapped, we started this company a little over 10 years ago, and we don't have the resources that Coinbase, Kraken, all of these big guys have, so to have a free open source software with this many features and which is so well thought-out and developed is a huge asset for us, Emilio Pagan-Yourno shares.

Unbank’s small engineering team was able to get fully operational with BTCPay within just three months.

![](/images/unbank-3.png)

## Seamless UX in seconds

BTCPay Server is not just a backend but also provides everything necessary to build a beautiful product with a clean UI.

The user experience for buying or selling is optimized for ease of use. Unbank customized the exchange flows, using BTCPay Servers’ default libraries and design guidance. 

While we designed and developed our own UI for the mobile app, we used many design patterns from BTCPay Server. The design language and user experience for BTCPay Server greatly impacted how we made our mobile app user-friendly.

![](/images/unbank-4.png)

## Enterprise performance, close-to-zero failure rate

While Unbank operates with limited resources, BTCPay Server has enabled it to deploy systems that meet high standards. Resource efficiency, uptime, failure rate, or performance rival enterprise solutions on the market.

> With the centralized service we used before, we saw countless API issues, transactions failing that we'd have to re-broadcast because their API went down. The stability has increased tremendously from operating on BTCPay Server. It's just a more reliable software and new releases are tested thoroughly, shares Oshane Bailey, engineering lead.

Maintenance and updates with BTCPay Server are critical exercises and can put business continuity at risk. However, with the well-tested releases and community feedback, the upgrades and fixes are mostly without interruptions.

## Achieving cost reduction and improved stability

After building with BTCPay on the app first, Unbank has decided to also switch their ATM network’s exchange backend. While the migration took more time to plan and implement, the rewards were significant — improved stability and cost savings in the thousands of dollars. 

> Before switching, we were using a centralized platform similar to Bitgo which can be really expensive. They offer insurance and other good instruments to mitigate risks but ultimately, it is a central point of failure if their services go down. I don't really think it aligns with the values that we should have as people who adopted Bitcoin, so with BTCPay Server you can host it in really any environment you want, and it’s super flexible.” - Emilio Pagan-Yourno.

Unbank has always advocated for self-custody. This approach may lose some points on user-friendliness but reduces business risk and ultimately benefits overall safety for users.
With BTCPay Server the entire exchange process is non-custodial for users. This is safer but requires responsibility and education. The upside of building non-custodial is that security and stability are much easier to maintain as Unbank doesn’t have to provide user wallets.

> If you're running a full node on Digital Ocean, that can be upward of $300 a month. With BTCPay Server, you can set up an instance on Luna node and that can be anywhere from $30 to $40 a month, it can be really cost-effective; $30 to $40 a month isn't really going to break the bank for a lot of start-ups.

![](/images/unbank-5.png)

## Results

Unbank finalized its migration to BTCPay Server on June 1, 2024. Between then and December 31, 2024 the **total number of transactions recorded was 40,416**, driving the **gross volume to $40 million**.

![](/images/unbank-6.png)

Of the total volume,Unbank Bitcoin ATMs generated a volume of close to $38 million with over 30,000 transactions. ATM cash withdrawals accrued to a combined volume of over $2,5 million with a little over seven thousand transactions. Bitcoin buy transactions at cash registers saw over $400,000 in volume. Combined sell transactions on Venmo, Paypal, and Push to Debit Card cumulated to $450,000 through around a thousand individual transactions.

Transaction volumes such as Unbank’s require the highest standards in software reliability. With transaction counts in the tens of thousands, BTCPay demonstrated its reliability as a highly robust basis to scale Unbank’s operations, all while minimizing risk and keeping cost economical.

> BTCPay Server contributes to the adoption of bitcoin and the whole ecosystem in an incredible manner. They really put in a lot of thought when developing the software. The whole point of Bitcoin is its use as electronic cash for the internet, so acceptance of bitcoin or distribution of bitcoin should be on your terms, there should be no middleman. BTCPay server allows anyone to host a node and accept Bitcoin payments without any fees, so it aligns perfectly with the values of Bitcoiners. Emilio Pagan-Yourno.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/unbank.pdf).