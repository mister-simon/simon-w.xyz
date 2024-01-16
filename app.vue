<template>
  <div class="grid h-full layout">
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Permanent+Marker&display=swap');

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
