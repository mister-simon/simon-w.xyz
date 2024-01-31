<script setup>
const section = ref(null);
let obs = null;

/**
 * @param {IntersectionObserverEntry[]} entries
 */
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

onBeforeUnmount(() => obs.disconnect());

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
        <figure class="group overflow-clip bg-neutral-900 active">
            <div
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full transition delay-1000 duration-1000 group-[.active]:-translate-x-1/2">
                <NuxtImg src="/assets/tedtalk-emphasis.png" class="rotate-12 brightness-50 -scale-x-100"
                    alt="a linework figure with a black hat and a thin red tie slides in from the left" />
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
            <NuxtImg src="/assets/tedtalk-emphasis.png" alt="The linework Simon gesticulates with emphasis" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Welcome to my TEDTalk...</p>
                    <p>What Even Is A Professional</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-600">
            <NuxtImg src="/assets/tedtalk-neutral.png"
                alt="The linework Simon adopts a neutral pose, looking pensive and poignant" />
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
                class="transition delay-1000 group-[.active]:delay-500 -scale-x-100 -translate-x-4 group-[.active]:rotate-45"
                alt="A silly blocky looking linework Simon delivers a bad joke and twists sideways" />
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
            <NuxtImg src="/assets/tedtalk-neutral.png" alt="Linework Simon returns to their neutral stance" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Hehe... No.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-neutral.png" class=" -scale-x-100"
                alt="Neutral linework Simon faces the other way" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Though experience helps, being a professional is about holding yourself to a standard.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" class="-scale-x-100" alt="Linework Simon emphasises the point" />
            <NuxtImg src="/assets/tedtalk-some-people.png"
                class="absolute inset-x-0 top-[70%] -translate-y-full w-full -z-10 opacity-50"
                alt="Silhouetted linework people are in the background." />
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
            <NuxtImg src="/assets/tedtalk-extra-emphasis.png" class="-scale-x-100"
                alt="Linework Simon punches the air to really drive this point home." />
            <NuxtImg src="/assets/tedtalk-a-dog.png"
                class="absolute inset-x-0 top-[70%] -translate-y-[calc(100%-2rem)] w-1/4 z-0 brightness-50 ml-auto"
                alt="A linework dog with a hat and red tie stands in the background." />
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
            <NuxtImg src="/assets/tedtalk-neutral.png" class=""
                alt="Linework Simon delivers the following point weightily." />
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
            <NuxtImg src="/assets/tedtalk-a-dog.png"
                alt="Linework Simon is now the previously mentioned dog, with a hat and red tie." />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Being a professional is about understanding that you have the power to make something good if you
                        present your skills well.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-a-dog.png" alt="Linework Simon the Dog ."
                class="animate-small-bounce [--animation-duration:200ms]" />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>You take responsibility for scoping, fulfil requirements, and fight for
                        quality within any known limitations.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-700">
            <NuxtImg src="/assets/tedtalk-a-dog-bork.png" class="motion-safe:animate-bounce"
                alt="Linework Simon the Dog has an open mouth to bark and bounces up and down." />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>You do your best to plan ahead, you execute, you evaluate, refactor, maintain, and you remain open to
                        criticism and growth throughout.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-teal-700">
            <NuxtImg src="/assets/tedtalk-emphasis.png" alt="Regular Linework Simon emphasises this new point." />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Some people consider professionalism as an aesthetic.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group place-content-stretch no-horizon bg-neutral-100">
            <div
                class="grid border border-black rounded-sm aspect-[1.75] w-full grid-cols-5 self-center rotate-2 m-4 bg-white origin-bottom-left shadow transition hover:rotate-0 hover:scale-110 hover:shadow-[0_1.2rem_0.5rem_-1rem_#0006]">
                <div class="col-span-2 relative overflow-hidden m-2 horizon">
                    <NuxtImg src="/assets/tedtalk-neutral.png"
                        class="absolute inset-0 saturate-0 scale-[1.3] translate-y-[2%] origin-top"
                        alt="Linework Simon in a neutral pose in black and white." />
                </div>
                <div
                    class="col-span-3 font-serif grid place-content-center p-4 text-black gap-[.5em] text-sm text-business-card">
                    <p>Simon W</p>
                    <p>Web Developer</p>
                    <hr>
                    <p>simonw.xyz</p>
                </div>
            </div>
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>A suit and tie, clean cut business cards.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-neutral-500">
            <NuxtImg src="/assets/tedtalk-blocky.png"
                alt="Linework Simon delivers this point sincerely, hands clasped across his chest." />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Hopefully that's been less important to you since 2022.</p>
                </blockquote>
                <p class="text-sm-relative">
                    <em>*a tiny tear falls from a micromanager's eye in the audience*</em>
                </p>
            </div>
        </div>

        <figure class="group bg-teal-500">
            <NuxtImg src="/assets/tedtalk-extra-emphasis.png"
                alt="Linework Simon punches the air playfully. As if striking a pose." />
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
            <NuxtImg src="/assets/tedtalk-a-dog.png" alt="Linework Simon the Dog returns. We're not sure why." />
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Thanks... But if you take one thing away today, it's that professionalism is approaching your craft
                        with integrity and following through.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group bg-emerald-700">
            <div class="animate-bounce duration-200">
                <NuxtImg src="/assets/tedtalk-a-dog-bork.png" class=" rotate-45 translate-x-1/2 "
                    alt="Linework Simon the Dog woofs their final acknowledgement." />
            </div>
        </figure>
        <div class="outer">
            <div class="inner">
                <blockquote>
                    <p>Thank you for coming to my TEDTalk.</p>
                </blockquote>
            </div>
        </div>

        <figure class="group overflow-hidden bg-neutral-900">
            <div
                class="absolute left-0 top-1/2 -translate-y-1/2 transition group-[.active]:duration-[5s] group-[.active]:-translate-x-full">
                <NuxtImg src="/assets/tedtalk-a-dog.png" class="brightness-50 animate-small-bounce"
                    alt="Simon the Linework Dog leaves to the left." />
            </div>
        </figure>
        <div class="outer">
            <div class="inner">
                <p class="text-sm-relative">
                    <em>*clapping, whooping, a standing ovation*</em>
                </p>
                <p class="text-sm-relative">
                    <em>*the audience particularly liked the parts where he became a dog*</em>
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes small-bounce {
    to {
        transform: translateY(-1rem);
    }
}

.animate-small-bounce {
    animation: small-bounce var(--animation-duration, 200ms) alternate infinite ease-out;
}

.text-business-card {
    @apply antialiased;
    font-size: clamp(.5rem, 5vw, 3rem);

    @screen sm {
        font-size: clamp(.5rem, 1.2vw, 3rem);
    }
}

.text-sm-relative {
    font-size: .5em;
}

.horizon {
    @apply bg-gradient-to-b from-[transparent_70%] to-[#0009_70%];
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
        @apply horizon;

        &.no-horizon {
            background-image: none;
        }
    }

    .outer {
        min-height: 90vh;
        min-height: 90svh;

        @apply relative z-20;
        @apply grid items-center gap-4;

        .inner {
            @apply bg-black/90 rounded-lg;
            margin: clamp(.2rem, 2%, 1rem);
            padding: clamp(.2rem, 2%, 1rem);
            text-wrap: balance;
        }

        blockquote {
            & p:first-of-type::before {
                content: '“';
            }

            & p:last-of-type::after {
                content: '”';
            }
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
        @apply opacity-0 overflow-clip;

        &.active {
            @apply transition z-10 opacity-100 overflow-visible;
        }
    }
}
</style>
