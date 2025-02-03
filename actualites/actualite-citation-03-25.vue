<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center text-gray-800">
        L'orange et la vulve féminine s'entrelacent dans les imaginaires symboliques par leur sensualité naturelle et leur rôle dans la vitalité.
      </p>
    </div>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0325',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-03-25')
    },
  },
}
</script>
