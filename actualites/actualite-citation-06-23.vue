<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
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
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0623',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-06-23')
    },
  },
}
</script>
