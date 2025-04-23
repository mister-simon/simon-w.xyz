<script setup>
</script>
<template>

    <Head>
        <Title>Testing Things and Stuff | SimonW.XYZ</Title>
    </Head>

    <nav class="fixed top-0 z-50 font-script motion-safe:transition-transform hover:scale-150 font-bold">
        <NuxtLink to="/" class="text-5xl px-4 inline-grid place-content-center" aria-label="Back">
            &lt;&mdash;
        </NuxtLink>
    </nav>

    <section class="bg-hex text-neutral-100 isolate container mx-auto grid place-content-center" ref="section">
        <h1 class="text-9xl">This is a title</h1>
    </section>
</template>

<style scoped>
/* https://css-pattern.com/honeycomb/ */
.bg-hex {
    --s: 100px;
    --c1: #536549;
    --c2: #5b2406;

    /* This tiles weirdly because of floating points and such I think */
    --c: #0000, var(--c1) .5deg 119.5deg, #0000 120deg;

    --g1: conic-gradient(from 60deg at 56.25% calc(425%/6), var(--c));
    --g2: conic-gradient(from 180deg at 43.75% calc(425%/6), var(--c));
    --g3: conic-gradient(from -60deg at 50% calc(175%/12), var(--c));

    background:
        var(--g1), var(--g1) var(--s) calc(1.73*var(--s)),
        var(--g2), var(--g2) var(--s) calc(1.73*var(--s)),
        var(--g3) var(--s) 0, var(--g3) 0 calc(1.73*var(--s)) var(--c2);
    background-size: calc(2*var(--s)) calc(3.46*var(--s));
}

/* via https://css-shape.com/hexagon/ */
h1 {
    position: relative;
    isolation: isolate;
    --b: .1lh;
}

h1:hover {
    --b: calc(1.74lh/2);
}

h1::before {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    height: 1.5lh;

    rotate: 30deg;
    translate: -1lh -.25lh;

    aspect-ratio: 1/cos(30deg);
    clip-path:
        polygon(0 50%, 50% -50%, 100% 50%, 50% 150%, 0 50%,
            var(--b) 50%,
            calc(25% + var(--b)*cos(60deg)) calc(100% - var(--b)*sin(60deg)),
            calc(75% - var(--b)*cos(60deg)) calc(100% - var(--b)*sin(60deg)),
            calc(100% - var(--b)) 50%,
            calc(75% - var(--b)*cos(60deg)) calc(var(--b)*sin(60deg)),
            calc(25% + var(--b)*cos(60deg)) calc(var(--b)*sin(60deg)),
            var(--b) 50%);
    mask: linear-gradient(to right, #000, #0000);
    background: #3B8686;
}
</style>
