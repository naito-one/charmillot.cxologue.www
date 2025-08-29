<template>
  <app-actualite :actualite="actualite">
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center text-orange-800">
        Découvrir une sexualité<br />
        de pleine conscience et<br />
        dans une fluidité émotionnelle
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'juillet 2025',
  image: '/images/actualites/citation-07-25.jpg',
  lightImage: true,
  id: 'actualite-23',
}
</script>
