<template>
    <section class="md:grid">
        <aside class="pt-20 space-y-10 pb-8">
            <h2 class="text-red-600">Welcome to my Cool Website</h2>
            <p>This is a site all bout <strong class="font-light text-3xl font-mono">me</strong> so if u aren't mi frined
                then dnt' scroll any further!</p>
            <NuxtImg src="/assets/spinning-chair-min.gif" class="rounded-full aspect-square mx-auto border-[1rem]"
                quality="10" width="300" />
            <blockquote
                class="font-sans font-extralight text-md border-4 border-teal-600 bg-slate-900 text-neutral-200 p-3 mx-4">
                <p>The key to incredible design is to always <strong>be
                        learning</strong>. Always <strong>trying new things</strong>. Never settling. Never looking back.
                    Never
                    <strong>learning from your past mistakes</strong>. Always <strong>learning from the future</strong>.
                    <strong>Using time travel</strong>, constantly. Failing to see the dangers <strong>until it's too
                        late</strong>... It's <strong>too late</strong>. It's too late. What can I do now...That's
                    <strong>the
                        secret of great design</strong> :3.
                </p>
                <cite>- Simon</cite>
            </blockquote>
        </aside>
        <article class="bg-neutral-400 space-y-6 px-6 py-8">
            <h2 class="text-right text-4xl mb-8 max-w-prose">
                How Did You Get <em class="text-emerald-300 font-semibold">So Skilled</em> At Making Websites Look So Good?
            </h2>
            <NuxtImg src="/assets/mockup-skillz.jpg"
                class="mx-auto rounded-3xl shadow-thicc shadow-green-700 md:float-end md:max-w-[35%] md:ml-4 md:mb-4"
                quality="10" width="600"
                alt="Simon points at his computer screen, which shows a paint mockup of a very basic two column site layout with some childish looking filler text. The left column says My Cool Site, followed by a box with a smily face, then a warning sign. The main column on the right says About Me - They call me the web master because I mastered the web. Everything is misspelled, pixelated, and miscoloured with excessive jpeg compression." />
            <p class="text-xl font-serif text-neutral-900 max-w-prose text-center">
                I do my best work in collaboration with
                <NuxtImg src="/assets/designers.png" alt="designers" class="inline-block" />
                when developing a front-end.
            </p>
            <p class="text-2xl text-red-800">
                I can quickly break down a design / layout into HTML and CSS.
            </p>
            <p class="text-6xl font-bold text-white font-mono tracking-tighter mt-auto text-bg-raku">
                I have also often often worked with <span class="underline text-8xl text-black font-sans">form</span>
                following <span class="underline text-8xl text-black font-serif">function</span>.
                Using the business requirements of a project
                drive it's design forward, iterating on the design as features are implemented over time.
            </p>
        </article>
    </section>
</template>

<style scoped>
section {
    @apply bg-black;
    grid-template-columns: min(40%, 400px) auto;
}

aside {
    @apply bg-green-500 text-black font-extrabold text-xl font-serif text-center;
}

blockquote {
    & p:first-of-type::before {
        content: '“';
    }

    & p:last-of-type::after {
        content: '”';
    }
}

.shadow-thicc {
    box-shadow: -1rem 1rem 0rem var(--tw-shadow-color);
}

.text-bg-raku {
    background-image: url('/_ipx/w_600&q_10/assets/raku-pot-texture.jpg');
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0px 0px 1px #000) brightness(2);
}
</style>