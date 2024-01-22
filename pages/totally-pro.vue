<script setup>
const section = ref(null);
let obs = null;

const cb = function (entries) {
    entries.forEach(
        ({ isIntersecting, target }) => {
            target.classList.toggle('active', isIntersecting)
        }
    );
}

onMounted(() => {
    obs = new IntersectionObserver(cb, { threshold: 0.5 });
    section.value
        .querySelectorAll('figure+div')
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
        <figure class="transition duration-500 bg-neutral-600 overflow-clip">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Welcome to my TEDTalk...</p>
                </blockquote>
            </div>
        </div>

        <figure class="transition duration-500 bg-neutral-600">
            <NuxtImg src="/assets/tedtalk-neutral.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Now... Being a professional doesn't always mean working in your field for a long time.</p>
                </blockquote>
            </div>
        </div>


        <figure class="transition duration-500 bg-blue-900">
            <NuxtImg src="/assets/tedtalk-emphasis.png" class="rotate-45" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Unless you're a farmer! Haha~</p>
                </blockquote>
                <p class="text-sm-relative">
                    <em>*the crowd chuckles politely*</em>
                </p>
            </div>
        </div>


        <figure class="transition duration-500 bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-blocky.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Heh... No.</p>
                </blockquote>
            </div>
        </div>
    </section>
</template>

<style>
section {
    /* Layout */
    display: grid;
    text-align: center;

    /* Children */
    div,
    figure {
        display: grid;
        font-size: clamp(2rem, 3vw, 10rem);
    }

    .text-sm-relative {
        font-size: .5em;
    }

    .outer {
        min-height: 90vh;
        min-height: 90svh;

        position: relative;
        z-index: 20;
        display: grid;
        align-items: center;
        gap: 1rem;

        blockquote {
            & p:first-of-type::before {
                content: '“';
            }

            & p:last-of-type::after {
                content: '”';
            }
        }
    }

    .inner {
        @apply bg-black/70 rounded-lg;
        margin: clamp(.2rem, 2%, 1rem);
        padding: clamp(.2rem, 2%, 1rem);
    }

    figure {
        position: fixed;
        inset: 0;
        place-content: center;
    }

    @screen sm {
        grid-template-columns: 1fr 2fr;

        .outer {
            min-height: 100vh;
            min-height: 100svh;
        }

        .inner {
            z-index: 0;
            @apply bg-transparent;
        }

        figure {
            position: sticky;
        }
    }
}

/* Handle all the showing + hiding of stuff */
section {
    figure {
        /* Allow slides to show / hide when activated */
        @apply transition-opacity duration-500;
        opacity: 0;

        &:has(+.active) {
            /* @apply delay-100; */
            opacity: 1;
            z-index: 10;
        }
    }
}
</style>
