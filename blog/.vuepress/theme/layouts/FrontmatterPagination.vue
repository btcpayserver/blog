<template>
  <div>
    <div class="theme-default-content">
      <h1 v-if="this.$page.path.startsWith('/categories/')">{{ this.$pagination.pages[0].frontmatter.category }}</h1>
      <h1 v-else>Posts by {{ this.$pagination.pages[0].frontmatter.author }}</h1>
      <p class="header-links">
        <router-link :to="'/authors/'">Authors</router-link> | <router-link :to="'/categories/'">Categories</router-link>
      </p>
      <hr>
      <div v-for="post in posts">
        <h2 class="index-post-title">
            <router-link :to="post.path">
              {{ post.frontmatter.title }}
            </router-link>
        </h2>
        <p class="meta"> Posted in
          <router-link :to="'/categories/' + post.frontmatter.category">
            {{ post.frontmatter.category }}</router-link>
          by
          <router-link :to="'/authors/' + post.frontmatter.author">
            {{ post.frontmatter.author }}</router-link>
          on
          {{ new Date(post.frontmatter.date).getMonth() + 1 }}/{{ new Date(post.frontmatter.date).getDate() + 1 }}/{{ new Date(post.frontmatter.date).getFullYear() }}</p>
        <p>{{ post.frontmatter.description }}</p>
        <p><router-link :to="post.path">Read More</router-link></p>
        <hr>
      </div>
      <Pagination />
    </div>
    <Layout />
  </div>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
  computed: {
    posts() {
      return this.$pagination.pages
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  },
  components: {
    Pagination,
  }
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
.meta {
  margin-top: -1.15rem;
  font-style: italic;
}
.index-post-title {
  border: none;
}
.index-post-title a {
  font-weight: 600;
}
</style>
