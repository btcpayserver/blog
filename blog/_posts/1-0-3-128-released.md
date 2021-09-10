---
title: BTCPay Server 1.0.3.128 released - Inventory management, LN for non-admins, polishing PoS and more!
date: 2019-09-04
author: pavlenex
category: releases
permalink: /1-0-3-128-released
coverImage: /images/1.0.3.128.jpg
---
New BTCPay version **1.0.3.128** is out! Besides new features (Inventory managment in Apps and allowing Lightning Network for non-admins), the brand-new release brings in a lot of small improvements and bug fixes.

## [1.0.3.128 Changelog](https://blog.btcpayserver.org/changelog/)

![](/images/Screen-Shot-2019-09-04-at-11.35.07.png)

## Features

### Invetory Management in Apps

The ability to limit the contribution perks and products has been added to the Crowdfunding and Point Of Sale apps.

***Crowdfunding App Inventory Management:***
![](/images/Crowdfundingi-Inventory.jpg)

***Point of Sale App Inventory Management:***
![](/images/POS-Inventory.jpg)

***Point of Sale App Perks Inventory Demo:***
![](/images/ySw0WNp1-1024x925.png)

***Crowdfunding App Perks Inventory Demo:***
![](/images/Sl5VZo41.png)

### Lightning Network for non-admins

Since the initial integration of the Lightning Network into BTCPay Server, the server owners (admins) were the only users able to accept payments via the built-in lightning node. With the new release, admins can now share their Lightning Network node with other users on their server.

This is a custodial feature which means funds received by those users will be under the control of the server owner. It is up to server owner to figure out the best way to distribute the incoming funds to merchants using the BTCPay instance. Currently, the management of those funds is quite difficult and distinguishing payments requires a lot of manual work and accounting. For that reason, we discourage open [third-party hosts](https://docs.btcpayserver.org/deployment/thirdpartyhosting) from using the feature until it’s further developed and adjusted for the use-case.

This option is particularly useful for those sharing their BTCPay instance across multiple businesses. For example, a user that owns 3 e-commerce stores and can accept lightning network payments for all 3 on a single self-hosted instance. Potentially, you may be able to create agreements with businesses so that they may enable their customers to pay with lightning through your managed lightning node, against a fee.

To enable Lightning Network node sharing with other users, go to Server Settings > Policies and tick the box which says “Allow non-admins to use the internal lightning node in their stores”.

## Thank you to our contributors

Huge thanks go to our contributors, who made their release possible. The MVP of the release is [bolatovumar](https://github.com/bolatovumar) who did numerous fixes and improvements to the Point of Sale app.

- [bitcoinbrisbane](https://github.com/bitcoinbrisbane)
- [bolatovumar](https://github.com/bolatovumar)
- [MrKukks](https://github.com/Kukks/)
- [NicolasDorier](https://github.com/NicolasDorier)
- [Wiz](https://github.com/wiz)

**How to update to 1.0.3.128?**

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay > Server Settings > Maintenance > ***Update***.

If you encounter any issues with this version, or need assistance, please report it on our [community chat](https://chat.btcpayserver.org/) or on our [GitHub](https://github.com/btcpayserver/btcpayserver/issues).
