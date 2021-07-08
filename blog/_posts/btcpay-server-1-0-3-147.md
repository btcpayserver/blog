---
title: "BTCPay Server version 1.0.3.147 is out!"
date: 2020-01-14
author: pavlenex
category: 
  - "releases"
coverImage: "/images/1.0.3.147.png"
---

We released a new BTCPay Server version 1.0.3.147. This release introduces abundance of under the hood and performance improvements, a new feature and a few minor bug fixes.

In this post, we'll guide you through the changes and what they mean for your BTCPay instances.

![](/images/Screenshot-2020-01-14-at-18.41.53.png)

1.0.3.147 changelog

## Migration to .NET Core 3.1.

A long-awaited framework upgrade is finally here! Starting with this release, all BTCPay Servers are shipped with [.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1). Important benefits of running 3.1 are:

- Native ARM64 image support
- Performance improvements (BTCPay now consumes less RAM)
- Easier manual deployment build ([NBXplorer](https://github.com/dgarage/NBXplorer) and BTCPay are now depending on the same version of the framework)

## BitcoinAverage replaced with CoinGecko

Prior to this release, BTCPay was using BitcoinAverage as a source for rates for many exchanges and also as a default rate provider. The structural changes in BitcoinAverage pricing plans meant that users have to pay to use their API. While we understand and respect BitcoinAverage decision (they've been a reliable and free provider for years) we can't expect all our users to pay for the API.

As a result, we've removed BitcoinAverage as a default provider and replaced it with CoinGecko. Some exchanges are still handled by BitcoinAverage. If you wish to use BitcoinAverage, you can still input your API keys upon purchasing a plan.

Because of the pricing changes (no more free plans) all BTCPay instances faced the risk of not being able to fetch the rates, which means the invoice couldn't be created.

In order to prevent such disruption in the future we plan later to:

1. Show a warning in users store if he did not configured the default rate provider and kept the default. This will means user gets the best rate for his jurisdiction, but also makes sure that less users depend on CoinGecko.
2. Improve the direct support with the rate API of exchanges. We currently only directly support: Binance, Bitbank, BitPay, Bittrex Bylls, CoinAverage, CoinGecko, Hitbtc, Kraken, Ndax and Poloniex.
3. Find alternative to CoinGecko and use those alternative automatically as fallback in case CoinGecko goes down.

Many of you suggested we open source the rates API or "decentralize" it. This is sadly not the solution, since merchants want a specific rate and it would be safer to have a store out of service than being served with an incorrect rate.

The only way we can mitigate the impact of rate providers is by properly implementing direct integrations to the rate API of exchanges and having several fallbacks like CoinGecko for the rest.

### Do not preemptively fetch rates of all exchanges

Before this release, we would fetch rates for the 10 exchanges rate API's we are integrated with every 30s, so we already have the rate fetched locally at the time of creation of the invoice.

Not only this bring unnecessary traffic, but if any of the exchanges stopped responding, this would flood the logs. We now preemptively fetch rates only for the exchanges actually in use.

## Hot Wallet

As you're probably aware, BTCPay never requires your private keys. However, we've seen an increasing demand from developers building projects on top of BTCPay for a hot wallet that would allow them more flexibility.

Starting with 1.0.3.147, you can create and restore a wallet from a seed when setting up your derivation scheme. This feature is coupled with an option to import the private keys for the generated addresses directly inside Bitcoin Core. This makes it easy to spend the funds via FullyNoded, for example.

Your wallet is only exposed through Torv3 address, which are not discoverable. We plan adding Tor level authentication protection to make sure that, even if you leak your Torv3 by mistake, you would be safe.

Hot wallet warning

WARNING: A hot wallet means that anybody with an access to your RPC interface will have access to the funds. BTCPay Server bitcoind is configured with a well known fixed password, so only network access is protecting your wallet

## A thank you to our contributors

Huge thanks go to our contributors, supporters and community who made this release possible. We appreciate every single contribution, that comes in many different forms.

Special thanks to developers:

- [bolatovumar](http://bolatovumar)
- [MrKukks](https://github.com/Kukks/)
- [NicolasDorier](https://github.com/NicolasDorier/)

Upon releasing 1.0.3.147, we've quickly released 1.0.3.148 and 1.0.3.149 which fixed bugs introduced in 1.0.3.147.

- **1.0.3.148**: Fixed a critical U2F auth bug which would lock a user out of the BTCPayServer if U2F was active.
- **1.0.3.149**: Fixed some broken pages and actions in our migration to 3.1

How to update?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay > Server Settings > Maintenance > _**Update**_.

If you encounter any issues with this version, or need assistance, please report it on our [community chat](https://chat.btcpayserver.org/) or on our [GitHub](https://github.com/btcpayserver/btcpayserver/issues).
