<template>
  <p class="meta">
    Posted in

    <router-link
      v-if="!Array.isArray(post.frontmatter.category)"
      :to="'/category/' + post.frontmatter.category"
      class="meta-link"
    >{{ post.frontmatter.category | capitalize }}</router-link>
    <span
      v-else
      v-for="(item, index) in post.frontmatter.category"
      :key="item"
    >
      <router-link :to="'/category/' + item" class="meta-link">{{ item | capitalize }}</router-link>
      <span v-if="index != post.frontmatter.category.length - 1">, </span>
    </span>

    by

    <router-link
      v-if="!Array.isArray(post.frontmatter.author)"
      :to="'/author/' + post.frontmatter.author"
      class="meta-link"
    >{{ post.frontmatter.author }}</router-link>
    <span
      v-else
      v-for="(item, index) in post.frontmatter.author"
      :key="item"
    >
      <router-link :to="'/author/' + item" class="meta-link">{{ item }}</router-link>
      <span v-if="index != post.frontmatter.author.length - 1">, </span>
    </span>

    on

    {{ new Date(post.frontmatter.date).getMonth() + 1 }}/{{ new Date(post.frontmatter.date).getDate() + 1 }}/{{ new Date(post.frontmatter.date).getFullYear() }}
  </p>
</template>

<script>
import { capitalize } from '../../filters'

export default {
  name: 'PostMeta',

  props: [
    'post'
  ],

  filters: {
    capitalize
  }
}
</script>

<style scoped>
.meta {
  padding-top: 0.5rem;
}
</style>
