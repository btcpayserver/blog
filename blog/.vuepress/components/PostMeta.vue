<template>
  <div>
    <p class="meta"> Posted in
      <router-link :to="'/categories/' + $page.frontmatter.category">
        {{ $page.frontmatter.category }}</router-link>
      by
      <router-link :to="'/authors/' + $page.frontmatter.author">
        {{ $page.frontmatter.author }}</router-link>
      on
      {{ new Date($page.frontmatter.date).getMonth() }}/{{ new Date($page.frontmatter.date).getDate() + 1 }}/{{ new Date($page.frontmatter.date).getFullYear() }}</p>
  </div>
</template>

<style scoped>
.meta {
  margin-top: -0.5rem;
  font-style: italic;
}
</style>
