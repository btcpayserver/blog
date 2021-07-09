<template>
  <div>
    <div class="theme-default-content">
      <h1 class="home-title">
        <router-link :to="'/'" class="home-link"
          >BTCPay Server Blog</router-link
        >
      </h1>

      <Categories />

      <hr />
      <div v-for="post in posts" :key="post.path">
        <h2 class="index-post-title">
          <router-link :to="post.path">{{
            post.frontmatter.title
          }}</router-link>
        </h2>

        <p class="meta">
          Posted in
          <router-link
            v-if="!Array.isArray(post.frontmatter.category)"
            :to="'/category/' + post.frontmatter.category"
            class="meta-link"
          >
            {{ post.frontmatter.category | capitalize }}</router-link
          >

          <span
            v-else
            v-for="(item, index) in post.frontmatter.category"
            :key="item"
          >
            <router-link :to="'/category/' + item" class="meta-link">{{
              item | capitalize
            }}</router-link
            ><span v-if="index != post.frontmatter.category.length - 1"
              >,
            </span>
          </span>

          by

          <router-link
            v-if="!Array.isArray(post.frontmatter.author)"
            :to="'/author/' + post.frontmatter.author"
            class="meta-link"
          >
            {{ post.frontmatter.author }}</router-link
          >

          <span
            v-else
            v-for="(item, index) in post.frontmatter.author"
            :key="item"
          >
            <router-link :to="'/author/' + item" class="meta-link">{{
              item
            }}</router-link
            ><span v-if="index != post.frontmatter.author.length - 1">, </span>
          </span>

          on

          {{ new Date(post.frontmatter.date).getMonth() + 1 }}/{{
            new Date(post.frontmatter.date).getDate() + 1
          }}/{{ new Date(post.frontmatter.date).getFullYear() }}
        </p>
        <router-link :to="post.path"
          ><img
            v-if="post.frontmatter.coverImage"
            :src="post.frontmatter.coverImage"
            class="cover-image"
        /></router-link>
        <hr />
      </div>
      <Pagination />
    </div>
    <Layout />
    <Sponsors />
  </div>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";
import { capitalize } from "../../filters";

export default {
  computed: {
    posts() {
      return this.$pagination.pages.sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      );
    },
  },
  components: {
    Pagination,
  },
  filters: {
    capitalize,
  },
};
</script>
