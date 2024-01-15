<template>
  <NuxtPage />
</template>

<style>
body {
  min-height: 100vh;
  min-height: 100svh;
  display: grid;

  &>* {
    grid-area: 1 / 1;
  }

  &>:first-child {
    z-index: 10;
  }
}
</style>