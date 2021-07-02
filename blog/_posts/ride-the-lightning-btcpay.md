---
title: "Ride The Lightning: An open-source project making node management easy for everyone"
author: pavlanex
date: 2019-03-09
category: plugins
tags:
  - "lightning-network"
  - "services"
coverImage: /images/RTL-BTCPay.png
permalink: /ride-the-lightning-btcpay
---
<PostMeta />

When Lightning Network was first added to BTCPay Server on the February 25th 2018, the user experience was pretty rough for quite a while.

If you're one of the old-schoolers, you probably used a command line to manage your node and channels. While there's nothing wrong with CLI if you're tech-savvy, for most people that's far from a desired user experience.

Lightning protocol matures at a rapid pace. Applications are built constantly, improvements are made daily and at BTCPay we're happy to be part of the Lightning boom.

Today, BTCPay is one of the easiest ways to [launch](https://docs.btcpayserver.org/deployment/deployment) a self-hosted Lightning node and send or receive payments without the intermediate. Wallet applications like [Zap](https://github.com/LN-Zap/zap-tutorials/blob/master/zap-desktop-btcpay-server.md), [Spark](https://github.com/shesek/spark-wallet), [Joule](https://lightningjoule.com/), [Pebble](https://github.com/IndieSquare/pebblewallet), [Zeus](https://github.com/ZeusLN/zeus) allow seamless integration with BTCPay. All of these wallets provide exceptional user-experience for paying and getting paid, but the node management itself is not the main purpose of any of the wallets, nor it should be.

**We're proud to announce that managing your node and channels, without ever leaving your BTCPay is now possible thanks to Ride The Lightning integration.**

In this article, I am joined by [Suheb Khan](https://twitter.com/Sauby_k), one of the developers behind the  [Ride The Lightning](https://github.com/ShahanaFarooqui/RTL). Suheb was very kind to break down the RTL and co-author the article.

## What is Ride the Lightning?

_Suheb_: ‘Ride The Lightning’ or RTL in short, is a browser based node management UI, which aims to make operating a lightning node easier and intuitive. RTL currently interfaces with LND node via its REST APIs, to provide an operating UI.

![](/images/BTCPay-Ride-The-Lightning-RTL-Interface.png)

## What's the story behind it?

_Suheb_: Development on RTL started in Sep 2018, with the first release on Oct 8, 2018, which we announced via our [medium post](https://medium.com/coinmonks/introducing-rtl-a-web-ui-for-lnd-d0bb0d937e91). The conversation to build such an app started a bit earlier in July 2017 when Shahana (a web developer) was looking to start a side project, and I (a Bitcoin and Lightning enthusiast) was struggling to figure out a better way to get all the information out from my LN Node, without operating a command line.

I reached out to [Stadicus](https://twitter.com/Stadicus3000/) on a whim, to get his thoughts on it, and he was kind enough to respond and gave us encouragement to start building this project. He also got us in touch with [Rootzoll](https://twitter.com/rootzoll) and [whiteyhat](https://twitter.com/whiteyhat) who were in the middle of working on their ‘[Raspiblitz](https://github.com/rootzoll/raspiblitz)’ and ‘[SatoshiGames](https://satoshis.games/)’ projects respectively.

This group overall, gave us encouragement to work on and develop RTL initially.

RTL is our way to contribute and encourage the developing ecosystem of Bitcoin and Lightning. We believe in the game changing potential of this amazing innovation and want to make it, as easy to use, as possible.

## Features

_Suheb_: RTL is attempting to expose most of the LND APIs via a browser UI, so that a user need not operate a command line for most of the operation. Currently, we have 57% coverage of LND APIs, which covers many basic and advanced features available with LND.

![](/images/BTCPay-Ride-the-Lightning-channels.png)

Current feature set includes:

### Dashboard

- View of the critical node parameters (balances, peers, chain sync status)
- Fee report
- Channel status (active, inactive, pending)
- Local vs Remote Channel capacity
- Network information

### LND

- Peer Management (Connect and Disconnect)
- Channel Management
    - Open/Close channels
    - Update channel policy for individual channels or mass update.
    - View status for Pending and Closed channels
- Verify & Send Payments (includes handling invoices with zero amount for tipping)
- Generate & Manage Invoices (with QR code)
- Node & Channel Lookup (get information on any node/channel on the network)
- Wallet (Funding and Withdrawal)

***Easily set up fees for your channels:***

![](/images/BTCPay-Ride-the-Lightning-Setting-up-Fee.png)

## Integrating RTL into BTCPay?

_Suheb_: This is an interesting story.

We were interested into getting BTCPay much earlier and when I reached out to [Rockstardev](https://twitter.com/r0ckstardev), we were guided to join the Slack. There we learned that BTCPay integration would require a docker image.

We were lightly familiar with docker and could generate an image easily, but the real struggle was the hooks which were required to get into BTCPay stack. This was the tricky part, because RTL is not a standalone application and is dependent on LND to be able to function. We were not able to figure out the hooks which BTCPay’s docker based architecture offered, to integrate. Additionally, with other development priorities of RTL, we were also not able to devote time to it, while being painfully aware that [Nicolas](https://twitter.com/NicolasDorier) was searching for a UI solution for LND on BTCPay.

This is where [Jeff](https://twitter.com/vandrewattycpa)’s contribution was critical and, in a way, a bit serendipitous as well.

An issue was opened on our GitHub, to provide a docker image for better adoption of RTL. We were interested but needed more collaboration, which the person who opened the ticket was not able to offer. Out of the blue, Jeff jumped on the ticket and offered to guide us to integrate with BTCPay. We latched on to it, and worked 2 weeks non-stop, to make it happen.

In case anyone is interested, you can follow the whole development journey on [this Github issue](https://github.com/ShahanaFarooqui/RTL/issues/44).

In short, we enabled RTL to integrate, by providing application hooks and authentication logic, which also made RTL lot easier to integrate with any other platform, as well. Following environmental parameters were added to RTL to enable this:

- a) LND\_SERVER\_URL
- b) MACAROON\_PATH
- c) NODE\_AUTH\_TYPE
- d) LND\_CONFIG\_PATH
- e) RTL\_CONFIG\_PATH
- f) RTL\_SSO
- g) RTL\_COOKIE\_PATH
- h) LOGOUT\_REDIRECT\_LINK

