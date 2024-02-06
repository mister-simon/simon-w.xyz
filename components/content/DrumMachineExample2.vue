<script setup>
import bass from '/assets/drum-machine/bass.mp3';
const playable = ref(null);
const currentTime = ref(0);
const duration = ref(null);
const audioElement = ref(null);

let audio;
let playBetween = [0.25, 0.7];
let timeoutDuration = (playBetween[1] - playBetween[0]) * 1000;
let playTimeout;

let frame;
const frameStep = () => {
    frame = requestAnimationFrame(frameStep);
    currentTime.value = audio.currentTime;
}

const listeners = {
    'canplaythrough': () => (playable.value = true) && frameStep(),
    'loadedmetadata': () => (duration.value = audio.duration),
    'durationchange': () => (duration.value = audio.duration),
    'timeupdate': () => (currentTime.value = audio.currentTime),
}

onMounted(() => {
    audio = new Audio(bass);
    currentTime.value = playBetween[0];

    for (const key in listeners) {
        const listener = listeners[key];
        audio.addEventListener(key, listener);
    }
});

onBeforeUnmount(() => {
    cancelAnimationFrame(frame);

    for (const key in listeners) {
        const listener = listeners[key];
        audio.removeEventListener(key, listener);
    }
});

const playSound = () => {
    if (!playable.value) return;

    clearTimeout(playTimeout);

    audio.currentTime = playBetween[0];
    playTimeout = setTimeout(
        () => (audio.pause() && (audio.currentTime = playBetween[1])),
        timeoutDuration
    );

    audio.play();
};
</script>

<template>
    <div class="flex not-prose items-center gap-4">
        <button @click="playSound" class="border rounded-lg px-3 py-2 hover:bg-neutral-400 hover:text-neutral-900"
            :disabled="!playable">
            Play Sound
        </button>
        <p v-show="!playable">{{ 'loading' }}</p>
        <p v-show="playable" class="rounded p-2 truncate text-center border-b-4 grow bg-playback-percentage text-white"
            :style="{ '--playback-percentage': `${(currentTime / duration) * 100}%` }">
            {{ currentTime }} / {{ duration }}
        </p>
    </div>
</template>

<style scoped>
.bg-playback-percentage {
    background-image: linear-gradient(to right, theme("colors.neutral.500") var(--playback-percentage), transparent var(--playback-percentage));
}
</style>