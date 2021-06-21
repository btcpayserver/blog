<template>
  <div>
    <h1>{{ $page.frontmatter.title }}</h1>
    <p>{{ $page.frontmatter.date }}</p>
    <p>by {{ $page.frontmatter.author }}</p>
  </div>
</template>
