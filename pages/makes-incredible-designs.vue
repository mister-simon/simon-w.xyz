<template>
    <div class="layout">
        <nav class="fixed top-0 z-50 font-mono">
            <NuxtLink to="/" class="text-5xl p-4 inline-grid place-content-center" aria-label="Back">&lt;&mdash;</NuxtLink>
        </nav>
        <DesignIntroSection />
        <DesignSecondSection />
        <section>
            <p>It's increasingly important to do so with respect to accessibility. Every flashy new tool we get for design
                needs to be applied with consideration.</p>
        </section>
        <section>
            <p>Given a concept or design with enough substance to it, I can generally visualise the flow of content, the
                layout
                techniques to apply, and the layers of behavioural enhancements.</p>
        </section>
        <section>
            <p>Making a website is like painting. You begin with a sketch, the awkward ugly phase, more broad strokes, an
                MVP, detailing, polish. Eventually, you may even work on the same project for too long and begin making it
                worse if you're not careful.</p>
        </section>
    </div>
</template>

<style scoped>
section {
    @apply min-h-screen grid place-content-center;
    min-height: 100svh;
}
</style>