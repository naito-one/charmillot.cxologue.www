<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;Il y a des regards qui te font perdre le fil... l'aiguille, le
        dé à coudre, le bouton<br />
        et la robe&nbsp;»</span
      >
      <span class="text-right">BlondieBarbie01</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '15 septembre 2021',
  image: '/images/actualites/citation-09-21.jpg',
  lightImage: true,
  id: 'actualite-7',
}
</script>
