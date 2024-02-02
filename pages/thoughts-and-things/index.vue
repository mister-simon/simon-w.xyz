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
                <ContentLinkBlock v-for="article in list" :key="article._path" :content="article" />
            </template>

            <template #not-found>
                <p>Oh no. What happened to all the words?</p>
                <p>There are no thoughts? There are no things? Well... Ok.</p>
            </template>
        </ContentList>
    </section>
</template>