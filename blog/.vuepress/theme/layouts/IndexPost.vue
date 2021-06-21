<template>
    <div class="theme-container"
      <div class="theme-default-content">
        <Pagination />
        <div v-for="post in posts">
            <h2 class="index-post-title">
                <router-link :to="post.path">
                    {{ post.frontmatter.title }}
                </router-link>
            </h2>
            <p>{{ post.frontmatter.category }}</p>
            <p>by {{ post.frontmatter.author }}</p>
            <p>{{ post.frontmatter.description }}</p>
            <p><router-link :to="post.path">Read More</router-link></p>
            <hr>
        </div>
      </div>
    </div>
</template>

<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
export default {
    computed: {
        posts() {
            return this.$pagination.pages
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
    components: {
      Pagination
    }
}
</script>
