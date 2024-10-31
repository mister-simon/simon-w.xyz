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
                <div class="prose md:prose-xl prose-invert p-4 pt-8 min-w-0 blog-grid max-w-none">
                    <div class="main">
                        <h1>{{ doc.title }}</h1>
                        <p v-if="doc.date"><time datetime="{{ doc.date }}">{{ doc.date }}</time></p>
                        <p class="lead">{{ doc.description }}</p>
                    </div>
                    <ContentRenderer :value="doc" class="main" />
                </div>
            </article>
        </template>

        <template #not-found>
            <article class="grid place-content-center">
                <div class="prose md:prose-xl prose-invert p-4 pt-8 min-w-0">
                    <h1 class="text-amber-200 text-balance">Ah dangit, that one doesn't exist...</h1>
                    <hr>
                    <p>What about this one instead? 👀</p>

                    <ContentLinkBlock :content="latest" />
                </div>
            </article>
        </template>
    </ContentDoc>
</template>

<style>
.bordered {
    @apply border border-neutral-500/50 rounded-lg overflow-hidden;
}

.blog-grid .main {
    --max-content-width: 65ch;
    --breakout-difference: .5;

    /*  Compute total allowed grid width to `--breakout-difference` 
      larger than content area  */
    --breakout-grid-width: calc(var(--max-content-width) + (var(--max-content-width) * var(--breakout-difference)));

    display: grid;
    grid-template-columns:
        [breakout-start] 1fr [main-start] min(100%, var(--max-content-width)) [main-end] 1fr [breakout-end];
    width: min(100% - 2rem, var(--breakout-grid-width));
    margin-inline: auto;

    &>* {
        grid-column: main;
    }

    &>.prose-code,
    &>.breakout,
    &>:has(> .breakout) {
        grid-column: breakout;
    }
}

/* Override blockquotes containing their own formatting */
.prose :where(blockquote):has(strong, em):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
    @apply not-italic font-normal;
}

/* Hastily add an image rendering class */
.pixelated {
    image-rendering: pixelated
}
</style>