<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;Peindre, c'est réaliser l'acte sexuel. Sauf qu'on se sert d'un
        pinceau.&nbsp;»</span
      >
      <span class="text-right">Bernard Lorjou</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '11 avril 2024',
  image: '/images/actualites/citation-04-24.jpg',
  lightImage: false,
  id: 'actualite-19',
}
</script>
