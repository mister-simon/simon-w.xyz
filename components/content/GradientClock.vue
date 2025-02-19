<script setup>
let time = ref({ h:0, m:0, s:0, pm: false });
let start = ref(new Date);

let frame;
let lastTime = 0;
const frameStep = () => {
    frame = requestAnimationFrame(frameStep);

    const now = new Date();
    
    if(now - lastTime < 1000) {
        return;
    }

    lastTime = now;

    const diffS = ((now - start) / 1000);
    const diffM = diffS / 60;
    const diffH = diffM / 60;

    const pm = now.getHours() >= 12;
    const h = start.getHours() / 12 + (diffH / 12);
    const m = start.getMinutes() / 60 + (diffM / 60);
    const s = (start.getSeconds() / 60) + (diffS / 60);

    time.value = { h, m, s, pm };
}

onMounted(() => {
    start = new Date();
    frameStep();
});

onBeforeUnmount(() => {
    cancelAnimationFrame(frame);
});
</script>

<template>
    <div
        class="gradient-clock"
        :style="{
            '--h': time.h,
            '--m': time.m,
            '--s': time.s,
            '--pm': time.pm ? -90 : 0,
        }"></div>
</template>

<style>
@property --_h {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}
@property --_m {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}
@property --_s {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}
</style>

<style scoped>
.gradient-clock {
    --_h: calc(var(--h) * 1turn);
    --_m: calc(var(--m) * 1turn);
    --_s: calc(var(--s) * 1turn);
    
    --h-col: oklch(0.511 0.262 calc(var(--pm) + 276.966) / .5);
    --m-col: oklch(0.541 0.281 calc(var(--pm) + 293.009) / .7);
    --s-col: oklch(0.558 0.288 calc(var(--pm) + 302.321) / .9);
    
    background-image:
        conic-gradient(from var(--_h), transparent 0%, var(--h-col) 99.9%, transparent),
        conic-gradient(from var(--_m), transparent 0%, var(--m-col) 99.9%, transparent),
        conic-gradient(from var(--_s), transparent 0%, var(--s-col) 99.9%, transparent),
        radial-gradient(closest-side, transparent 50%, light-dark(white, black) 50.5%, light-dark(black, white));
    
    mask-image: radial-gradient(closest-side, transparent 50%, black 50.5%, black 99.5%, transparent);

    transition:
        --_h 1s ease-in-out,
        --_m 1s ease-in-out,
        --_s 500ms ease-in;

    margin-inline: auto;
    width: 100%;
    aspect-ratio: 1;
}
</style>