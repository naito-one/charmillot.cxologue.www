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
        «&nbsp;La sexualité est parfaitement naturelle, mais elle n’est pas
        naturellement parfaite.&nbsp;»
      </span>
      <span class="text-right mt-2">
        Jean-Yves Desjardins<br />
        <span class="text-sm">(fondateur de l’approche sexocorporelle)</span>
      </span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0422',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-04-22')
    },
  },
}
</script>
