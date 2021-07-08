---
title: "Migration from noseedbackup=1 to LND with seed"
date: 2019-11-16
author: pavlenex
category: 
  - "features"
tags: 
  - "lightning-network"
coverImage: /images/LND-Migration-BTCPay.png
---

Today, we're happy to announce that all newly-deployed BTCPay Server instances running **1.0.3.138** and up, using LND as a lightning implementation, will be provisioned with a recovery seed for an on-chain wallet and static channel backups. This is a big improvement towards securing your funds in case of a problem.

Furthermore, we're introducing **a migration tool** for old legacy deployments that allows easy migration from `noseedbackup=1`. Old deployments won't be forced to migrate. They can continue to run LND with legacy option.

## The history behind the issue

Every time LND is started it expects user intervention (init on first run, wallet unlock on every subsequent run). This obviously works in certain settings: if you are a mobile wallet, it's reasonable to expect that user will unlock LND through GUI on every restart. But if you are running LND as part of tech stack, it's quite obvious you are not going to `ssh` into every server during every cluster restart and unlock LND.

Those with prerequisite knowledge have already found ways to automate this task, but large part of BTCPayServer audience are merchants who can't worry about `ssh` and unlocking LND on their web server.

So, back when we initially did LND integration (version 0.4.1), `noseedbackup=1` served our purpose. There was no real downside to using it - LND would restart without intervention & instead of seed backup we suggested users do more complete backup of whole LND data directory from docker container and that was it. Furthermore, we believed that providing users with an on-chain wallet backup, without providing backups for channels would create a false sense of security, since in most cases, the majority of user's funds would be in the channels.

Fast forward a year and half, LND has functionality like static channel backup that depends seed presence. We have legacy installations that we can't force update to version with seed. So what we needed to do is keep old versions and have them keep working, while initializing new installations without `noseedbackup=1` and have them auto-init and unlock on every restart.

## How to migrate?

A few notes:

1. The instructions _are **only**_ for users using **LND** as their lightning implementation.
2. All legacy installations will keep working without intervention. It's not required, but recommended to migrate.
3. Users who deployed a fresh BTCPay instance from 1.0.3.138 and up will be running new versions with a seed.

IMPORTANT WARNING! REALLY IMPORTANT, DO NOT SKIP THIS NICE BOX.

If you're running a legacy version and decided to migrate, before proceeding, make sure to **close all your lightning channels**.

Channels can be closed through:

• [SSH](https://github.com/JeffVandrewJr/patron/blob/master/SSH.md) with `bitcoin-lncli.sh closeallchannels`  
• Server Setting > Services > LND (Ride the Lightning server)  
• External wallet that's connected to your LND node, such as Zap.

Once the channels are closed, it takes time for all the funds to settle. When there are no pending channels and all funds are visible on-chain, send them to an external wallet you have. For spending, you can use command line, RTL, Zap or other external wallet connected to your BTCPay.

If at any point you need assistance, visit our [community chat](https://chat.btcpayserver.org/btcpayserver/channels/lightning) and ask a question in the [#Lightning](https://chat.btcpayserver.org/btcpayserver/channels/lightning) channel.

When funds are SAFU, the migration process can begin. The migration tool for old installations will essentially stop all the services, delete the volume of the old LND container, restart the services and recreate a new LND with seed.

Log in into your machine through [SSH](https://github.com/JeffVandrewJr/patron/blob/master/SSH.md) and input the following command.

sudo su -
cd btcpayserver-docker
cd Tools
./recreate\_bitcoin\_lnd.sh

You will be prompted a few times to confirm running the tool, by typing `yes` in the terminal. When the script is done, go to your BTCPayServer. Server Settings > Services > **LND Seed Backup**.

![](/images/Services-LND-Seed-Backup.jpg)

Safely backup and store your recovery seed. The seed is a backup of your on-chain Lightning wallet, but is also necessary to perform static channel backups.

![](/images/LND-With-Seed-Example-1024x471.jpg)

If you backed it up safely you can remove it from the server.

That's it now you have a backup for your LND. Go ahead, get some [inbound liquidity](https://lnbig.com/) to your brand new node and enjoy.

## Static channel backup (optional)

TIP

Perform this step only when you want to back up your channels. Do not do it immediately after doing the steps above, since you have no channels to back up.

For backing up **funds in the channels** the Static Channel Backup is needed which will result into remote **force closures** when you restore the backup, returning the off-chain fund to the on-chain wallet.

The SCB can be obtained through the [Ride The Lightning App](https://blog.btcpayserver.org/ride-the-lightning-btcpay/) and it's stored in the BTCPay filesystem.

To perform a SCB:

1. Server Setting > Services > LND (Ride the Lightning server)
2. Channels > Backup > **Backup**

Now, both your on-chain and funds in channels are backed up. For more information on recovery and restoring from the backup, [check LND documentation.](https://github.com/lightningnetwork/lnd/blob/master/docs/recovery.md)

## Thank you

The biggest attribution goes to [RockstarDev](https://twitter.com/r0ckstardev/) who took over the entire task on himself and coded the migration tool and coordinated the entire testing process.

Thanks to [@NicolasDorier](https://twitter.com/NicolasDorier) for idea; [@MrKukks](https://twitter.com/MrKukks) and [@pavlenex](https://twitter.com/pavlenex) for thorough review and testing. Credit also [@junderwood4649](https://twitter.com/junderwood4649) [@maltokyo](https://twitter.com/maltokyo) [@ketominer](https://twitter.com/ketominer) [@roasbeef](https://twitter.com/roasbeef) [@bitconner](https://twitter.com/bitconner) [@woutersamaey](https://twitter.com/woutersamaey) [@openoms](https://twitter.com/openoms) [@21isenough](https://twitter.com/21isenough/) and others who helped throughout the process in various ways.
