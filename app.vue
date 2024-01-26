<template>
  <div class="grid h-full">
    <NuxtPage />
  </div>
</template>

<style>
body {
  @apply bg-black text-neutral-100;
  @apply grid min-h-screen;
  min-height: 100svh;

  &>* {
    grid-area: 1 / 1;
  }

  &> :first-child {
    z-index: 10;
  }
}
</style>
