---
title: "Jeff Vandrew Jr - creator of LibrePatron, Keykeeper IRA, BTCQBO"
date: 2019-03-26
author: pavlenex
category:
  - "stories"
tags:
  - "interview"
  - "plugins"
coverImage: "/images/YouTube-Thumbnail-BTCPay-Accountig-Template-1024x576.jpg"
---

Jeff Vandrew Jr is an Attorney, a CPA and an open-source developer. On top of that, he's the maintainer of the [BTCPay python library](https://github.com/btcpayserver/btcpay-python) and a bodybuilder and somehow still has spare time to help out newbies in the BTCPay community. Even though he sounds like a character from the Split movie, Jeff is real. In this quick interview, I wanted to learn more about him, his aspirations and projects and most importantly, to try to figure out how he manages to do all of these things productively.

The interview was co-authored by [britttttkelly.](https://twitter.com/britttttkelly)

![](/images/YouTube-Thumbnail-BTCPay-Accountig-Template-1024x576.jpg)

## How did you get into Bitcoin?

_Jeff:_ I'm old, so I'm one of the Bitcoiners that began with an interest in gold! Sound money always had an appeal to me. I did hear vaguely about Bitcoin in the 2009-2011 timeframe, but didn't pay much attention and never did much with it. In 2014, for whatever reason, I was finally sold on the idea and bought in. Bitcoin actually strengthened my interest in sound money as I saw it as dealing with many of gold's flaws.

## How did you manage to connect all of your passions: finance, law, bodybuilding and development?

Being an Attorney and a CPA is cool, and I'm lucky to have leveraged it into a living that gives me a good quality of life, but I wouldn't call it a passion. In fact in the US, I generally discourage students to go to law school, as most lawyers are pretty miserable. I lucked out in avoiding that fate since what I do (tax consulting with an emphasis on Bitcoin) is very specialized and very dissimilar from what most lawyers do. I never have to wear a suit or report to an office or anything like that.

What I really care about is Bitcoin and Bodybuilding. The two aren't all that related to each other, but I did try to combine them with the [Bitcoin & Barbells 2019](https://www.eventbrite.com/e/bitcoin-barbells-2019-the-day-before-the-nakamoto-institute-dinner-tickets-58767662661) event that I'm hosting in a few months around the Nakamoto Institute Dinner (get tickets because space is limited!).

I had done some software development in school in the 1990s, but didn't actually get back into it until I felt compelled by my interest in Bitcoin to contribute in a more tangible way.

## What is the Keykeeper IRA?

_Jeff:_ The Keykeeper IRA is my "day job" and real business where I earn a living. It's a structure that allows US residents to purchase Bitcoin using retirement funds while custodying their own private keys. In the US, there are large tax advantages to holding Bitcoin this way, but most competing offerings involve an institution custodying your keys for you. With the Keykeeper IRA, you can get the benefits of holding Bitcoin in an IRA without having to trust a third party with your keys.

In the US, if you don't hold your Bitcoin in an IRA or 401(k), any time you spend or sell Bitcoin you have to pay capital gains tax on the difference between the purchase price you paid for that Bitcoin and the fair market value on the date of spend or sale. The Keykeeper IRA can be done as a Roth IRA (which eliminates all tax on the Bitcoin forever) or a Traditional IRA (which allows use of already tax-deferred funds from an old employer 401(k)). You can trade in and out of Bitcoin and other investments as much as you want, but you can't spend IRA funds without penalty for personal reasons until you hit age 59.5.

## How did you discover BTCPay and what made you create the QuickBooks plugin?

_Jeff:_ I discovered BTCPay because I was originally a Bitpay customer. When I would invoice customers in my main business, I would use QuickBooks Invoicing, which also processed payments. QuickBooks Invoicing natively supported ACH for fiat payments and Bitpay for Bitcoin.

When I heard about BTCPay, I immediately wanted to use it, but unfortunately, it didn't have the same nice QuickBooks Integration that Bitpay did. So I decided to see if I could link the QuickBooks and BTCPay APIs to create my own integration.

I slapped something together and Tweeted about it. Nicolas saw my Tweet and reached out to me and told me how I could make it better. He was tremendously helpful. I implemented his suggestions and now it's an "official" BTCPay plugin.

Even if you don't use QuickBooks for invoicing but just use it for bookkeeping, the plugin will still synchronize the data from BTCPay to QuickBooks to make your bookkeeping easier.

Interestingly QuickBooks later dropped Bitpay integration, so I believe BTCPay may now be the only solution with QuickBooks integration.

<iframe src="https://www.youtube-nocookie.com/embed/srgwL9ozg6c" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe>

## What is LibrePatron?

_Jeff:_ LibrePatron is the second plugin that I developed for BTCPay. It's a clone of the popular Patreon service.

In addition to accepting Bitcoin, the main difference between LibrePatron and Patreon is that LibrePatron is decentralized and self-hosted, just like BTCPay. As BitPay is to BTCPay, Patreon is to LibrePatron. It even installs using the official BTCPay installer as an additional option, so if you were able to install BTCPay, you're able to install LibrePatron.

This makes LibrePatron censorship resistant. You can't be banned by LibrePatron the way that Patreon bans creators.

## How are recurring payments handled in LibrePatron?

Recurring payments are tricky with Bitcoin since it's not a credit-based system where you can automatically take a user's money. As a result, LibrePatron monitors subscription expirations and automatically emails users as their expiration date approaches. The email contains a link to click to approve a new Bitcoin payment for another month's subscription.

## Software development

_Jeff:_ I never would have gotten into software development if it weren't for Bitcoin. That's what spurred my interest in it again. Before becoming an Attorney and a CPA, I did complete part of the computer science program at Rutgers University. But that was 20 years ago. So I did have that base when picking it up again to work on Bitcoin, even after a 20 year sabbatical.

_Jeff:_ Justin Moon's [BUIDL Bootcamp](https://mooniversity.io/) is a great resource. I was one of the very early students and loved it, and at this point I would consider Justin a personal friend. I highly recommend it to anyone looking to get into Bitcoin development. If you care about Bitcoin, that's enough, even if you don't have a strong tech background coming in. Justin will help you.

## The Future

_Jeff:_ In terms of what's next, I had an idea for a simplified method of automating the install of bitcoind, c-lightning/lnd and tor in a headless setup, but I ended up bagging that idea since honestly the BTCPay-Docker installer already does that so well. I would've just been reinventing the wheel, since even if you're not a merchant and won't regularly be taking incoming payments, using the BTCPay-Docker gets you everything you need and more. And for non-headless installs, Pierre Rochard's [Node Launcher](https://github.com/lightning-power-users/node-launcher) is the way to go.

I have been playing around with a couple of other ideas, but don't want to reveal them until I've got something people can play around with! I don't like to overpromise and underdeliver lol.

## Where can readers find you?

_Jeff:_ If you're interested in the KeyKeeper IRA, check out [vandrew.com/bitcoin](https://vandrew.com/bitcoin/), You can also catch me on Twitter [@vandrewattycpa](https://twitter.com/vandrewattycpa).

We hope you enjoyed the interview and got to know the super-Jeff a bit better. If you have any questions for him, feel free to reach out to him on Twitter and make sure to check interesting projects he's working on. On behalf of the entire BTCPay community, I'd like to thank Jeff for all of his great contributions and selfless help to the community.
