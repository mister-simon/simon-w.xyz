<template>

  <Head>
    <Title>Welcome! | SimonW.XYZ</Title>
  </Head>

  <div class="place-self-center relative p-10">
    <div class="relative z-10 prose prose-invert">
      <h1>simonw.xyz</h1>
      <p class="lead"><strong>Simon W</strong> is a <strong>Web Developer</strong> and has been since he was about 14
        years old... About <em>{{ (new Date).getFullYear() - 2007 }} years ago</em>.</p>

      <p>
        I usually work with Laravel in PHP - but also I:
      </p>
      <ul>
        <li class="text-[1.4em]">
          <NuxtLink to="/thoughts-and-things">Have thoughts and things... Read 'em!</NuxtLink>
        </li>
        <li>Use Pop!_OS</li>
        <li>Use VSCode</li>
        <li>Use Vue and made this site partially to learn Nuxt</li>
        <li>Am learning some React / Next.js</li>
        <li>Played Dustforce on a charity livestream with thousands of viewers</li>
        <li>Used to make flash animations</li>
        <li>Have a wonderful fiancee and two adorable rabbits</li>
        <li>Learnt the Colemak keyboard layout and switched to a 40% ortho keyboard... Easily the nerdiest thing I've
          done in recent years
        </li>
      </ul>

      <h2>Some other nonsense:</h2>
      <ul>
        <li>
          <NuxtLink to="/totally-pro">What is a Professional?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/makes-incredible-designs">Is Simon an Incredible Designer?</NuxtLink>
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
</style>