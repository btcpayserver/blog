<template>
  <div>
    <ul class="categories-list">
      <li v-for="category in $category.list" :key="category.path">
        <span
          v-if="$page.frontmatter.title == category.name + ' '"
          class="active-link"
        >
          {{ category.name | capitalize }}
        </span>

        <router-link v-else class="page-link" :to="category.path">
          {{ category.name | capitalize }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { capitalize } from '../filters'

export default {
  filters: {
    capitalize
  }
}
</script>

<style scoped>
.categories-list {
  display: flex;
  list-style-type: none;
  padding: 1rem 3rem;
  text-align: center;
  margin-top: -0.5rem !important;
  justify-content: space-around;
}
.page-link {
  color: var(--btcpay-header-link);
  text-decoration: none !important;
  font-weight: var(--btcpay-font-weight-semibold);
}
.page-link:hover,
.page-link:focus {
  color: var(--btcpay-header-link-accent);
}
.active-link,
.active-link:hover {
  cursor: default;
  color: var(--btcpay-header-link-active);
  font-weight: var(--btcpay-font-weight-semibold);
}
</style>
