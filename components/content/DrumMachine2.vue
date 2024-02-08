<script setup>
const tracks = ref([
    {
        name: "HiHat",
        steps: 24,
    },
    {
        name: "Snare",
        steps: 8,
    },
    {
        name: "Kick",
        steps: 4,
    }
]);
const maxSteps = tracks.value.reduce((acc, cur) => Math.max(acc, cur.steps), 0);
</script>
<template>
    <div class="drum-machine">
        <div class="global-controls">
            <div class="play-pause">
                <button>Play/Pause</button>
            </div>
            <div class="mute-gain">
                <button>Mute/Unmute</button>
                <input type="range" name="master_volume" id="master_volume" min="0" max="1" value="1">
            </div>
        </div>

        <div class="step-pane" :style="{ '--max-steps': maxSteps }">
            <div class="track-header"></div>
            <div class="step-measure">
                <div class="step" v-for=" i  of  maxSteps "></div>
            </div>

            <!-- Tracks -->
            <template v-for=" { name, steps }  of  tracks ">
                <div class="track-header">
                    <span>{{ name }}</span>
                    <button aria-label="mute/unmute">M</button>
                </div>
                <div class="track-inner">
                    <div class="step" v-for=" i  of  steps ">
                        <span class="hidden">
                            {{ ((i - 1) % 16) + 1 }}
                        </span>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<style scoped>
.drum-machine {
    @apply border-8 border-slate-400;
}

.global-controls {
    @apply flex flex-row flex-wrap gap-2 px-2 bg-slate-800 border-b-8 border-slate-400;

    .mute-gain input {
        @apply ml-2;
    }
}

.step-pane {
    @apply bg-slate-950 grid overflow-auto pb-10;
    scrollbar-gutter: stable;

    scrollbar-color: theme("colors.slate.400") theme("colors.slate.950");
    scrollbar-width: thin;

    grid-template-columns:
        [track-start] auto [track-end track-inner-start] repeat(var(--max-steps), 1fr) [track-inner-end];

    .step-measure {
        @apply grid gap-2 grid-cols-subgrid h-4 bg-slate-700 justify-start;
        grid-column: track-inner;

        .step {
            @apply w-2 bg-slate-900 mx-auto;
        }
    }

    .track-header {
        @apply flex flex-row justify-between items-center sticky left-0 bg-slate-950 gap-2 border-r;
        grid-column: track;
    }

    .track-inner {
        @apply grid grid-flow-col grid-cols-subgrid gap-2 place-content-center;
        grid-column: track-inner;

        .step {
            @apply size-6 bg-slate-700 text-center rounded-full mx-auto my-2;
        }
    }

    .track-header,
    .track-inner,
    .step-measure {
        @apply border-b border-slate-700 px-2;
    }
}
</style>