<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8 mt-4 text-center">
      <span>
        Je vous souhaite<br />
        une magnifique fin d'année
      </span>
      <span
        >Avec un passage en 2024 sous<br />
        les meilleures auspices de</span
      >

      <ul class="list-none my-2">
        <li>La santé</li>
        <li>La sérénité</li>
        <li>Et la sensualité</li>
      </ul>
      <span>Catherine Charmillot</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: '21 décembre 2023',
  image: '/images/actualites/fetes-12-23.jpg',
  lightImage: false,
  id: 'actualite-17',
}
</script>
