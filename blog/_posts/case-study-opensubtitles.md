---
title: "How OpenSubtitles, home to over 7 Million subtitles and 8,000 contributors, utilizes BTCPay to facilitate bitcoin payments for memberships and donations"
date: 2024-06-10
author: Pavlenex, Webworthy
category:
  - "case-studies"
tags:
  - "case-study"
  - "API"
  - "merchants"
  - "ai"
coverImage: "/images/opensubtitles-featured.png"
---

Founded in 2006, [OpenSubtitles.org](https://OpenSubtitles.org) is the world's largest resource of movies and TV series subtitles. The website offers subtitles in almost any language imaginable. OpenSubtitles plays a crucial role in making cinematic stories more accessible and enjoyable for people with hearing disabilities and non-native speakers, significantly enriching their viewing experience. Utilizing full-text search capabilities and a unique movie hash system, the website ensures precise results for every search query.

![](/images/opensubtitles-1.png)

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/opensubtitles.pdf).

A few years after its inception, the platform underwent a significant transformation, launching OpenSubtitles.com. This new phase introduced a REST API, now leveraged by hundreds of projects, handling 1200 API calls per second—a testament to their success in scaling, high availability, backup, and monitoring.

Initially, the lack of a comprehensive subtitle website that could meet all user requirements was evident. There was an acute shortage of APIs, multi- language search functionality, and accurate hash search results, with most platforms offering subtitles in just one language.

Recognizing these gaps, OpenSubtitles is inspired to harness AI translation capabilities, aiming to realize the ambitious vision of providing on-demand, real-time subtitles for every video, revolutionizing access to globally- accessible content.

> With the advent of AI translation capabilities, our vision is to fulfill the dream of providing subtitles for every video worldwide on demand and in real-time.

![](/images/opensubtitles-2.png)

## Choice of BTCPay Server

To ensure sustainability, there are [several ways](https://www.opensubtitles.org/en/support#vip) in which users can help OpenSubtitles. Besides getting involved as a developer, users can donate or become VIP members, to ensure no ads and several other benefits. As a global website, it is important that any user, no matter where they’re from can send a payment without any friction. Bitcoin was an obvious choice for this, and as a reputable open-source project, BTCPay Server appeared on their radar.

> We wanted to have a way to accept bitcoin payments and donations on our website. As a reputable open-source solution, BTCPay Server was an obvious option to evaluate. During our research we realized that it’s the only solution that didn’t require KYC (Know Your Customer) procedures

![](/images/opensubtitles-3.png)

## Implementation

The platform utilized BTCPay Server [Docker deployment](https://docs.btcpayserver.org/Docker/) together with the [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/)] to create an automated flow and upgrade their users through a webhook. Interestingly, they’ve also leveraged the ability to update effortlessly through a command line, by creating a cron job.

> Integrating BTCPay Server was straightforward; our aim was to facilitate donations as well as payments for VIP Memberships and other purposes such as advertising and partnerships with other websites. Webhooks are pivotal in this process; once a transaction is confirmed, users are automatically upgraded to VIP status.

![](/images/opensubtitles-4.png)

## Features and benefits

The adoption of BTCPay Server by OpenSubtitles has significantly enhanced financial operations and user payment options. This integration allows OpenSubtitles to support several cryptocurrencies and payment networks, including Bitcoin, BTC Liquid, Bitcoin over the Lightning Network, and Monero, catering to the diverse preferences of its global audience.

OpenSubtitles' decision to implement BTCPay Server is rooted in its commitment to principles of self-custody, resilience, and hard money, reflecting a broader philosophy of financial autonomy and security.

> It's becoming increasingly essential for online payments to include crypto acceptance as a standard practice. It's disheartening that this hasn't yet become as commonplace as it should be. The numerous issues with banks and fintech institutions, including the risk of funds being held and services being canceled abruptly, only exacerbate the problem.

> Thanks to BTCPay Server, we now have the capability to accept cryptocurrency payments according to our preferences.

![](/images/opensubtitles-5.png)

## Conclusion
In conclusion, integrating BTCPay Server enabled OpenSubtitles to freely accept multiple payments to their broad user-base, broadening their reach to a global audience, while allowing them to retain core values of privacy and efficiency. Despite some technical hurdles, the move towards bitcoin payments has clearly been a win.

With BTCPay Server, we've taken a significant step forward in realizing our vision of a more inclusive and resilient financial ecosystem.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/opensubtitles.pdf).
