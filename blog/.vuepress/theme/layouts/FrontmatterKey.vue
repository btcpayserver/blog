<template>
  <div>
    <div class="theme-default-content">
      <h1 v-if="this.$page.path.startsWith('/category/')">
      Categories</h1>
      <h1 v-else>Authors</h1>
      <p v-if="this.$page.path.startsWith('/category/')" class="header-links">
        <router-link :to="'/authors/'">Authors</router-link> | <span>Categories</span>
      </p>
      <p v-else class="header-links">
        <span>Authors</span> | <router-link :to="'/category/'">Categories</router-link>
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
