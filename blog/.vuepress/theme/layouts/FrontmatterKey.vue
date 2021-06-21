<template>
  <div>
    <div class="theme-default-content">
      <div v-for="item in items">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <Layout />
  </div>
</template>

<script>
import slugify from '../../slugify.js'
export default {
  computed: {
    items() {
      return this.$frontmatterKey.list
    }
  },
  components: {
    slugify
  }
}
</script>
