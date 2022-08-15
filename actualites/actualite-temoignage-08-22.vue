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
        L’approche en sexocorporel m’a permis de gérer ma libido envahissante et
        d’ouvrir mon champ de vision sur de nouveaux domaines de la sexualité
      </span>
      <span class="text-right mt-2">homme la vingtaine</span>
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
      return this.$store.getters.actualites.get('temoignage-08-22')
    },
  },
}
</script>
