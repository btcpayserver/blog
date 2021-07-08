---
title: "BTCPay Server v1.0.7.0 - UI polishing, API calls, spring cleaning, and bug fixing"
date: 2021-03-11
author: Zaxounette
category: 
  - "releases"
tags: 
  - "btcpay-server"
  - "release"
  - "ui-ux"
  - "update"
coverImage: "/images/1.0.7.0_update_thumbnail.png"
---

It's been a few months since the last major update in BTCPay Server, **so here it is!**  
  
**v1.0.7.0** is available and includes a **major UI revamp** of the wallet setup process, new **API calls**, and since March is spring cleaning time, some **minor quality of life improvements**, and a bucket load of non-critical **bug fixes**.  
  
For the high-time preference crowd, you can skip all this and go directly to the _[1.0.7.0 Changelog](https://github.com/btcpayserver/btcpayserver/releases)_.

## UI polishing 🎨

Following the store setup update, BTCPay Server now offers **a more streamlined and understandable wallet setup** process.  
  
Users have long given us feedback on the wallet setup process is confusing at times. We have tried to refine it for clarity, both visually and in the instructions provided.  
  
When setting up your wallet for the first time in a store, you are greeted with the following wizard.

![](/images/Screenshot-from-2021-03-10-12-08-35.png)

![](/images/Screenshot-from-2021-03-10-12-08-43.png)

![](/images/Screenshot-from-2021-03-10-12-08-57.png)

The wallet setup now directs the user depending on what they wish to do:

- Already have a wallet you want to use with BTCPay Server? **Import it**, enter the **public key**, link your **hardware wallet**, etc.
- Want a fresh new wallet with your slick BTCPay Server store? Choose between **hot wallet** or **watch-only** and follow the setup wizard.

We love our new straight-forward UI and hope you do too! That being said, if you have **additional feedback** you want to submit to us, feel free to reach out on our [community chat](https://chat.btcpayserver.org).

As another surprise, we've also included **[Specter wallet](https://specter.solutions/)** support with this new wallet setup!  
Link your Specter wallet to BTCPay Server seamlessly in the new import UI.

## API calling 🛠️

The [Greenfield API](https://docs.btcpayserver.org/API/Greenfield/v1/) is receiving more calls in this update. The brand-new **on-chain wallet API** is now available, furthermore:

- Developers will now be able to add, remove, view, preview changes in the **on-chain wallet payment method**.
- The **Lightning payment method** also can now be added, removed, and modified via API.

## Spring cleaning 🧹

Quality of life improvements have also been added to the **Point of Sale** and **Crowdfunding** app.  
Previously, the button users clicked on to pay could not be customized.  
  
That is now history. These two apps join the **Payment Button** in their infinite customization possibilities!

- [![Point of Sale customization](/images/POS_QOL.png)](https://blog.btcpayserver.org/wp-content/uploads/2021/03/POS_QOL.png)
    
- [![Crowdfund app customization](/images/Crowdfunding_customization.png)](https://blog.btcpayserver.org/wp-content/uploads/2021/03/Crowdfunding_customization.png)
    
    Crowdfunding Customization
    

* * *

Another improvement is the possibility to now tag an invoice as "Completed" without first having to tag it as "Invalid".  
This is particularly useful for crowdfunding campaign managers that receive funds outside of the BTCPay Server **c**rowdfund app but still have to update the total received in the app.

* * *

The **Server Settings policies UI** for server administrators has also been dusted out.  
These settings are now ordered, polished, and hopefully made more clear to users.

- [![Server settings policies](/images/Server_Settings_Policies-1-1024x486.png)](https://blog.btcpayserver.org/wp-content/uploads/2021/03/Server_Settings_Policies-1.png)
    
    Server settings policies
    

## Improvements ✨

**1.0.7.0** also includes general improvements in the BTCPay Server software.  
  
The most prominent improvement is **re-enabling uppercase BECH32 support in QR code** address formatting after a quarterly-long [discussion](https://github.com/btcpayserver/btcpayserver/issues/2110) on Github between a majority of known wallet providers.  
  
This support will enable users to pay using the **embedded QR codes** in the invoices while benefiting from the **lowest network fees** possible thanks to the BECH32 formatting.

Other minor improvements include removing the "chain" icon for on-chain payments in the invoice list, icon alignment adjustment, and more. Read the full [**1.0.7.0 Changelog**](https://github.com/btcpayserver/btcpayserver/releases) for details.

## Bug Fixing 🐛

Bug fixes in 1.0.7.0 include fixing a Get crashing call, file storage feature URL handling, Point of Sale custom price-fixing, and so much more.  
  
For example, regarding the now-famous **Payment Button**.

![](/images/chrome_VXff4aNR0q-2.png)

In some circumstances, embedding a BTCPay Server payment button on a website could result in the payment button not rendering as expected.

![](/images/chrome_UBoVRdII8u-2.png)

This is now also history!  
Embedding payment, donation, "GIVE ME MONEZ" buttons anywhere and on any website should now be without issues.

* * *

That's all for this major update. We worked hard to provide you with a functional new wallet setup interface, improve upon the existing features and fix bugs.

Despite this, if you have issues, feedback, feature requests, feel free to reach out on our [community chat](https://chat.btcpayserver.org). We hope you enjoy what this update has to offer.  
  
As always, thank you to our invaluable contributors  
[@britttttk](https://github.com/britttttk) [@bumbummen99](https://github.com/bumbummen99) [@dennisreimann](https://github.com/dennisreimann) [@dstrukt](https://github.com/dstrukt) [@ketominer](https://github.com/ketominer) [@Kukks](https://github.com/kukks/) [@Pavlenex](https://github.com/pavlenex/) [@rockstardev](https://github.com/rockstardev/) [@NicolasDorier](https://github.com/nicolasdorier/) [@ubolator](https://github.com/bolatovumar) [@Zaxounette](https://github.com/zaxounette/)  
  
The BTCPay Server team 💚
