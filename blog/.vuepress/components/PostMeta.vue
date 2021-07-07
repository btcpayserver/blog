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
      >
        {{
          $page.frontmatter.category.replace(/^\w/, (c) => c.toUpperCase())
        }}</router-link
      >

      <span
        v-else
        v-for="(item, index) in $page.frontmatter.category"
        class="category-item"
      >
        <router-link :to="'/category/' + item">{{
          item.replace(/^\w/, (c) => c.toUpperCase())
        }}</router-link
        ><span v-if="index != $page.frontmatter.category.length - 1">, </span>
      </span>

      by

      <router-link
        v-if="!Array.isArray($page.frontmatter.author)"
        :to="'/author/' + $page.frontmatter.author"
      >
        {{ $page.frontmatter.author }}</router-link
      >

      <span
        v-else
        v-for="(item, index) in $page.frontmatter.author"
        class="category-item"
      >
        <router-link :to="'/author/' + item">{{ item }}</router-link
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
<style scoped>
.meta {
  padding-top: 0.5rem;
}
</style>