<script setup>
useHead({
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    },
    {
      rel: "manifest",
      href: "/site.webmanifest"
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5"
    }
  ],
  meta: [
    {
      name: "apple-mobile-web-app-title",
      content: "simonw.xyz"
    },
    {
      name: "application-name",
      content: "simonw.xyz"
    },
    {
      name: "msapplication-TileColor",
      content: "#2b5797"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    }
  ]
})
</script>
<template>
  <Head>
    <Title>Welcome! | SimonW.XYZ</Title>
  </Head>
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
      <li>
        <NuxtLink to="/totally-pro">A Professional</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
body {
  @apply bg-black text-neutral-100;
}
</style>