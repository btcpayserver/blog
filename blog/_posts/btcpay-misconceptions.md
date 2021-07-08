---
title: "Debunking BTCPay Server misconceptions"
author: pavlenex
date: 2019-03-13
category: announcements
coverImage: /images/BTCPay-Server-Myths.jpg
permalink: /btcpay-misconceptions
---

Got my morning coffee. Started the morning workout.

Okay, I lied about the workout.

Checked Mattermost, then Telegram.

Quiet.

It appears we won't be making a new BTCPay release today. Strange. I got used to that routine. We make releases frequently.

We're one and a half year old open-source project with exactly [373 releases](https://github.com/btcpayserver/btcpayserver/releases) at the time of writing. That's crazy!

Every day there's something to be done in BTCPay. Apparently, today is not that day.

That's why I decided to write a cringy titled article that will hopefully clear out some common misconceptions and confusion surrounding BTCPay. Hopefully, it will give you a better overview of who we are and why we do what we do.

Without further ado, here are 10 _shocking_ misconceptions.

## 1\. BTCPay only runs on Azure and LunaNode

Recently someone asked me: "When can I run BTCPay on something other than Azure or LunaNode".

I must admit the question caught me by surprise.  I wasn't aware of the perception people had, but I completely understand where that idea comes from.

First of all, BTCPay was **never limited** to only Azure or LunaNode. We just happened to create tutorials and 1-click deployments for those two providers.

In reality, it has **always been** possible to run BTCPay on a VPS of your choice. Due to a variety of providers, we can't document them all, but the community constantly tries to create a step by step [deployment tutorials](http://docs.btcpayserver.org/deployment/).

![](/images/You-can-deploy-BTCPay-on-a-raspberry-pi.jpg)

You can deploy BTCPay on any VPS which meets the minimal requirements:

