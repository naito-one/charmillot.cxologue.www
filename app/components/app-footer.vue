<template>
  <footer class="relative w-full h-screen">
    <!-- wavy forground -->
    <svg
      class="absolute top-0 w-full rotate-180 -mt-px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 163"
    >
      <path
        style="fill: #e0e0e0; fill-opacity: 1"
        d="m 0,37.169735 30,21.662986 c 30,21.895301 90,64.872799 150,80.553789 60,15.68098 120,2.90388 180,-15.50675 60,-18.7591 120,-43.151738 180,-49.54029 60,-6.388541 120,6.388552 180,0 60,-6.388541 120,-30.781183 180,-37.169735 60,-6.388541 120,6.388552 180,21.662986 60,15.506749 120,34.091617 180,24.799188 60,-9.292439 120,-46.462174 150,-65.047041 L 1440,0 v 167.26381 h -30 c -30,0 -90,0 -150,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -180,0 -60,0 -120,0 -150,0 H 0 Z"
      />
    </svg>
    <div
      class="fixed top-0 left-0 w-full h-full footer-image -z-2 mt-px"
      :class="{ 'footer-image__hq': loaded }"
    ></div>
    <div class="h-full flex flex-col items-center justify-between py-12">
      <img
        class="w-2/3 md:w-100 mx-12 select-none mt-12 lg:mt-48"
        src="/images/logo-colors.svg"
        alt="C'XOLOGUE"
      />

      <p class="text-center w-2/3 lg:w-160 text-gray-100 text-shadow-md">
        © 2025 - Catherine Charmillot<br />
        Sauf indication contraire, toutes les images présentes sur ce site sont
        la propriété de Catherine Charmillot ou proviennent du domaine
        public.<br /><br />
        Ce site journalise vos visites de façon entièrement anonyme et
        uniquement à des fins de statistique. Il respecte le paramètre «
        Interdire le suivi » de votre navigateur.
      </p>
    </div>
  </footer>
</template>
<style>
.footer-image {
  background-image: url(/images/body_1_low_placeholder.jpg);
  background-size: cover;
  background-position: right center;
}

.footer-image__hq {
  background-image: url(/images/body_1_low.jpg);
}
</style>
<script setup lang="ts">
const loaded = ref(false)
onMounted(() => {
  loaded.value = true
})
</script>
