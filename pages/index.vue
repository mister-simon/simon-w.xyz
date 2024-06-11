<template>

  <Head>
    <Title>Welcome! | SimonW.XYZ</Title>
  </Head>

  <div class="place-self-center bg-gradient-to-br from-slate-950 to-transparent">
    <h1>Well Hello There!</h1>
    <p>Welcome to SimonW.xyz...</p>
    <p><strong>Simon W</strong> is a <strong>Web Developer</strong> - and has been since he was about 14 years old
      (roughly {{ (new Date).getFullYear() - 2007 }} years)</p>
    <p>
      <NuxtLink to="/thoughts-and-things">I have some thoughts and things... Read 'em!</NuxtLink>
    </p>

    <h2 class="text-3xl">Some other things?</h2>
    <ul>
      <!-- <li>
        <NuxtLink to="/is-a-salmon">Simon W</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/is-smrt">Knowledge</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/totally-pro">A Professional</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/makes-incredible-designs">An Incredible Designer</NuxtLink>
      </li>
    </ul>
  </div>
</template>