<template>
  <IndexPost :title="title" />
</template>

<script>
import IndexPost from './IndexPost.vue'
import { capitalize } from '../../filters'

export default {
  name: 'FrontmatterPagination',

  components: {
    IndexPost
  },

  computed: {
    title () {
      var name = this.$page.path.startsWith('/category/')
        ? capitalize(this.$page.frontmatter.title)
        : `Posts by ${this.$page.frontmatter.title}`
      return name.replace(/ - Page .*/, '')
    }
  }
}
</script>
