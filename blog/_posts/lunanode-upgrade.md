---
title: Lunanode Toronto scheduled maintenance gone wrong
author: NicolasDorier
date: 2022-04-23
category: issue
tags:
  - "lunanode"
coverImage: /images/lunanode-issue.png
permalink: /lunanode-issue
---

# Introduction

Lunanode is the most popular VPS provider for hosting BTCPay Server.
The Toronto region data center, on April 23, 2022 at 00:00 EST had a networking upgrade. We noticed that some servers started having issues right after.

It turns out that for some VM, the configuration of your BTCPay Server got reset to the one you had the first time you created your server. More precisely, the file at `~/.env` got reverted to the version when you created your server.

If you never connected to SSH and changed the configuration of docker installation, then you should not be impacted.

# Symptoms

* Your server, since 23 april, show errors such as `Your connection is not private` when trying to access it through HTTPS.
* Some services provided by the BTCPay Server docker install plugins stopped working (for example woocommerce/ thunderhub/  lightning node / tor relay)
* Some altcoins support you deactivated, are now activated again.

If you have those symptoms, your server might have been impacted.

# How to fix the situation

The solution is sadly to reconfigure your BTCPay Server by running again with the [environment variables](https://github.com/btcpayserver/btcpayserver-docker#environment-variables) you configured before.

Connect via SSH as root to your instance, then for example:

```bash
#...
BTCPAY_HOST="btcpay.EXAMPLE.com"
BTCPAY_ADDITIONAL_HOSTS="anotherhost.EXAMPLE.com"
BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-save-storage-s;opt-add-thunderhub;"
BTCPAY_ENABLE_SSH=true
# ... any other settings you had before.
. btcpay-setup.sh -i
```

# Conclusion

Luckily BTCPay Server runs on a huge variety of VPS and environment (and expanding every day), so this problem will hopefully only impact few users.

We will be in contact with Lunanode to understand what happened. The update should have been limited to a network update.

If you feel lost, join our [support chat](https://chat.btcpayserver.org/btcpayserver/channels/support).