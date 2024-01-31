<script setup>
definePageMeta({ layout: 'blog' });
</script>

<template>
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
</template>