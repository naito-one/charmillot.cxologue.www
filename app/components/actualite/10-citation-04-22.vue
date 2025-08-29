<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center">
        «&nbsp;La sexualité est parfaitement naturelle, mais elle n’est pas
        naturellement parfaite.&nbsp;»
      </span>
      <span class="text-right mt-2">
        Jean-Yves Desjardins<br />
        <span class="text-sm">(fondateur de l’approche sexocorporelle)</span>
      </span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '21 avril 2022',
  image: '/images/actualites/citation-04-22.jpg',
  lightImage: true,
  id: 'actualite-10',
}
</script>
