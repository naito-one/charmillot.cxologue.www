<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center text-orange-800">
        Découvrir une sexualité<br/> de pleine conscience et<br/> dans une fluidité émotionnelle
      </p>
    </div>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0725',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-07-25')
    },
  },
}
</script>
