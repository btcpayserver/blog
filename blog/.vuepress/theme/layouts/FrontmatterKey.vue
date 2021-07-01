<template>
  <div>
    <div class="theme-default-content">
      <h1>BTCPay Server Blog</h1>
      <h2 v-if="this.$page.path.startsWith('/category/')">
      Categories</h2>
      <h2 v-else>Authors</h2>
      <div>
        <ul v-for="item in items">
          <li><router-link :to="item.path">{{ item.name }}</router-link></li>
        </ul>
      </div>
    </div>
    <Layout />
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$frontmatterKey.list
    }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.header-links {
  text-align: center;
  margin-top: -0.5rem !important;
}
ul {
  margin: 1.2rem 0 0;
}
ul:not(:first-child) {
  margin: 0.5rem 0;
}
</style>
