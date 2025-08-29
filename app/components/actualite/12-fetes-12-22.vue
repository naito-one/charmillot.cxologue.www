<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center">
        À l’image de ces 5 boules, je vous souhaite 5 plaisirs pour 2023
      </span>
      <ul class="list-disc mx-auto my-4">
        <li>Bien-être</li>
        <li>Félicité</li>
        <li>Satisfaction</li>
        <li>Bonheur</li>
        <li>Sensualité</li>
      </ul>
      <span class="text-right">Catherine Charmillot</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: '9 décembre 2022',
  image: '/images/actualites/fetes-12-22.jpg',
  lightImage: true,
  id: 'actualite-12',
}
</script>
