<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <div class="flex justify-center italic">
      <p class="leading-9 text-c-violet-1 text-lg mt-4 text-center">
        Un mode d’excitation « en vague » aide à atteindre un orgasme dans la
        volupté et la fluidité.
      </p>
    </div>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation1024',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-10-24')
    },
  },
}
</script>
