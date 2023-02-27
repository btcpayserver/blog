---
title: "BTCPay Server 1.8.0 - Custom checkout forms, store branding and much much more!"
date: 2023-03-01
author: Bas
category:
  - "releases"
tags:
  - "btcpay-server"
  - "release"
  - "checkout"
  - "form builder"
  - "shipping information"
  - "update"
coverImage: "/images/btcpayserver-storebranding.png"
---
BTCPay Server 1.8.0 

We’re excited to release a new major version of BTCPay Server 1.8.0!

It took us quite a bit longer than what you're used to of us. As the year started fresh, we needed a little bit of a restart ourselves. One of the things we tend to do better this year is having a consistent release cycle. We will work on improving this so you can count on us for a maintenance window that doesn’t change or happen too often.

As always! No Devs were hurt in this release, only bugs that got squashed and new features being introduced, let's have a peak! Find detailed release notes [here](https://github.com/btcpayserver/btcpayserver/releases?page=1). 


👷 Custom checkout forms
In a previous major release, we’ve introduced the ability to collect emails and buyer’s information during checkout via forms. These forms were pre-defined. In 1.8.0 we’re adding more flexibility to the forms, by allowing you to create custom forms. 

Currently this process is slightly manual and has to be done with a little bit of JSON knowledge, but it’s on our radar to improve the UI around it in one of the next releases. 

Here are some examples of what can be done with the custom forms to get your creative juices flowing.

![](/images/btcpayformsblog2.jpg)


```json
{
  "topMessages": [],
  "fields": [
    {
      "name": "nostrPubkey",
      "constant": false,
      "type": "text",
      "value": null,
      "required": true,
      "label": "What's your nostr npubkey?",
      "originalValue": null,
      "helpText": null,
      "validationErrors": [],
      "fields": []
    },
    {
      "name": "comment",
      "constant": false,
      "type": "text",
      "value": null,
      "required": false,
      "label": "Let us know your ideas",
      "originalValue": null,
      "helpText": null,
      "validationErrors": [],
      "fields": []
    }
  ]
}
```

Example 2 ; 
![](/images/btcpayFormsBlog.jpg)


```json
{
  "topMessages": [],
  "fields": [
    {
      "name": "tableNumber",
      "constant": false,
      "type": "number",
      "value": null,
      "required": true,
      "label": "Let us know which table you would like",
      "originalValue": null,
      "helpText": null,
      "validationErrors": [],
      "fields": []
    },
    {
      "name": "allergies",
      "constant": false,
      "type": "text",
      "value": null,
      "required": false,
      "label": "Any allergies?",
      "originalValue": null,
      "helpText": null,
      "validationErrors": [],
      "fields": []
    }
  ]
}
```

For now the form can be enabled as a stand-alone, or as a part of a point of sale app or a payment request. Standalone form means you can share a form link, once your customer fills it in, they’ll be presented with a checkout page. Forms integrated within the PoS app or payment request allow you to collect information through the app itself. For example, when invoicing a client, or charging a customer through a point of sale. Integration into the crowdfunding app is planned. So stay tuned for that part! 

All data gathered through custom forms will be added in the invoice details page under Additional information section.

