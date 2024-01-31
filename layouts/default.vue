<template>
    <Body class="bg-black text-neutral-100 grid min-h-svh" />
    <div class="grid h-full">

        <slot class="poopy" />
    </div>
</template>

<style>
body {
    &>* {
        grid-area: 1 / 1;
    }

    &> :first-child {
        z-index: 10;
    }
}
</style>
