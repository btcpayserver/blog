---
title: "BTCPrague: Onboarding 25 Merchants to Accept Bitcoin, Generating 1.3 Million CZK revenue and 7079 Transactions"
date: 2025-08-14
author: Pavlenex, Webworthy
category:
  - "case-studies"
tags:
  - "case-study"
  - "point-of-sale"
  - "terminals"
  - "conference"
coverImage: "/images/btcprague-featured.png"
---
In June 2025, [BTCPrague](https://btcprague.com/) conference returned bigger than ever, lighting up the Czech capital with thousands of Bitcoiners, ready to learn and network

Thanks to a collaboration between BTCPrague, BTCPay Server, NiceHash, and Blink, 25 local merchants were onboarded to accept Bitcoin payments directly from attendees. Bitcoin wasn’t just a topic of conversation - it was the payment method!

Over the course of just four days, vendors processed **7,079 transactions** totaling **0.5885 BTC** equivalent to **1.3 million CZK**.

This case study explores how the project came together, what it meant for the vendors involved, and why it might just be a blueprint for everyday Bitcoin adoption.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/btcprague.pdf).

## **Background and Challenges**

From the start, the BTCPrague team had an ambitious goal: **build a Bitcoin-native economy inside the venue**. Whether grabbing a cold drink, buying a t-shirt, or ordering lunch, attendees should be able to pay everything in bitcoin. It was a bold vision that aligned perfectly with the spirit of the event showcasing Bitcoin not just as an asset, but as **money ready for everyday use**.

Turning vision into reality came with challenges. Most of the vendors, small local businesses ranging from coffee stands to kebab stalls, had **little or no experience with Bitcoin**. A post-event survey later confirmed it: many rated their prior understanding of Bitcoin as *very low*. 

The challenge was clear: **Could Bitcoin payments be made as fast, reliable, frictionless and compete with the likes of MasterCard and Visa? And could a small team pull it off at scale in a live, high-pressure environment?**

![](/images/btcprague-1.png)

## **Implementation**

