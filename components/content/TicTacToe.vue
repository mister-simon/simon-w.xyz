<script setup>
import { ref, reactive, computed, onMounted } from "vue";

let gridW = 3;
let gridH = 5;
let cells = reactive({});

// 0 = O. 1 = X.
let player = ref(0);
let winner = ref(null);
let game = ref("playing");

function reset() {
    player.value = 0;
    winner.value = null;

    cells = reactive({});

    for (let y = 0; y < gridH; y++) {
        cells[y] = {};
        for (let x = 0; x < gridW; x++) {
            cells[y][x] = { state: null, x, y };
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

function getCell(x, y) {
    return { x, y };

    const row = cells[y];

    if (row) {
        return row[x] ?? null;
    }

    return null;
}

function evaluateBoard() {
    // Evaluate horizontal
    for (let y = 0; y < gridW; y++) {
        const row = Object.values(cells[y]);

        if (evaluateCells(row)) {
            setWinner();

            return true;
        }
    }

    // Evaluate vertical
    for (let x = 0; x < gridH; x++) {
        const col = Object.values(cells)
            .map(row => row[x]);

        if (evaluateCells(col)) {
            setWinner();

            return true;
        }
    }

    const gridX = Array.from(Array(gridW)).map((_, i) => ({ x: i, y: 0 }));
    const gridY = Array.from(Array(gridH)).map((_, i) => ({ x: 0, y: i }));

    const diagLtrX = gridX.map(
        ({ x: xx, y: xy }, xi) => gridY.map(({ x: yx, y: yy }, yi) => (getCell(yi, xx + yi)))
    )

    const diagLtrY = gridY.map(
        ({ x: yx, y: yy }, yi) => gridX.map(({ x: xx, y: xy }, xi) => (getCell(yy + xi, xi)))
    )

    const diagRtlX = gridX.map(
        ({ x: xx, y: xy }, xi) => gridY.map(({ x: yx, y: yy }, yi) => (getCell(yi, xx - yi)))
    )

    const diagRtlY = gridY.map(
        ({ x: yx, y: yy }, yi) => gridX.map(({ x: xx, y: xy }, xi) => (getCell(yy - xi, xi)))
    )

    console.log({
        diagLtrX,
        diagRtlX,
        diagLtrY,
        diagRtlY
    });

    // console.log({ gridX, gridY });


    /*     // Evaluate diags along x
        const firstRow = Object.values(cells[0]);
        const firstCol = Object.values(cells).map(row => row[0]);
    
        for (const cell of firstRow) {
            const diagRtl = Object.values(cells).map((row, i) => row[i + cell.x]);
            const diagLtr = Object.values(cells).map((row, i) => row[((gridW - 1) - i) + cell.x]);
    
            if (evaluateCells(diagRtl) || evaluateCells(diagLtr)) {
                return true;
            }
        }
    
        // Evaluate diags along x
        for (const cell of firstRow) {
            const diagLtr = firstRow
                .map(
                    ({ x, y }, i) => ({
                        x: x + cell.x,
                        y: y + i
                    })
                );
    
            const diagRtl = firstRow
                .reverse()
                .map(
                    ({ x, y }, i) => ({
                        x: x - cell.x,
                        y: y + i
                    })
                );
    
            // console.log(diagRtl);
        }
    
        // Evaluate diags along y
    
        for (const cell of firstCol) {
            const diagLtr = firstCol
                .map(
                    ({ x, y }, i) => ({
                        x: x + i,
                        y: y + cell.y
                    })
                );
    
            const diagRtl = firstCol
                .reverse()
                .map(
                    ({ x, y }, i) => ({
                        x: x + i,
                        y: y - cell.y
                    })
                );
    
            // console.log(diagRtl);
        } */

    // Evaluate draw
    const flatCells = Object.values(cells)
        .flatMap((row) => Object.values(row));

    const draw = flatCells.every(cell => cell.state !== null);

    if (draw) {
        return true;
    }

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

function setWinner() {
    winner.value = player.value;
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

const shortSide = computed(() => Math.min(gridW, gridH));

const gridStyle = computed(
    () => ({
        '--ttt-cols': `repeat(${gridW}, 1fr)`,
        '--ttt-rows': `repeat(${gridH}, 1fr)`
    })
);

reset();
</script>

<template>
    <div class="">
        <div class="relative grid grid-cols-[--ttt-cols] grid-rows-[--ttt-rows] gap-4 max-w-sm mx-auto"
            :style="gridStyle">
            <template v-for="(row, y) in cells">
                <template v-for="(cell, x) in row">
                    <button class="aspect-square text-center bg-neutral-500 rounded" @click="select(cell, x, y)">
                        {{ playerIcon(cell.state) }} {{ x }},{{ y }}
                    </button>
                </template>
            </template>

            <div class="absolute inset-0 bg-slate-500/50 rounded grid place-content-center" v-show="game === 'end'">
                <button @click="reset">Play Again!</button>
            </div>
        </div>
    </div>
</template>

<style></style>
