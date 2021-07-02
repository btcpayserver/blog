---
title: Mike Olthoff from CoinCards.ca is the first ever merchant to use BTCPay. This is his story.
author: pavlanex
date: 2019-03-05
category: stories
tags:
  - "bitcoin-merchants"
  - "interview"
  - "lightning-network"
coverImage: /images/Screen-Shot-2019-03-05-at-11.03.52.png
permalink: /mike-olthoff-coincards
---
<PostMeta />

In this interview, we're joined by Mike Olthoff. His business, [CoinCards](https://coincards.ca/) was the first company to implement and use BTCPay Server. They were also among the first few merchants to accept payments via the Lightning Network.

Mike helped a lot in the early days of BTCPay by providing priceless feedback. We can easily say that without Mike, [BTCPay](http://btcpayserver.org/) would never be what it is today.

Before we dive deep into the interview, I'd like to thank Mike for his contribution to the project and for helping other merchants in the community.

## Who is Mike Olthoff?

Mike Olthoff is a Canadian Bitcoin Entrepreneur from Vancouver, Canada. He has been involved in the local Bitcoin scene since 2013 and has run Coincards since 2014, helping thousands of bitcoiners turn cryptocurrencies into real-world uses.

## How did you get into Bitcoin?

I originally started learning about bitcoin in 2012. At the time, I was running a small web hosting company and many of my customers started asking for payments in Bitcoin. After looking into it, I found Bitpay (eww) and at the time I figured “If these guys will give me real money for coins, sure, new revenue streams”.

In 2013, I attended a small gathering in Vancouver, where a now longtime friend was speaking about Bitcoin and its potential impact on the world. I was completely enlightened within an hour and needed to know more, so I connected with the local scene and grew from there.

## What is Coincards?

Coincards is Canada’s “Digital Currency to Branded Currency exchange service.” Basically, we are a webshop that lists gift cards of hundreds of Canada’s top brands, Mobile Top-ups and more. Our mission is to spread the mainstream adoption of cryptocurrencies as a payment method by bridging the gap between merchants and consumers until merchants are willing and able to accept cryptocurrencies natively.

Coincards is one of the top go-to places in Canada for anyone who needs a quick swap of Bitcoin to real-world uses. Often we are able to issue gift cards within minutes, without intensive or intrusive KYC roadblocks. As more and more people come to rely on cryptocurrencies in everyday life, our service fills a much-needed gap when living on crypto.

![](/images/Screen-Shot-2019-03-05-at-11.03.52.png)

## What are the struggles of being a cryptocurrency business?

We have been around long enough that we have pretty much seen it all from banking issues to hard-forks, from “Everyone Loves Bitcoin” to “Bitcoin’s Dead Again” headlines. We rode out some massive price swings and price highs.

One of our biggest roadblocks is simply getting the word out there that we exist. With the ICO craze of 2018, we encountered a lot of hostility towards Bitcoin-based businesses in the advertising space. We have basically been banned from advertising on all the main channels: Google, Twitter, Facebook, and even Reddit.

The other main roadblock we see is that the “HODL” mentality is really starting to become entrenched into people’s minds during the bear markets. Everyone at our company believes that bitcoin should be the internet's money and that you should treat crypto like any other bank account: save some & spend what you need to. Unfortunately, the current culture has aggressively pushed the “HODL” narrative to the point where users are afraid to spend it.

## Which payment providers have you used before BTCPay Server?

Originally we started with Bitpay in 2014, however, we operate on very low margins and we needed to look into something where we controlled our own keys and weren’t giving away a significant chunk of our profits to our payment processors.

With that, we switched to Mycelium gear. At the time this was really the only option for an open-source payment processor where you controlled your own keys. Unfortunately, Mycelium gear was a complete mess especially because they reused addresses so we would be spending most of our day manually applying payments to orders.

Finally, we discovered BTCPay.

## How did you discover BTCPay and what made you decide to switch?

Discovering BTCPay was a fluke I think, just a random chance encounter on Twitter by someone retweeting Nicolas’ hate towards Bitpay.

I remember joining the slack channel with maybe a total of ~40 people total almost no activity. This allowed me to ask Nicolas way too many questions but also be one of the first to guide what merchants would be looking for.

Nicolas was able to get a really good product up and running very quickly. At the same time, Mycelium gear decided they would be instituting a “post-pay” fee on all transactions. Since their server barely worked, we made the switch pretty quickly to BTCPay and never looked back.

## The early days of BTCPay?

The early days were very much just “Can we have this feature?” and Nicolas building it into BTCPay. I think Coincards and [Halong Mining](http://halongmininginc.com/) were the first of the larger vendors who utilized BTCPay, so we were able to quickly push a lot of feedback to Nicolas on what was going wrong and why. He also was a star with fixing issues and most issues from the first few weeks of going live were fixed within a day.

For the most part, the core of BTCPay has stayed the same: A really amazing payment processor. BTCPay has had so many improvements over the last year it really turned into something that can be almost everything to everyone who needs payments processed.

I also love how big the community has grown. Typically, Slack was just myself and Nicolas, and maybe a few people who would join and leave but then it started to grow and now I can’t even keep up with all the amazing contributors. I love seeing open source projects like this grow so fast because so many people are using it in different ways!

## You're your own payment processor. Does that help your business save money? What are the disadvantages of using a self-hosted BTCPay?

We love being able to host our payment solution on our own, it gives us complete control and saves us at least 1% on all transactions, something we very much need in our low margin industry.

Volatility is our biggest challenge. When you are your own payment processor, you are constantly holding funds and if you have FIAT requirements, you need a way of transferring funds to an exchange and selling those funds before the rates dip below what you effectively bought that BTC for.

## The fiat bridge is coming soon to BTCPay but you developed an in-house fiat conversion solution. Can you explain how it works?

As mentioned volatility is a huge risk, especially when you have low margins and swings that can effectively make you lose money within 10 minutes. To combat this, we needed instant fiat conversion.

Our own system is an in-house API connection to the leading Canadian exchanges. We hold a small balance on these exchanges and as orders come in, we simply sell the held BTC for fiat at the rate we just gave to our customer. This eliminates any volatility risk, but of course opens us up to lose on exchanges, if an exchange goes down. We usually limit our volumes on these exchanges and only replace coins as needed to that our loses when the exchanges disappear is minimal.

I’m excited to see BTCPay’s solution, as I think it might be useful to other merchants who want to do the same thing. Developing custom applications is expensive so for those merchants who are just starting out and need fiat this will be a lifesaver.

## What kind of reaction do you get from the customers when they see you're using BTCPay?

One of the great things about BTCPay is we typically don’t need to hear feedback on it from customers, it just works. Our customers are used to the intuitive design of BTCPay and are able to pay without any issues almost 100% of the time.

## As one of the Lightning Network pioneer merchants, describe your experience with the off-chain so far?

We have actually had a lot of issues with our node running C-lightning lately so I cannot say that it’s quite there yet. We were indeed one of the first merchants to accept lightning, but adoption for payments simply hasn't taken took off for us yet. We ran a few months with a test product of $0.01, however, once we enabled real products we only see a couple of transaction a month on the lightning network.

We believe that the lightning network will get there one day, but it still has a long way to go before it's used in everyday transactions.

***CoinCards - Early Lightning Network days:***

![](/images/CoinCardsLightningNetwork.jpg)

## What problem does Lightning solve for merchants?

The main problem I see being solved is confirmation times. Right now, we must wait for at least 2 confirmations in our own processes to be considered “safe”. With the lightning network, we can see the transaction instantly, which allows us to deliver our products faster and risk-free.

## From your perspective, what is needed for merchants who currently use LN?

It would be nice to see exchanges adopt LN as an inbound funding method. I think it's important to have the same off ramps for LN as we do for on-chain transactions. That being said, I can see no one wants to be the “first” to risk a large sum of funds on what I would consider still in an experimental stage.

## What tools do you use for bookkeeping?

We actually use Quickbooks online for most of our day-to-day bookkeeping. We found that this was one of the few programs to actually offer BTC as a native currency. Unfortunately, they only offer 2 decimal places, so we have to convert all of our transactions to mBTC before entry but it works pretty well.

## What piece of advice would you give to someone looking to start a Bitcoin business?

Starting a bitcoin business is just the same as any other business really: find a niche that no one is serving or have a kickass product. With most cases, if you are selling a product, I would say don’t expect to survive on BTC transactions alone, at least not to start. Your volumes will likely be really low but stick to it and people will find you!

## What's in store for you and Coincards in 2019?

2019 is a year of “buidling” for us. We are working hard on getting as many relationships built with merchants as we can this year and ultimately expanding our selection. We are also working hard on our own backend to ensure we have efficiencies in place for the next bull run. Ultimately we are also looking at expanding past Canada and moving into new markets, solidifying the Coincards brand.

## Is there anything we have not covered that you’d like readers to know?

I’d like to urge merchants to keep a portion of their earning/profits in BTC and then start offering those profits as payment to suppliers. We really need to push adoption through use. Our company pays every supplier we possibly can in crypto when the opportunity shows itself. We have “Skin in the game”.

By using any of the merchants using BTCPay and buying their products, including at Coincards, you are fostering the crypto economy and helping us in our mission for mass merchant adoption.

## Where can people find you?

- Personally: I can be found on twitter, [@olthoff](https://twitter.com/olthoff)
- CoinCards Website: [Coincards.com](https://coincards.com) | [Coincards.ca](https://coincards.ca)
- [Twitter](https://twitter.com/CoinCards/) | [Facebook](https://www.facebook.com/coincards) | [Reddit|](https://www.reddit.com/r/coincards/) [Telegram](https://t.me/CoincardsOfficial) |
- WhatsApp/Signal/SMS: 778-819-0480

That was Mike's story. I hope you enjoyed it. Support businesses that foster true adoption. If you're in Canada and need gift-cards, make sure to check their website.

This is just the first in the series of stories of BTCPay people that we plan to publish regularly. If you'd like to help us tell your story next, join our [community chat](https://chat.btcpayserver.org/) and let us know.
