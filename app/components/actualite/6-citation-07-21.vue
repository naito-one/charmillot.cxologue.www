<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;L'érotisme est à l'amour ce que les bulles sont au champagne…<br />il
        le sublime&nbsp;»</span
      >
      <span class="text-right">Madame Chipie</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '4 juillet 2021',
  image: '/images/actualites/citation-07-21.jpg',
  lightImage: false,
  id: 'actualite-6',
}
</script>
