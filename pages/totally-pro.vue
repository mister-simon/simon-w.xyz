<script setup>
const section = ref(null);
let obs = null;

const cb = function (entries) {
    entries.forEach(
        ({ isIntersecting, target }) => {
            const figure = target.previousElementSibling;
            if (figure) {
                figure.classList.toggle('active', isIntersecting)
            }
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
        <figure class="group overflow-clip bg-neutral-900">
            <div
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full transition delay-1000 duration-1000 group-[.active]:-translate-x-1/2">
                <NuxtImg src="/assets/tedtalk-emphasis.png" class="rotate-12 brightness-50 -scale-x-100" />
            </div>
        </figure>
        <div class="outer">
            <div class="inner">
                <p class="text-sm-relative">
                    <em>*clapping*</em>
                </p>
            </div>
        </div>

        <figure class="group bg-neutral-600 overflow-clip">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Welcome to my TEDTalk...</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-600">
            <NuxtImg src="/assets/tedtalk-neutral.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Now... Being a professional doesn't always mean working in your field for a long time.</p>
                </blockquote>
            </div>
        </div>


        <figure class="group bg-blue-900">
            <NuxtImg src="/assets/tedtalk-blocky.png"
                class="transition delay-1000 group-[.active]:delay-500 -scale-x-100 -translate-x-4 group-[.active]:rotate-45" />
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


        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-neutral.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Hehe... No.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-neutral.png" class=" -scale-x-100" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Though experience helps, being a professional is about holding yourself to a standard.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" class="-scale-x-100" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>You might be making a product for a client, but you're also making it for every single user that
                        might interact with that product.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-extra-emphasis.png" class="-scale-x-100" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>You're making something that will pass through the hands of your colleagues, contractors, your future
                        self...</p>
                </blockquote>
                <p class="text-sm-relative">
                    <em>*several people in the crowd feel called out, chuckling nervously*</em>
                </p>
            </div>
        </div>

        <figure class="group bg-red-950">
            <NuxtImg src="/assets/tedtalk-neutral.png" class="" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>You even have to have an awareness of the laws affecting your product.</p>
                </blockquote>
                <p class="text-sm-relative">
                    <em>*several people in the crowd grow silent, even more nervously*</em>
                </p>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-a-dog.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Being a professional is about understanding that you have the power to make something good if you
                        present your skills well - you take responsibility for scoping, fulfil requirements, and fight for
                        quality within any known limitations.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-a-dog-bork.png" class="motion-safe:animate-bounce" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>You do your best to plan ahead, you execute, you evaluate, refactor, maintain, and you remain open to
                        criticism and growth throughout.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>People consider professionalism as an aesthetic.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>A suit and tie - a suitcase full of clean cut black and white business cards.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Hopefully that's been less important to you since 2022.</p>
                </blockquote>
                <p class="text-sm-relative">
                    <em>*a single micro-tear falls from a micro-manager's eye in the audience*</em>
                </p>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Granted, I look good in a suit.</p>
                </blockquote>
                <p class="text-sm-relative">
                    <em>*the crowd chuckles agreeably, one person whoops then coughs sheepishly*</em>
                </p>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Thanks... But if you take one thing away today, it's that professionalism is approaching your craft
                        with integrity and following through.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Thank you for coming to my TEDTalk.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
        </figure>
        <div class="outer">
            <div class="inner">
                <p class="text-sm-relative">
                    <em>*clapping*</em>
                </p>
            </div>
        </div>
    </section>
</template>

<style>
.text-sm-relative {
    font-size: .5em;
}

section {
    display: grid;
    text-align: center;

    .outer,
    figure {
        display: grid;
        font-size: clamp(2rem, 3vw, 10rem);
    }

    figure {
        @apply transition duration-1000;
        @apply fixed inset-0;
        @apply place-content-center;
        @apply bg-gradient-to-b from-[transparent_70%] to-[#0009_70%];

        &.no-horizon {
            background-image: none;
        }
    }

    .outer {
        min-height: 90vh;
        min-height: 90svh;

        @apply relative z-20;
        @apply grid items-center gap-4;

        blockquote {
            & p:first-of-type::before {
                content: '“';
            }

            & p:last-of-type::after {
                content: '”';
            }
        }

        .inner {
            @apply bg-black/90 rounded-lg;
            margin: clamp(.2rem, 2%, 1rem);
            padding: clamp(.2rem, 2%, 1rem);
        }
    }

    @screen sm {
        grid-template-columns: 1fr 2fr;

        figure {
            @apply sticky;
        }

        .outer {
            min-height: 100vh;
            min-height: 100svh;

            .inner {
                @apply bg-transparent z-0;
            }
        }
    }
}

/* Handle all the showing + hiding of stuff */
section {
    figure {
        /* Allow slides to show / hide when activated */
        @apply transition duration-1000 delay-1000 opacity-0 overflow-clip;

        &.active {
            @apply delay-0 z-10 opacity-100 overflow-visible;
        }
    }
}
</style>
