<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;A l'automne les arbres font des stripteases pour faire pousser
        les champignons&nbsp;»</span
      >
      <span class="text-right">Patrick Sébastien</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '20 novembre 2021',
  image: '/images/actualites/citation-11-21.jpg',
  lightImage: true,
  id: 'actualite-8',
}
</script>
