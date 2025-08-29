<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;Le sexe apaise les tensions. L'amour les provoque&nbsp;»</span
      >
      <span class="text-right">Woody Allen</span>
    </p>

    <p>
      Les ingrédients intellectuels, émotionnels et corporels sont en constante
      interaction pour votre satisfaction sexuelle.<br />
      Je pourrais être la balance qui pèse et soupèse le dosage essentiel.
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '24 octobre 2020',
  image: '/images/actualites/citation.jpg',
  lightImage: false,
  id: 'actualite-2',
}
</script>
