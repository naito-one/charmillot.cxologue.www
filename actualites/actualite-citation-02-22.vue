<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center">
        «&nbsp;Il est vrai que la sexualité est l’une des activités humaines les plus difficiles à vivre, car elle engage la partie la plus intime de l’autre.<br>
        La mise en place de cette communication n’est pas magique. Elle implique un gros travail de remaniement de soi qu’il faut prendre au sérieux pour que la rencontre puisse se produire et évoluer&nbsp;»
      </span>
      <span class="text-right mt-2">
        Dr Danièle Flaumenbaum<br>
        <span class="text-sm">
          Femme désirée, femme désirante<br>
          éd. de poche Payot & Rivages, 2017, page 17
        </span>
      </span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0121',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-02-22')
    },
  },
}
</script>
