---
title: "Bitcoin Bonus Scam"
date: 2023-03-10
author: ndeet, petzsch
category:
- "stories"
tags:
- "bitcoin bonus"
- "scam"
coverImage: "/images/bitcoinbonus-header.png"
---

# Bitcoin Bonus Scam

[[toc]]


## What happened

Since about mid-October 2022, we noticed users coming to our support chat with dubious payment requests of 64 US-Dollar payable in bitcoin from sites branded as “Bitcoin Bonus.” The users posted screenshots and links of sites that claimed they had participated in cloud mining and forgotten about it and were eligible for a substantial earning of somewhere between 20 - 30k US-Dollar. Before the users can receive the payout, they need to pay a “conversion fee” in Bitcoin to get their rewards paid out. Since nobody gives away free money, if users pay that, their money is gone, and they never receive the promised payout.

Despite our efforts, “**Bitcoin Bonus**” continues to leverage and abuse BTCPay branding. As a result, many individuals mistakenly believe that BTCPay Server is responsible for processing payments made through the scammer's sites, leading them to seek help in our support channels.

## What is BTCPay Server and why we can’t help

BTCPay Server is a free and open source software project composed of contributors and supporters from all over the world. The team provides a **self-hosted** software solution that allows **anyone** to accept Bitcoin payments from their customers without the need of a middleman. The merchant is running their own BTCPay Server without us - the creators of the software - having any kind of control over their server.

It is important to make the differentiation between payment platform providers like PayPal, Stripe and others at this point. These companies function as a trusted third party between the customer and the merchant and can freeze or hold accounts in case of dispute - BTCPay contributors cannot do that.

## How the scam works

The scammers use Google Forms to send out mass emails containing a link to their website. These emails can look like the following:

![](/images/bitcoinbonus-image2.png)

After clicking the link (which you shouldn’t do to begin with, because the included trackers verify your email still exists), you get redirected to the following site:

![](/images/bitcoinbonus-image8.png)

You will be taken through several steps and have to spend some arbitrary wait time on the website for the payouts to be “processed”. The processing screen looks like this running a bunch of absolutely random hash values by the user:

![](/images/bitcoinbonus-image7.png)

after this a support chat opens with a fake representative called “Sophia” (could differ)

You’ll be redirected to a withdrawal form:

![](/images/bitcoinbonus-image1.png)

This returns to the support chat:

![](/images/bitcoinbonus-image3.png)

When the users click on the “Currency Exchange” button they see this screen:

![](/images/bitcoinbonus-image5.png)

After clicking the “Exchange Bitcoin” button the users see the BTCPay checkout screen:

![](/images/bitcoinbonus-image4.png)

Recently the scammers seem to have switched to a custom branded checkout where they hide the BTCPay Server branding and “Powered by BTCPay Server” link on the checkout form. We assume this is due to the fact that users finding our support channel leading to their sites are constantly taken down.


Example of their new checkout:

![](/images/bitcoinbonus-image6.png)

## What we’ve done to mitigate it

It’s important to note that we’ve done everything in our power to try to protect people from the scam.

Whenever a user complains about bitcoin bonus scam sites, we ask for the URL the scam is hosted on. It seems as if the the persons behind this operation, switch the domain used for it constantly. We do a simple [whois query](https://www.whois.com/whois) of the domain and locate the abuse contact from the registrar where the domain was registered. Then we write an email explaining the situation and that the site is being used to scam people. Usually after a few hours or a day, the sites get taken down.

Most of the sites also use Cloudflare as their DNS to hide their servers IP address. When this is the case we also file complaints on the [Cloudflare abuse form](https://abuse.cloudflare.com/) which takes the site down quite quickly in many cases.

Unfortunately this needs to be done for each domain and the registrars do not fully suspend all domains of a certain owner (or they were smart enough to register the domains with different owners). This makes it an endless whack-a-mole game.

## What to do if you were affected by the scam

**First of all, if you ended up on the scammers website, don’t pay them under any circumstances! Once you send bitcoin, your money is lost. No one can get it back for you.**

Second, if you already paid and were scammed, you should report the website to the authorities. For US citizens, one way of doing this is through this website: [https://complaint.ic3.gov/](https://complaint.ic3.gov/). For other countries you need to find the local authorities or police to file a complaint.

Third, if you want to help to take the scammers websites down feel free to do a [whois lookup](https://www.whois.com/whois) to find the registrar abuse contact email.

TLDR; nobody gives away free money, if it sounds too good to be true - it probably is. Bitcoin Bonus and similar services claiming to give you free money are scams. Do not pay their invoices hoping to receive high rewards.
