<script setup>
const section = ref(null);
let obs = null;

const cb = function (entries) {

    entries.forEach(
        ({ isIntersecting, target }, i, items) => {
            target.classList.toggle('active', isIntersecting)
        }
    );
}

onMounted(() => {
    obs = new IntersectionObserver(cb, { threshold: 1 });
    section.value
        .querySelectorAll('.slide')
        .forEach(el => obs.observe(el));
})
</script>
<template>
    <Head>
        <Title>What Even Is A Professional | SimonW.XYZ</Title>
    </Head>
    <nav class="fixed top-0 z-50 font-script motion-safe:transition-transform hover:scale-150 font-bold">
        <NuxtLink to="/" class="text-5xl px-4 inline-grid place-content-center" aria-label="Back">
            &lt;&mdash;
        </NuxtLink>
    </nav>
    <section class="bg-black text-neutral-100 isolate" ref="section">
        <div class="slide">
            <div class="transition duration-500 bg-neutral-600 overflow-clip">
                <NuxtImg src="/assets/tedtalk-emphasis.png" />
            </div>
            <div class="text-center p-4">
                <p>Welcome to my TEDTalk...</p>
            </div>
        </div>
        <div class="slide">
            <div class="transition duration-500 bg-neutral-600">
                <NuxtImg src="/assets/tedtalk-neutral.png" />
            </div>
            <div class="text-center p-4">
                <p>Being a professional doesn't just mean working in your field for a long time...</p>
            </div>
        </div>

        <div class="slide">
            <div class="transition duration-500 bg-blue-900 overflow-clip">
                <NuxtImg src="/assets/tedtalk-emphasis.png" class="spin rotate-6" />
            </div>
            <div class="text-center p-4">
                <p>Not unless you're a farmer.</p>
            </div>
        </div>

        <div class="slide">
            <div class="transition duration-500 bg-neutral-700">
                <NuxtImg src="/assets/tedtalk-blocky.png" />
            </div>
            <div class="text-center p-4">
                <p>Heh</p>
            </div>
        </div>
    </section>
</template>

<style>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@media (prefers-reduced-motion: no-preference) {
    .spin {
        animation: spin infinite 10s linear;
    }
}

section {
    .slide {
        /* Layout */
        display: grid;
        grid-template-columns: 1fr 2fr;
        min-height: 100vh;
        min-height: 100svh;

        /* Positioning */
        position: sticky;
        top: 0;
        bottom: -1px;

        /* Children */
        &>div {
            display: grid;
            place-content: center;
            font-size: clamp(2rem, 3vw, 10rem);
        }

        /* Allow slides to show / hide when activated */
        @apply transition-opacity duration-500;
        opacity: 0;

        &.active {
            opacity: 1;
        }

        &.active:has(+.active) {
            opacity: 0;
        }
    }
}
</style>
