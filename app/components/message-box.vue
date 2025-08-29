<template>
  <div
    class="z-50 fixed top-0 left-0 mt-16 flex justify-center w-full pointer-events-none"
  >
    <div :class="classes">
      <span class="text-center w-full" v-text="msgBox.lastMessage"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
const msgBox = useMessageBox()

const classes = computed(() =>
  [
    'w-5/6',
    'md:w-auto',
    msgBox.isError.value ? 'bg-red-600' : 'bg-green-600',
    'text-gray-100',
    'p-4',
    'rounded-lg',
    'shadow',
    'flex',
    'transition-opacity',
    'transition-200',
  ].concat(
    msgBox.show.value
      ? ['opacity-100', 'pointer-events-auto', 'notice-me-senpai']
      : ['opacity-0']
  )
)
</script>