The potential form unlock is unlimited. We’re looking forward to seeing how you end up using it creatively. Tag us on Twitter [@BTCPayServer](https://twitter.com/btcpayserver) and we’ll retweet the most interesting form examples.


⚡ Lightning NFC plugin becoming core
The NFC plugin was built for browser compatible NFC devices, where a customer just has to tap his NFC card (boltcard) on your NFC enabled device. Due to increasing usage of this feature, we’ve decided to make it part of the core system. Nothing changes for you as a user. With the release of the new checkout V2 in 1.7.0, and the improvements we’ve done on both front and the backend the NFC functionality should be even smoother.

🏷️ Labeling addresses
We want to make address management a little bit easier, therefore we are introducing labels for addresses. When you create a new address in BTCPay Server, you now immediately get to label the address and these labels propagate to the transactions received on this address. 
We’ve added the step in the address creation process. Find in depth details [here](https://github.com/btcpayserver/btcpayserver/pull/4594).

![](/images/btcpaylabelsblog.jpg)

🔔 Rehauled Notifications icon set
As the world moves on and smileys become emojis. We are adding more clear indicators for  your notifications. In a glance you now will be able to pick up if there’s an action required or if it’s just telling you there’s an invoice paid. You can find all icons and their meaning on our design pages [here](https://design.btcpayserver.org/design/icons/). 

![](/images/btcpayiconsetblog.jpg)

👩‍💻 Greenfield API updates

Our Greenfield API keeps getting better. Leading up towards release 1.8.0 we’ve introduced some new features to reach through the API. We’ve added a new “get” endpoint for LNURL processing. Next to that we’ve also added 2 new permissions for PullPayments and added payments list as an endpoint. Find more details [here](https://github.com/btcpayserver/btcpayserver/releases/tag/v1.7.6).


🏪 Store Branding.
Remember how we introduced new store branding options in [1.7.0?](https://blog.btcpayserver.org/btcpay-server-1-7-0/) We are going to the next step in this release! When you set the store colour and logo, they will now be visible on all public facing pages. Custom forms, receipts, payment requests. pull payments, point of sale and crowdfunding can all now be customized by altering a simple color scheme in your store setting. 

![](/images/btcpayserver-storebranding.png)

🛍️ Checkout has copy addresses back! 
We’ve heard your feedback on our V2 checkout. One of the main points that came back, and we fully acknowledge, was the request for copy on the invoice address. Going forward you’ll get to see the addresses (both on-chain and lightning if available) for the invoice right below the unified QR code.

![](/images/btcpaycheckoutblog.jpg)

📠 Keypad POS tracks values individually  
Hot summers day on the terras? Got lots of invoices to handle with tips or discounts ? Within your invoices, you’ll now be able to see these amounts, in a split view on every subject. No longer do you have to count out what the tip or discounts amounts were, just a glance at the bottom of your invoice and all is clear. Find out more details about tracking values [here.](https://github.com/btcpayserver/btcpayserver/pull/4668) 

🔌 Plugins are here to stay! 
And do we kick it off with a great new one's made by Kukks. The plugin we are shipping with this release is called NIP05, verify your nostr account with your BTCPay Server! When verifying include a set of relays you often use for more easy discoverability. All set and done? Your NIP5 handle will be name@yourbtcpayserver.domain. If you have multiple domains mapped to the same BTCPay Server, they will all be valid. Find more details on the NIP05 plugin [here.](https://github.com/Kukks/BTCPayServerPlugins/tree/master/Plugins/BTCPayServer.Plugins.NIP05) 

🔌 BTCPay Server X Coinjoin
Kukks didn't just stop at the NIP05 plugin. He also integrated coinjoins using the wabisabi protocol. In the plugins page, you'll now be able to add the Coinjoin plugin and start enhancing your bitcoin privacy directly through your BTCPay Server. For more details on how it works and what is involved please read [here](https://github.com/Kukks/BTCPayServerPlugins/tree/master/Plugins/BTCPayServer.Plugins.Wabisabi#readme)

🚨 Phasing out MySql and SQLite
Maybe some of you have noticed, but if your instance was still running MySql or SQLite, you now will be able to migrate. As of release 1.7.1 we’ve marked them as deprecated and moved on. Release 1.7.8 saw a migration path for legacy databases like MySql or SQLite. However as we update these, we’ve seen people run into trouble. After migration there was an error at the reboot. In release 1.7.10 we fixed this bug and made sure migration does as it says. Find details on the migration process [here.](https://github.com/btcpayserver/btcpayserver/blob/v1.7.8/docs/db-migration.md) 

If you are a BTCPay Server integrators such as developer of Nodl, Raspiblitz, Umbrel, Embassy OS or anybody running BTCPay Server on SQLite or MySql, please refer to [the documentation](https://docs.btcpayserver.org/BTCPayServer/db-migration/#migration-from-sqlite-and-mysql-to-postgres). While SQLite and MySQL should still be working for one year or two, we will not be focused on fixing bugs related to those backends (unless it impacts the migration process).

🫶 Donate via OpenSats
We're grateful that OpenSats partnered with us to help individuals donate to the BTCPay Server projects. If you ever wondered how you can support BTCPay contributors without being a company, head on to [OpenSats](https://opensats.org/projects/btcpayserver) and feel free to throw a donation.

As OpenSats is a US Based public charity registered as a 501(c)(3), you can apply for a tax deduction on these donations. This wasn't previously possible, as BTCPay Server Foundation works differently. With the opportunity given by OpenSats, it's now possible to [donate](https://opensats.org/projects/btcpayserver) to BTCPay Server as an individual!

💚 Thank you
As usual, if you have problems, feedback, feature requests regarding BTCPay Server, feel free to reach out on our [community chat](https://chat.btcpayserver.org/). We hope you enjoy what this update has to offer.
As always, thank you to our invaluable contributors, who directly participated in making 1.8.0 possible. 
Besides release contributors, we'd like to thank all of our contributors who're making BTCPay Server better every day, through testing, reporting bugs, providing feedback, documenting, content making and more! BTCPay Server could never rapidly progress without your help!

The BTCPay Server team 💚

