<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center text-blue-500">
        Tout comme un chemin de neige se dévoile pas à pas,<br />la sexualité
        positive encourage une découverte progressive de soi et de l'autre.
      </p>
    </div>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0125',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-01-25')
    },
  },
}
</script>
