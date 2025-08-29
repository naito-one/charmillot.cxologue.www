<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="mb-4">
        J'ai entrepris une démarche sexo corporelle suite à des problèmes de
        dysfonctions érectiles. Mes relations sexuelles n'étaient pas
        satisfaisantes pour moi, mais également pour ma compagne.
      </span>
      <span>
        J'ai décidé de consulter <span class="font-bold">C'XOLOGUE</span>.<br />
        Je me suis senti à l'aise, pas de tabou pas de jugement. Depuis nous
        vivons mieux notre sexualité et notre vie amoureuse.<br />Merci à Mme
        Charmillot.
      </span>
      <span class="font-bold italic text-right mt-2"
        >Un homme de la soixantaine</span
      >
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: 'février 2023',
  image: '/images/actualites/temoignage.jpg',
  lightImage: false,
  id: 'actualite-13',
}
</script>
