---
title: "BTCPay Server version 1.0.3.132 released"
date: 2019-09-23
author: Nicolas
category: 
  - "releases"
coverImage: /images/1.0.3.132.jpg
permalink: /1-0-3-132-released
---

New BTCPay version **1.0.3.132 is** out! This version brings in a few improvements and minor bug fixes.

# 1.0.3.132 Release notes

- Fix BTC\_GBP pair not resolved for kraken (@nicolasdorier)
- Set buyer email in get invoice to refund email if not set (@MrKukks)
- Can edit the authorized\_keys file in docker deployments in Server Settings / SSH Service (@nicolasdorier)
- Removed the ability to download the SSH private key used btcpayserver from Server Settings / SSH Service (@nicolasdorier)
- The "Pay with BTCPay" donation button is now in .svg instead of .png, png is still supported for backward compatibility (@bolatovumar)
- Faster feedback developer feedback loop by skipping the bundler minifier task if the input files did not changed (@r0ckstardev @nicolasdorier)
- Re-enable lightning sats feature (@MrKukks)
- Allow removing transaction labels by clicking on an icon (@bolatovumar)
- Prevent jumpy transition on page load when transaction labels are present (@bolatovumar)
- Fix typo on Pay Button page (@dennisreimann)
- Add Ndax rate provider (@MrKukks)
- Add Indonesian Rupiah in the currency list @mbambnag
- Update Azure deployment to use BTCPAY\_ENABLE\_SSH (see details below)
- Update Lunanode deployment to use BTCPAY\_ENABLE\_SSH (Waiting to be merged upstream)

# Docker deployment: Note on SSH settings

BTCPay Server is relying on SSH to execute scripts to for updating itself (only for docker deployments, like lunanode). For doing this, the BTCPayServer container connects to the host via SSH and runs btcpay\-update.sh.

For this to work, during the setup, we were previously requiring user to:

- Create the ssh keypair via ssh-keygen,
- Add the public key to authorized\_keys
- Set the `BTCPAY_HOST_SSHKEYFILE` settings,
- Run `. btcpay-setup.sh -i`.

Then, the script would copy the keypair to the container and BTCPay Server would use this to connect to the host.

However, this had significant downsides:

1. If you deleted the keypair, you needed to run btcpay\-setup.sh again.
2. Issues if ssh-keygen on the host had some breaking change. (It happened to us)
3. Required additional documentation to set up properly.
4. In 1.0.3.132, we released a new feature which allows the modification of the authorized\_keys file within BTCPayServer, and we wanted to prevent people from lock themselves out their machine by accidentally deleting the key btcpayserver was using.

For this reason, `BTCPAY_HOST_SSHKEYFILE` is now deprecated and replaced by a new setting called `BTCPAY_ENABLE_SSH`. This new settings will mount the host's authorized\_keys file inside the btcpayserver container, and the btcpayserver container is now responsible to create the SSH keypair and add itself to the authorized\_keys.

`BTCPAY_HOST_SSHKEYFILE` will keep working because keeping backward compatibility is of paramount importance, but we advise you to migrate to `BTCPAY_ENABLE_SSH=true` instead:

BTCPAY\_ENABLE\_SSH=true
. btcpay-setup.sh -i

If you still use the deprecated `BTCPAY_HOST_SSHKEYFILE` and accidentally break the authorized\_keys file by using the new feature in Server Settings/SSH Service of BTCPay Server, you might lock yourself out of your server. This will not happen if you use `BTCPAY_ENABLE_SSH=true`.

If you feel uncomfortable with the command line or are confident you will not lock yourself out of your own VPS, you can choose not to update to`BTCPAY_ENABLE_SSH` and things will keep working and still be supported.

## Thank you to our contributors

Huge thanks go to our contributors, who made their release possible.

- [bolatovumar](https://github.com/bolatovumar)
- dennisreimann
- [mbambnag](https://github.com/mbambnag/)
- [MrKukks](https://github.com/Kukks/)
- [nicolasdorier](https://github.com/NicolasDorier)
- [r0ckstardev](https://github.com/rockstardev)

How to update to 1.0.3.132?

To [update](https://docs.btcpayserver.org/faq-and-common-issues/faq-serversettings#how-to-update-btcpay-server) to the latest version, go to your BTCPay > Server Settings > Maintenance > _**Update**_.

If you encounter any issues with this version, or need assistance, please report it on our [community chat](https://chat.btcpayserver.org/) or on our [GitHub](https://github.com/btcpayserver/btcpayserver/issues).
