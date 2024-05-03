<script setup>
import { ref, reactive, computed, watch } from "vue";

let gridW = ref(3);
let gridH = ref(3);
let cells = reactive({});

// 0 = O. 1 = X.
let player = ref(0);
let winner = ref(null);
let game = ref("playing");

watch(gridW, reset);
watch(gridH, reset);

function reset() {
    player.value = 0;
    winner.value = null;

    cells = reactive({});

    for (let y = 0; y < gridH.value; y++) {
        cells[y] = {};
        for (let x = 0; x < gridW.value; x++) {
            cells[y][x] = { state: null, x, y, highlight: false };
        }
    }

    game.value = "playing";
};

function select(cell, x, y) {
    if (cell.state !== null) {
        return;
    }

    cell.state = player.value;

    if (evaluateBoard()) {
        winner.value = player;

        return endGame();
    }

    player.value = player.value === 0 ? 1 : 0;
}


function* evaluableCells() {
    // Evaluate horizontal
    for (let y = 0; y < gridH.value; y++) {
        yield Object.values(cells[y]);
    }

    // Evaluate vertical
    for (let x = 0; x < gridW.value; x++) {
        yield Object.values(cells).map(row => row[x]);
    }

    // Traverse across, evaluating diagonals
    const diagArr = Array.from(Array(gridMin.value));

    for (let x = 0; x <= gridW.value - gridMin.value; x++) {
        // Left to right
        yield diagArr.map(
            (_, i) => (cells[i][x + i])
        );

        // Right to left
        yield diagArr.map(
            (_, i) => (cells[i][(gridW.value - x) - 1 - i])
        );
    }

    // Traverse down
    for (let y = 0; y <= gridH.value - gridMin.value; y++) {
        // Top to bottom
        yield diagArr.map(
            (_, i) => (cells[y + i][i])
        );

        // Bottom to top
        yield diagArr.map(
            (_, i) => (cells[(gridH.value - y) - 1 - i][i])
        );
    }
}

function evaluateBoard() {
    const cellSets = evaluableCells();

    // Evaluate regular win conditions
    for (const cellSet of cellSets) {
        if (evaluateCells(cellSet)) {
            cellSet.forEach((cell) => cell.highlight = true);

            return true;
        }
    }

    // Evaluate draw
    const draw = Object.values(cells)
        .flatMap((row) => Object.values(row))
        .every(cell => cell.state !== null);

    if (draw) {
        return true;
    }

    // Keep playing
    return false;
}

/**
 * @param any[] row
 * 
 * @returns bool
 */
function evaluateCells(cells) {
    if (cells.some((cell) => cell === undefined)) {
        return false;
    }

    if (cells.some((cell) => cell.state === null)) {
        return false;
    }

    const first = cells[0];

    return cells.every((cell) => cell.state === first.state);
}

function endGame() {
    game.value = "end";
}

function playerIcon(player) {
    if (player === null) {
        return;
    }

    return player ? '❌' : '⭕';
}

const currentPlayerIcon = computed(() => playerIcon(player.value));

const gridMin = computed(() => Math.min(gridW.value, gridH.value));

const gridStyle = computed(
    () => ({
        '--ttt-cols': `repeat(${gridW.value}, 1fr)`,
        '--ttt-rows': `repeat(${gridH.value}, 1fr)`
    })
);

reset();
</script>

<template>
    <div>
        <div class="flex gap-4 justify-center">
            <input type="number" name="width" id="width" placeholder="width" class="pl-4 w-[5ch] rounded text-black"
                v-model="gridW">
            x
            <input type="number" name="height" id="height" placeholder="height" class="pl-4 w-[5ch] rounded text-black"
                v-model="gridH">
        </div>
        <div class="relative grid grid-cols-[--ttt-cols] grid-rows-[--ttt-rows] gap-4 mx-auto p-4" :style="gridStyle">
            <template v-for="(row, y) in cells">
                <template v-for="(cell, x) in row">
                    <button class="aspect-square text-center bg-neutral-500 rounded transition-transform"
                        @click="select(cell, x, y)"
                        :class="{ 'border-green-500 border-4 bg-green-700 scale-110': cell.highlight }">
                        {{ playerIcon(cell.state) }}
                    </button>
                </template>
            </template>

            <div class="absolute inset-0 bg-slate-500/50 rounded grid place-content-center" v-show="game === 'end'">
                <button @click="reset"
                    class="bg-green-500/80 border-green-200 border-4 aspect-square rounded-lg text-xl text-center grid content-center p-4 gap-4 hover:scale-125 transition-transform">
                    <span class="text-2xl">{{ currentPlayerIcon }}</span>
                    <span class="text-white">Play Again!</span>
                </button>
            </div>
        </div>
    </div>
</template>