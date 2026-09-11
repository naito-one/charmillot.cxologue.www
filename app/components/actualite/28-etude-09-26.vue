<template>
  <app-actualite :actualite="actualite">
    <p class="text-lg text-lime-700 text-center mb-4">
      Vous rencontrez des difficultés à parler de sexualité avec votre
      partenaire ?
    </p>
    <p class="text-lg">
      Un accompagnement professionnel peut vous aider à ouvrir le dialogue, sans
      jugement et dans le respect de chacun.
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'septembre 2026',
  image: '/images/actualites/28-etude-09-26.jpg',
  lightImage: true,
  id: 'actualite-28',
}
</script>
