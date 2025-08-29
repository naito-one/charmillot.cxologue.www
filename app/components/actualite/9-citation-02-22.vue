<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center">
        «&nbsp;Il est vrai que la sexualité est l’une des activités humaines les
        plus difficiles à vivre, car elle engage la partie la plus intime de
        l’autre.<br />
        La mise en place de cette communication n’est pas magique. Elle implique
        un gros travail de remaniement de soi qu’il faut prendre au sérieux pour
        que la rencontre puisse se produire et évoluer&nbsp;»
      </span>
      <span class="text-right mt-2">
        Dr Danièle Flaumenbaum<br />
        <span class="text-sm">
          Femme désirée, femme désirante<br />
          éd. de poche Payot & Rivages, 2017, page 17
        </span>
      </span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  title: 'Citation',
  date: '9 février 2022',
  image: '/images/actualites/citation-02-22.jpg',
  lightImage: false,
  id: 'actualite-9',
}
</script>
