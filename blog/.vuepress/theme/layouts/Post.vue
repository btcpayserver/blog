<template>
  <div>
    <PostMeta class="theme-default-content post-meta" />
    <Layout />
    <div class="theme-default-content sponsors">
      <hr />
      <p>
        We are proudly supported by these entities through the
        <a href="https://foundation.btcpayserver.org/" target="_blank"
          >BTCPay Server Foundation</a
        >:
      </p>
      <div class="sponsors-logos">
        <a href="https://www.kraken.com/" target="_blank" class="sponsor-item">
          <img class="logo" src="/images/krakenlogo-150x150.png" />
          Kraken
        </a>
        <a
          href="https://twitter.com/sqcrypto"
          target="_blank"
          class="sponsor-item"
        >
          <img class="logo" src="/images/squarecrypto-150x150.png" />
          Square Crypto
        </a>
        <a href="https://acinq.co/" target="_blank" class="sponsor-item">
          <img class="logo" src="/images/acinq-logo-289x300.png" />
          ACINQ
        </a>
        <a
          href="https://www.lunanode.com/"
          target="_blank"
          class="sponsor-item"
        >
          <img class="logo" src="/images/lunanode-150x150.png" />
          LunaNode
        </a>
        <a
          href="https://walletofsatoshi.com/"
          target="_blank"
          class="sponsor-item"
        >
          <img class="logo" src="/images/walletofsatoshi-150x150.png" />
          Wallet of Satoshi
        </a>
        <a href="https://nomics.com/" target="_blank" class="sponsor-item">
          <img class="logo" src="/images/nomicspng-150x150.png" />
          Nomics
        </a>
        <a href="https://coincards.com/" target="_blank" class="sponsor-item">
          <img class="logo" src="/images/coincards-150x150.png" />
          Coincards
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-meta {
  margin-bottom: -8rem;
}
.sponsors hr {
  margin-top: -3rem !important;
}

.sponsors-logos {
  display: flex;
  justify-content: space-around;
  padding-bottom: 3rem;
  flex-wrap: wrap;
}

.sponsor-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

.sponsor-item img {
  max-width: 60px;
}
</style>