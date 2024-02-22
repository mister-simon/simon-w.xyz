<script setup>
const { data: navigation } = await useAsyncData(
    'blog-nav',
    () => {
        return useBlogQuery(10)
            .only(['title', '_path'])
            .find();
    }
);
</script>

<template>
    <Body class="bg-black text-neutral-100 grid min-h-svh" />
    <main class="grid md:grid-cols-[max-content_auto] relative min-h-full">
        <slot />

        <nav class="p-4 md:sticky top-0 bg-neutral-950 blog-nav -order-1">
            <NuxtLink to="/"
                class="text-5xl block place-content-center font-script font-bold origin-left motion-safe:transition-transform hover:scale-150"
                aria-label="Back">
                &lt;&mdash;
            </NuxtLink>
            <span class="hidden router-link-exact-active router-link-active"></span>

            <ul class="md:mt-10">
                <li>
                    <NuxtLink to="/thoughts-and-things">
                        Thoughts and Things
                    </NuxtLink>
                    <ul v-if="navigation">
                        <li v-for="link in navigation" :key="link._path">
                            <NuxtLink :to="link._path">
                                {{ link.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>

        </nav>
    </main>
</template>

<style scoped>
.blog-nav {
    @apply max-h-svh overflow-auto;

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