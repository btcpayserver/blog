<template>
  <div class="theme-default-content sponsors">
    <hr />
    <p>
      We are proudly supported by these entities through the
      <a href="https://foundation.btcpayserver.org/" target="_blank">BTCPay Server Foundation</a>:
    </p>
    <div class="sponsors-logos">
      <a href="https://www.kraken.com" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/krakenlogo-150x150.png" />
        Kraken
      </a>
      <a href="https://twitter.com/sqcrypto" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/squarecrypto-150x150.png" />
        Square Crypto
      </a>
      <a href="https://pnxbet.com" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img src="/images/pnxbet.png" alt="PNXBET" loading="lazy">
        PNXBET
      </a>
      <a href="https://acinq.co/" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/acinq-logo-289x300.png" />
        ACINQ
      </a>
      <a href="https://www.lunanode.com/" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/lunanode-150x150.png" />
        LunaNode
      </a>
      <a href="https://walletofsatoshi.com/" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/walletofsatoshi-150x150.png" />
        Wallet of Satoshi
      </a>
      <a href="https://nomics.com/" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/nomicspng-150x150.png" />
        Nomics
      </a>
      <a href="https://coincards.com/" class="sponsor-item" target="_blank" rel="noopener noreferrer">
        <img class="logo" src="/images/coincards-150x150.png" />
        Coincards
      </a>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.sponsors {
  padding-top: 0 !important;
}
.sponsors p {
  text-align: center;
}
.sponsors hr {
  margin: 2rem 0 !important;
}

.sponsors-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.sponsors-logos a {
  color: var(--btcpay-secondary);
}

.sponsor-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
}

.sponsor-item img {
  max-width: 60px;
}
</style>
