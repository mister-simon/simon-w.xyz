<script setup>
const thingsQuery = queryContent('thoughts-and-things');
</script>
<template>
    <Head>
        <Title>Thoughts and Things | simonw.xyz</Title>
    </Head>
    <nav class="fixed top-0 z-50 font-script motion-safe:transition-transform hover:scale-150 font-bold">
        <NuxtLink to="/" class="text-5xl px-4 inline-grid place-content-center" aria-label="Back">
            &lt;&mdash;
        </NuxtLink>
    </nav>

    <main class="container prose prose-invert mx-auto pt-8">
        <h1>Simon's Thoughts <span class="text-lg">and Things</span> <span class="text-xs">and stuff...</span></h1>

        <ContentNavigation v-slot="{ navigation }" :query="thingsQuery">
            <nav>
                <ul>
                    <li v-for="link of navigation" :key="link._path">
                        <NuxtLink :to="link._path">
                            {{ link.navTitle || link.title }}
                        </NuxtLink>

                        <template v-if="link.children">
                            <ul>
                                <li v-for="childLink of link.children" :key="childLink._path">
                                    <NuxtLink :to="childLink._path">
                                        {{ childLink.navTitle || childLink.title }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </nav>
        </ContentNavigation>

        <hr>

        <ContentList path="/thoughts-and-things" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <p>
                    <NuxtLink :to="article._path">Read more</NuxtLink>
                </p>
            </div>
        </ContentList>
    </main>
</template>