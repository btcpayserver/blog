<template>
  <div>
    <div class="theme-default-content">
      <h1 class="home-title">
        <router-link :to="'/'" class="home-link">{{ title || 'BTCPay Server Blog' }}</router-link>
      </h1>
      <Categories />
      <hr />

      <div v-for="post in posts" :key="post.path">
        <h2 class="index-post-title">
          <router-link :to="post.path">
            {{ post.frontmatter.title }}
          </router-link>
        </h2>
        <PostMeta :post="post" />
        <router-link :to="post.path">
          <img
            v-if="post.frontmatter.coverImage"
            :src="post.frontmatter.coverImage"
            class="cover-image"
          />
        </router-link>
      </div>
      <template v-if="$pagination.length > 1">
        <hr />
        <Pagination />
      </template>
    </div>
    <Layout />
  </div>
</template>

<script>
import Categories from '@theme/components/Categories.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import { capitalize } from '../../filters'

export default {
  computed: {
    posts() {
      return this.$pagination.pages.sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
    }
  },

  components: {
    Categories,
    Pagination,
    PostMeta
  },

  props: [
    'items',
    'title'
  ],

  filters: {
    capitalize
  }
}
</script>
