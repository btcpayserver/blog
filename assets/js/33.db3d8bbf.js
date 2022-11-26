(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{487:function(e,t,r){"use strict";r.r(t);var a=r(37),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Today, we released the new BTCPay Server - "),r("strong",[r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.5.4",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.0.5.4"),r("OutboundLink")],1)]),e._v(". This release introduces a new, default Bitcoin-only build, UX and UI improvements, fixes several bugs and two low-risk security vulnerabilities.")]),e._v(" "),r("h2",{attrs:{id:"whats-new-in-v1054"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#whats-new-in-v1054"}},[e._v("#")]),e._v(" 🆕What's new in v1.0.5.4?")]),e._v(" "),r("h3",{attrs:{id:"⚒️-bitcoin-only-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#⚒️-bitcoin-only-build"}},[e._v("#")]),e._v(" ⚒️ Bitcoin-only build")]),e._v(" "),r("p",[e._v("While Bitcoin has always been the focus of the project, we've allowed altcoin communities to integrate "),r("a",{attrs:{href:"https://docs.btcpayserver.org/Development/Altcoins",target:"_blank",rel:"noopener noreferrer"}},[e._v("altcoins"),r("OutboundLink")],1),e._v(" and maintain them. In the beginning, the impact on the source code has been minimal.")]),e._v(" "),r("p",[e._v("However, people started requesting and adding cryptocurrencies with radically different designs such as: Monero, Liquid and recently "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/pull/1730",target:"_blank",rel:"noopener noreferrer"}},[e._v("ETH/ERC20"),r("OutboundLink")],1),e._v(". Adding cryptocurrencies with different designs presents a risk that a bug in one of them may affect the stability of the entire software, even for people that don't enable them.")]),e._v(" "),r("p",[e._v("BTCPay Server now has "),r("strong",[e._v("two separate builds.")])]),e._v(" "),r("p",[r("strong",[e._v("The Bitcoin only")]),e._v(" build and the "),r("strong",[e._v("Altcoin build")]),e._v(". The Bitcoin build is the new "),r("em",[e._v("default")]),e._v(" and excludes every bit of code related to altcoins from the source code. The Altcoin build includes the source code of all altcoins integration. We discussed this with the contributor who is working on ETH support and they built the additional Bitcoin-only mode as part of their efforts.")]),e._v(" "),r("p",[e._v("We considered creating a separate BTCPay Server fork for altcoins and let each coin maintain their own fork. This strategy used by Electrum. But from experience, it means a fragmentation of the contributors and a decrease of overall quality of the software (some bugs are not fixed everywhere and some features are not available everywhere).")]),e._v(" "),r("h4",{attrs:{id:"what-does-this-mean-for-btcpay-server-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-does-this-mean-for-btcpay-server-users"}},[e._v("#")]),e._v(" What does this mean for BTCPay Server users?")]),e._v(" "),r("ul",[r("li",[e._v("If you don't have altcoins enabled, by default you'll be running the bitcoin only build, where no code related to altcoins is included.")]),e._v(" "),r("li",[e._v("If you have altcoin(s) enabled, you'll be running the altcoin build.")]),e._v(" "),r("li",[e._v("To disable the altcoin build, simply "),r("a",{attrs:{href:"https://docs.btcpayserver.org/FAQ/FAQ-Altcoin/#how-to-remove-a-coin-from-btcpay",target:"_blank",rel:"noopener noreferrer"}},[e._v("remove altcoin(s)"),r("OutboundLink")],1),e._v(" from your setup and re-run it.")]),e._v(" "),r("li",[e._v("When you switch from altcoin to bitcoin only build, all altcoin related payment data in the invoices will no longer be visible.")]),e._v(" "),r("li",[e._v("If you are unsure whether or not to accept altcoins, we advise you to use Bitcoin only. It will decrease the attack surface, improve the stability, and decrease the resource consumption needed to operate your server.")])]),e._v(" "),r("h3",{attrs:{id:"what-does-this-mean-for-btcpay-server-developers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-does-this-mean-for-btcpay-server-developers"}},[e._v("#")]),e._v(" What does this mean for BTCPay Server developers?")]),e._v(" "),r("ul",[r("li",[e._v("The "),r("code",[e._v("Debug")]),e._v(" and "),r("code",[e._v("Release")]),e._v(" configuration of BTCPay Server are Bitcoin only.")]),e._v(" "),r("li",[e._v("The development time dependencies "),r("code",[e._v("BTCPayServer.Tests/docker-compose.yml")]),e._v(" do not have any altcoin related images anymore.")]),e._v(" "),r("li",[e._v("The default launch profile ("),r("code",[e._v("Bitcoin")]),e._v(") does not connect to any altcoin dependency anymore.")]),e._v(" "),r("li",[e._v("Our CI is running all the tests on the "),r("code",[e._v("Altcoins-Release")]),e._v(" build (it increases test coverage)")]),e._v(" "),r("li",[e._v("If you are interested into altcoins support development, read "),r("a",{attrs:{href:"https://docs.btcpayserver.org/Development/LocalDev/#local-development",target:"_blank",rel:"noopener noreferrer"}},[e._v("our documentation"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("Since the CI tests are using the "),r("code",[e._v("Altcoins-Release")]),e._v(" build, it is possible that your PR is working locally, but fails on CI.")]),e._v(" "),r("ul",[r("li",[e._v("If the compilation fails, check if you can easily fix it.")]),e._v(" "),r("li",[e._v("If a test fails, check if that's a real bug in your code. (activating altcoins may reveal bugs that also exists in the Bitcoin only build but were not exposed)")]),e._v(" "),r("li",[e._v("If your PR revealed a bug in an altcoin, you can just deactivate the test, we will not ask you to fix it, nor we will refuse to merge your PR for this. We will notify the altcoin maintainer. (The person who created the PR for the integration of a particular altcoin)")])]),e._v(" "),r("h3",{attrs:{id:"‍login-page-re-designed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#‍login-page-re-designed"}},[e._v("#")]),e._v(" 👨‍💻Login page re-designed")]),e._v(" "),r("p",[e._v("Our login page has been re-designed once again for a sleeker look with less distractions.")]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/89307536-7f15b900-d671-11ea-9a3d-5dbcc539ee38-1024x506.png",alt:""}})]),e._v(" "),r("h3",{attrs:{id:"✔️recovery-phrase-page"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#✔️recovery-phrase-page"}},[e._v("#")]),e._v(" ✔️Recovery phrase page")]),e._v(" "),r("p",[e._v("When generating a new wallet, we will now show the recovery phrase on a separate page with clearer instructions on what you have to do. The text will be different for hot wallet (where the private key remains on the server) and regular wallet where the key is wiped after you back it up.")]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/recoveryphrase-1024x502.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/89307301-36f69680-d671-11ea-8ddf-b091c7300d8f-1024x483.png",alt:""}})]),e._v(" "),r("h3",{attrs:{id:"multi-selection-of-invoices-and-notifications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multi-selection-of-invoices-and-notifications"}},[e._v("#")]),e._v(" 🔔Multi-selection of invoices and notifications")]),e._v(" "),r("p",[e._v("You'll now receive a notification when a new version of BTCPay Server has been released (varies on deployment method).")]),e._v(" "),r("p",[e._v("With v1.0.5.4, it's possible to select multiple invoices and notifications and perform a batched action.")]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/invoices-1024x296.png",alt:""}})]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/notifications-1-1024x237.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"bug-fixes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" 🐛Bug Fixes")]),e._v(" "),r("ul",[r("li",[e._v("Fix: In the PoS app, embedded CSS was ignored")]),e._v(" "),r("li",[e._v("Fix error when modifying user who does not have admin right")]),e._v(" "),r("li",[e._v("Fix null instance on invoice when using paymentCurrencies")]),e._v(" "),r("li",[e._v("Fix: Sluggish scrolling in pages having a rich text editor")]),e._v(" "),r("li",[e._v('Fix: Crash in payment request if there is several invoice in "new" state')]),e._v(" "),r("li",[e._v("Fix: Crowdfund app doesn't count old invoices")])]),e._v(" "),r("h2",{attrs:{id:"security-fixes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-fixes"}},[e._v("#")]),e._v(" 🔐Security fixes")]),e._v(" "),r("p",[e._v("In this release, we've fixed two security vulnerabilities, both properly disclosed by "),r("a",{attrs:{href:"https://github.com/benichmt1",target:"_blank",rel:"noopener noreferrer"}},[e._v("benichmt1"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("Prevent script injection via X-Forwarded-For")]),e._v(" "),r("li",[e._v("Prevent script injection via the csv invoice export")])]),e._v(" "),r("p",[e._v("The full changelog is available "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases/tag/v1.0.5.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"how-to-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update"}},[e._v("#")]),e._v(" How to update?")]),e._v(" "),r("p",[e._v("To "),r("a",{attrs:{href:"https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("update"),r("OutboundLink")],1),e._v(" to the latest version, go to your BTCPay Server > Server Settings > Maintenance > "),r("em",[r("strong",[e._v("Update")])]),e._v(". If you prefer CLI, you can update with "),r("code",[e._v("btcpay-update.sh")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"btcpay-server-foundation-website"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-foundation-website"}},[e._v("#")]),e._v(" BTCPay Server Foundation website")]),e._v(" "),r("p",[e._v("We've redone the design of the "),r("a",{attrs:{href:"http://foundation.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Foundation"),r("OutboundLink")],1),e._v(" website. It is now consistent and optimized according to our "),r("a",{attrs:{href:"https://design.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("design guidelines"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("figure",[r("img",{attrs:{src:"/images/foundation-website-1024x764.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"thank-you-to-our-contributors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thank-you-to-our-contributors"}},[e._v("#")]),e._v(" Thank you to our contributors")]),e._v(" "),r("p",[e._v("Huge thanks to all of you who’ve helped in making of the **v1.0.5.**4. We appreciate every single contribution and support.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/benichmt1",target:"_blank",rel:"noopener noreferrer"}},[e._v("benichmt1"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/bolatovumar",target:"_blank",rel:"noopener noreferrer"}},[e._v("bolatovumar"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/britttttk",target:"_blank",rel:"noopener noreferrer"}},[e._v("britttttk"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/dennisreimann/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dennisreimann"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/dstrukt",target:"_blank",rel:"noopener noreferrer"}},[e._v("dstrukt"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/eskyee/",target:"_blank",rel:"noopener noreferrer"}},[e._v("eskyee"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/kukks",target:"_blank",rel:"noopener noreferrer"}},[e._v("kukks"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/msafi",target:"_blank",rel:"noopener noreferrer"}},[e._v("msafi"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/nicolasdorier",target:"_blank",rel:"noopener noreferrer"}},[e._v("nicolasdorier"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/rockstardev",target:"_blank",rel:"noopener noreferrer"}},[e._v("rockstardev"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/xpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("xpayserver"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("As always, if you face any issues or notice a bug, please join our "),r("a",{attrs:{href:"http://chat.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community chat"),r("OutboundLink")],1),e._v(" and let us know.")])])}),[],!1,null,null,null);t.default=o.exports}}]);