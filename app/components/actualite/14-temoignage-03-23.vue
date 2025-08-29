<template>
  <app-actualite :actualite="actualite">
    <p class="flex flex-col mb-8">
      <span class="mb-4">
        Suite à une sexualité insatisfaisante avec mon partenaire du à un manque
        de désir et des pannes érectiles, les entretiens avec Mme Charmillot ont
        été bénéfiques en tous points. Je me suis sentie écoutée avec
        bienveillance.
      </span>
      <span>
        Grâce au conseils et à l’aide apportée, j'ai retrouvé une sexualité
        épanouie et j'ai osé m'ouvrir à d’autres formes de plaisir.<br />Mon
        partenaire et moi sommes très heureux. <br />Je me félicite d’avoir
        consulté <span class="font-bold">C'XOLOGUE</span>.
      </span>
      <span class="font-bold italic text-right mt-2">Nouvelle vie</span>
    </p>
  </app-actualite>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

const actualite: Actualite = {
  date: '1er mars 2023',
  image: '/images/actualites/temoignage.jpg',
  lightImage: false,
  id: 'actualite-14',
}
</script>
