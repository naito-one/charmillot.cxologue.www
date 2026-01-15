<template>
  <app-actualite :actualite="actualite">
    <p class="text-center text-red-800">Désir (1907), Aristide Maillol</p>
    <div class="flex justify-center font-bold">
      <p class="leading-9 text-lg mt-4 text-center text-gray-800">
        « Votre histoire intime mérite écoute, respect et douceur, comme une
        œuvre d'art que l'on redécouvre. »
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'mars 2026',
  image: '/images/actualites/26-message-03-26.jpg',
  lightImage: false,
  id: 'actualite-26',
}
</script>
