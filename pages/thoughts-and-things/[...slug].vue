<template>
    <nav class="fixed top-0 z-50 font-script motion-safe:transition-transform hover:scale-150 font-bold">
        <NuxtLink to="/thoughts-and-things" class="text-5xl px-4 inline-grid place-content-center" aria-label="Back">
            &lt;&mdash;
        </NuxtLink>
    </nav>

    <main class="container prose prose-invert mx-auto pt-8">
        <ContentDoc v-slot="{ doc }">
            <article>
                <h1>{{ doc.title }}</h1>
                <p class="lead">{{ doc.description }}</p>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
    </main>
</template>