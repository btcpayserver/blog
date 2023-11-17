---
title: "World's Fastest BTCPay Deployments with Voltage - generating over 45,000 invoices per month!"
date: 2023-11-17
author: Pavlenex, Webworthy, Bobby Shell
category:
  - "stories"
tags:
  - "case-study"
  - "hosting"
  - "providers"
  - "infrastracture"
coverImage: "/images/voltagecasestudy-featured.png"
---

Voltage is a Bitcoin Development Platform and infrastructure provider that enables engineers, developers, and business owners to take full control over their Bitcoin experience. 

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/voltage2023.pdf).

[Voltage](https://voltage.cloud/?utm_source=BTCPay&utm_medium=Case-Study-BTC-Pay&utm_id=BTC-Pay-Case-Study-Voltager) offers BTCPay Server instances to anyone with a Voltage account. When you have a BTCPay Server with Voltage, you can build a donation button, webshop, crowdfund, and more. Further, if you have a lightning node on Voltage, it will connect to your BTCPay Server instance seamlessly, providing a near frictionless non-custodial bitcoin-native commerce platform.  

![](/images/VoltageCaseStudy-1.png)

## Needs and Goals: 

[Voltage](https://voltage.cloud/?utm_source=BTCPay&utm_medium=Case-Study-BTC-Pay&utm_id=BTC-Pay-Case-Study-Voltager) is a bitcoin-focused business. As such, there needs to be a way to accept Bitcoin from customers for Voltage billing and give customers the maximum amount of freedom in a non-custodial manner to utilize their lightning node infrastructure. We believe that BTCPay Server is the most robust solution for commerce on Bitcoin while maintaining the core Bitcoin ethos of permissionless, censorship-resistant payments.

![](/images/VoltageCaseStudy-2.png)

## Choice of BTCPay Server:

Nearly all other Bitcoin commerce solutions have some custodial KYC component. This is something that we wish to avoid at Voltage. With those services put aside, the competition for Bitcoin native commerce platforms that are open source is relatively slim. BTCPay Server’s core ethos and mission align perfectly with our own, and that made the choice to use BTCPay Server fairly easy. On top of that, the sheer amount of features and customizability of BTCPay Server is unmatched in the industry.

![](/images/VoltageCaseStudy-3.png)

## Implementation

- Integrating BTCPay Server into Voltage was fairly easy. We use the standard open source tools, like the Docker Compose [repository](https://github.com/btcpayserver/btcpayserver-docker) We use the [APIs](https://docs.btcpayserver.org/API/Greenfield/v1/) that come default with BTCPay Server to administer the server on behalf of our users. BTCPay Server comes with all the features and settings needed out of the box. It’s been simple and easy to use.
- Challenges: At Voltage, we experience scale beyond the standard deployment of BTCPay Server. For those reasons, we had to be prepared. To best ensure our customer’s data, we switched out the default deployment of the Postgres database for our own Postgres installation which is highly available and takes frequent backups.

![](/images/VoltageCaseStudy-4.png)

## Features and Benefits

**An improvement over the previous system**: BTCPay Server has been a part of Voltage since day one. It was deployed as the primary software to accept Bitcoin payments from Voltage’s first customers and has stayed with us ever since. Shortly after launch, BTCPayServer user accounts were offered as an additional service to Voltage users at a low cost and we still do to this day.

## Results
- Outcomes: Simple BTC payment checkout for our customers + now all of our customers can spin up a BTCPay instance in minutes and deploy without technical know-how.
- Data: As of October 2023 Voltage is doing 45,000+ transactions monthly. 
- User Feedback: We made a video series from some of our customers. You can watch those [here](https://www.youtube.com/watch?v=1W8FixsefHY), and [here](https://www.youtube.com/watch?v=mL7mZ542Vhs&t=118s).

![](/images/VoltageCaseStudy-5.png)

## Conclusion

**Learnings**: The fastest and easiest way for us to accept payments is BTC Pay. We also have found that customers love being able to spin up BTC Pay quickly without having to learn the process of doing it themselves. It is a very popular product that we get new users for daily. 

**Future Prospects**: BTCPay will continue to be the bitcoin payment infra we use to accept bitcoin-denominated payment processing. We are also excited for updates that our customers can use and experience.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/voltage2023.pdf).