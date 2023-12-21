<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col mb-8">
      <span class="font-bold text-xl text-center">
        Je vous souhaite<br />
        une magnifique fin d'année
      </span>
      <span class="px-8 mt-4">
        <span>Avec un passage en 2024 sous les meilleures auspices</span>
        <ul class="list-none my-2">
          <li>De santé</li>
          <li>De sérénité</li>
          <li>Et de sensualité</li>
        </ul>
      </span>
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
      return this.$store.getters.actualites.get('fetes-12-23')
    },
  },
}
</script>
