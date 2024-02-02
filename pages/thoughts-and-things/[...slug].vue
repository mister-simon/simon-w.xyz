<script setup>

definePageMeta({ layout: 'blog' });

const latest = await queryContent({
    from: 'thoughts-and-things',
    sort: [{ date: -1 }]
}).findOne();

</script>

<template>
    <ContentDoc>
        <template #default="{ doc }">
            <article class="grid place-content-center">
                <div class="prose md:prose-xl prose-invert p-4 pt-8 min-w-0">
                    <h1>{{ doc.title }}</h1>
                    <p v-if="doc.date"><time datetime="{{ doc.date }}">{{ doc.date }}</time></p>
                    <p class="lead">{{ doc.description }}</p>
                    <ContentRenderer :value="doc" />
                </div>
            </article>
        </template>

        <template #not-found>
            <article class="grid place-content-center">
                <div class="prose md:prose-xl prose-invert p-4 pt-8 min-w-0">
                    <h1 class="text-amber-200 text-balance">Ah dangit, that one doesn't exist...</h1>
                    <hr class="">
                    <p>What about this one instead? 👀</p>

                    <ContentLinkBlock :content="latest" />
                </div>
            </article>
        </template>
    </ContentDoc>
</template>