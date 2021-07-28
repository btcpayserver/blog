---
title: "How to create a Bitcoin Point of Sale (PoS)"
author: pavlenex
date: 2019-03-12
category: guides
tags:
  - "apps"
  - "pos"
coverImage: /images/Bitcoin-Point-Of-Sale-1024x768.jpg
permalink: /bitcoin-pos
---

This tutorial shows you how to create a Bitcoin Point of Sale and accept BTC payments (on-chain and via the Lightning Network). When you complete it, hopefully, you'll have a web-based PoS that requires no additional hardware. It will run as a web app from a browser of your mobile phone or tablet.

Most importantly, there will be no fees or intermediary. Customers will be presented with an invoice they have to pay from their wallet. The BTC you receive will go straight to your wallet. Optionally, you can enable tips and customize the percentage as well as the overall appearance of the PoS.

***BTCPay Point Of Sale - a web-based app that allows you to receive Bitcoin payments with no intermediary or fees, from any old tablet or phone:***

![](/images/Bitcoin-Point-Of-Sale-1024x768.jpg)

## Requirements:

Before we dive into the guide, here are some requirements:

- [BTCPay Server](http://btcpayserver.org) (self-hosted or hosted by a third-party)
- Phone or a tablet, PC (Digital display)
- Internet connection

## Steps:

1. Deploy BTCPay Server
2. Configure BTCPay (Register User, Create Store, Add Wallet)
3. Create a PoS app
4. Add PoS as to a home screen of your tablet or phone

<iframe src="https://www.youtube-nocookie.com/embed/Mz4uajz0z9Y?start=6" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Step 1 - Deploying BTCPay

BTCPay Server is a free and open-source cryptocurrency payment processor (Hey, you're reading our blog!).

You've heard of WordPress, the Content Management System that allows people to build sites with ease.

BTCPay is a WordPress of finance. It allows you to become your own bank or payment processor with a complete self-hosted technology stack. It's free and the entire source code can be found on [GitHub](https://github.com/btcpayserver/btcpayserver/).

There are many ways in which one can deploy BTCPay. I recommend that you check out extensive [deployment documentation](https://docs.btcpayserver.org/deployment/deployment).

Besides self-hosting, you can use someone else's server. That's called [third-party hosting](https://docs.btcpayserver.org/deployment/thirdpartyhosting). Majority of community members allow people to use their servers for free.  Make sure to understand risks that trusting a third-party brings.

Make sure to read our third-party documentation to understand why chose one over the other. Third-party servers come with some limitations, but you can use them for testing purposes.

To deploy a self-hosted BTCPay you can follow a tutorial below.

<iframe src="https://www.youtube-nocookie.com/embed/oce_fvRdLLY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

If you don't want to invest time and efforts into self-hosting a server at this point, you can just hop on to our [demo server](https://mainnet.demo.btcpayserver.org) and go to step 2.

## Step 2 - Registering, creating a store, connecting a wallet

No matter if you decided to go with a self-hosted, a third-party host or our demo server, the rest of the setup is the same for all.

### 2.1 - Creating an account

Register an account on BTCPay Server by clicking the "Register" link in the top menu. Enter your credentials. Some hosts may require that you verify e-mail upon registration. For the self-hosted server, the first registered user is a server admin.

![](/images/Register-on-BTCPay-Server.png)

![](/images/Register-account-on-BTCPay-Server.png)

### 2.2 - Creating a store

Now that you're logged in, create a store. In BTCPay you can create an unlimited amount of stores. Each stores is unique entity and can be customized. The store is later tied to your wallet and whatever app you're creating.

![](/images/Snag_141f090.png)

Create a new store and give it a name. You'll see the message that the store is successfully created. If you wish, you can configure your store settings. For most people, the default setup is okay. Do not navigate away from the store settings, scroll down to configure your wallet.

***Create a store and give it a name:***

![](/images/BTCPay-Create-A-store.png)

***Store successfully created. If you wish you can customize basic settings, or just scroll down to connect your wallet:***

![](/images/BTCPay-Creating-A-store.png)
### 2.3 - Connecting a wallet

As I already said, the beauty of using BTCPay is that there will be no fees on transaction, registration or membership. Furthermore, BTCPay does not require your private key. You're just adding an xpub key from your wallet.

- BTCPay does not know nor has access to your private key
- You're uploading xpubkey from external Bitcoin wallet - Electrum for example

There are two ways in which you can connect your BTCPay to your wallet:

1. Automatic with Ledger Nano
2. Manual with any wallet supporting xpub ([Electrum](https://electrum.org/#home) recommended)

Input your xpub, then on the second screen, if you see a wrong address, input the first address of your wallet so that BTCPay can help you to configure correctly.

The video below explains how to connect your wallet to your BTCPay store.

<iframe src="https://www.youtube-nocookie.com/embed/xX6LyQej0NQ?start=6" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

If your BTCPay is self-hosted, you can [enable Lightning Network payments](https://docs.btcpayserver.org/features/lightningnetwork).

## Step 3 - Creating Point of Sale app

Once you created a store and connected a wallet to it, the fun part begins. In this step, we'll be creating a Point of Sale web-app.

1. Go to > Apps
2. Create a new App
3. Add the name of your app and associate it with a store you created earlier
4. Customize your PoS by adding your own items with prices, photos, and a description.
5. Click "Submit query".
6. Click "View" to preview your app (Your customers can access the PoS through that link).

When creating a PoS app, it is essential that you **enable cart option.**

![](/images/BTCPay-PoS-App-1.png)

![](/images/BTCPay-PoS-App-2.png)

![](/images/BTCPay-PoS-App-3.png)

![](/images/BTCPay-PoS-App-4.png)

![](/images/BTCPay-PoS-App-5.png)

![](/images/BTCPay-PoS-App-6.png)

![](/images/BTCPay-PoS-App-7.png)

## Step 4 - Adding link as a desktop shortcut

Now that the PoS is created, the last step is to add it to the home screen. This allows you to quickly access your app.

You can further [customize the checkout](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-modify-the-checkout-page) or [change the theme of the PoS](https://docs.btcpayserver.org/development/theme).

***Add PoS to homescreen iOS:***

![](/images/PoS-iOS-add-to-homescreen.jpg)

***Add PoS to homescreen Android:***

![](/images/PoS-Android-add-to-homescreen.jpg)

## Don't buy Bitcoin - earn it

There you have it. I really hope that this quick tutorial enabled you to create a Point Of Sale app and accept Bitcoin in your store or online. Payments go directly to your wallet with no fees and if you self-host BTCPay, you're increasing [privacy](https://en.bitcoin.it/wiki/Privacy) and security for yourself and customers by [running a full node](https://en.bitcoin.it/wiki/Full_node).

If require more information, please refer to our extensive documentation. For questions, visit our [community chat](https://chat.btcpayserver.org).
