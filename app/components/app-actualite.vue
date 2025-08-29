<template>
  <div class="slide w-full flex-shrink-0 flex justify-center">
    <section
      class="relative bg-gray-100 text-gray-900 rounded-lg shadow-md mx-2 sm:mx-12 w-full overflow-hidden"
    >
      <div
        class="tile-background h-76"
        :style="`background-image: url(${actualite.image})`"
      ></div>
      <div
        :class="`absolute top-0 w-full h-70 ${
          actualite.lightImage
            ? 'bg-gradient-corner-light'
            : 'bg-gradient-corner-dark'
        }`"
      ></div>
      <span
        :class="`absolute top-0 w-full text-right font-bold p-8 ${
          actualite.lightImage ? 'text-gray-900' : 'text-gray-100'
        }`"
        v-text="actualite.date"
      ></span>
      <!-- content -->
      <div class="p-8 pb-16">
        <h3
          class="font-heading text-2xl text-c-violet-3 text-center mb-8"
          v-text="actualite.title"
          v-if="actualite.title"
        ></h3>
        <slot></slot>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { Actualite } from '~/assets/content'

defineProps<{ actualite: Actualite }>()
</script>
