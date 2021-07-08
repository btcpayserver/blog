---
title: "Introducing BTCPay Vault – use any hardware wallet with BTCPay and its full node"
date: 2020-01-21
author: pavlenex
category: 
  - "features"
coverImage: "/images/EJ0JwsbX0AEuAUC-scaled.jpg"
---

We’re excited to announce a freshly-baked feature from our coding kitchen – [**BTCPay Vault**.](https://github.com/btcpayserver/BTCPayServer.Vault) Prepared by our Chef de Cuisine, Nicolas Dorier, the vault is a delicious desktop application which allows communication between your hardware wallet and BTCPay using its [full Bitcoin node](https://en.bitcoin.it/wiki/Full_node) providing a richer user experience without sacrificing privacy and security.

## Why?

When you launch a BTCPay Server, the stack, [among other things](https://docs.btcpayserver.org/Architecture/), contains a full Bitcoin node. To receive funds through BTCPay, you have to configure your store with an _extended public ke_y(xpub..), which is then used to generate addresses.

However, to spend the received funds from your wallet, you need access to your private keys, which we do not store on BTCPay. That required users to use an external wallet, and due to severe limitations of almost every wallet on the market(gap limit, trusted third-parties, no xpub export support, etc), a majority of users often opted to use wallet solutions such as Electrum and leak their sensitive financial information to a third party server.

That's why BTCPay created an [internal wallet system](https://docs.btcpayserver.org/features/wallet) many months ago that allows you to spend your funds through direct integrations with the Ledger Nano S, ColdCard. This also allowed you to import your public key without requiring technical knowledge.

Enters the [BTCPay Vault](https://github.com/btcpayserver/BTCPayServer.Vault), a cross-platform desktop application that makes hardware wallet experience not only smoother and faster, but also extends compatibility to many other devices.

## How does it work?

The hardware wallet integration is composed of two parts:

- [BTCPayServer.Hwi](https://github.com/btcpayserver/BTCPayServer.Vault/blob/master/BTCPayServer.Hwi): An easy to use library wrapping the command line interface of the [hwi project](https://github.com/bitcoin-core/HWI).
- [BTCPayServer.Vault](https://github.com/btcpayserver/BTCPayServer.Vault/blob/master/BTCPayServer.Vault): A simple local web server providing access to the hardware wallet physically connected to your computer via HWI.

In laymen words, BTCPay Vault is a separate app, locally hosted on your own PC, which BTCPay Server connects to and asks for permission. Once permission is granted, BTCPay is able to integrate with any hardware wallet connected to your PC. You can import your wallet and spend incoming funds with a simple confirmation on your device, with your keys never leaving your hardware device, with all funds being validated against your own Bitcoin full node and no data leakage.

## Getting Started with BTCPay Vault

### Connecting your wallet to a store

Setting up BTCPay Vault is quite easy. You only need to have already set up BTCPay Server.

1. [Download BTCPay Vault](https://github.com/btcpayserver/BTCPayServer.Vault/releases)
2. Install BTCPay Vault on your PC (Windows, MacOS or Linux)
3. Open BTCPay Vault app.
4. Plug in the hardware wallet and make sure it's in wake up state
5. Go to your BTCPay Server's Store > General Settings > Derivation Scheme > Import from the Vault
6. Grant the permission
7. Your public key will automatically be imported in the store and configured to an appropriate format
8. Validate that address shown on BTCPay is the same as the one on your device
9. Save

![](/images/BTCPay-Vault-Store-Setup-1-1024x553.png)

![](/images/BTCPay-Vault-Store-Setup-2-1024x721.png)

![](/images/BTCPay-Vault-Store-Setup-3-1024x548.png)

![](/images/BTCPay-Vault-Store-Setup-4-1024x524.png)

![](/images/BTCPay-Vault-Store-Setup-5-1024x510.png)

![](/images/BTCPay-Vault-Store-Setup-6-1024x738.png)

![](/images/BTCPay-Vault-Store-Setup-7-1024x788.png)

### Spending funds with BTCPay Wallet

Once you've received funds to your wallet and you decide to spend them, you can sign the transaction with your hardware wallet, all inside BTCPay Server.

1. Open BTCPay Vault app on your PC
2. Plug in the hardware wallet and make sure it's in wake up state
3. In BTCPay Server, go to > Wallets > Manage > Send
4. Fill in the `Destination address` and the `Amount`
5. Select `Sign with the Vault`
6. Verify the transaction on your hardware wallet and confirm it
7. Broadcast the transaction

![](/images/BTCPay-Vault-Wallet-Send-1-1024x660.png)

  

![](/images/BTCPay-Vault-Wallet-Send-2-1024x558.png)

### Supported Hardware Wallets

At this moment, the hardware wallet integration (HWI) supports the following devices:

- ColdCard
- Digital BitBox
- KeepKey
- Ledger Nano S
- Ledger Nano X
- Trezor Model T
- Trezor One

There you have it, using a full node with a hardware wallet in a few easy steps. We hope the Vault will help you transact more privately. If you have any feedback or face any issues, please [let us know chat](https://chat.btcpayserver.org/).

If you're developer, you can use the BTCPay Vault with your own project as it is not dependent on BTCPay and can be modified to suit your needs.

We'd like to thank all our community members that helped us test the vault in the wild. Special kudos to [Wasabi Wallet](https://github.com/zkSNACKs/WalletWasabi) and the [HWI](https://github.com/bitcoin-core/HWI#device-support) for creating the software that made BTCPay Vault possible.
