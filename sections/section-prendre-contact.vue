<template>
  <section :id="section.id" class="sm:p-2 lg:p-8 xl:px-40 my-16 lg:my-8 z-10">
    <a :href="`#${section.id}`">
      <h2 class="font-heading text-2xl text-center mt-2 mb-4">
        Prendre contact par téléphone et WhatsApp
      </h2>
    </a>
    <a
      href="tel:+41775027543"
      class="rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-48"
    >
      <span class="material-icons select-none">phone</span>
      <span class="font-bold ml-4">077 502 75 43</span>
    </a>

    <h2 class="font-heading text-2xl text-center mt-12 mb-4">
      Formulaire de contact
    </h2>

    <form
      ref="form"
      method="post"
      action="#"
      class="flex flex-col mx-2 md:w-160 md:mx-auto placeholder-gray-750"
      @submit="submit"
    >
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Nom"
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Nom *"
        required
      />
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Prénom"
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Prénom *"
        required
      />
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Email"
        type="email"
        name="mail"
        id="mail"
        placeholder="Email *"
        required
      />
      <input
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Téléphone"
        type="tel"
        name="phone"
        id="phone"
        placeholder="Téléphone"
      />
      <textarea
        class="py-2 px-4 rounded-lg shadow-sm mb-2"
        aria-label="Message"
        name="message"
        id="message"
        rows="10"
        placeholder="Message *"
        required
      ></textarea>
      <span class="text-gray-800"
        >Afin de limiter le spam, merci de cocher ce qui convient</span
      >
      <div class="flex items-center">
        <input type="checkbox" name="checkbox-1" id="checkbox-1" />
        <label class="ml-2 select-none" for="checkbox-1"
          >Cochez cette case si vous êtes un humain</label
        >
      </div>
      <div class="flex items-center mb-2">
        <input type="checkbox" name="checkbox-2" id="checkbox-2" />
        <label class="ml-2 select-none" for="checkbox-2"
          >Cochez cette case si vous êtes un robot</label
        >
      </div>
      <p>
        <span class="text-gray-800">Les champs marqués d'un * sont requis.</span
        ><br />
        Je prendrai contact avec vous aussi tôt que possible.
      </p>
      <span class="text-red-600">
        <noscript>
          Javascript est requis pour soumettre le formulaire !
        </noscript></span
      >

      <button
        class="rounded-lg bg-c-violet-3 p-3 shadow-md text-gray-100 flex items-center justify-center mx-auto max-w-full w-40 select-none mt-4"
        type="submit"
      >
        <span class="material-icons">send</span>
        <span class="font-bold ml-4">Envoyer</span>
      </button>
    </form>

    <h2 class="font-heading text-2xl text-center mt-12 mb-4">Consultations</h2>

    <div class="mx-2 md:w-160 md:mx-auto">
      <p>
        <strong
          >Consultations sur rendez-vous dans mon cabinet privé, installé dans
          un centre de thérapies, à Delémont,
          <span class="text-sm">Jura suisse</span></strong
        >.<br />
        Place de parc à disposition.<br />
        À 15 minutes à pied de la gare.<br />
        Tarif préférentiel pour petit budget.
      </p>
      <br />
      <p>
        Catherine Charmillot<br />
        Sexologue<br />
        Jolimont 30 (1er étage)<br />
        2800 Delémont
      </p>
    </div>

    <div class="flex flex-wrap justify-center items-start gap-4 mt-8 mx-2">
      <img
        class="rounded-lg shadow-md md:h-100 w-auto"
        src="/images/cabinet-01.jpg"
        alt="Présentation du Cabinet 1"
      />
      <img
        class="rounded-lg shadow-md md:h-100 w-auto"
        src="/images/cabinet-02.jpg"
        alt="Présentation du Cabinet 2"
      />
      <img
        class="rounded-lg shadow-md md:h-100 w-auto"
        src="/images/cabinet-03.jpg"
        alt="Présentation du Cabinet 3"
      />
    </div>
    <a
      href="https://maps.app.goo.gl/8edeuwmVmcPWpnkz9"
      rel="noreferrer"
      target="_blank"
      aria-label="Emplacement sur la carte"
      class="bg-gray-400 map-image flex items-end justify-center rounded-lg shadow-md h-100 my-4 md:mt-8 mx-2 md:w-160 md:mx-auto"
    >
      <div
        class="rounded-lg bg-c-violet-3 p-3 mb-8 shadow-lg text-gray-100 text-center flex items-center justify-center max-w-full w-56 select-none"
      >
        <span class="material-icons">directions</span>
        <span class="font-bold ml-4">Voir sur Google Maps</span>
      </div>
    </a>
  </section>
</template>
<script>
export default {
  name: 'SectionPrendreContact',
  data() {
    return {
      validated: false,
    }
  },
  methods: {
    submit(event) {
      if (this.validated) {
        return true
      }

      event.preventDefault()

      const human = event.target[5].checked
      const robot = event.target[6].checked

      if (robot || !human) {
        window.location = this.robotReturnAddress
        return false
      }

      this.validated = true

      this.$refs.form.action =
        'https://contact.cxologue.ch/forms/cxologue_contact_form'
      this.$refs.form.submit()

      return false
    },
  },
  computed: {
    section() {
      return this.$store.getters.sections.row2[2]
    },
    robotReturnAddress() {
      return `${
        typeof location !== 'undefined'
          ? location.origin
          : 'https://cxologue.ch'
      }/?human#prendre-contact`
    },
  },
}
</script>
