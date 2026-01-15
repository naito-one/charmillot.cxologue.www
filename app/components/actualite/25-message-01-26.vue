<template>
  <app-actualite :actualite="actualite">
    <p class="text-center text-amber-800">
      Les Baigneuses (1918-1919),<br />
      Pierre Auguste Renoir
    </p>
    <div class="flex justify-center font-bold">
      <p class="leading-9 text-lg mt-4 text-center text-gray-800">
        « Entre corps, émotions et imaginaire, votre sexualité est une œuvre en
        évolution. Prenons le temps de la regarder ensemble. »
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'janvier 2026',
  image: '/images/actualites/25-message-01-26.jpg',
  lightImage: false,
  id: 'actualite-25',
}
</script>
