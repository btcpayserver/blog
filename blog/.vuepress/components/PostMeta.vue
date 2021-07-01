<template>
  <div>
    <h2 class="index-post-title">
      {{ $page.frontmatter.title }}
    </h2>
    <p class="meta"> Posted in

      <router-link v-if="!Array.isArray($page.frontmatter.category)" :to="'/category/' + $page.frontmatter.category">
        {{ $page.frontmatter.category }}</router-link>

      <span v-else v-for="(item, index) in $page.frontmatter.category" class="category-item">
        <router-link :to="'/category/' + item">{{ item }}</router-link><span v-if="index != ($page.frontmatter.category.length - 1)">, </span>
      </span>

      by

      <router-link v-if="!Array.isArray($page.frontmatter.author)" :to="'/author/' + $page.frontmatter.author">
        {{ $page.frontmatter.author }}</router-link>

      <span v-else v-for="(item, index) in $page.frontmatter.author" class="category-item">
        <router-link :to="'/author/' + item">{{ item }}</router-link><span v-if="index != ($page.frontmatter.author.length - 1)">, </span>
      </span>

      on

      {{ new Date($page.frontmatter.date).getMonth() + 1 }}/{{ new Date($page.frontmatter.date).getDate() + 1 }}/{{ new Date($page.frontmatter.date).getFullYear() }}</p>

      <img v-if="$page.frontmatter.postImage" :src="$page.frontmatter.postImage" class="post-image">
  </div>
</template>

<style scoped>
.meta {
  margin-top: -0.5rem;
  font-style: italic;
}
.post-image {
  height: 15rem;
  width: 100%;
  object-fit: cover;
}
</style>
