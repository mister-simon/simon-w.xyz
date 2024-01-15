<script setup>
import { ref, computed } from "vue";
import SibotAvatar from "@/assets/simonwxyz.png";

const w = ref(null);
const h = ref(null);

const wCount = 10;
const hCount = 10;

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
    <img :src="SibotAvatar" alt="" class="invisible" @load="getImgSize">
    <NuxtLink to="/test" class="wrapper group transition-transform hover:scale-200 m-8">
        <img :src="SibotAvatar" alt=""
            class="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity group-hover:delay-700 group-focus:delay-500 duration-500 w-full h-full">
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
                    '--xPosOffset': `${(Math.random() * (wSize / 2)) - ((wSize / 2) / 2)}px`,
                    '--yPosOffset': `${(Math.random() * (hSize / 2)) - ((hSize / 2) / 2)}px`,
                }">
                </div>
            </template>
        </div>
    </NuxtLink>
</template>

<style>
.wrapper {
    --dark: #0a0a0a;
    --red: #ef4444;
    --amber: #fbbf24;
    --mid: #94a3b8;

    --zMulti: 1;
    --partScale: 1;

    @apply grid place-content-center rounded-full w-max h-max place-self-center outline outline-8 relative;

    box-shadow:
        inset 0px -200px 300px var(--dark),
        inset 0px -200px 500px var(--red),
        inset 0px 200px 800px var(--amber),
        inset 0px 200px 800px var(--mid),
        0px 100px 300px var(--dark),
        0px 100px 500px var(--red),
        0px -100px 800px var(--amber),
        0px -100px 800px var(--mid);

    overflow: hidden;
    contain: paint;

    &:hover,
    &:focus {
        --zMulti: 0;
        --partScale: 0;

        .img-grid {
            transform: rotateX(0) rotateY(180deg) scaleX(-1);
        }
    }
}


.img-grid {
    transition: transform ease-in-out 1s;
    transform-style: preserve-3d;
    perspective: 40em;
    transform: rotateX(-10deg) rotateY(180deg) scaleX(-1);
}

.img-part {
    @apply w-[--wSize] h-[--hSize] rounded-full;
    transition: transform ease-in-out 1s, opacity ease-in-out 1s;
    background-image: var(--img);
    background-position: var(--xPos) var(--yPos);

    transform-style: preserve-3d;
    transform:
        translateX(calc(var(--xPosOffset) * var(--partScale))) translateY(calc(var(--yPosOffset) * var(--partScale))) translateZ(calc(var(--zPos) * var(--zMulti))) scale(calc(var(--zMulti) + 1));
    image-rendering: pixelated;
}
</style>