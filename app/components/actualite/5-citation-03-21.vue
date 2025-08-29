<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;L’érotisme est l’une des bases de la connaissance de soi, aussi
        indispensable que la poésie&nbsp;»</span
      >
      <span class="text-right">Anaïs Nin</span>
    </p>

    <p>Apprenons à réaliser des vers et des rimes dans la sexualité.</p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '1 mars 2021',
  image: '/images/actualites/citation-03-21.jpg',
  lightImage: true,
  id: 'actualite-5',
}
</script>
