<script setup>
import { ref, computed } from "vue";
import SibotAvatar from "@/assets/simonwxyz.png";

const w = ref(null);
const h = ref(null);

const wCount = 50;
const hCount = 50;

const wSize = computed(() => w.value / wCount);
const hSize = computed(() => h.value / hCount);

const getImgSize = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    e.target.remove();
    w.value = width;
    h.value = height;
}
</script>

<template>
    <img :src="SibotAvatar" alt="" class="invisible" :onload="getImgSize">
    <div class="wrapper group m-8">
        <img :src="SibotAvatar" alt=""
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity group-hover:delay-700 duration-500 w-full h-full">
        <div class="img-grid grid grid-cols-[--wCols] grid-rows-[--hCols] w-max h-max place-self-center" :style="{
            '--wCols': `repeat(${wCount},1fr)`,
            '--hCols': `repeat(${hCount},1fr)`,
            '--wSize': `${wSize}px`,
            '--hSize': `${hSize}px`,
            '--img': `url(${SibotAvatar})`,
        }" v-if="w !== null && h !== null">
            <template v-for="y in hCount">
                <div v-for="x in wCount" :key="`${x}-${y}`" class="img-part" :style="{
                    '--x': x,
                    '--y': y,
                    '--xPos': `-${(x - 1) * wSize}px`,
                    '--yPos': `-${(y - 1) * hSize}px`,
                    '--zPos': `calc(((${Math.random()} * 60em) - 30em))`,
                }">
                </div>
            </template>
        </div>
    </div>
</template>

<style>
body {
    @apply bg-neutral-900;
}

.wrapper {
    @apply grid place-content-center rounded-full w-max h-max place-self-center outline outline-8 relative;

    box-shadow:
        inset 0px -200px 300px theme(colors.neutral.950),
        inset 0px -200px 500px theme(colors.red.500),
        inset 0px 200px 800px theme(colors.amber.400),
        inset 0px 200px 800px theme(colors.slate.400),
        0px 100px 300px theme(colors.neutral.950),
        0px 100px 500px theme(colors.red.500),
        0px -100px 800px theme(colors.amber.400),
        0px -100px 800px theme(colors.slate.400);

    overflow: hidden;
    contain: paint;

    --zMulti: 1;
    --partScale: 4;

    &:hover {
        --zMulti: 0;
        --partScale: 1;

        .img-grid {
            transform: rotateX(0) rotateY(0) scaleX(1);
        }
    }
}


.img-grid {
    transition: transform ease-in-out 1s;
    transform-style: preserve-3d;
    perspective: 40em;
    animation: gridAnimation infinite 2s linear;
    /* transform: rotateX(0deg) rotateY(180deg) scaleX(-1); */
}

.img-part {
    @apply w-[--wSize] h-[--hSize];
    transition: transform ease-in-out 1s;
    background-image: var(--img);
    background-position: var(--xPos) var(--yPos);

    transform-style: preserve-3d;
    transform: translateZ(calc(var(--zPos) * var(--zMulti))) scale(var(--partScale));
    image-rendering: pixelated;
}
</style>