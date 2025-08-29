<template>
  <div class="mb-16 w-full lg:mb-8">
    <app-section
      class="mb-2 lg:mb-0"
      :section="section"
      :min-height-screen="false"
      :padding-bottom="false"
    >
      <div
        class="flex justify-between items-center mx-auto w-full select-none sm:w-120"
      >
        <button
          aria-label="Actualité précédente"
          title="Actualité précédente"
          :disabled="singleActualite"
          class="text-6xl material-icons disabled:text-gray-500 cursor-pointer"
          @click="previous"
        >
          arrow_left
        </button>
        <div class="flex items-center">
          <a
            :aria-label="`Accéder à l'actualité ${i}`"
            :title="`Accéder à l'actualité ${i}`"
            v-for="i in numActualites"
            :key="i"
            :href="`#actualite-${i}`"
            @click="$event.preventDefault() ?? goTo(i)"
            :class="`material-icons py-4 sm:px-4 transition-all ${
              current === i ? 'text-gray-900' : 'text-gray-500'
            } ${
              shouldBeFullSize(i - 1, current - 1, numActualites)
                ? 'px-[0.6rem]'
                : 'text-2xs px-1 sm:text-base'
            }`"
            >lens</a
          >
        </div>
        <button
          aria-label="Actualité suivante"
          title="Actualité suivante"
          :disabled="singleActualite"
          class="text-6xl material-icons disabled:text-gray-500 cursor-pointer"
          @click="next"
        >
          arrow_right
        </button>
      </div>
    </app-section>
    <div class="relative mx-auto sm:w-120">
      <div
        class="absolute z-10 w-full h-full pointer-events-none transparent-borders"
      ></div>
      <div ref="scroller" class="flex overflow-x-auto w-full slider">
        <!--<actualite-24-citation-09-25 />-->
        <actualite-23-citation-07-25 />
        <actualite-22-citation-03-25 />
        <actualite-21-citation-01-25 />
        <actualite-20-citation-10-24 />
        <actualite-19-citation-04-24 />
        <actualite-18-temoignage-02-24 />
        <!--<actualite-17-fetes-12-23 />-->
        <!--<actualite-16-citation-09-23 />-->
        <!--<actualite-15-citation-06-23 />-->
        <!--<actualite-14-temoignage-03-23 />-->
        <!--<actualite-13-temoignage-02-23 />-->
        <!--<actualite-12-fetes-12-22 />-->
        <!--<actualite-11-temoignage-08-22 />-->
        <!--<actualite-10-citation-04-22 />-->
        <!--<actualite-9-citation-02-22 />-->
        <!--<actualite-8-citation-11-21 />-->
        <!--<actualite-7-citation-09-21 />-->
        <!--<actualite-6-citation-07-21 />-->
        <!--<actualite-5-citation-03-21 />-->
        <!--<actualite-4-citation-01-21 />-->
        <!--<actualite-3-autre-prestation />-->
        <!--<actualite-2-citation />-->
        <!--<actualite-1-lancement-du-site-web />-->
      </div>
    </div>
  </div>
</template>
<style>
@reference '~/assets/css/main.css';

.transparent-borders {
  @variant sm {
    background-image: linear-gradient(
      to right,
      var(--color-gray-300),
      transparent 8%,
      transparent 92%,
      var(--color-gray-300) 100%
    );
  }
}
</style>
<script setup lang="ts">
import { shouldBeFullSize } from '~/assets/utils'
import { sections } from '~/assets/content'
const route = useRoute()

const section = sections.row2[1]!
const current = ref(1)
const ratio = ref(0)
const scroller = useTemplateRef('scroller')

const numActualites = computed(() => {
  return scroller.value?.childElementCount ?? 0
})

const singleActualite = computed(() => {
  return numActualites.value <= 1
})

function setFromHash() {
  if (route.hash.startsWith('#actualite-')) {
    const cur = parseInt(route.hash.replace('#actualite-', ''))
    if (!isNaN(cur)) {
      current.value = cur
      scrollToCurrent()
    }
  }
}

function setToHash() {
  const hash = `#actualite-${current.value}`
  history.replaceState({}, '', hash)
}

function previous() {
  // removing two then adding one at the end because modulo is zero based. js modulo can return negative values
  let raw = current.value - 2
  if (raw < 0) {
    raw = numActualites.value + raw
  }
  current.value = (raw % numActualites.value) + 1

  scrollToCurrent()
}

function next() {
  // adding one at the end because modulo is zero based
  current.value = (current.value % numActualites.value) + 1

  scrollToCurrent()
}

function goTo(i: number) {
  current.value = i
  scrollToCurrent()
}

function scrollToCurrent() {
  if (!scroller.value) {
    return
  }
  scroller.value.scrollTo({
    left: (current.value - 1) * ratio.value,
    behavior: 'smooth',
  })
  setToHash()
}

onMounted(() => {
  const onresize = () => {
    ratio.value = (scroller.value?.scrollWidth ?? 0) / numActualites.value
  }
  window.onresize = onresize
  onresize()

  setFromHash()

  scroller.value?.addEventListener(
    'touchend',
    () => {
      setTimeout(() => {
        const round = Math.round(
          (scroller.value?.scrollLeft ?? 0) / ratio.value
        )
        current.value = round + 1
        setToHash()
      }, 500)
    },
    {
      passive: true,
    }
  )
})
</script>
