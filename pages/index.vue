<script setup>
useHead({
  link: [
    {
      rel: 'icon',
      href: 'favicon.png'
    },
    {
      rel: 'icon',
      href: 'favicon.svg',
      type: 'image/svg+xml'
    }
  ]
})
</script>
<template>
  <div class="place-self-center">
    <h1 class="text-3xl">What are you looking for?</h1>
    <ul>
      <!-- <li>
        <NuxtLink to="/is-a-salmon">Simon W</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/is-smrt">Knowledge</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/makes-incredible-designs">An Incredible Designer</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/totally-pro">A Professional</NuxtLink>
      </li> -->
    </ul>
  </div>
</template>

<style>
body {
  @apply bg-black text-neutral-100;
}
</style>