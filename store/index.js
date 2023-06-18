import {
  SET_MESSAGE,
  SET_MESSAGE_TIMEOUT,
  SET_SHOW_MESSAGE,
} from '../assets/mutations'

export const state = () => ({
  messageBox: {
    show: false,
    isError: false,
    lastMessage: '',
    timeout: null,
  },

  sections: {
    row1: [
      {
        title: 'À quoi sert la sexologie',
        image: '/images/flowers_1.jpg',
        bgColor: 'c-violet-1',
        fgColor: 'gray-100',
        id: 'a-quoi-sert-la-sexologie',
      },
      {
        title: 'Catherine Charmillot',
        image: '/images/body_1_low.jpg',
        bgColor: 'c-red-1',
        alternateBgColor: 'c-red-3',
        fgColor: 'gray-100',
        id: 'catherine-charmillot',
      },
      {
        title: 'Motifs de consultation',
        image: '/images/flowers_2.jpg',
        bgColor: 'c-yellow-1',
        alternateBgColor: 'c-yellow-3',
        fgColor: 'gray-900',
        id: 'motifs-de-consultation',
      },
    ],
    row2: [
      {
        title: "Synthèse de l'approche",
        image: '/images/flowers_3.jpg',
        bgColor: 'c-violet-2',
        fgColor: 'gray-100',
        id: 'synthese-de-l-approche',
      },
      {
        title: 'Actualités',
        image: '/images/flowers_4.jpg',
        bgColor: 'c-red-2',
        alternateBgColor: 'gray-100',
        fgColor: 'gray-100',
        alternateFgColor: 'gray-900',
        id: 'actualites',
      },
      {
        title: 'Prendre contact',
        image: '/images/flowers_5.jpg',
        bgColor: 'c-yellow-2',
        fgColor: 'gray-900',
        id: 'prendre-contact',
      },
    ],
  },

  actualites: new Map(
    Object.entries({
      /*
      'lancement-du-site-web': {
        title: 'Lancement du site web',
        date: '6 octobre 2020',
        image: '/images/actualites/lancement-du-site-web.jpg',
        lightImage: false,
        id: 'actualite-1',
      },
      'citation': {
        title: 'Citation',
        date: '24 octobre 2020',
        image: '/images/actualites/citation.jpg',
        lightImage: false,
        id: 'actualite-2',
      },
      'autre-prestation': {
        title: 'Autre prestation',
        date: '24 octobre 2020',
        image: '/images/actualites/autre-prestation.jpg',
        lightImage: false,
        id: 'actualite-3',
      },
      'citation-01-21': {
        title: 'Citation',
        date: '1 janvier 2021',
        image: '/images/actualites/citation-01-21.jpg',
        lightImage: false,
        id: 'actualite-4',
      },
      'citation-03-21': {
        title: 'Citation',
        date: '1 mars 2021',
        image: '/images/actualites/citation-03-21.jpg',
        lightImage: true,
        id: 'actualite-5',
      },
      'citation-07-21': {
        title: 'Citation',
        date: '4 juillet 2021',
        image: '/images/actualites/citation-07-21.jpg',
        lightImage: false,
        id: 'actualite-6',
      },
      'citation-09-21': {
        title: 'Citation',
        date: '15 septembre 2021',
        image: '/images/actualites/citation-09-21.jpg',
        lightImage: true,
        id: 'actualite-7',
      },
      'citation-11-21': {
        title: 'Citation',
        date: '20 novembre 2021',
        image: '/images/actualites/citation-11-21.jpg',
        lightImage: true,
        id: 'actualite-8',
      },
      'citation-02-22': {
        title: 'Citation',
        date: '9 février 2022',
        image: '/images/actualites/citation-02-22.jpg',
        lightImage: false,
        id: 'actualite-9',
      },
      */
      'citation-04-22': {
        title: 'Citation',
        date: '21 avril 2022',
        image: '/images/actualites/citation-04-22.jpg',
        lightImage: true,
        id: 'actualite-10',
      },
      'temoignage-08-22': {
        date: '15 août 2022',
        image: '/images/actualites/temoignage.jpg',
        lightImage: false,
        id: 'actualite-11',
      },
      'fetes-12-22': {
        date: '9 décembre 2022',
        image: '/images/actualites/fetes-12-22.jpg',
        lightImage: true,
        id: 'actualite-12',
      },
      'temoignage-02-23': {
        date: 'février 2023',
        image: '/images/actualites/temoignage.jpg',
        lightImage: false,
        id: 'actualite-13',
      },
      'temoignage-03-23': {
        date: '1er mars 2023',
        image: '/images/actualites/temoignage.jpg',
        lightImage: false,
        id: 'actualite-14',
      },
      'citation-06-23': {
        date: '18 juin 2023',
        image: '/images/actualites/citation-06-23.jpg',
        lightImage: false,
        id: 'actualite-15',
      },
    })
  ),
})

export const mutations = {
  [SET_MESSAGE](state, { message, isError }) {
    state.messageBox.lastMessage = message
    state.messageBox.isError = isError
  },
  [SET_SHOW_MESSAGE](state, { show }) {
    state.messageBox.show = show
  },
  [SET_MESSAGE_TIMEOUT](state, { timeout }) {
    state.messageBox.timeout = timeout
  },
}

export const actions = {
  showMessage({ commit, dispatch }, { message, isError, time }) {
    commit(SET_MESSAGE, { message, isError })

    dispatch('hideMessage')

    // let the CSS update so that the animation for the message box may trigger again
    requestAnimationFrame(() => {
      commit(SET_SHOW_MESSAGE, { show: true })

      const timeout = setTimeout(() => {
        commit(SET_SHOW_MESSAGE, { show: false })
      }, time || 10000)

      commit(SET_MESSAGE_TIMEOUT, { timeout })
    })
  },
  hideMessage({ commit, state }) {
    clearTimeout(state.messageBox.timeout)

    commit(SET_SHOW_MESSAGE, { show: false })
  },
}

export const getters = {
  sections: (state) => state.sections,
  actualites: (state) => state.actualites,
}
