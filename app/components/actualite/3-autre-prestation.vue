<template>
  <app-actualite :actualite="actualite">
    <p>
      Vous souhaitez organiser une conférence publique, un débat ou une
      information sur les thèmes de la sexualité humaine ou de la santé sexuelle
      ?
    </p>
    <br />
    <p>
      Je pourrais collaborer à votre événement et me tiens à disposition pour
      tout renseignement.
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Autre prestation',
  date: '24 octobre 2020',
  image: '/images/actualites/autre-prestation.jpg',
  lightImage: false,
  id: 'actualite-3',
}
</script>
