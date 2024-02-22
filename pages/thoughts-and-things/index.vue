<script setup>
definePageMeta({ layout: 'blog' });

const { data: navigation } = await useAsyncData(
    'blog-home',
    () => {
        return useBlogQuery().find();
    }
);
</script>
<template>
    <Head>
        <Title>Thoughts and Things | simonw.xyz</Title>
    </Head>

    <section class="prose md:prose-xl prose-invert mx-auto p-4 pt-8">
        <h1 class="text-4xl">Simon's Thoughts <span class="text-xl">and Things</span> <span class="text-xs">and
                stuff...</span></h1>

        <div v-if="navigation" class="space-y-4">
            <div v-for="(article, index) in navigation" :key="article._path"
                class="relative rounded-xl border-t border-slate-700">
                <h2 v-if="!index"
                    class="absolute top-0 left-0 bg-slate-700 rounded-full px-2 uppercase text-teal-300 font-bold text-sm text-center -rotate-2 -translate-y-1/2 not-prose">
                    Newest!
                </h2>
                <h2 v-if="index === 1"
                    class="absolute top-0 left-0 bg-slate-700 rounded-full px-2 uppercase text-teal-300 font-bold text-sm text-center -rotate-2 -translate-y-1/2 not-prose">
                    Older...
                </h2>
                <ContentLinkBlock :content="article" />
            </div>
        </div>

        <div v-else>
            <p>Oh no. What happened to all the words?</p>
            <p>There are no thoughts? There are no things? Well... Ok.</p>
        </div>
    </section>
</template>