<template>
  <div class="font-content w-full flex overflow-x-hidden">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <message-box />
    <div
      v-if="isIE && !hideIEWarning"
      class="fixed bottom-0 left-0 w-full bg-violet-200 text-gray-900 text-center flex flex-col z-10"
    >
      <i
        @click="hideIEWarning = true"
        class="material-icons cursor-pointer select-none w-full p-4"
        >close</i
      >
      <span class="p-4 pt-0">
        Pour tirer meilleur parti de ce site web, nous recommandons
        l'utilisation de
        <a
          class="underline text-c-violet-3 hover:text-c-violet-2"
          href="https://www.google.ch/chrome/"
          >Chrome</a
        >
        ou
        <a
          class="underline text-c-violet-3 hover:text-c-violet-2"
          href="https://www.firefox.com/fr/"
          >Firefox</a
        >. Si votre entreprise ne vous permet pas de les installer, pensez à
        <a
          class="underline text-c-violet-3 hover:text-c-violet-2"
          href="https://www.microsoft.com/fr-fr/edge"
          >Microsoft Edge</a
        >
        qui devrait déjà se trouver sur votre ordinateur.
      </span>
    </div>

    <!-- back to top -->
    <a
      title="Revenir en haut de la page"
      aria-label="Revenir en haut de la page"
      href="#"
      class="select-none back-to-top pointer-events-auto fixed bottom-0 right-0 mb-12 mr-4 md:mr-8 p-6 rounded-full shadow-lg bg-gray-100 border-solid border-4 border-gray-300 flex items-center hover:brightness-105 z-10 transition-all"
    >
      <i class="material-icons text-xl">arrow_upward</i>
    </a>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const msgBox = useMessageBox()
const hideIEWarning = ref(false)
const isIE = computed(
  () => typeof document !== 'undefined' && !!(document as any).documentMode
)

onMounted(() => {
  // display success message if "submitted" param is present on load
  if (route.query.submitted !== undefined) {
    msgBox.showMessage('Votre message a bien été envoyé !', false, 5000)

    // remove the query to not display popup again if page is reloaded
    router.replace({ query: {}, hash: route.hash })
  }

  // display success message if "submitted" param is present on load
  if (route.query.human !== undefined) {
    msgBox.showMessage(
      "Malheureusement Catherine Charmillot n'est pas diplômée dans les relations robotiques !",
      true,
      5000
    )

    // remove the query to not display popup again if page is reloaded
    router.replace({ query: {}, hash: route.hash })
  }
})
</script>
