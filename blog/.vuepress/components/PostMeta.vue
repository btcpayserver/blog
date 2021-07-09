<template>
  <div>
    <h1 class="index-post-title">
      {{ $page.frontmatter.title }}
    </h1>
    <p class="meta">
      Posted in

      <router-link
        v-if="!Array.isArray($page.frontmatter.category)"
        :to="'/category/' + $page.frontmatter.category"
        class="meta-link"
      >
        {{ $page.frontmatter.category | capitalize }}</router-link
      >

      <span v-else v-for="(item, index) in $page.frontmatter.category">
        <router-link :to="'/category/' + item" class="meta-link">{{
          item | capitalize
        }}</router-link
        ><span v-if="index != $page.frontmatter.category.length - 1">, </span>
      </span>

      by

      <router-link
        v-if="!Array.isArray($page.frontmatter.author)"
        :to="'/author/' + $page.frontmatter.author"
        class="meta-link"
      >
        {{ $page.frontmatter.author }}</router-link
      >

      <span v-else v-for="(item, index) in $page.frontmatter.author">
        <router-link :to="'/author/' + item" class="meta-link">{{
          item
        }}</router-link
        ><span v-if="index != $page.frontmatter.author.length - 1">, </span>
      </span>

      on

      {{ new Date($page.frontmatter.date).getMonth() + 1 }}/{{
        new Date($page.frontmatter.date).getDate() + 1
      }}/{{ new Date($page.frontmatter.date).getFullYear() }}
    </p>

    <img
      v-if="$page.frontmatter.coverImage"
      :src="$page.frontmatter.coverImage"
      class="cover-image"
    />
  </div>
</template>
<script>
export default {
  filters: {
    capitalize: function (value) {
      return value.replace(/^\w/, (c) => c.toUpperCase());
    },
  },
};
</script>
<style scoped>
.meta {
  padding-top: 0.5rem;
}
</style>