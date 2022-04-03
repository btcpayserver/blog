---
title: Big improvements in NBXplorer!
author: NicolasDorier
date: 2022-04-01
category: features
tags:
  - "nbxplorer"
coverImage: /images/nxplorer-schema.png
permalink: /nbxplorer-postgres
---

# Introduction

This blog post might be a bit technical, but I wanted to share what I have been working on the past month, which I think will have great consequences for a number of people, and it might be my biggest contribution for Bitcoin this year. (but only appreciated by those with hands in the dirt keeping your favorite bitcon services online)

I have been working on a little known pillar of BTCPay Server called NBXplorer.

NBXplorer is an infrastructure server called a UTXO tracker. In a nutshell, when you use BTCPay Server, we depend on NBXplorer for getting notifications when a new payment arrives, for showing the balance of your wallet, for creating transactions, and showing transaction history.

While NBXplorer is only one of the brick required by BTCPay Server, some numbers about the update:

* -70% of RAM consumption (More if you support more than one chain)
* Start immediately
* -70% of space requirement
* Database can be inspected and queried directly for custom needs.

# Some history...

NBXplorer got created 5 years ago. It is a project started at DG Lab, as a server for a multi asset wallet based on Elements. (Liquid)
This wallet got used in our first BC2 conference in Tokyo. 

I decided to then adapt NBXplorer for Bitcoin. The reason about not using Bitcoin Core directly was mainly the lack of flexibility of the API, and the lack of multi tenancy support and decent HD cold wallet support. (It is probably better nowadays)

After making NBXplorer, I built BTCPay Server on top of it, and kept improving it since then. Nowadays, not only all BTCPay Server users, but also a few exchanges and other big businesses rely on this project for internal operations.

# About reaching the limits

NBXplorer up to now had a fundamental issue:
It relied on a NoSql database called DBreeze. This database project was in a sad state, so 2 years ago, I ended up rewriting it in a project called DBTrie.

Why did I use this rather than postgres in the first place? The idea was that NBXplorer was easier to run as there was no dependency. Build, run bitcoin core, run NBXplorer, done! However...

* Making your own database is complicated, and you can't really beat a project that has 20 years old behind and an active community working restlessly behind it.
* DBTrie had bugs impacting some big users and causing corruptions. This is a nightmare scenario, not only for the impacted user, but for myself as I need to debug it before problems reach other users.
* DBTrie doesn't have tooling which give flexibility to power users to leverage the data stored inside. Nor the flexibility for me to improve a lot the API of NBXplorer.
* DBTrie can't share access with multiple apps.
* Due to the NoSQL nature of the design of NBXplorer, we needed to keep the chain of block headers in memory, making NBXplorer quite heavy in resource consumption. (200 MB or more per supported crypto)
* Because the database was only a store of ordered data, we were calculating the UTXO set of a wallet at every requests to NBXplorer. (if your wallet had an history of 100 000 transactions, it could take 20-30 seconds or more to calculate your balance!)
* The more transactions in a wallet, the slower it became. (linearly)
* No way to leverage the skills of database administrators to solve common issues companies have.

Most of you never had any problem, because we don't rely too much on NBXplorer for time sensitive code path in BTCPay Server.
Also, if your wallet had less than 30 000 transactions, you might not have noticed any performance issue.

So I decided to focus on fixing all those problems.

Deleted twitter from my phone, banned it from my local network, closed myself in the coding cave for a month.
I probably didn't even touch one line of BTCPay Server since this post for the whole month.


# About breaking the limits

I decided to migrate NBXplorer on Postgres, taking advantage of good old SQL.
Lot's of the logic that was inside NBXplorer code got pushed in SQL, the schema is [well documented](https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Schema.md) and efficient, it provides easy queries to the DB for getting balances, UTXOS, see recent activity of a wallet, build histograms, and create activity reports.

I encourage people to use the schema while making their own indexer.

NBXplorer at the current version isn't exposing the full power of what the schema allows.
The schema is multi chain, multi asset and multi-tenant.

![](/images/nxplorer-schema.png)

You are encouraged to create your own APIs on top of it if you need it.

It allows the creation of wallets, into which you can add output descriptors and/or individual addresses (scripts).

Wallets can also be nested into each others. Imagine you run a business with multiple stores, you could have one wallet by stores, then nest them inside the business wallet.

You can then easily query wallet's utxos, balance, recent changes, make histograms of how wallet balance at any level evolve over time.

As always, NBXplorer isn't indexing the whole blockchain: Only transactions involving a scriptpubkey in the scripts table. It means it can run without lot's of storage and memory requirement.

While NBXplorer run on the database, you can also query and interact with the schema directly by creating wallets and your own descriptors.

For all of this, you also now need only around 60MB of RAM to run NBXplorer (instead of 200MB+ per supported chain, that's around -70% of memory consumption at minimum), fast start (no more defragmenting process taking long time when the server restart, no need to load the chain of header either...), and more efficiency on storage space: around -70% less space is required to store the data of NBXplorer.

# Migration

I work hard to prevent breaking changes and give lot's of warning and time for people to update.
So I created a migration path for our current users. If you use BTCPay on docker, you don't have to worry, the migration will be automatic during one update. You may notice NBXplorer isn't starting for some time.

* For most of our users, the update will be fast, no more than a 1-5 minutes.
* The migration for the mainnet demo server online since september 2018 is taking around 1H and has only around 44K transactions and 620K addresses.
* For a few big users (exchanges and big businesses), I expect the migration to take a few more hours.

You can see more information on [NBXplorer's migration documentation](https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Migration.md).

Note that the migration isn't mandatory. The old backend will be deprecated but supported for few years. (SPOILER) But you will miss new BTCPay Server features such as the upcoming dashboards. (SPOILER) 

# Future plans

I will deprecate the DBTrie backend, showing warning for users not running on Postgres. But I will keep supporting it for 2 or 3 years.

The current NBXplorer API is stable and will not change significantly.
I plan to create a completely new API for NBXplorer taking full advantage of the new schema.

The new API will run on the same database, and I plan to make it possible to run both API at the same time on the same database to be able to slowly migrate.

But you don't have to wait for it! It's only SQL, leverage your database skills and develop in the language you know best. (See more information about the scheme on [NBXplorer's schema documentation](https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Schema.md))

# Conclusion

NBXplorer improved significantly. And I expect it will become a pillar not only to BTCPay Server but to many other services.

We will use the improvements to NBXplorer to provide exciting analytics queries over your store's wallet in BTCPay Server. No matter how big your store is, it will smoothly work.

Will you use NBXPlorer's API, or just query the tables directly? The choice is yours, now there is enough flexibility for any of your demands.

Links:
* [Schema documentation](https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Schema.md)
* [Migration documentation](https://github.com/dgarage/NBXplorer/tree/master/docs/Postgres-Migration.md)