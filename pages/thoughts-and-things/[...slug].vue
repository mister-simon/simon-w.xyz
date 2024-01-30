<script setup>
const thingsQuery = queryContent({
    path: 'thoughts-and-things',
    sort: [{ date: -1 }]
});
</script>

<template>
    <main class="grid md:grid-cols-[max-content_auto]">
        <nav class="blog-nav p-4 top-0 bg-neutral-950">
            <NuxtLink to="/"
                class="text-5xl block place-content-center font-script font-bold origin-left motion-safe:transition-transform hover:scale-150"
                aria-label="Back">
                &lt;&mdash;
            </NuxtLink>
            <ContentNavigation :query="thingsQuery" class="mt-16" />
        </nav>

        <section class="prose md:prose-xl prose-invert mx-auto p-4 pt-8">
            <ContentDoc v-slot="{ doc }">
                <article>
                    <h1>{{ doc.title }}</h1>
                    <p v-if="doc.date"><time datetime="{{ doc.date }}">{{ doc.date }}</time></p>
                    <p class="lead">{{ doc.description }}</p>
                    <ContentRenderer :value="doc" />
                </article>
            </ContentDoc>
        </section>
    </main>
</template>

<style>
.blog-nav {
    li ul {
        padding-left: .5em;
    }

    li a {
        padding-block: .5em;
        display: block;
    }

    .router-link-exact-active {
        @apply text-teal-500;
    }
}
</style>