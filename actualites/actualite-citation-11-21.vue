<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col mb-8">
      <span class="font-bold italic text-center"
        >«&nbsp;A l'automne les arbres font des stripteases pour faire pousser
        les champignons&nbsp;»</span
      >
      <span class="text-right">Patrick Sébastien</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation1121',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-11-21')
    },
  },
}
</script>
