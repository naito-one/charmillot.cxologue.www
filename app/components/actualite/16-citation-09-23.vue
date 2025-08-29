<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center">
        «&nbsp;Le prochain défi sera sans doute de replacer la sexualité dans
        son contexte qui n'est pas celui d'une performance, mais d'un partage,
        c'est-à-dire l'expression de l'intimité d'un couple.&nbsp;»
      </span>
      <span class="text-right mt-2">Jean-Paul Mialet</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '5 septembre 2023',
  image: '/images/actualites/citation-09-23.jpg',
  lightImage: false,
  id: 'actualite-16',
}
</script>