Making Bitcoin payments work at BTCPrague required a coordinated effort across multiple teams  BTCPay Server, [Blink](http://blink.sv), and [NiceHash](https://www.nicehash.com)  with each group solving different parts of the puzzle.

* **Dedicated BTCPay Server Instance:** Just as in previous events like [Bitcoin Atlantis](https://blog.btcpayserver.org/case-study-bitcoin-atlantis/), and [BHB](https://blog.btcpayserver.org/case-study-bhb24-nostriga/) a cloud-hosted [BTCPay Server](https://docs.btcpayserver.org/Deployment/webdeployment/) was deployed exclusively for the conference. Each vendor got their own BTCPay store, pre-configured with a Lightning wallet and a ready-to-go point-of-sale interface..  
* **Lightning Network via Blink:** To handle the high volume and instant settlement volume, payments ran over the Lightning Network, with Blink acting as the backend wallet infrastructure. Instead of requiring merchants to run their own node or manage liquidity, BTCPay’s [plugin](https://plugin-builder.btcpayserver.org/public/plugins/blink) connected each store to a Blink wallet. That meant payments were routed reliably and arrived directly in the merchant’s Blink wallet **in real time**. Merchants had the option to **auto-convert incoming bitcoin to “StableSats”**, a USD-pegged balance inside Blink. This gave them a safety net from Bitcoin’s price volatility; they could lock in fiat value on the fly and cash out later via local exchanges if they chose. Several vendors opted to stay fully in BTC throughout the event.  
* **Point of Sale Hardware:** To streamline the setup, each vendor received a Sunmi V2 Android payment terminal, courtesy of **NiceHash**. These devices came preloaded and stress-tested, ensuring they were production-ready. A select group of vendors also participated in the **beta testing of the new BTCPay App**, a mobile point-of-sale solution currently in development. This marked one of the app’s **first real-world field trials**, and early feedback from merchants was encouraging.  
* **Training & Onboarding:** Recognizing that most merchants were new to Bitcoin, organizers hosted a hands-on training session before the conference. This covered the basics of using the BTCPay point-of-sale and how to troubleshoot common issues. Merchants rated the session **4.1 out of 5** on average, indicating it helped build confidence.  
* **On-site support**: During the event, a “response team” made up of BTCPay contributors and NiceHash staff and conference volunteers actively roamed the vendor area, checking in, answering questions, and solving problems as they came up. A dedicated WhatsApp group was also created, allowing merchants to request support instantly if they ran into issues.  This dual approach worked well; merchants rated live support **4.4 out of 5**, and several called it the most reassuring part of the experience.

One vendor summed it up best: 

> “Knowing someone had my back if anything broke, made the whole experience worry-free.”

![](/images/btcprague-2.png)

## **Outcomes**

The collaborative effort culminated in a showcase of Bitcoin’s power as a real-world payment method. Throughout the conference, attendees bought coffee, meals, and merchandise using Bitcoin and for the vendors, bitcoin became a natural payment method. By the end of the event, Bitcoin wasn't an unknown novelty anymore. It had blended so smoothly into daily operations that many vendors instinctively asked, *“**Cash, card, or Bitcoin**?”* without even thinking about it.

The raw numbers speak to the success: **7,079 Lightning transactions** were processed during the event, with an average payment size around *183 CZK (≈ €7.5)*. In total, vendors accrued **0.5885 BTC in revenue, equivalent to roughly 1.3 million CZK or €53,000**. For a few days of sales, this was a meaningful boost and it demonstrated that Bitcoin open-source infrastructure can handle high-volume in a live environment. 

To gauge the merchants’ experiences more formally, organizers conducted a post-conference **survey of the participating vendors**. The feedback was overwhelmingly positive and offers valuable insights:

* **100% of surveyed merchants** said they **would be willing to accept Bitcoin again at next year’s conference**, having gained confidence from this trial run.  
* A strong majority (about **63%**) indicated they would even consider **offering Bitcoin as a payment option in their business outside** the conference setting, showing that the event *sparked longer-term interest* in Bitcoin commerce.  
* **\~88% of respondents observed positive customer reactions** to the Bitcoin payment option. Many reported that customers (especially Bitcoin-savvy attendees) were excited to pay with Lightning, and even those new to Bitcoin were intrigued and happy to try it.  
* **Merchant satisfaction:** All participants found the overall experience of using BTCPay Server to be smooth. In free-form feedback, several merchants described the system as *“quick and simple”*, and appreciated the professional look of the setup. One vendor wrote that having a dedicated Bitcoin payment terminal made their stall *“look very professional and high-tech”*, which even became a talking point to draw in curious customers. A couple of merchants did highlight areas for improvement for example, one suggested better offline handling for the POS when the internet drops, and another mentioned a desire for even more language localization in the interface.  
* When it came to **business impact**, accepting Bitcoin had no negative effect on vendors’ bottom lines, quite the opposite. Several merchants reported an **uptick in sales**, driven by Bitcoin enthusiasts eager to spend bitcoin at their booths. Many also appreciated the **lack of processing fees**, which meant they kept more of what they earned compared to traditional card payments.  
* After the event, outcomes varied. Some vendors chose to **hold onto the Bitcoin they received**, curious about its long-term potential. Others opted to **convert a portion or all to CZK** to cover expenses

![](/images/btcprague-4.png)

## **Takeaways**

The BTCPrague demonstrates that with the right blend of people and technology, **Bitcoin can be seamlessly integrated into real-world commerce**, even in a short-term, high-traffic event setting. 

For many merchants, this was their first foray into Bitcoin and it turned out to be an *eye-opening experience* that **dispelled several myths**. They saw first-hand that Bitcoin payments can be **fast, convenient, and secure**, and that accepting Bitcoin doesn’t mean exposing oneself to wild volatility or technical nightmares. By leveraging **BTCPay Server’s open-source technology**, the conference empowered local businesses to take payments **on their own terms**  with no proprietary point-of-sale contracts or bank intermediaries  while still enjoying the safety nets of instant fiat conversion and on-site support.

A few key lessons and takeaways include:

* **Collaboration is key:** The success at BTC Prague was a team effort. BTCPay Server provided the payment infrastructure, Blink ensured Lightning reliability and offered hedge in StableSats and NiceHash provided necessary hardware that looks exactly the same as credit card payments. This open collaboration between Bitcoin projects and companies created a model that can be [replicated](https://docs.btcpayserver.org/Conference-PoS-guide/) at other events or communities  when we work together, Bitcoin adoption accelerates.  
* **Support and education:** Giving merchants hands-on experience with Bitcoin in a low-risk environment (a conference where organizers assist and the customer base is inclined to try new things) is powerful. The 25 merchants not only earned extra revenue, but also gained the knowledge and tools to potentially **continue accepting Bitcoin beyond the event**. This indicates that **education and positive first experiences** are critical in driving adoption once people *use* Bitcoin and see it work.  
* **User experience matters:** BTCPay Server put heavy emphasis on making the payment flow **as familiar as possible**. This paid off in customer satisfaction; attendees found the novelty of Bitcoin payments *fun*, yet the process was straightforward.  
* **Infrastructure readiness:** The event showcased that the Lightning Network, when backed by reliable liquidity management (in this case via Blink), can handle thousands of rapid transactions without a hiccup. It shows that Bitcoin’s layer two is **ready for prime time** in retail scenarios.

![](/images/btcprague-5.png)

Finally, the human element must be highlighted. The enthusiasm from both vendors and customers at BTCPrague was visible. By the end of the conference, merchants were proudly sharing their experiences, and many expressed a sense of *being ahead of the curve*.

The positive feedback loop:  merchants happy to have expanded their payment options, and attendees thrilled to spend bitcoin in the wild created an atmosphere of **optimism and empowerment**. 

As merchants put it:

> *“I find \[Bitcoin\] a great payment option to offer to customers, and it looks very professional and high-tech having the BTCPay terminal.”*

> “It was fast and simple and people were thrilled that they could pay in BTC.”*

![](/images/btcprague-6.png)

This case-study demonstrates that by combining education, the right technology, and support, we can break down the barriers to using Bitcoin as everyday money. The outcomes here inspire confidence that more events and permanent businesses  can follow suit, leveraging BTCPay Server and Lightning to open up new possibilities.

![](/images/btcprague-7.png)

In the aftermath, merchants, organizers, and partners all agreed: **Bitcoin proved itself not just as a topic of discussion on stage, but as a working payment solution on the ground**. And that might be the most important takeaway of all.

You can [download a PDF of this case study on this link](https://btcpayserver.org/case-studies/btcprague.pdf).
