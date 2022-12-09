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
        À l’image de ces 5 boules, je vous souhaite 5 plaisirs pour 2023
      </span>
          <ul class="list-disc mx-auto my-4">
            <li>Bien-être</li>
            <li>Félicité</li>
            <li>Satisfaction</li>
            <li>Bonheur</li>
            <li>Sensualité</li>
          </ul>
      <span class="text-right">Catherine Charmillot</span>
    </p>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteFetes1222',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('fetes-12-22')
    },
  },
}
</script>
