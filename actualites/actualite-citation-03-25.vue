<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <div class="flex justify-center italic">
      <p class="leading-9 text-lg mt-4 text-center">
        L'<span class="text-orange-600">orange</span> et la <span class="text-orange-600">vulve féminine</span> s'entrelacent dans les imaginaires symboliques par leur <span class="text-orange-600">sensualité naturelle</span> et leur <span class="text-orange-600">rôle dans la vitalité</span>.
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