## Getting Started with Lightning Network Node management and RTL

_Suheb_: We have created a detailed medium post (with screenshots) on how to operate RTL, which users can refer to, to figure out how to perform different operations on RTL.

**Read the [RTL Getting Started Guide](https://medium.com/@suheb.khan/how-to-ride-the-lightning-447af999dcd2)**.

To deploy [RTL on your BTCPay Server](https://docs.btcpayserver.org/features/lightningnetwork#getting-started-with-btcpay-and-lnd), just update your server and then go to Server Settings >  Services > Ride the Lightning to open the dashboard. You can open it from your mobile phone by scanning a QR code as well.

![](/images/RTL-in-BTCPay.png)

## What are some of the security risks, attack vectors users should be aware?

_Suheb_: RTL was originally built to be operated by a home node operator, using the app to communicate with the LND node on a local network. With this assumption in mind, we have provided a simple setup which makes it easy to get the UI up and running.

The access to the RTL node server is via HTTP. This makes for the communication to be un-encrypted b/w RTL node server and the browser. If, the user is on the home network or running the browser and RTL on the same computer, this should be fine. Any other setup should make use of a webserver to serve RTL and ensure that it's accessed via HTTPS and not HTTP.

RTL users on Nodl and BTCPay Server have a secure setup, as RTL is served from an nginx server which provides an HTTPS connection and makes the whole communication encrypted.

We are working on creating a guide for setting up an nginx server and provide simple instructions on how to secure the communication b/w RTL and browser. We also welcome contribution on this from the community and would happily accept a documentation PR which provide clear setup for users.

***Channel management in RTL:***

![](/images/RTL-Channel-managment.png)

## What's in store next for RTL?

_Suheb_: We have an endless list of items to work on. Other than the [regular issues,](https://github.com/ShahanaFarooqui/RTL/issues) which keep popping up from users, which we prioritize for development, we have some high-level goals, which we want to accomplish for RTL. Below list is not necessarily in any priority order.

**Multi-node Management** – We want to provide users an ability to manage multiple-nodes via a single UI. The idea is to provide a top-level page, which will list all the nodes which are configured for RTL. User would be able to drill down to each node from that page and manage nodes from a single RTL instance.

**RTL installer** – Automate RTL setup so that installation process is simpler than the current method of following the steps provided in the Readme file. This should also help with the configuration of nginx and letsencrypt, to enable access via https. Contribution on this is more than welcome.

**Better Mobile UX** – Current UX for mobile users is less than optimal. We are attempting to provide a responsive UI, so that users can access the same app via browser on any device. This requires more UX optimization for mobile resolution.

**C-Lightning** – We want to extend the RTL UI framework to other lightning node implementations as well. The current architecture can support it without major re-engineering, as we have an API abstraction layer written in nodejs. Additionally, projects like Lighter, offer a lot of promise to speed up the development process for this.

**Globalization – Multi-language support**. We can provide a customizable framework for multi- language support. But to extend support for other languages would require contribution from the development community, to use the framework and create multi-language support.

**Ongoing UX improvement** – We believe UX improvement is a never-ending cycle. And, we must keep the UI/UX fresh and optimal with ongoing user feedback and inputs from UX subject-matter- experts. Contribution on UX suggestions is more than welcome and we have created a project to exclusively focus on UX issues and priorities.

**Automated Testing** – As the functional complexity increases, we need to add automated testing to ensure quality and less bugs. Another area, where developer contribution is more than welcome.

## How to help and contribute to RTL

_Suheb_: As indicated in the answer to the goals question, there are many areas where the community can contribute developer, user alike:

- UX experts – Provide inputs to improve the usability of the application
- Developers – RTL Installer, Identify and provide fixes for Front-end bugs, Automated tests.
- Sysadmins/Infra experts – Install automation, Webserver configs, setup guides
- Users – Testing, Reviews, Documentation

We want RTL to be an open and thriving community project, as our intention is to always keep RTL open-source and free for all.

RTL is a passion project, which we support along with our day jobs. Our intention is to contribute to the Bitcoin community with the skills we have. We are not experts in all the skills required to keep this project going and are learning every day. Our hope is that, RTL will ease user onboarding to lightning and can contribute a little bit towards Bitcoin and lightning growth and adoption.

Any contribution to project from development, testing or review perspective is welcome as RTL will remain an open-source and free for all software.

## Wrapping it up

We hope you enjoyed the article and learned something new about the Lightning node management.

If you have any questions, feel free to ask them on our [community chat](https://chat.btcpayserver.org/). I'd like to thank Suheb for his time and for sharing great tips and insights on the fascinating project.

Hopefully, BTCPay community will provide valuable feedback that will help them to continuously grow and improve their open-source software.

You can follow Suheb on [Twitter](https://twitter.com/Sauby_k) and RTL project on [GitHub](https://github.com/ShahanaFarooqui/RTL).
