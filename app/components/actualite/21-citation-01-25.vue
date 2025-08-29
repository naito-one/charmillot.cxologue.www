<template>
  <app-actualite :actualite="actualite">
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center text-blue-500">
        Tout comme un chemin de neige se dévoile pas à pas,<br />la sexualité
        positive encourage une découverte progressive de soi et de l'autre.
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'janvier 2025',
  image: '/images/actualites/citation-01-25.jpg',
  lightImage: false,
  id: 'actualite-21',
}
</script>
