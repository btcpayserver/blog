<template>
  <div>
    <header class="theme-default-content post-header">
      <h1 class="index-post-title">
        {{ $page.frontmatter.title }}
      </h1>
      <PostMeta :post="$page"  />
      <img
        v-if="$page.frontmatter.coverImage"
        :src="$page.frontmatter.coverImage"
        class="cover-image"
      />
    </header>

    <Layout />
  </div>
</template>

<script>
import PostMeta from '@theme/components/PostMeta.vue'

export default {
  name: 'Post',

  components: {
    PostMeta
  }
}
</script>

<style scoped>
.post-header {
  margin-bottom: -6.2rem !important;
  padding-bottom: 0 !important;
}
</style>
