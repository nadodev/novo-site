<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  }
}
</script>

<template>
  <section class="flex h-customHeight items-center justify-center">
  <div class="space-y-20 container mx-auto flex items-center justify-between flex-col  lg:flex-row">
    <article class="text-center lg:text-left max-w-2xl space-y-8">
        <h4 class="text-xl lg:text-2xl">Prazer, eu sou Leonardo Geja  ✌</h4>
        <h1 class="text-4xl lg:text-8xl font-black leading-11 text-zinc-500">Desenvolver FullStack</h1>
        <p class="text-xl leading-8	">Esse é meu site pessoal, aqui você pode ver algumas informações sobre mim, como experiência, formação, contato e muito mais.
    Na próxima seção você encontra meu CV.</p>
        <div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4">
            <button class="bg-sky-500 px-6 py-2 rounded-full text-zinc-50">
                Here Me!
            </button>
            <button class="bg-zinc-500 px-6 py-2 rounded-full text-zinc-50">
                Download CV
            </button>
        </div>
    </article>
    <article>
        <img src="../assets/hero.svg" alt="Foto de perfil">
    </article>
  </div>
  </section>
</template>
