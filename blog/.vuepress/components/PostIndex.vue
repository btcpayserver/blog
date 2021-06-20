<template>
    <div>
        <div v-for="post in posts">
            <h2 class="index-post-title">
                <router-link :to="post.path">
                    {{ post.frontmatter.title }}
                </router-link>
            </h2>
            <p>{{ post.frontmatter.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
