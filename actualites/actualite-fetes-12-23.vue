<template>
  <app-actualite
    :id="actualite.id"
    :title="actualite.title"
    :date="actualite.date"
    :image="actualite.image"
    :light-image="actualite.lightImage"
  >
    <p class="flex flex-col mb-8 mt-4 text-center">
      <span>
        Je vous souhaite<br />
        une magnifique fin d'année
      </span>
        <span>Avec un passage en 2024 sous<br /> les meilleures auspices de</span>
        <ul class="list-none my-2">
          <li>La santé</li>
          <li>La sérénité</li>
          <li>Et la sensualité</li>
        </ul>
      <span>Catherine Charmillot</span>
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
