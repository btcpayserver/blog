<template>
    <div>
        <h1>Recent Posts</h1>
        <div v-for="post in posts">
            <h2 class="index-post-title">
                <router-link :to="post.path">
                    {{ post.frontmatter.title }}
                </router-link>
            </h2>
            <p>{{ post.frontmatter.description }}</p>
            <p><router-link :to="post.path">Read More</router-link></p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => !x.frontmatter.post_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
