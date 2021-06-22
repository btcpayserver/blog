<template>
  <div>
    <div class="theme-default-content">
      <h1 v-if="this.$page.path.startsWith('/categories/')">
      Categories</h1>
      <h1 v-else>Authors</h1>
      <p v-if="this.$page.path.startsWith('/categories/')" class="header-links">
        <router-link :to="'/authors/'">Authors</router-link> | <span>Categories</span>
      </p>
      <p v-else class="header-links">
        <span>Authors</span> | <router-link :to="'/categories/'">Categories</router-link>
      </p>
      <hr>
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
.header-links {
  margin-top: -0.5rem !important;
}
ul {
  margin-bottom: 0;
}
ul:not(:first-child) {
  margin: 0;
}
</style>
