<script setup>
const blogQuery = useBlogQuery();
</script>

<template>
    <Body class="bg-black text-neutral-100 grid min-h-svh" />
    <main class="grid md:grid-cols-[max-content_auto] relative">
        <nav class="p-4 md:sticky top-0 bg-neutral-950 blog-nav">
            <NuxtLink to="/"
                class="text-5xl block place-content-center font-script font-bold origin-left motion-safe:transition-transform hover:scale-150"
                aria-label="Back">
                &lt;&mdash;
            </NuxtLink>
            <span class="hidden router-link-exact-active router-link-active"></span>
            <ContentNavigation :query="blogQuery" class="md:mt-16" />
        </nav>
        <slot />
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