<script setup>
import bass from '/assets/drum-machine/bass.mp3';
const playable = ref(null);
const currentTime = ref(0);
const duration = ref(null);
let audio;

onMounted(() => {
    audio = new Audio(bass);
    audio.addEventListener('canplaythrough', () => (playable.value = true));
    audio.addEventListener('loadedmetadata', () => (duration.value = audio.duration));
    audio.addEventListener('durationchange', () => (duration.value = audio.duration));
    audio.addEventListener('timeupdate', () => (currentTime.value = audio.currentTime));
});

const playSound = () => {
    playable.value
        ? audio.play()
        : null;
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