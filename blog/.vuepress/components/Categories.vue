<template>
  <div>
    <ul class="categories-list">

      <li v-for="category in $category.list">

          <span v-if="$page.frontmatter.title == (category.name + ' ')" class="active-link">
            {{ category.name }}
          </span>

          <router-link v-else class="page-link" :to="category.path">
            {{ category.name }}
          </router-link>

      </li>
    </ul>
  </div>
</template>

<style scoped>
.categories-list {
  display: flex;
  list-style-type: none;
  padding: 1rem 3rem;
  text-align: center;
  margin-top: -0.5rem !important;
  justify-content: space-around;
}
.active-link, .active-link:hover {
  opacity: 0.87;
  cursor: default;
  text-decoration: none !important;
}

.page-link, .active-link {
  font-size: 1.1rem;
}
</style>
