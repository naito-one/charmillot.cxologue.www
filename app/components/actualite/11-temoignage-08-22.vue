<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center">
        L’approche en sexocorporel m’a permis de gérer ma libido envahissante et
        d’ouvrir mon champ de vision sur de nouveaux domaines de la sexualité
      </span>
      <span class="text-right mt-2">homme la vingtaine</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: '15 août 2022',
  image: '/images/actualites/temoignage.jpg',
  lightImage: false,
  id: 'actualite-11',
}
</script>
