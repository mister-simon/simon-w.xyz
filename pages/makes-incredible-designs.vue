<template>
    <main class="relative">
        <NuxtImg src="assets/coffee-and-pancakes.jpg" class="fixed w-full min-h-full inset-0 -z-10 scroll-img object-cover"
            width="1556" height="2075" />
        <nav class="fixed top-0 z-50 font-script motion-safe:transition-transform hover:scale-x-150 origin-left">
            <NuxtLink to="/" class="text-5xl p-4 inline-grid place-content-center" aria-label="Back">&lt;&mdash; Back
            </NuxtLink>
        </nav>
        <DesignSecondSection />
        <DesignIntroSection />
        <section class="bg-black grid place-content-center gap-4">
            <div class="max-w-prose text-center text-xl font-script-thick md:text-5xl">
                <p>You're welcome.</p>
            </div>
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