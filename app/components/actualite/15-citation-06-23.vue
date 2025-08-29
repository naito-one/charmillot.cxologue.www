<template>
  <app-actualite :actualite="actualite">
    <div class="flex justify-center italic">
      <p class="flex flex-col leading-9 text-c-red-3 text-lg mt-4">
        <span>L'érotisme c'est d'offrir au corps</span>
        <span>Le langage des sens</span>
        <span>La légèreté de l'âme</span>
        <span>Et la volupté de l'esprit</span>
      </p>
    </div>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: '18 juin 2023',
  image: '/images/actualites/citation-06-23.jpg',
  lightImage: false,
  id: 'actualite-15',
}
</script>
