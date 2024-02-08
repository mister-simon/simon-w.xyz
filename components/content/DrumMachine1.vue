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

        <div class="step-pane">
            <div class="step-measure">
                <div class="step" v-for="i of 64"></div>
            </div>

            <!-- Tracks -->
            <div class="track-header">
                <span>HiHat</span>
                <button aria-label="mute/unmute">M</button>
            </div>
            <div class="track-inner">
                <div class="step" v-for="i of 64"></div>
            </div>
            <div class="track-header">
                <span>Snare</span>
                <button aria-label="mute/unmute">M</button>
            </div>
            <div class="track-inner">
                <div class="step" v-for="i of 64"></div>
            </div>
            <div class="track-header">
                <span>Kick</span>
                <button aria-label="mute/unmute">M</button>
            </div>
            <div class="track-inner">
                <div class="step" v-for="i of 64"></div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.drum-machine {
    @apply border-8 border-slate-400;
}

.global-controls {
    @apply flex flex-row flex-wrap gap-4 px-2 bg-slate-800 border-b-8 border-slate-400;

    .mute-gain input {
        @apply ml-2;
    }
}

.step-pane {
    @apply bg-slate-950 grid overflow-auto gap-2;

    grid-template-columns:
        [track-start] auto [track-end track-inner-start] auto [track-inner-end];

    .step-measure {
        @apply grid grid-flow-col gap-4 h-4 bg-slate-700;
        grid-column: track-inner;

        .step {
            @apply w-2 bg-slate-900 mx-auto;
        }
    }

    .track-header {
        @apply flex flex-row justify-between sticky left-0 bg-slate-950 gap-4;
        grid-column: track;
    }

    .track-inner {
        @apply grid grid-flow-col gap-4;
        grid-column: track-inner;

        .step {
            @apply size-9 bg-slate-700 text-center rounded-full;
        }
    }
}
</style>