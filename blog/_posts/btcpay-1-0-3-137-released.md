---
title: "BTCPay Server version 1.0.3.137 released"
date: 2019-11-07
author: pavlenex
category:
  - "features"
  - "releases"
coverImage: /images/1.0.3.137.jpg
---

Today, we’re excited to release BTCPay Server **1.0.3.137.** The freshly-baked version introduces several new features together with several bug fixes and improvements.

With this release, BTCPay Server continues to be a tech-stack which glues many prominent projects built on top of Bitcoin and displays it in a coherent, unified interface for the end-user.

## 1.0.3.137 Changelog

- Brand new kick-ass login and register page design from @taratan (@DennisReimann @NicolasDorier)
- Exposing Bitcoin RPC on Tor v3 for Fully Noded integration (@NicolasDorier)
- Eclair support (@Kukks @NicolasDorier)
- Fix status message of PaymentRequest (@NicolasDorier)
- Fix tx link in payment request (@NicolasDorier)
- Make sure the recommended fee on the invoice target 1 block confirmation by default, make it configurable (@ubolator)
- Improve pay button display options section (@ubolator)
- More pay button improvements (@dennisreimann)
- Fix Payment request "Cancel invoice" button always showing (@Kukks)

### Docker deployment:

- Eclair support (@Kukks @NicolasDorier @araspitzu)
- ElectrumX support, must not prune and txindex (@maltokyo)
- Improved of error message if conflicting docker fragments are used (@NicolasDorier)
- Expose Bitcoin RPC via Tor v3 (@NicolasDorier), safe as explained [here](http:// https://www.reddit.com/r/TOR/comments/dscw3l/are_tor_v3_hidden_service_are_discoverable_by/).

## The new login page

![](/images/Screenshot-2019-11-07-at-16.27.48-1024x573.png)

The login page is now the first page you will see when you’re not logged into your instance. This page redesign is only just a small step towards a bigger effort for UX/UI improvements.

This UI was designed by @taratan and was implemented by @NicolasDorier, @DennisReimann and coordinated by @r0ckstardev. This version still requires improvements to achieve the ideal version and we will continue to improve the page based on user feedback.

We improve and grow thanks to your constant feedback. The changes on login page should now provide clear call-to-action and lead users towards the further setup.

We made the decision to improve things gradually and avoid overwhelming drastic UI modifications. What we can promise eventually is reorganized and easier to use BTCPay Server in the future. If you are a designer, web developer or simply a BTCPay Server user with interface ideas and are willing to help us, please reach out to make this happen.

Supporters of the [BTCPay Foundation](https://foundation.btcpayserver.org/) are now proudly displayed. Thanks to partners like [SquareCrypto](https://twitter.com/sqcrypto) and [ACINQ](https://acinq.co/)m our most dedicated contributors are able to further fuel the development.

## Fully Noded Integration

![](/images/Screenshot-2019-11-07-at-13.07.53-1024x538.png)

We’re now exposing the **Bitcoin RPC over Tor v3.** This allows a very easy connection to external software such as [Fully Noded](https://apps.apple.com/us/app/fully-noded/id1436425586).

Fully Noded is a versatile iOS app that allows you to connect and control multiple nodes using a client-side Tor thread making call sto your node's rpc via a tor hidden service.

For BTCPay users, this simply means you can remotely control your Bitcoin full node in your BTCPay from the external app.

![](/images/2019-11-07_13-55-30-1024x507.png)

To connect your BTCPay node to Fully Noded:

1. If you're iOS user, [download Fully Noded](https://apps.apple.com/us/app/fully-noded/id1436425586) from the App store.
2. In BTCPay, go to Server Settings > Services and click on the Full Node RPC.
3. Open your Fully noded app, Settings > Node Manager, Add new node.
4. Enable Tor in Fully noded and can a QR code displayed on your BTCPay.
5. Your Bitcoin full node is now connected to Fully Noded.

![](/images/IMG_3254-576x1024.jpg)

![](/images/IMG_3256-576x1024.jpg)

![](/images/IMG_3259-576x1024.jpg)


Huge thanks for the integration goes to [Fonta1n3](https://github.com/Fonta1n3/), the lead developer of FullyNoded.

## Eclair support

Yet another Lightning Network implementation is now available – **Eclair**. This is the forth implementation that we officially support besides [c-lightning](https://github.com/ElementsProject/lightning), [LND](https://github.com/lightningnetwork/lnd) and [ptarmigan](https://github.com/nayutaco/ptarmigan).

To add Eclair when setting up your BTCPay for the first time, apply the following command:

sudo su -
cd btcpayserver-docker
export BTCPAYGEN\_LIGHTNING="eclair"
. ./btcpay-setup.sh -i

Please be aware that you currently need to enable txindex=1 to use the Eclair implementation however the Eclair(ACINQ) team is working towards removing that requirement.

## ElectrumX support

Our contributor [Maltokyo](https://github.com/maltokyo) added [ElectrumX](https://github.com/kyuupichan/electrumx) support to BTCPay docker. As a result, if you are using Electrum as an external wallet, you no longer have to leak information to random, public servers. Instead, you can connect your wallet to your own bitcoin full node within BTCPay. However, this will only work for non-pruned nodes. The documentation on how to connect Electrum to your BTCPay via ElectrumX will be released in the next few days.

## Thank you to our contributors

Huge thanks go to our contributors, supporters and community who made this release possible. We appreciate every single contribution, that comes in many different forms.

Special thanks to developers:

- [araspitzu](http://github.com/araspitzu)
- [bolatovumar](http://github.com/bolatovumar)
- [dennisreimann](https://github.com/dennisreimann/)
- [maltokyo](https://github.com/maltokyo/)
- [MrKukks](https://github.com/Kukks/)
- [NicolasDorier](https://github.com/NicolasDorier/)
- [r0ckstarDev](https://github.com/rockstardev/)

How to update to 1.0.3.137?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay > Server Settings > Maintenance > _**Update**_.

If you encounter any issues with this version, or need assistance, please report it on our [community chat](https://chat.btcpayserver.org/) or on our [GitHub](https://github.com/btcpayserver/btcpayserver/issues).
