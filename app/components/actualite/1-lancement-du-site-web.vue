<template>
  <app-actualite :actualite="actualite">
    <p class="text-center">Bienvenue</p>
    <img
      class="h-8 mx-auto mt-1 mb-8"
      src="/images/logo-colors.svg"
      alt="C'XOLOGUE"
    />
    <p class="text-c-violet-3 font-bold italic">
      Dans l'interprétation de votre partition de musique sexuelle, je pourrais
      être le diapason parfois nécessaire afin de réajuster les notes.
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Lancement du site web',
  date: '6 octobre 2020',
  image: '/images/actualites/lancement-du-site-web.jpg',
  lightImage: false,
  id: 'actualite-1',
}
</script>
