<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <div class="flex justify-center font-bold">
      <p class="leading-9 text-lg mt-4 text-center text-gray-800">
        « Prenez soin de votre intimité comme de votre santé.<br/> Une consultation avec une sexologue, c'est le premier pas vers le bien-être. »
      </p>
    </div>
  </app-actualite>
</template>
<script>
import AppActualite from '../components/app-actualite'
export default {
  name: 'ActualiteCitation0925',
  components: { AppActualite },
  computed: {
    actualite() {
      return this.$store.getters.actualites.get('citation-09-25')
    },
  },
}
</script>
