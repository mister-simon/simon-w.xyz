<template>
    <div class="layout">
        <nav class="fixed top-0 z-50">
            <NuxtLink to="/" class="text-5xl p-4 inline-grid place-content-center" aria-label="Back">&lt;&mdash;</NuxtLink>
        </nav>
        <section class="lead bg-yellow-900 text-neutral-800">
            <div class="sunshine">
                <div class="sunshine-clip blur-sm">
                    <div class="sunshine-inner"></div>
                </div>
                <div class="sunshine-clip blur-sm">
                    <div class="sunshine-inner"></div>
                </div>
            </div>
            <div class="content text-white space-y-4 bg-black bg-static mix-blend-hard-light">
                <p><em>OK, I am not a design guru, I'll admit that.</em></p>
                <p>But I do understand that a design has a purpose, and if this page sticks in your mind, for better or
                    worse, it will have satisfied it's purpose.</p>
            </div>
        </section>
        <section>
            <p>In the past I have primarily worked with designers when developing a front-end. With more or less to work
                from I can usually create consistency and fill gaps.</p>
        </section>
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
@keyframes static {
    from {
        --static-offset: -2%;
    }

    25% {
        --static-offset: -1%;
    }

    50% {
        --static-offset: 0%;
    }

    75% {
        --static-offset: 1%;
    }

    to {
        --static-offset: 2%;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

section {
    @apply min-h-screen;
}

.lead {
    @apply overflow-hidden relative isolate grid place-content-center;

    .content {
        @apply max-w-prose text-2xl p-10;
    }
}

.bg-static {
    --static-offset: 0%;
    animation: static 500ms linear infinite alternate;
    background-image:
        repeating-conic-gradient(from 1.111deg at 19% var(--static-offset), #0000 0deg 0.0001deg, #050 0.0001deg 0.0002deg),
        repeating-conic-gradient(from 1.222deg at 50% var(--static-offset), #0000 0deg 0.0001deg, #005 0.0001deg 0.0002deg),
        repeating-conic-gradient(from 1.333deg at 81% var(--static-offset), #0000 0deg 0.0001deg, #500 0.0001deg 0.0002deg);
}

.sunshine {
    @apply absolute top-0 right-0 aspect-square -z-10;
    @apply aspect-square;
    @apply translate-x-1/2 -translate-y-1/2;
    @apply grid;

    width: max(150svh, 150svw);

    & * {
        @apply size-full;
    }

    &-clip {
        grid-area: 1/1;
        animation: spin 100s linear infinite;
        mask-image: url('@/assets/star-mask.svg');
        mask-size: cover;

        &:last-child {
            animation: spin 130s linear infinite;
            scale: 0.9;
        }
    }

    &-inner {
        --static-offset: 0%;
        --tw-rotate: 0;

        animation: static 500ms linear infinite alternate;
        background-image: radial-gradient(#FFF 5%, rgb(255, 213, 0) 20%, rgb(255, 102, 102));
        background-size: cover;

        mask-size: cover;
        mask-image:
            repeating-conic-gradient(from 1.111deg at 19% var(--static-offset), #0000 0deg 0.0001deg, #0F08 0.0001deg 0.0002deg),
            repeating-conic-gradient(from 1.222deg at 50% var(--static-offset), #0000 0deg 0.0001deg, #00F8 0.0001deg 0.0002deg),
            repeating-conic-gradient(from 1.333deg at 81% var(--static-offset), #0000 0deg 0.0001deg, #F008 0.0001deg 0.0002deg),
            radial-gradient(closest-side, #000, #000E 20%, #0000);
    }
}
</style>