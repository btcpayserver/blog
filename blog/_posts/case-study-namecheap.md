---
title: "Namecheap surpasses $73M in BTC revenue with 1.1m transactions through BTCPay Integration"
date: 2024-11-21
author: Pavlenex, Webworthy, Graham Wood
category:
  - "case-studies"
tags:
  - "case-study"
  - "enterprise"
  - "merchants"
  - "e-commerce"
coverImage: "/images/namecheap-featured.png"
---

[Namecheap](https://www.namecheap.com) has been one of the world’s leading domain registrars for over two decades. Launched in 2000 to provide great domains at great prices, Namecheap has since expanded to become a platform with everything you need to get online for less. They offer hosting, security, managed WordPress, and more, always prioritizing customer service and data privacy above all else.

![](/images/namecheap-1.png)

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/namecheap.pdf).

## Choosing BTCPay Server

Namecheap has been supporting Bitcoin payments for a while now, and was actually the first domain registrar to do so, back in 2013 via BitPay. And in 2020, we added BTCPay. Adding BTCPay to the mix was a way of bringing even more options and convenience. This offers customers even more choices for transactions while providing a backup plan in case another Bitcoin payment platform experiences issues.

Furthermore, our customers specifically [asked for it](https://www.namecheap.com/blog/integrating-bitcoin-payments/). BTCPay Server’s ethos of security,  privacy, and inclusion aligns with Namecheap’s own values. That, combined with easy integration for smaller merchants, made adopting BTCPay extra appealing. 

## The implementation process

We deployed all the server parts manually instead of using the default method of deploying them on one machine based on docker images. Because of this, we had to make all the parts work together ourselves, working closely with the BTCPay team to ensure the service could function on remote servers.

Plugins and features we utilized during the process were:

1) BTCPay Server — an open-source [BitPay API-compatible](https://github.com/btcpayserver/btcpayserver) web server that allows us to create invoices, make payments, refunds, and more.
2) PostgreSql — a database for BTCPay Server.
3) NBXplorer — a type of [REST facade](https://github.com/dgarage/NBxplorer) over Bitcoin Core allowing Bitcoin transactions (UTXO). Net open source solution.

4) Bitcoin Core — a [Bitcoin node](https://github.com/bitcoin/bitcoin) part of the Bitcoin network. Verifies payments and provides a soft wallet. An open-source C++ project MIT License.

## Challenges

The main challenge when implementing the integration was related to performance. We wanted to ensure the loading speeds of the platform and web pages would not be affected. Areas that experienced some teething problems included integrating custom images, using remote databases, and the absence of some reporting features, which meant we had to generate reports manually.

![](/images/namecheap-2.png)

Namecheap has a high volume of transactions, so we must be careful about any performance degradation when handling them. We have implemented measures like a database rescan, which has proven to be a great solution to this potential performance issue.

BTCPay support made overcoming these challenges easy. It’s one of their standout features, with our issues resolved efficiently via support tickets, especially when compared to other Bitcoin payment processors. With BTCPay, we have a dedicated chat where problems can be resolved quickly. This is priceless for us since we need to ensure the same quality and speed of service for all our customers, whatever payment method they use.

## Features and Benefits

The two key benefits of integrating BTCPay Server have been enhancing user experience while providing better customization and control for platform integration.

![](/images/namecheap-3.png)

BTCPay Server does not charge additional processing fees for transactions, apart from the standard Bitcoin network fees, making it more cost-effective in the long run compared to BitPay, which charges processing fees. Payments made through BTCPay go directly to our company wallet without an intermediary holding or processing the funds. This direct access enhances control over the funds.

Regarding future possibilities, BTCPay Server allows support for multiple payment methods (like Bitcoin Lightning) and different checkout experiences, so we could extend support for such payment methods later on.

## Results 

The first BTCPay Server transaction on Namecheap was on May 18, 2020. Between then and October 2024, we’ve achieved:

- 1.1m transactions in total
- Over 500k users
- Over $73m in revenue
- Payments from over 200 countries worldwide

The transactions per user have remained relatively stable over the years, sitting at 1.85 in 2024. This suggests that the engagement level per user is consistent despite user number fluctuations.

The average revenue per transaction has steadily risen, especially in 2024, when it jumped to $79.30. The revenue per user skyrocketed to $146.55 in 2024, a 23% increase from 2023.

![](/images/namecheap-4.png)

## Conclusion

Adding BTCPay to Namecheap’s Bitcoin payment repertoire has been a success overall. Although we experienced minor challenges during implementation, these were quickly worked out thanks to BTCPay’s excellent customer service. Namecheap is dedicated to delivering an exceptional customer experience and protecting the freedom and privacy of our users. BTCPay Server has helped us achieve that and will continue to do so in the foreseeable future. 

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/namecheap.pdf).
