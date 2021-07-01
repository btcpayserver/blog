<template>
  <div>
    <div class="theme-default-content">
      <h1>BTCPay Server Blog</h1>
      <Categories />
      <hr>
      <h2 v-if="this.$page.path.startsWith('/author/')" class="post-list-sub-header">Posts by {{ this.$pagination.pages[0].frontmatter.author }}</h2>
      <h2 v-if="this.$page.path.startsWith('/category/')" class="post-list-sub-header mobile-only">{{ this.$page.frontmatter.title }}</h2>
      <div v-for="post in posts">
        <h2 class="index-post-title">
            <router-link :to="post.path">
              {{ post.frontmatter.title }}
            </router-link>
        </h2>
        <p class="meta"> Posted in

          <router-link v-if="!Array.isArray(post.frontmatter.category)" :to="'/category/' + post.frontmatter.category">
            {{ post.frontmatter.category }}</router-link>

          <span v-else v-for="(item, index) in post.frontmatter.category" class="category-item">
            <router-link :to="'/category/' + item">{{ item }}</router-link><span v-if="index != (post.frontmatter.category.length - 1)">, </span>
          </span>

          by
          <router-link :to="'/author/' + post.frontmatter.author">
            {{ post.frontmatter.author }}</router-link>
          on
          {{ new Date(post.frontmatter.date).getMonth() + 1 }}/{{ new Date(post.frontmatter.date).getDate() + 1 }}/{{ new Date(post.frontmatter.date).getFullYear() }}</p>
        <img v-if="post.frontmatter.postImage" :src="post.frontmatter.postImage" class="post-image">
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
.post-image {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}
.post-list-sub-header {
  border-bottom: none;
  text-align: center;
}
</style>
