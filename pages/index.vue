<template>

  <Head>
    <Title>Welcome! - SimonW.XYZ</Title>
  </Head>

  <div class="place-self-center relative p-10">
    <div class="relative z-10 prose prose-invert">
      <h1>simonw.xyz</h1>
      <p class="lead"><strong>Simon W</strong> is a <strong>Web Developer</strong> and has been since he was about 14
        years old... About <em>{{ (new Date).getFullYear() - 2007 }} years ago</em>. He also ~</p>
      <ul>
        <li>
          <NuxtLink to="/thoughts-and-things" class="text-[1.4em]">Has thoughts and things... Read 'em!</NuxtLink>
        </li>
        <li>Works mostly with Laravel in PHP</li>
        <li>Uses <a href="https://github.com/mister-simon/nixos" target="_blank" rel="noopener noreferrer">NixOS</a> (previously Pop!_OS)</li>
        <li>Enjoys Vue and made <a href="https://github.com/mister-simon/simon-w.xyz" target="_blank" rel="noopener noreferrer">this site</a> partially to learn Nuxt</li>
        <li>Uses Svelte 5 (and want to rebuild this site with it)</li>
        <li>Learnt some React / Next.js (... I prefer Svelte tbh)</li>
        <li><a href="https://youtu.be/XRb0RK-wNU4" target="_blank" rel="noopener noreferrer">Played Dustforce on a charity livestream</a> with thousands of viewers</li>
        <li>Used to make flash animations</li>
        <li>Used to unicycle and juggle</li>
        <li>Has a wonderful fiancee and two adorable rabbits</li>
        <li>Learnt the Colemak keyboard layout, switched to a 40% ortho keyboard, and now use a <a href="https://www.zsa.io/voyager" target="_blank" rel="noopener noreferrer">ZSA Voyager</a></li>
      </ul>

      <h2>Some other nonsense:</h2>
      <ul>
        <li>
          <a href="https://septembit24.simonw.xyz/" target="_blank">Septembit 2024 [Pixel Art]</a>
        </li>
        <li>
          <NuxtLink to="/totally-pro">What is a Professional? [Scroll Driven Storytelling]</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/makes-incredible-designs">Is Simon an Incredible Designer? [...]</NuxtLink>
        </li>
      </ul>
    </div>
  </div>

  <div class="absolute inset-0 z-0 overflow-hidden">
    <NuxtImg src="favicon.svg"
      class="object-contain size-full text-slate-800 brightness-[.33] motion-safe:animate-spin [--animate-duration:60s] blur-3xl bg-offset" />
  </div>
</template>

<style scoped>
.bg-offset {
  translate: -10% -50%;
}
.prose {
  text-underline-offset: .5em;
}
</style>
