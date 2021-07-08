---
title: "BTCPay Server 1.1.0 - UI smoothing, Gap Limit, Fido2, and Greenfield"
date: 2021-04-29
author: Zaxounette
category: 
  - "releases"
tags: 
  - "btcpay-server"
  - "release"
  - "ui-ux"
  - "update"
coverImage: "/images/BTCPayServer_1.1.0.png"
---

The last BTCPay Server major update was only a month and a half ago. And we're already rolling another one!

To update, simply navigate to your _**Server Settings > Maintenance**_ tab and click **_Update or use the command btcpay-update.sh in the_** command line.

The **BTCPay Server 1.1.0** update isn't major because of big new features or a UI overhaul but because of the number of items in the changelog. v1.1.0 introduces a number of quality of life additions and a few improvements to upgrade your security, privacy and usability inside BTCPay Server. We're also switching to proper [semver](https://semver.org/) versioning for a clearer definition of upgrade paths.

The high-time preference crowd can view the full changelog of this release [_here_](https://blog.btcpayserver.org/vulnerability-disclosure-v1-0-7-0/).

_[BTCPay Server 1.0.7.1](https://twitter.com/BtcpayServer/status/1376962115504906240?s=20)_ previously patched several security vulnerabilities that were responsibly disclosed. If you're using an older version than 1.0.7.1, we strongly recommend that you update your instance.

We're fulfilling our promise, and full public disclosure of the vulnerabilities is now available here.

* * *

## ⚡Lightning Wallet Setup UI Improvements

The Lightning Network wallet configuration page has been thoroughly worked on in this update.  
Previously when you accessed the page, you were greeted with the information that a regular user would have had a hard time navigating. We have completely changed the UI of that page to make it clear what is being configured and what is happening.

![](/images/walletsoverview-1024x445.png)

Now if you choose the internal node, you literally have nothing to do other than save the choice while more tech-savvy users still have the option to use their custom (possibly remote) node and have access to the connection string examples to help them get started.

To accept Bitcoin through the Lightning Network on a BTCPay Server store was already a [two-click process](https://docs.btcpayserver.org/LightningNetwork/#connecting-your-internal-lightning-node-in-btcpay) in previous versions, but now you'll save on pills to calm that headache that you had each time you entered the page.

![](/images/BTCPayLightningWalletSetup110-1024x454.png)

![](/images/BTCPayLightningWalletSetup1-1024x576.png)

## LND v0.12.1-beta and Loop

This version bumps LND to version v0.12.1-beta and also now enables instances that have the LND Lightning implementation to use the Loop-In and Loop-Out features.  
For full details on what Loop is, you can visit the Lightning Labs dedicated page, or the Loop feature Github repository.  
  
To use Loop, once you have updated to BTCPay Server 1.1.0, simply navigate to your Server Settings > Services menu, select your preferred Lightning Network visualization tool (By default Ride The Lightning), and enter the tool.  
You should now have the option to use Loop-In and Loop-Out in the menu.

![](/images/BTCPay_1.1.0_RTL_loop-1024x502.png)

It is to be noted that **users with BTCPay Server instances that have been first deployed more than a year ago** might not be able to use this feature. To gain access to Loop functionality, you will need to migrate the LND container (and will lose your Lightning Channels in the process). Details are in the [Pull request](link).

## 🧾 Reduce the address gap during the invoice creation

The new version introduces a new [setting](https://github.com/btcpayserver/btcpayserver/pull/1843) for each store. You now have the option to set to _"Only enable the payment method after user explicitly chooses it"_. If enabled, when an invoice is created, payment methods of the invoice are only generated when the user selects each payment method in the invoice UI.  
  
For example, if an invoice is created and the default payment method is Lightning, and the user doesn't select the Bitcoin on-chain from the dropdown, a Bitcoin address is not assigned and reserved.  
  
This can potentially resolve three issues:

- Make invoice creation (and loading time) substantially shorter
- Make the lightning node work less by potentially generating and watching for fewer invoices, reducing the load on the server in general,
- Significantly reduce [Gap Limit](https://docs.btcpayserver.org/FAQ/FAQ-Wallet/#the-gap-limit-problem) issues for many wallets if customers generate invoices without viewing the invoice (lost customer, abandoned cart, API, etc ...) or only pay via other payment methods.

Our goal is to have this option enabled by default in the next release, depending on the feedback we get.

* * *

## 🔑 WebAuthN/FIDO2 support

BTCPay Server now supports [WebAuthN/FIDO2](https://fidoalliance.org/fido2/fido2-web-authentication-webauthn/) as a Two-Factor-Authentification mechanism and all existing paired U2F (FIDO1) devices have been migrated to it. This should provide wider device and browser support and will act as the first step to some additional security additions in a future release.

![](/images/Screenshot-2021-04-28-at-12.57.10-1024x345.png)

_**Note for Safari users**_ that previously had a security key registered with their account, we recommend that you enable two-factor authentication as an alternative way to authenticate in case of FIDO2 failure before updating. Alternatively, you can use a fully compatible browser such as Firefox or Chrome until Safari becomes fully compatible with the standard.

## 🔐 Disable the SSH key modification

SSH key addition, suppression, and modification can now be disabled in the UI. This prevents escalation of privilege in case an unauthorized user gains access to an admin account in the instance.

* * *

![](/images/Screenshot-2021-04-28-at-13.06.03-1024x719.png)

## 🔌 Extracting features as plugins

We're progressing slowly, but steadily towards extracting features as plugins. Our mission is to have a stable but flexible core of the software. One of the first attempts towards that goal is isolating certain features as optional plugins. In this version, we kicked-started that process with Shopify and CoinSwitch. However, the plugins aren't yet fully separated. We expect to do that in the next release.

![](/images/BTCPayServerPluginsExperimental-1024x460.png)

Failsafe is introduced to disable a plugin if it crashes instead of crashing the whole instance.

## 👩‍💻Greenfield API improvements:

The in-house [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/) receives a bunch of newly available calls with this update.  
You can now call for:

- UTXO: Filter Confirmed or Unconfirmed
- UTXO: Keypath
- UTXO: Adress
- UTXO: Timestamp
- UTXO: Confirmation count
- WALLET: Fee Rate

A few bugs were also crushed. Namely, a typo in the webhook for _OriginalDeliveryId_, an access issue for misc/lang calls, and correctly reflecting in the UI the _"store not configured"_ warning when the store was created via API.

Finally, this update also introduces several improvements on again, several views and existing features.  
A few of the bugs and improvements:

- You can now generate manually a receive address in an internal wallet which is Payjoin enabled,
- Filtering by _"confirmed UTXO"_ in the internal wallet coin control is also now possible,
- Navigating through each page without having two-page titles or two error messages should be easier on the eyes,
- The file storage service provider section in the Server Settings is now more clear as to what providers are configured and available,

The full list can viewed in the [_Changelog_](https://github.com/btcpayserver/btcpayserver/releases).

## A (mini) call to our translators !

Also, a call to our translators in the community.  
A few simple sentences have been updated or added on the BTCPay Server [website](https://btcpayserver.org/).  
  
As a reminder, anyone can help us translate BTCPay Server in their language! Apply through [Transifex](https://www.transifex.com/btcpayserver/), hit us in the chat, or read our related [docs](https://docs.btcpayserver.org/Contribute/ContributeTranslate/).

* * *

That will be all for this update. We worked quite a bunch for this and hope that you can secure your account easier, use the Lightning Wallet more smoothly and that those pesky Gap Limit issues are forever gone in your life (or at least, less present).  
  
Despite this, if you have problems, feedback, feature requests, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.

As always, thank you to our invaluable contributors, we love you:  
[@britttttk](https://github.com/britttttk) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@g33kme](https://github.com/g33kme) [@junderw](https://github.com/junderw) [@kristapsk](https://github.com/kristapsk) [@Kukks](https://github.com/kukks/) [@MaxHillebrand](https://github.com/MaxHillebrand) [@NicolasDorier](https://github.com/nicolasdorier/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@SakerOmera](https://github.com/SakerOmera) [@ubolator](https://github.com/bolatovumar) [@xpayserver](https://github.com/xpayserver) [@Zaxounette](https://github.com/zaxounette/)

The BTCPay Server team 💚
