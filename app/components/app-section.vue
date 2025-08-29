<template>
  <div :id="section.id" class="sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10">
    <section
      :class="`relative ${bgColor} ${fgColor} sm:rounded-lg shadow-md ${
        minHeightScreen ? 'min-h-screen sm:min-h-0' : ''
      }`"
    >
      <div
        class="tile-background h-24 sm:rounded-t-lg"
        :style="`background-image: url(${
          !loaded && section.placeholderImage
            ? section.placeholderImage
            : section.image
        })`"
      ></div>
      <div
        :class="`absolute top-0 w-full h-24 ${bgColor} opacity-50 sm:rounded-t-lg`"
      ></div>
      <!-- content -->
      <div :class="`p-8 md:px-16 ${paddingBottom ? 'pb-16 md:pb-24' : ''}`">
        <a :href="`#${section.id}`">
          <h2
            class="font-heading text-2xl text-center mb-8"
            v-text="section.title"
          ></h2>
        </a>
        <slot></slot>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import type { Section } from '~/assets/content'
const {
  section,
  minHeightScreen = true,
  paddingBottom = true,
} = defineProps<{
  section: Section
  minHeightScreen?: boolean
  paddingBottom?: boolean
}>()

const bgColor = computed(() => section.alternateBgColor ?? section.bgColor)
const fgColor = computed(() => section.alternateFgColor ?? section.fgColor)

// lazy loading
const loaded = ref(false)
onMounted(() => {
  loaded.value = true
})
</script>