1. Docker
2. 2GB RAM (It's possible with 1GB)
3. at least 15 GB of storage (depending on the [pruning option](https://github.com/btcpayserver/btcpayserver-docker#generated-docker-compose-) you select)

To  deploy BTCPay you just have to run these 4 lines on any VPS:

```bash
git clone https://github.com/btcpayserver/btcpayserver-docker
cd btcpayserver-docker
export BTCPAY_HOST="btcpay.yourdomain.com"
. ./btcpay-setup.sh -i
```

You can, of course, modify [the environment variables](https://github.com/btcpayserver/btcpayserver-docker#environment-variables) to adjust the installation to your business' specific needs.

The fact that you can deploy [BTCPay on Raspberry Pi](https://docs.btcpayserver.org/deployment/raspberrypideployment) speaks volumes about the countless optimizations we've done to make the entire stack less resource-intensive and easier to run. As a matter of fact, we encourage people to run BTCPay on their own hardware and use a variety of VPS providers to decentralize even more.

Soon with [Tor support coming,](https://medium.com/@BtcpayServer/about-tor-and-btcpay-server-2ec1e4bd5e51) the number of code lines needed to deploy will be 3, without the need to configure DNS or even have a domain name. Apart from that, we also have work being done on a web installation wizard that can guide you through the entire process in a sleek UI without needing to touch any code or SSH terminal. You can follow the progress on the web installer at this [github repository](https://github.com/Kukks/btcpayserver-installer).

## 2\. BTCPay supports shitcoins

Call it altcoin or shitcoin, whatever you prefer, but one thing is for sure, it's a never-ending debate.

![](/images/advancing-bitcoin-2019-btcpayserver-architecture-8-638.jpg)

Like many other projects and companies, we were recently accused of being a shitcoin payment processor. I won't lie, it left an entire community with a bitter taste in mouth and a feeling of disappointment and sadness. At least, that's how I felt.

As a hard-core Bitcoiner, the words of some people I used to look up to in this space really stung. Mostly because all of the contributors and developers are Bitcoiners to the bone.

The reality is, BTCPay does not support anything. We allow people to integrate their projects into ours, which users may opt-in to using or completely ignore.

Not a single altcoin is supported out of the box in BTCPay. When you deploy BTCPay with the default setup, you get a Bitcoin full node & Lightning network node. If you wish to include any of the supported alts, you must manually edit your environment variables to enable them. Modifying these requires technical know-how of logging into ssh and executing a few lines of code. For example, to add LTC to an existing environment (besides increasing the size and capabilities of your virtual machine) you'd have to do:

```bash
sudo su -
cd btcpayserver-docker
BTCPAYGEN_CRYPTO2="ltc"
. ./btcpay-setup.sh -i
```

Then add the derivation scheme in your wallet.

Altcoins are supported and maintained by their communities, not ourselves. BTCPay developers do not add alternative coins on request. Adding a new coin explicitly depends on the community and developers of those coins or their resources to hire developers to integrate it for them. Furthermore, BTCPay developers do not spend excessive time testing nor maintaining altcoins that have been integrated.

Our principles are very clear and simple and we emphasize them in our documentation.

- We do not debug altcoins
- We do not test it for devs who integrated it
- We do not advertise or support it (outside of update announcement)
- We don't make invasive changes in the code to accommodate the altcoin.
- We don't fix breaking changes which may break the coin integration.

We are Bitcoiners first because we believe Bitcoin is the best to achieve self-sovereignty.

The way in which we'll handle altcoins in the future is yet to be determined. It's really not our focus, but if it becomes any sort of bottleneck that prohibits our efficiency, we will isolate the altcoin code from the main codebase even more.

For now, it does not require effort on our part and it makes some communities happy. More importantly, we must admit that alt developers have helped us out with finding bugs, resolving them and improving performance, especially in NBxplorer.

If you'd like to understand our architecture and stance better just watch Nicolas' [presentation](https://www.youtube.com/watch?v=Up0dvorzSNM) on Advancing Bitcoin 2019 conference in London.

## 3\. BTCPay is expensive

BTCPay in itself is **free** and open-source software anyone can use. You can use a third-party BTCPay host or self-host a server.

If you decide to go with a self-hosted solution, which is highly recommended, you need to have it hosted somewhere, a cloud or on your own hardware. Cloud hosting costs money. As I mentioned in #2, the cost to run BTCPay depends on the deployment method you've chosen and the variables you set up which we have found to be as little as $3-5 USD monthly.

When making a decision whether to go with a [centralized payment processor vs BTCPay](https://docs.btcpayserver.org/btcpay-basics/btcpayvsothers), it is worth to consider that in BTCPay there are no fees. Zero, zip, zilch, nada.

If you're a very small business or just want to test BTCPay, there are people who allow others to use their servers for free or a small fee. We call them [third-party hosts](https://docs.btcpayserver.org/deployment/thirdpartyhosting).

The majority of third-party hosts offer BTCPay for free. [BTCPayJungle](https://btcpayjungle.com/), for example, hosts a BTCPay instance for over 400 users, merchants and developers and they maintain their server from user donations. [Lightbo.lt](https://lightbo.lt/) is one more great host.

## 4\. BTCPay is a company

BTCPayer Server is an **open-source project**, not a company. We rely on a network of contributors and users to provide support. The project exists for and because of the community. People working on BTCPay are voluntarily spending their time to improve the software for themselves and others.

You may not know this, but one of the contributors, [Kukks](https://github.com/Kukks/), quit his day-job to work on BTCPay voluntarily full-time. It's just pure passion and ideology that pushes us. We want to eliminate the middleman and help individuals and businesses become self-sovereign.

We try to fund any expenses from community donations, and we're thankful for each and every satoshi we receive.

As the project grows, it requires more and more time to maintain not only the software and support but the community itself. We're still unsure what BTCPay is and what it may become in the future, but one thing is sure: it will always be free, open-source and made by the community for the community.

![](/images/BTCPay-Contributors.jpg)

## 5\. BTCPay does not have a conversion to fiat

This statement is partially true. BTCPay does not have **an instant** conversion to fiat out of the box. Yet.

With BTCPay, you're your own payment processor and you own your keys. By owning the keys, you have the freedom to do whatever you like with your coins, because they're yours. That obviously means, that you can easily sell your coins to an exchange, but for now that's a manual process.

Good news is, that very soon we'll release a fiat bridge(currently codenamed [BtcTransmuter](https://github.com/kukks/btctransmuter-vnext)) that will allow users to not only instantly sell coins on an exchange but also provide an infinitely flexible system for a number of other use-cases. One of the additional use cases could be to provide liquidity to other users using their instance. That means, that if you want, you will be able to become a payment processor for others.

Until BtcTransmuter is ready for primetime, Blockonomics has made a [payment forwarding service](https://blockonomics.freshdesk.com/support/solutions/articles/33000234755-payment-forwarding-using-xpub-with-merchant-service) that is compatible with BTCPay which you can use as a workaround to convert to fiat. We're seeing an increased interest from exchanges and businesses that would like to provide instant-conversion services that BTCPay merchants can use.

## 6\. BTCPay and Shopify

BTCPay is a decentralized software, not a company. Shopify is centralized, walled garden. How can you get a decentralized software into a garden which not only does not accept new payment processors at this time but also requires a cut from processors?

You can't. BTCPay does not have Shopify integration. We tried really hard, but we were unable to get in there as an open-source project. That said, in future if someone wants to create a payment processor by using our technology stack and provide centralized service to merchants, that can be one way of getting into Shopify, but it's still going to require a lots of work.

This one is not a misconception nor a myth but deserves to be here as one of the most commonly asked questions and the fact people believe it's our fault we're not on Shopify yet.

## 7\. Only merchants can use BTCPay

BTCPay can be used by anyone who wants to receive payments on-chain or via the Lightning Network, without depending on a third party.

BTCPay has a [wide-variety of use-cases](https://docs.btcpayserver.org/btcpay-basics/usecase), and with the applications that we build on top of it, we keep extending the list constantly.

### Who can use BTCPay? - Anyone. Anywhere. Anytime.

Here are some of the most common users, besides retail or online merchants:

- Developers integrate into their projects (wallets, games, applications, platforms)
- Lightning Network users (BTCPay is one of the easiest ways to deploy a Lightning Node) who use integration to make their shopping easier and non-custodial thanks to our out of the box integration with wallets and extensions like Joule, Spark, Zap, ZeusLN, and Pebble.
- Charities use [payment buttons](https://docs.btcpayserver.org/features/apps#payment-button) and [crowdfunding](https://docs.btcpayserver.org/features/apps#crowdfunding-app) app to raise money
- Freelancers and small businesses use [payment requests](https://blog.btcpayserver.org/payment-requests/) to invoice their clients and get paid in Bitcoin by sharing a simple link
- People who want to offer BTCPay to become payment processors for local or global market
- Enterprises that want a secure, non-custodial technology stack for their Bitcoin operations
- Exchanges and payment forwarders that offer instant fiat conversion to users
- Hosting providers that offer BTCPay hosting

As you can see, BTCPay, similar to Bitcoin, can be anything to anyone, but most importantly it's there when you need it. Customize it, fork it, adjust it.

## 8\. BTCPay is a clone of BitPay

BTCPay is not BitPay's clone. We only have a **compatible API**, which means whoever uses BitPay can migrate to BTCPay with ease. Their API however, is far from perfect with a big list of inefficiencies from their model constantly reminding us to do better. That backwards compatibility is becoming a huge bottleneck, and we plan to roll out our own API, which will enable amazing extensibility options such as using BTCPay as a headless payment processor or managing your stores completely through an API. You can follow progress on the initial steps of this API work [here](https://github.com/btcpayserver/btcpayserver/pull/464).

## 9\. BTCPay is a competitor to centralized payment processors

BTCPay is a technology stack and, as we earlier determined, is way more powerful than any other centralized payment processor.

BTCPay is a payment processor **factory**, so how can you compare a single car to an entire factory? One thing people very often forget is that when you launch BTCPay, you're becoming a payment processor. It's up to you and your business to decide how you want to use BTCPay. You can use it as an internal, self-hosted solution to enhance privacy, security and save money or offer it as a service to other people and become a centralized processor yourself.

## 10\. BTCPay nodes are slow to sync, nobody's going to wait

We covered the importance of full nodes and syncing, validation of transactions in our [Sync Documentation](https://docs.btcpayserver.org/faq-and-common-issues/faq-synchronization). Syncing a Bitcoin node takes time. We developed a solution called fast-sync which allows you to quickly sync your server from a trusted node's snapshot. There are lots of pros and cons to this solution, so it's recommended to read our [Fast Sync](https://github.com/btcpayserver/btcpayserver-docker/tree/master/contrib/FastSync) page to understand it fully.

But basically, if you really want to sync your full node quickly, you can use the fast sync and it will sync within a few hours(depending on snapshot date, network speed, and hardware specs).

## Summary

There you have it. Hopefully, I managed to clear out some FUD and helped you understand BTCPay better. If you know any other myth we can add, [ping us on Twitter](https://twitter.com/BtcpayServer) and we'll update the article accordingly.

At the beginning of the article I lied about the workout, but it appears I also lied about the boring day with no releases. Just as I was about to click publish, I saw this message.

![](/images/Screen-Shot-2019-03-13-at-15.21.12.png)

It seems we did some improvements to our infrastructure after all.

There's definitely no boring day in BTCPay™.

Thanks for reading.
