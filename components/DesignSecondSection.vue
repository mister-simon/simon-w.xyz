<template>
    <section>
        <p>In the past I have primarily worked with designers when developing a front-end. With more or less to work
            from I can usually create consistency and fill gaps.</p>
    </section>
</template>

<style scoped>
@keyframes static-effect {
    from {
        --static-offset: -20%;
    }

    25% {
        --static-offset: -10%;
    }

    50% {
        --static-offset: 0%;
    }

    75% {
        --static-offset: 10%;
    }

    to {
        --static-offset: 20%;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes rotater {
    from {
        rotate: 0deg;
    }

    to {
        rotate: 360deg;
    }
}

.lead {
    @apply overflow-hidden relative isolate bg-yellow-950 text-neutral-800;

    .backdrop {
        @apply absolute inset-0 -z-10 blur-[1px] scale-150;

        --static-offset: 50%;

        animation: static-effect 500ms linear infinite alternate;

        background-position: center right;
        background-size: 50%;
        background-image:
            repeating-conic-gradient(from 1.333deg at 81% var(--static-offset), #000, #5000 0.001deg 0.002deg),
            repeating-conic-gradient(from 1.111deg at 19% var(--static-offset), #0000, #0500 0.001deg 0.002deg),
            repeating-conic-gradient(from 1.222deg at 50% var(--static-offset), #000, #0050 0.001deg 0.002deg);
    }

    .content {
        @apply text-5xl p-10 mx-auto;
        max-width: 80%;
        max-width: min(80%, 65ch);
        font-family: 'Nothing You Could Do', cursive;
        box-shadow: .5em .5em 0 #0003;
        text-wrap: pretty;

        & em {
            font-family: 'Permanent Marker', cursive;
        }
    }
}

.bg-static {
    --static-offset: 0%;
    animation: static-effect 500ms linear infinite alternate;
    background-image:
        repeating-conic-gradient(from 1.111deg at 19% var(--static-offset), #0000, #050A 0.001deg 0.002deg),
        repeating-conic-gradient(from 1.222deg at 50% var(--static-offset), #000, #005A 0.001deg 0.002deg),
        repeating-conic-gradient(from 1.333deg at 81% var(--static-offset), #000, #500A 0.001deg 0.002deg);
}

.sunshine {
    @apply absolute top-0 right-0 aspect-square -z-10;
    @apply aspect-square;
    @apply translate-x-1/2 -translate-y-1/2;
    @apply grid;

    width: max(150svh, 150svw);

    --static-offset: 0%;

    & * {
        @apply size-full;
    }

    &-clip {
        @apply mix-blend-multiply;

        grid-area: 1/1;
        animation: spin 100s linear infinite;
        mask-image: url('@/assets/star-mask.svg');
        mask-size: cover;

        &-scroll {
            @apply mix-blend-color-burn invert;
            opacity: .5;
            animation: spin 1ms linear both, rotater 600s linear infinite;
            animation-timeline: scroll(root), auto;
        }

        &-last {
            animation: spin 130s linear infinite;
            scale: 0.9;
        }
    }

    &-inner {
        --static-offset: 0%;
        --tw-rotate: 0;

        animation: static-effect 500ms linear infinite alternate;
        background-image: radial-gradient(#FFF, #FFFFFE 20%, rgb(255, 213, 0) 40%, rgb(255, 102, 102));

        mask-image:
            repeating-conic-gradient(from 0.0011deg at 19% var(--static-offset), #0000, #0F08 0.001deg 0.002deg),
            repeating-conic-gradient(from 0.0022deg at 50% var(--static-offset), #0000, #00F8 0.001deg 0.002deg),
            repeating-conic-gradient(from 0.0033deg at 81% var(--static-offset), #0000, #F008 0.001deg 0.002deg),
            radial-gradient(closest-side, #000, #000E 20%, #0000);
    }
}
</style>