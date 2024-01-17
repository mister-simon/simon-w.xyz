<template>
    <main>
        <NuxtImg src="assets/coffee-and-pancakes.jpg" class="fixed w-full -z-10 scroll-img" width="1556" height="2075" />
        <nav class="fixed top-0 z-50 font-mono">
            <NuxtLink to="/" class="text-5xl p-4 inline-grid place-content-center" aria-label="Back">&lt;&mdash;</NuxtLink>
        </nav>
        <DesignIntroSection />
        <DesignSecondSection />
        <section class="bg-black">
            <p>It's increasingly important to do so with respect to accessibility. Every flashy new tool we get for design
                needs to be applied with consideration.</p>
        </section>
        <section class="bg-black">
            <p>Given a concept or design with enough substance to it, I can generally visualise the flow of content, the
                layout
                techniques to apply, and the layers of behavioural enhancements.</p>
        </section>
        <section class="bg-black">
            <p>Making a website is like painting. You begin with a sketch, the awkward ugly phase, more broad strokes, an
                MVP, detailing, polish. Eventually, you may even work on the same project for too long and begin making it
                worse if you're not careful.</p>
        </section>
    </main>
</template>

<style scoped>
main {
    display: grid;
    gap: 6rem;
}

main>section {
    min-height: 100vh;
    min-height: 100svh;
}

@keyframes scroll-img {
    from {
        translate: 0;
    }

    to {
        translate: 0 -50%;
    }
}

.scroll-img {
    animation: scroll-img linear both 1ms;
    animation-timeline: scroll();
}
</style>