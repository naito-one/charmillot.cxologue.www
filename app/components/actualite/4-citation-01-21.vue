<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;Le sexe, c’est comme l’air qu’on respire&nbsp;: ça ne semble pas
        important jusqu’à ce qu’il n’y en ait plus&nbsp;»</span
      >
      <span class="text-right">Anonyme</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '1 janvier 2021',
  image: '/images/actualites/citation-01-21.jpg',
  lightImage: false,
  id: 'actualite-4',
}
</script>
