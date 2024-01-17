<template>
    <section>
        <div class="backdrop"></div>
        <div class="sunshines">
            <div class="sunshines-clip sunshines-clip-first">
                <div class="sunshines-inner"></div>
            </div>
            <div class="sunshines-clip sunshines-clip-last">
                <div class="sunshines-inner"></div>
            </div>
            <div class="sunshines-clip sunshines-clip-scroll">
                <div class="sunshines-inner"></div>
            </div>
        </div>
        <div class="content text-white bg-black/50 relative font-script">
            <div class="bg-black bg-static mix-blend-difference blur-[2px] absolute inset-0 z-0"></div>
            <div class="space-y-4 relative z-10">
                <p><em class="font-script-thick">OK, I'm not the best designer ever...</em></p>
                <p>But I do understand that a design has a purpose, and if this page sticks in your mind, for better or
                    worse, it will have satisfied it's purpose.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
@screen md {
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

section {
    @apply overflow-hidden relative isolate bg-yellow-950 text-neutral-800;
    @apply grid place-content-center;

    --static-offset: 0%;
    --static-width: 0.001;

    .backdrop {
        @apply absolute inset-0 -z-10 blur-[1px] scale-150;

        --static-offset: 50%;

        @media (prefers-reduced-motion: no-preference) {
            animation: static-effect 500ms linear infinite alternate;
        }

        background-position: center right;
        background-size: 50%;
        background-image: repeating-conic-gradient(from 1.333deg at 81% var(--static-offset), #000, #5000 calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
        repeating-conic-gradient(from 1.111deg at 19% var(--static-offset), #000, #0500 calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
        repeating-conic-gradient(from 1.222deg at 50% var(--static-offset), #000, #0050 calc(1deg * var(--static-width)) calc(2deg * var(--static-width)));
    }

    .content {
        @apply text-2xl sm:text-3xl lg:text-5xl p-10 mx-auto;
        max-width: 80%;
        max-width: min(90%, 65ch);
        box-shadow: .5em .5em 0 #0003;
        text-wrap: pretty;
    }
}

.bg-static {
    @media (prefers-reduced-motion: no-preference) {
        animation: static-effect 500ms linear infinite alternate;
    }

    background-image: repeating-conic-gradient(from 1.111deg at 19% var(--static-offset), #000, #050A calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
    repeating-conic-gradient(from 1.222deg at 50% var(--static-offset), #000, #005A calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
    repeating-conic-gradient(from 1.333deg at 81% var(--static-offset), #000, #500A calc(1deg * var(--static-width)) calc(2deg * var(--static-width)));
}

.sunshines {
    @apply absolute top-0 right-0 aspect-square -z-10;
    @apply aspect-square;
    @apply translate-x-1/2 -translate-y-1/2;
    @apply grid;

    width: max(150svh, 150svw);

    --static-offset: 0%;

    & * {
        @apply size-full opacity-80;
    }

    &-clip {
        @apply mix-blend-multiply;

        @media (prefers-reduced-motion: no-preference) {
            animation: spin 100s linear infinite;
        }

        grid-area: 1/1;
        mask-image: url('@/assets/star-mask.svg');
        mask-size: cover;

        &-scroll {
            @media (prefers-reduced-motion: no-preference) {
                animation: spin 1ms linear both, rotater 600s linear infinite;
                animation-timeline: scroll(root), auto;
            }

            @apply mix-blend-color-burn invert;
            opacity: .5;
        }

        &-last {
            @media (prefers-reduced-motion: no-preference) {
                animation: spin 130s linear infinite;
            }

            scale: 0.9;
        }
    }

    &-inner {
        --tw-rotate: 0;

        @media (prefers-reduced-motion: no-preference) {
            animation: static-effect 500ms linear infinite alternate;
        }

        background-image: radial-gradient(#FFF, #FFFFFE 20%, rgb(255, 213, 0) 40%, rgb(255, 102, 102));

        mask-image: repeating-conic-gradient(from 0.0011deg at 19% var(--static-offset), #000, #0F08 calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
        repeating-conic-gradient(from 0.0022deg at 50% var(--static-offset), #000, #00F8 calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
        repeating-conic-gradient(from 0.0033deg at 81% var(--static-offset), #000, #F008 calc(1deg * var(--static-width)) calc(2deg * var(--static-width))),
        radial-gradient(closest-side, #000, #000E 20%, #000);
    }
}
</style>