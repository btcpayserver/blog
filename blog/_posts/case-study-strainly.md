---
title: "Empowering hemp growers and breeders: How Strainly leveraged BTCPay Server to enable peer-to-peer and private payments at scale"
date: 2023-12-14
author: Pavlenex, Webworthy
category:
  - "stories"
tags:
  - "case-study"
  - "privacy"
  - "circular-economy"
  - "point of sale"
coverImage: "/images/strainly-featured.png"
---

[Strainly](https://strainly.io/) is the leading platform empowering hemp growers, breeders and equipment providers. Strainly provides a global, safe, reliable and convenient access to everything hemp growers need, empowering them to do what they do best. Strainly allows growers, breeders, nurseries and equipment providers to offer and procure their genetics and equipment while benefiting from a rating/reviews mechanism and an integrated privacy-focused, peer-to-peer payment system.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/Strainly2023.pdf).

## Needs and Goals

Hemp breeders face significant friction when it comes to promoting and selling their genetics (seeds, clones, pollen). Social media platforms wage a war on this industry, constantly shutting down or shadow-banning accounts. 

Payment processors rigorously ban industry players. This entire industry relies on cash (fiat) to transact, causing significant friction and security issues. Digital/remote transactions suffer massive friction due to the inability to use legacy fiat payment processors. Strainly aims to connect breeders, nurseries, growers and equipment providers, in a reliable manner. Strainly has been serving this industry for over 7 years, improving access to genetics while increasing revenues for breeders and nurseries.

## Choice of BTCPay Server 

Fiat payment processors have strict policies regarding the hemp industry. Only high-risk (and high fees) payment processors accept to work with our industry. We observed that payment processors (including high risk/high fees ones) terminate services with very short notice. It is also important to note that privacy is not their primary concern. Fiat payment processors are usually very intrusive and require significant details (i.e. enhanced due diligence) regarding merchants, in our case, our users. 

Collecting personal data from our users has always been a red line for us. Let alone handing over our user's identity to third party payment processors! BTCPay Server quickly stood out as the obvious solution for processing payments in a reliable, permissionless, censorship-resistant and private manner. BTCPay Server allows for self-hosting, which allows for business resiliency and privacy. We turned this payment processing challenge into an opportunity to orange pill at scale by rolling out a reliable, smooth and private bitcoin payment system, using BTCPay Server.

## Implementation

Setting up BTCPay Server on a dedicated VPS was a matter of an hour. Strainly being offered as a freemium web app, we started by integrating BTCPay Server invoices to monetize paid features. We used the **dedicated API** and **webhooks** to upgrade our members automatically to a paid tier, after a BTCPay invoice for a given subscription is Settled. We enabled Lightning payments from the get go, to minimize fees for our users. The modal rendering of the BTCPay invoices allows for a slick UI. 

After a couple of months, it became clear that BTCPay Server was a reliable enough payment system that we could keep building on. We therefore took on a bigger task: **allowing peer-to-peer payments between our members**.

1. The first step and challenge consisted in laying out an entire transaction workflow where:
 - the marketplace would take a service fee BUT without being a middleman or money transmitter for obvious compliance reasons
 -  marketplace leakage would be prevented
 - user experience would be « new-coiners compatible », as our users are rarely bitcoiners! It means that the entire **UX needed to remain abstracted within our own marketplace, in a minimalist way**, and that at no point were users supposed to sign up and log in via the BTCPay Server interface. In other words, we were lining ourselves up to make extensive use of the [BTCPay Server API](https://docs.btcpayserver.org/API/Greenfield/v1/). Once the transaction workflow and all its possible scenarios were laid out, we mapped out every API call into it. Fortunately, the BTCPay Server’s API documentation is pretty clear and detailed! 
2. In order for our payment system to work as intended, we first had to **enable users to create their own non-custodial on-chain wallet** along with their Lightning wallet (leveraging the LNBank plugin) while never leaving our web app. To ensure optimal UX, it had to be a matter of [hitting a couple buttons](https://blog.strainly.io/2022/11/30/how-to-create-your-bitcoin-wallet-on-strainly/) in the profile settings, and displaying the seed phrase, one single time, to the user, while making clear to these new-coiners that there was no second chance to write down their seedphrase! We then built a [simple transaction workflow](https://blog.strainly.io/2023/05/30/transaction_workflow_explained/) where the vendor pays a fee to the marketplace and then gets paid by the buyer. We’ll explain later why we did it that way. In order to allow vendors to refund buyers (for whatever reason they may have), we also had to use [Pull Payments](https://docs.btcpayserver.org/PullPayments/#additional-use-cases-for-the-pull-payments-feature) and [Payouts](https://docs.btcpayserver.org/Walkthrough/#payouts) in the BTCPay API. Finally, in order to keep the UX intuitive for all parties involved, we had to use webhooks to change the transaction to explicit statuses while rendering a short payment history in the [vendor’s wallet](https://blog.strainly.io/2023/04/23/how-to-use-your-bitcoin-wallet-on-strainly/). 
3. As a result, buyers can commit to make a purchase with a vendor. The vendor is immediately prompted to pay a service fee invoice (BTC) to the marketplace operator’s BTCPay wallet and the buyer is prompted to pay the vendor for the order (including shipping fees if applicable). The invoice defaults to the Lightning network for small amounts and to on-chain payments for larger amounts. The vendor is notified of a successful payment and invited to check their wallet balance that is surfaced in the wallet section of their profile, which is an abstracted BTCPay wallet. The vendor can then ship the order and both parties review each other. If applicable, the vendor can also refund the payment for any reason, and the buyer will be prompted to claim their refund within the UI, as part of a workflow scenario. Indeed, both parties can fulfill these payments using any compatible wallet (whether CashApp, Strike, Phoenix, Muun…). 
4. The UI/UX had to incentivize vendors to transfer the proceeds of their sales to a safer (i.e cold wallet). We enrolled in affiliate programs with Blockstream and Coinkite to convince our new-coiners to use the best technology to secure their bitcoin. Some of our members need to spend the proceeds of their sales in fiat. We therefore enrolled in the [Bitcoin Company](https://thebitcoincompany.com)’s affiliate program to offer a convenient and privacy-friendly off-ramp solution. We display [Blockstream](https://blockstream.com), [Coinkite](https://coinkite.com) and The Bitcoin Company banners in the user’s wallet, within our web app. 
5. **Challenges**: The biggest challenge was to make the whole transaction workflow as frictionless as possible, bearing in mind that 90% of our users were no-coiners or new-coiners. The user experience had to flow naturally and intuitively. We initially required buyers to pay the marketplace fee and order at the same time. We quickly realized that it created too much friction for buyers and would result in a significant increase in abandoned orders. We had to put the burden on the sellers first, since after all, they had an incentive to close the sale! That’s why the marketplace fee is paid upfront by the vendor. We are therefore slightly relying on vendors to help us orange pill buyers.
6. We also discovered a couple bugs in some API calls and the LNBank plugin, which is to be expected as we might have been the first to use those API calls and features. But in general, we haven’t had too many surprises with the integration. 

## Features and Benefits

> We did not have any integrated payment system before, because none of the fiat payment processors were charging reasonable fees or respecting privacy. Bitcoin has always been the natural and obvious fit, and BTCPay made Bitcoin payments practical!

*  **Better user experience**: with the BTCPay Server integration, users can pay each other WORLDWIDE, very intuitively, by simply hitting the « Pay order » button within the transaction workflow. Vendors can immediately verify the payment was received without leaving the app. Payments are instant and users do not risk getting their fiat payment account shutdown and balance frozen for making a payment that falls under a prohibited category/unacceptable use policy.
* **Enhanced security**: No more chargebacks! Vendors are always concerned about chargebacks, which are relatively frequent. Vendors like the irreversibility nature of bitcoin payments. On the flip side, because vendors have to be verified before being approved to post listings and because they have to pay the marketplace fee upfront, we tend to filter out high time preference scammers effectively. Buyers feel reassured that only legit vendors are on the marketplace. Finally, both vendors and buyers can pay and get paid (or refunded) without ever revealing their identities and payment details. If they want to use a PO Box for deliveries, they can!

> We can now offer an improved UX while taking fees proportional to the value delivered to users. Game changer. 

## Results

* **Outcomes**: Improved transaction workflow that you should expect on any marketplace, bitcoin-centric, privacy-focused, secure and easy. Improved UX for buyers, vendors and marketplace operators. Payment, dispute, refund, everything is here.
* **Data** : 600-800  invoices settled each month. 80%+ settlement rate.
* **User Feedback**: Some users (no-coiners) were initially confused but overall this has been well accepted and some users only accept using our integrated system as a payment method. 


BTCPay Server was a natural choice for us. It’s a well-designed & mature product that “just works”. It’s intuitive enough that anyone can use it, while having the depth needed to satisfy more advanced users. It’s stable enough to deploy without constant worrying, yet innovate enough to continue adding new features without making the product worse overall.

Whenever a payment is collected on BTCPay Server, it should be immediately forwarded to that user’s Bitcoin Jungle wallet. To achieve this, we leveraged BTCPay Server’s Webhooks feature. Each time an **invoice is paid**, a **webhook is triggered**. This webhook is responsible for forwarding the Bitcoin received in the merchant’s wallet using the LNURL protocol. The webhook also allows us to split up the Bitcoin in various ways - the service provider can **optionally retain a processing fee & tips received** can be split up and delivered amongst staff members evenly. This happens in under a second and is perceived to be “real-time” by the merchant.

![](/images/Strainly-1.png)

We also wanted our BTCPay Server to use the BTC/CRC price set by Bitcoin Jungle Wallet, to avoid mis-match in fiat calculations between the Point of Sale and the Wallet. To achieve this, we created a **custom rate provider** in our BTCPay Server instance. This was a straightforward process - copy an existing rate provider & then modify the code to make a RPC call to Bitcoin Jungle to retrieve the current price of BTC.

Overall, the integration was very straight-forward. The main challenge we faced was the handling of on-chain payments received, as we decided to forward all payments over Lightning Network. We automated this case utilizing **Lightning Loop**.

![](/images/Strainly-2.png)

## Features and Benefits

Prior to our BTCPay Server integration, we only offered a Payment Link to our users (e.g. https://pay.bitcoinjungle.app/username), which is powered by Galoy.
This integration greatly enhanced the user experience for merchants. BTCPay Server allows them to create multiple Point of Sales (say if they have multiple locations) and track them separately, integrate with popular ecommerce platforms, have a login to view/export invoices to Excel for accounting, and accept payments on-chain in addition to Lightning.

![](/images/Strainly-3.png)

## Results

We have received far fewer support requests than expected after our integration with BTCPay Server. The whole process is pretty seamless & intuitive. **Any business owner can start accepting Bitcoin payments in <2 minutes**. To date, we haven’t received any feature requests that were not already planned by the BTCPay Server dev team (and almost all have already been implemented). 

Our single BTCPay Server instance ~**200 stores** supports , totalling ~5k invoices to date. It continues scaling efficiently without any issue.

![](/images/Strainly-4.png)

## Conclusion

One thing we learned was that it’s crucial to allow users to pay on-chain, even if you prefer Lightning Network. We’ve found some visitors to our circular economy don’t yet have a Lightning wallet. They see the Bitcoin Accepted Here sticker at a store, get excited because they have Bitcoin (usually on Coinbase), but then scan a Lightning QR and can’t pay the merchant. Once we added On-chain capabilities for merchants using BTCPay Server, we noticed an uptick in payments.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/Strainly2023.pdf).