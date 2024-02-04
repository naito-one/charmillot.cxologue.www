<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col mb-8">
      <span class="mb-4">
        Grâce à ce suivi, j'ai appris à faire connaissance avec moi-même.
      </span>
      <span class="mb-4">
        J'ai appris à m'écouter, à me parler, à me libérer. J'ai appris que ça
        peut être ok. J'ai appris à dire oui à la vitalité, oui à ma sexualité.
      </span>
      <span>Un grand merci.</span>
      <span class="text-right mt-2">- Charlotte, 24 ans</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteTeoignage0224',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('temoignage-02-24')
    },
  },
}
</script>
