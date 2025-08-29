<template>
  <app-actualite :actualite="actualite">
    <div class="flex justify-center italic">
      <p class="leading-9 text-c-violet-1 text-lg mt-4 text-center">
        Un mode d’excitation « en vague » aide à atteindre un orgasme dans la
        volupté et la fluidité.
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: '2 octobre 2024',
  image: '/images/actualites/citation-10-24.jpg',
  lightImage: true,
  id: 'actualite-20',
}
</script>
