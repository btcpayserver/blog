(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{404:function(e,t,a){"use strict";a.r(t);var r=a(10),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://www.namecheap.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Namecheap"),t("OutboundLink")],1),e._v(" has been one of the world’s leading domain registrars for over two decades. Launched in 2000 to provide great domains at great prices, Namecheap has since expanded to become a platform with everything you need to get online for less. They offer hosting, security, managed WordPress, and more, always prioritizing customer service and data privacy above all else.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/namecheap-1.png",alt:""}})]),e._v(" "),t("p",[e._v("You can "),t("a",{attrs:{href:"https://btcpayserver.org/case-studies/namecheap.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("download a PDF of this case study on this link"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"choosing-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choosing-btcpay-server"}},[e._v("#")]),e._v(" Choosing BTCPay Server")]),e._v(" "),t("p",[e._v("Namecheap has been supporting Bitcoin payments for a while now, and was actually the first domain registrar to do so, back in 2013 via BitPay. And in 2020, we added BTCPay. Adding BTCPay to the mix was a way of bringing even more options and convenience. This offers customers even more choices for transactions while providing a backup plan in case another Bitcoin payment platform experiences issues.")]),e._v(" "),t("p",[e._v("Furthermore, our customers specifically "),t("a",{attrs:{href:"https://www.namecheap.com/blog/integrating-bitcoin-payments/",target:"_blank",rel:"noopener noreferrer"}},[e._v("asked for it"),t("OutboundLink")],1),e._v(". BTCPay Server’s ethos of security,  privacy, and inclusion aligns with Namecheap’s own values. That, combined with easy integration for smaller merchants, made adopting BTCPay extra appealing.")]),e._v(" "),t("h2",{attrs:{id:"the-implementation-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-implementation-process"}},[e._v("#")]),e._v(" The implementation process")]),e._v(" "),t("p",[e._v("We deployed all the server parts manually instead of using the default method of deploying them on one machine based on docker images. Because of this, we had to make all the parts work together ourselves, working closely with the BTCPay team to ensure the service could function on remote servers.")]),e._v(" "),t("p",[e._v("Plugins and features we utilized during the process were:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("BTCPay Server — an open-source "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BitPay API-compatible"),t("OutboundLink")],1),e._v(" web server that allows us to create invoices, make payments, refunds, and more.")])]),e._v(" "),t("li",[t("p",[e._v("PostgreSql — a database for BTCPay Server.")])]),e._v(" "),t("li",[t("p",[e._v("NBXplorer — a type of "),t("a",{attrs:{href:"https://github.com/dgarage/NBxplorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST facade"),t("OutboundLink")],1),e._v(" over Bitcoin Core allowing Bitcoin transactions (UTXO). Net open source solution.")])]),e._v(" "),t("li",[t("p",[e._v("Bitcoin Core — a "),t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcoin node"),t("OutboundLink")],1),e._v(" part of the Bitcoin network. Verifies payments and provides a soft wallet. An open-source C++ project MIT License.")])])]),e._v(" "),t("h2",{attrs:{id:"challenges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),t("p",[e._v("The main challenge when implementing the integration was related to performance. We wanted to ensure the loading speeds of the platform and web pages would not be affected. Areas that experienced some teething problems included integrating custom images, using remote databases, and the absence of some reporting features, which meant we had to generate reports manually.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/namecheap-2.png",alt:""}})]),e._v(" "),t("p",[e._v("Namecheap has a high volume of transactions, so we must be careful about any performance degradation when handling them. We have implemented measures like a database rescan, which has proven to be a great solution to this potential performance issue.")]),e._v(" "),t("p",[e._v("BTCPay support made overcoming these challenges easy. It’s one of their standout features, with our issues resolved efficiently via support tickets, especially when compared to other Bitcoin payment processors. With BTCPay, we have a dedicated chat where problems can be resolved quickly. This is priceless for us since we need to ensure the same quality and speed of service for all our customers, whatever payment method they use.")]),e._v(" "),t("h2",{attrs:{id:"features-and-benefits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features-and-benefits"}},[e._v("#")]),e._v(" Features and Benefits")]),e._v(" "),t("p",[e._v("The two key benefits of integrating BTCPay Server have been enhancing user experience while providing better customization and control for platform integration.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/namecheap-3.png",alt:""}})]),e._v(" "),t("p",[e._v("BTCPay Server does not charge additional processing fees for transactions, apart from the standard Bitcoin network fees, making it more cost-effective in the long run compared to BitPay, which charges processing fees. Payments made through BTCPay go directly to our company wallet without an intermediary holding or processing the funds. This direct access enhances control over the funds.")]),e._v(" "),t("p",[e._v("Regarding future possibilities, BTCPay Server allows support for multiple payment methods (like Bitcoin Lightning) and different checkout experiences, so we could extend support for such payment methods later on.")]),e._v(" "),t("h2",{attrs:{id:"results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[e._v("#")]),e._v(" Results")]),e._v(" "),t("p",[e._v("The first BTCPay Server transaction on Namecheap was on May 18, 2020. Between then and October 2024, we’ve achieved:")]),e._v(" "),t("ul",[t("li",[e._v("1.1m transactions in total")]),e._v(" "),t("li",[e._v("Over 500k users")]),e._v(" "),t("li",[e._v("Over $73m in revenue")]),e._v(" "),t("li",[e._v("Payments from over 200 countries worldwide")])]),e._v(" "),t("p",[e._v("The transactions per user have remained relatively stable over the years, sitting at 1.85 in 2024. This suggests that the engagement level per user is consistent despite user number fluctuations.")]),e._v(" "),t("p",[e._v("The average revenue per transaction has steadily risen, especially in 2024, when it jumped to $79.30. The revenue per user skyrocketed to $146.55 in 2024, a 23% increase from 2023.")]),e._v(" "),t("figure",[t("img",{attrs:{src:"/images/namecheap-4.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("Adding BTCPay to Namecheap’s Bitcoin payment repertoire has been a success overall. Although we experienced minor challenges during implementation, these were quickly worked out thanks to BTCPay’s excellent customer service. Namecheap is dedicated to delivering an exceptional customer experience and protecting the freedom and privacy of our users. BTCPay Server has helped us achieve that and will continue to do so in the foreseeable future.")]),e._v(" "),t("p",[e._v("You can "),t("a",{attrs:{href:"https://btcpayserver.org/case-studies/namecheap.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("download a PDF of this case study on this link"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);