<template>
  <div class="mb-16 w-full lg:mb-8">
    <app-section
      class="mb-2 lg:mb-0"
      :id="section.id"
      :title="section.title"
      :image="section.image"
      :bg-color="section.alternateBgColor || section.bgColor"
      :fg-color="section.alternateFgColor || section.fgColor"
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
          class="text-6xl material-icons disabled:text-gray-500"
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
            @click="$event.preventDefault() || goTo(i)"
            :class="`material-icons py-4 sm:px-4 ${
              current === i ? 'text-gray-900' : 'text-gray-500'
            } ${shouldBeFullSize(i) ? 'px-2-5' : 'text-2xs px-1 sm:text-base'}`"
            >lens</a
          >
        </div>
        <button
          aria-label="Actualité suivante"
          title="Actualité suivante"
          :disabled="singleActualite"
          class="text-6xl material-icons disabled:text-gray-500"
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
        <!--<actualite-citation-09-25></actualite-citation-09-25>-->
        <actualite-citation-07-25></actualite-citation-07-25>
        <actualite-citation-03-25></actualite-citation-03-25>
        <actualite-citation-01-25></actualite-citation-01-25>
        <actualite-citation-10-24></actualite-citation-10-24>
        <actualite-citation-04-24></actualite-citation-04-24>
        <actualite-temoignage-02-24></actualite-temoignage-02-24>
        <!--<actualite-fetes-12-23></actualite-fetes-12-23>-->
        <!--<actualite-citation-09-23></actualite-citation-09-23>-->
        <!--<actualite-citation-06-23></actualite-citation-06-23>-->
        <!--<actualite-temoignage-03-23></actualite-temoignage-03-23>-->
        <!--<actualite-temoignage-02-23></actualite-temoignage-02-23>-->
        <!--<actualite-fetes-12-22></actualite-fetes-12-22>-->
        <!--<actualite-temoignage-08-22></actualite-temoignage-08-22>-->
        <!--<actualite-citation-04-22></actualite-citation-04-22>-->
        <!--<actualite-citation-02-22></actualite-citation-02-22>-->
        <!--<actualite-citation-11-21></actualite-citation-11-21>-->
        <!--<actualite-citation-09-21></actualite-citation-09-21>-->
        <!--<actualite-citation-07-21></actualite-citation-07-21>-->
        <!--<actualite-citation-03-21></actualite-citation-03-21>-->
        <!--<actualite-citation-01-21></actualite-citation-01-21>-->
        <!--<actualite-autre-prestation></actualite-autre-prestation>-->
        <!--<actualite-citation></actualite-citation>-->
        <!--<actualite-lancement-du-site-web></actualite-lancement-du-site-web>-->
      </div>
    </div>
  </div>
</template>
<script>
import { shouldBeFullSize } from '../assets/utils'
import AppSection from '../components/app-section'
// import ActualiteLancementDuSiteWeb from '../actualites/actualite-lancement-du-site-web'
// import ActualiteCitation from '../actualites/actualite-citation'
// import ActualiteAutrePrestation from '../actualites/actualite-autre-prestation'
// import ActualiteCitation0121 from '../actualites/actualite-citation-01-21'
// import ActualiteCitation0321 from '../actualites/actualite-citation-03-21'
// import ActualiteCitation0721 from '../actualites/actualite-citation-07-21'
// import ActualiteCitation0921 from '../actualites/actualite-citation-09-21'
// import ActualiteCitation1121 from '../actualites/actualite-citation-11-21'
// import ActualiteCitation0222 from '../actualites/actualite-citation-02-22'
// import ActualiteCitation0422 from '../actualites/actualite-citation-04-22'
// import ActualiteTemoignage0822 from '../actualites/actualite-temoignage-08-22'
// import ActualiteFetes1222 from '../actualites/actualite-fetes-12-22'
// import ActualiteTemoignage0223 from '../actualites/actualite-temoignage-02-23'
// import ActualiteTemoignage0323 from '../actualites/actualite-temoignage-03-23'
// import ActualiteCitation0623 from '../actualites/actualite-citation-06-23'
// import ActualiteCitation0923 from '../actualites/actualite-citation-09-23'
// import ActualiteFetes1223 from '../actualites/actualite-fetes-12-23'
import ActualiteTemoignage0224 from '../actualites/actualite-temoignage-02-24'
import ActualiteCitation0424 from '../actualites/actualite-citation-04-24'
import ActualiteCitation1024 from '../actualites/actualite-citation-10-24'
import ActualiteCitation0125 from '../actualites/actualite-citation-01-25'
import ActualiteCitation0325 from '../actualites/actualite-citation-03-25'
import ActualiteCitation0725 from '../actualites/actualite-citation-07-25'
// import ActualiteCitation0925 from '../actualites/actualite-citation-09-25'
export default {
  name: 'SectionActualites',
  components: {
    AppSection,
    // ActualiteLancementDuSiteWeb,
    // ActualiteCitation,
    // ActualiteAutrePrestation,
    // ActualiteCitation0121,
    // ActualiteCitation0321,
    // ActualiteCitation0721,
    // ActualiteCitation0921,
    // ActualiteCitation1121,
    // ActualiteCitation0222,
    // ActualiteCitation0422,
    // ActualiteTemoignage0822,
    // ActualiteFetes1222,
    // ActualiteTemoignage0223,
    // ActualiteTemoignage0323,
    // ActualiteCitation0623,
    // ActualiteCitation0923,
    // ActualiteFetes1223,
    ActualiteTemoignage0224,
    ActualiteCitation0424,
    ActualiteCitation1024,
    ActualiteCitation0125,
    ActualiteCitation0325,
    ActualiteCitation0725,
    // ActualiteCitation0925,
  },
  data() {
    return {
      current: 1,
      ratio: 0,
    }
  },
  mounted() {
    this.ratio = this.$refs.scroller.scrollWidth / this.numActualites

    window.onresize = () => {
      this.ratio = this.$refs.scroller.scrollWidth / this.numActualites
    }

    this.setFromHash(this.$route.hash)

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const onscroll = () => {
      const raw = this.$refs.scroller.scrollLeft / this.ratio
      const round = Math.round(raw)
      const last = this.current - 1
      this.current = round + 1

      // only when we are finished scrolling do we store
      // otherwise, infinite loop
      if (raw === round && round !== last) {
        this.setToHash(this.current)
      }
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    this.$refs.scroller.addEventListener(
      'touchend',
      () => {
        setTimeout(() => {
          const round = Math.round(this.$refs.scroller.scrollLeft / this.ratio)
          this.current = round + 1
          this.setToHash()
        }, 500)
      },
      {
        passive: true,
      }
    )
  },
  methods: {
    setFromHash(hash) {
      if (hash.startsWith('#actualite-')) {
        const current = parseInt(hash.replace('#actualite-', ''))
        if (!isNaN(current)) {
          this.current = current
          this.scrollToCurrent()
        }
      }
    },

    setToHash(current) {
      const hash = `#actualite-${this.current}`
      history.replaceState({}, '', hash)
    },
    previous() {
      // removing two then adding one at the end because modulo is zero based. js modulo can return negative values
      let raw = this.current - 2
      if (raw < 0) {
        raw = this.numActualites + raw
      }
      this.current = (raw % this.numActualites) + 1

      this.scrollToCurrent()
    },
    next() {
      // adding one at the end because modulo is zero based
      this.current = (this.current % this.numActualites) + 1

      this.scrollToCurrent()
    },
    goTo(i) {
      this.current = i
      this.scrollToCurrent()
    },
    scrollToCurrent() {
      this.$refs.scroller.scrollTo({
        left: (this.current - 1) * this.ratio,
        behavior: 'smooth',
      })
      this.setToHash()
    },
    shouldBeFullSize(i) {
      return shouldBeFullSize(i - 1, this.current - 1, this.numActualites)
    },
  },
  computed: {
    section() {
      return this.$store.getters.sections.row2[1]
    },
    numActualites() {
      return this.$store.getters.actualites.size
    },
    singleActualite() {
      return this.numActualites <= 1
    },
  },
}
</script>
