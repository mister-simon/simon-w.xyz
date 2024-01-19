<script setup>
const curDate = new Date;
const section = ref(null);

let animationFrame = null;
const cursorPos = ref({ x: 0, y: 0 });

const cursors = ref(
    Array.from(
        { length: 10 },
        () => ({ x: 0, y: 0 })
    )
);

const cursorMove = (e) => {
    cursorPos.value.x = e.pageX - section.value.offsetLeft;
    cursorPos.value.y = e.pageY - section.value.offsetTop;
}

const heartStep = () => {
    animationFrame = requestAnimationFrame(heartStep);
    cursors.value.forEach(
        ({ x, y }, i) => {
            if (i === 0) {
                cursors.value[i].x = cursorPos.value.x;
                cursors.value[i].y = cursorPos.value.y;
                return;
            }

            const prev = cursors.value[i - 1];

            cursors.value[i].x = x + ((prev.x - x) / ((i * 2) + 1)) + (i / 5);
            cursors.value[i].y = y + ((prev.y - y) / ((i * 2) + 1)) + (i / 2);
        }
    );
};

onMounted(() => heartStep());
onUnmounted(() => cancelAnimationFrame(animationFrame));
</script>

<template>
    <section class="md:grid relative overflow-hidden cursor-none" @mousemove.passive="cursorMove" ref="section">
        <template v-for="(cursor, i) of cursors">
            <div class="heart-cursor absolute z-50 leading-none left-[--cursor-x] top-[--cursor-y] pointer-events-none -translate-x-1/2 -translate-y-1/2 text-[calc(var(--text-size))] motion-reduce:text-4xl"
                :class="{ 'motion-reduce:hidden': i !== 1 }" :style="{
                    '--cursor-x': `${cursor.x}px`,
                    '--cursor-y': `${cursor.y}px`,
                    '--text-size': `${i / 2}rem`,
                }">💖</div>
        </template>
        <aside class="pt-20 space-y-10 pb-8 border-double md:border-r-4 border-red-400 px-4 group">
            <h2 class="text-red-600">Welcome to my Cool Website</h2>
            <p>This is a site all bout <strong class="font-light text-3xl font-mono">me</strong> so if u aren't mi frined
                then dnt' scroll any further!</p>
            <div
                class="overflow-hidden motion-reduce:hidden group-hover:scale-x-150 motion-safe:transition-transform group">
                <NuxtImg src="/assets/spinning-chair-min.gif"
                    class="rounded-full aspect-square mx-auto border-[1rem] motion-safe:animate-spin [--animate-duration:60s]"
                    quality="10" width="300" />
            </div>
            <blockquote
                class="font-sans font-extralight text-md border-4 border-teal-600 bg-slate-900 text-neutral-200 p-3">
                <p>
                    The key to incredible design is to always <strong>be learning</strong>. Always <strong>trying new
                        things</strong>. Never settling. Never looking back. Never <strong>learning from your past
                        mistakes</strong>. Always <strong>learning from the future</strong>. <strong>Using time
                        travel</strong>, constantly. Failing to see the dangers <strong>until it's too late</strong>... It's
                    <strong>too late</strong>. It's too late. What can I do now... That's <strong>the secret of great
                        design</strong> :3.
                </p>
                <cite class="font-semibold font-script">
                    - Simon, <span class="tracking-widest">{{ String(curDate.getDate()).padStart(2, '0') }}/{{
                        String(curDate.getMonth()
                            +
                            1).padStart(2, '0') }}/{{ curDate.getFullYear() + 1000 }}</span></cite>
            </blockquote>
        </aside>
        <article class="bg-neutral-400">
            <header class="bg-emerald-800 p-8 border-b-8 border-emerald-200 border-ridge">
                <h2 class="text-right text-4xl max-w-prose">
                    How Did You Get <em class="text-emerald-300 font-semibold">So Skilled</em> At Making Websites Look So
                    Good?
                </h2>
            </header>
            <div class="md:px-6 py-8 space-y-6">
                <NuxtImg src="/assets/mockup-skillz.jpg"
                    class="mx-auto rounded-3xl shadow-thicc shadow-green-700 md:float-end md:max-w-[35%] md:ml-10 md:mb-8 hover:scale-150 origin-right motion-safe:transition-transform"
                    quality="10" width="600"
                    alt="Simon points at his computer screen, which shows a paint mockup of a very basic two column site layout with some childish looking filler text. The left column says My Cool Site, followed by a box with a smily face, then a warning sign. The main column on the right says About Me - They call me the web master because I mastered the web. Everything is misspelled, pixelated, and miscoloured with excessive jpeg compression." />
                <div class="text-6xl max-w-prose text-justify">
                    <p class="font-serif text-neutral-900 horrible-text-gradient">
                        I do my best work in collaboration with
                        <NuxtImg src="/assets/designers.png" alt="designers"
                            class="inline-block max-w-[40%] motion-safe:hover:invert motion-safe:transition motion-safe:duration-1000 hover:rotate-12" />
                        when developing a front-end.
                    </p>
                </div>
                <p class="text-2xl text-red-800 border-8 border-dashed p-4 border-blue-800">
                    I can quickly break down a design / layout into HTML and CSS. When working from a design, it's important
                    to be able to visualise the <span class="font-script-thick">flow of content</span> before you start
                    styling
                    <span class="font-mono tracking-tighter">the layout</span>.
                </p>
                <div class="bg-black p-4 md:p-8 md:mr-10">
                    <p class="text-6xl font-bold font-mono tracking-tighter mt-auto text-bg-raku">
                        I have also often worked with <span
                            class="underline text-xl md:text-8xl text-neutral-700/80 font-sans">form</span> following <span
                            class="underline text-8xl text-neutral-700/80 font-serif">function</span>. Using the business
                        requirements of a project to drive it's design forward, iterating on the design as features are
                        implemented over time. </p>
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped>
section {
    @apply bg-black border-y-8;
    grid-template-columns: min(40%, 400px) auto;

    transition: grid-template-columns 200ms ease-in-out;

    @media (prefers-reduced-motion: no-preference) {
        &:has(aside:hover) {
            grid-template-columns: min(50%, 450px) auto;
        }

        &:has(article:hover) {
            grid-template-columns: min(35%, 350px) auto;
        }
    }
}

aside {
    @apply bg-green-500 text-black font-extrabold text-xl font-serif text-center;
    @apply bg-gradient-to-b from-green-500 to-emerald-900;

    @media (prefers-reduced-motion: no-preference) {

        &:hover,
        &:focus-within {
            background-position-y: 100%;
        }
    }
}

blockquote {
    & p:first-of-type::before {
        content: '“';
    }

    & p:last-of-type::after {
        content: '”';
    }
}

.horrible-text-gradient {
    @apply bg-gradient-to-r from-red-200 to-violet-300 inline;
    box-decoration-break: clone;
}

.shadow-thicc {
    box-shadow: -1rem 1rem 0rem var(--tw-shadow-color);
}

.border-ridge {
    border-style: ridge;
}

@keyframes sliding-bg {
    to {
        background-position-x: 100%;
    }
}

.text-bg-raku {
    @media (prefers-reduced-motion: no-preference) {
        animation: sliding-bg linear 10s infinite;
    }

    background-image: url('/assets/raku-pot-texture-min.jpg');
    background-size: 50%;
    background-clip: text;
    color: #FFF2;
    filter: drop-shadow(2px 2px 0px green) brightness(2);
}
</style>