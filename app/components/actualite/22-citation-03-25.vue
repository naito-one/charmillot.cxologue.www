<template>
  <app-actualite :actualite="actualite">
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center text-gray-800">
        L'orange et la vulve féminine s'entrelacent dans les imaginaires
        symboliques par leur sensualité naturelle et leur rôle dans la vitalité.
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'mars 2025',
  image: '/images/actualites/citation-03-25.jpg',
  lightImage: true,
  id: 'actualite-22',
}
</script>
