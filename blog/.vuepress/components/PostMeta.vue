<template>
  <div>
    <h2 class="index-post-title">
      {{ $page.frontmatter.title }}
    </h2>
    <p class="meta"> Posted in
      <router-link :to="'/category/' + $page.frontmatter.category">
        {{ $page.frontmatter.category }}</router-link>
      by
      <router-link :to="'/author/' + $page.frontmatter.author">
        {{ $page.frontmatter.author }}</router-link>
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
