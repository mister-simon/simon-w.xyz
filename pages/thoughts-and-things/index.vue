<script setup>
definePageMeta({ layout: 'blog' });
const blogQuery = useBlogQuery();
</script>
<template>
    <Head>
        <Title>Thoughts and Things | simonw.xyz</Title>
    </Head>

    <section class="prose md:prose-xl prose-invert mx-auto p-4 pt-8">
        <h1 class="text-4xl">Simon's Thoughts <span class="text-xl">and Things</span> <span class="text-xs">and
                stuff...</span></h1>

        <ContentList :value="blogQuery">
            <template #default="{ list }">
                <NuxtLink :to="article._path" v-for="article in list" :key="article._path"
                    class="no-underline group flex gap-4 before:content-['<'] before:grid before:place-content-center after:content-['/>'] after:grid after:place-content-center hover:text-teal-500 transition-colors duration-500">
                    <div class="motion-safe:group-hover:rotate-1 transition-transform duration-500">
                        <div class="flex flex-wrap gap-4 justify-between mt-8">
                            <h2
                                class="!my-0 group-hover:text-teal-400 motion-safe:group-hover:-rotate-1 transition duration-500 flex-1 origin-right">
                                <span
                                    class="grayscale-[80%] inline-block scale-75 group-hover:grayscale-0 motion-safe:group-hover:scale-100 transition duration-500">{{
                                        article.navigation?.icon ?? '>' }}</span>
                                <span class="group-hover:underline underline-offset-4">{{ article.title }}</span>
                            </h2>
                            <p v-if="article.date" class="text-sm !mt-auto rotate-2">
                                <time datetime="{{ article.date }}">{{ article.date }}</time>
                            </p>
                        </div>
                        <ContentRenderer :value="article" :excerpt="true" v-if="article.excerpt"
                            class="text-pretty text-teal-100" />
                        <p v-else-if="article.description" class="text-pretty text-teal-100">{{ article.description }}
                        </p>
                    </div>
                </NuxtLink>
            </template>

            <template #not-found>
                <p>Oh no. What happened to all the words?</p>
                <p>There are no thoughts? There are no things? Well... Ok.</p>
            </template>
        </ContentList>
    </section>
</template>