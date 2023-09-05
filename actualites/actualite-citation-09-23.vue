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
        «&nbsp;Le prochain défi sera sans doute de replacer la sexualité dans son contexte qui n'est pas celui d'une performance, mais d'un partage, c'est-à-dire l'expression de l'intimité d'un couple.&nbsp;»
      </span>
      <span class="text-right mt-2">Jean-Paul Mialet</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0923',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-09-23')
    },
  },
}
</script>
