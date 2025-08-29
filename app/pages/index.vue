<template>
  <main class="w-full relative">
    <div
      class="w-full h-screen header-image absolute top-0 left-0 bg-fixed"
    ></div>
    <app-header></app-header>
    <app-forground>
      <app-menu></app-menu>
      <section-a-quoi-sert-la-sexologie></section-a-quoi-sert-la-sexologie>
      <section-catherine-charmillot></section-catherine-charmillot>
      <section-motifs-de-consultation></section-motifs-de-consultation>
      <section-synthese-de-l-approche></section-synthese-de-l-approche>
      <section-actualites></section-actualites>
      <section-prendre-contact></section-prendre-contact>
    </app-forground>
    <app-footer></app-footer>

    <img
      src="https://analytics.naito.one/matomo.php?idsite=3&amp;rec=1&amp;action_name=Index"
      style="border: 0"
      alt=""
    />
  </main>
</template>
<style>
@reference '~/assets/css/main.css';

.header-image {
  background-image: url(/images/background.jpg);
  background-position: center top;

  background-size: 130%;

  @variant sm {
    background-size: cover;
  }
}
</style>
