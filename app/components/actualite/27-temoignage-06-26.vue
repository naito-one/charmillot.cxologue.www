<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="mb-4">
        Avant de rencontrer Catherine, la sexualité était un sujet que je
        n’abordais pas réellement.
      </span>
      <span class="mb-4">
        Aujourd’hui, et grâce à son accompagnement, je suis fière d’apprendre à
        vivre pleinement ma sexualité.
      </span>
      <span class="mb-4">
        J’arrive petit à petit à ressentir des sensations et j’apprécie pouvoir
        en accueillir de nouvelles avec plus de sérénités.
      </span>
      <span class="text-right mt-2 italic">Une jeune femme de 22 ans</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'juin 2026',
  image: '/images/actualites/temoignage-2.jpg',
  lightImage: false,
  id: 'actualite-27',
}
</script>
