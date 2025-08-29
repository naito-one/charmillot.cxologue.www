<template>
  <app-actualite :actualite="actualite">
    <div class="flex justify-center font-bold">
      <p class="leading-9 text-lg mt-4 text-center text-gray-800">
        « Prenez soin de votre intimité comme de votre santé.<br />
        Une consultation avec une sexologue, c'est le premier pas vers le
        bien-être. »
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'septembre 2025',
  image: '/images/actualites/citation-09-25.jpg',
  lightImage: false,
  id: 'actualite-24',
}
</script>
