<template>
  <a
    :title="title"
    :aria-label="title"
    :href="`#${item.id}`"
    :style="`background-image: url(${
      !loaded && item.placeholderImage ? item.placeholderImage : item.image
    })`"
    :class="`flex-grow flex flex-col items-center justify-center rounded-lg p-4 m-4 relative tile-background ${item.bgColor} shadow-md hover:shadow-lg transition-all active:brightness-95 hover:brightness-105 h-32`"
  >
    <span
      :class="`${item.fgColor} text-center text-xl z-10`"
      v-text="item.title"
    ></span>
    <div
      :class="`absolute top-0 w-full h-full ${item.bgColor} opacity-85 rounded-lg`"
    ></div>
  </a>
</template>
<script setup lang="ts">
import type { Section } from '~/assets/content'

const { item } = defineProps<{ item: Section }>()

const title = computed(() => {
  return `Aller vers la section "${item.title}"`
})

// lazy loading
const loaded = ref(false)
onMounted(() => {
  loaded.value = true
})
</script>
