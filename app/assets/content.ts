export interface Section {
  title: string
  /**
   * Image URL
   */
  placeholderImage?: string
  /**
   * Image URL
   */
  image: string
  /**
   * Tailwind class
   */
  bgColor: string
  /**
   * Tailwind class
   */
  alternateBgColor?: string
  /**
   * Tailwind class
   */
  fgColor: string
  /**
   * Tailwind class
   */
  alternateFgColor?: string
  id: string
}

export const sections = {
  row1: [
    {
      title: 'À quoi sert la sexologie',
      image: '/images/flowers_1.jpg',
      bgColor: 'bg-c-violet-1',
      fgColor: 'text-gray-100',
      id: 'a-quoi-sert-la-sexologie',
    },
    {
      title: 'Catherine Charmillot',
      placeholderImage: '/images/body_1_low_placeholder.jpg',
      image: '/images/body_1_low.jpg',
      bgColor: 'bg-c-red-1',
      alternateBgColor: 'bg-c-red-3',
      fgColor: 'text-gray-100',
      id: 'catherine-charmillot',
    },
    {
      title: 'Motifs de consultation',
      image: '/images/flowers_2.jpg',
      bgColor: 'bg-c-yellow-1',
      alternateBgColor: 'bg-c-yellow-3',
      fgColor: 'text-gray-900',
      id: 'motifs-de-consultation',
    },
  ] as Section[],
  row2: [
    {
      title: "Synthèse de l'approche",
      image: '/images/flowers_3.jpg',
      bgColor: 'bg-c-violet-2',
      fgColor: 'text-gray-100',
      id: 'synthese-de-l-approche',
    },
    {
      title: 'Actualités',
      image: '/images/flowers_4.jpg',
      bgColor: 'bg-c-red-2',
      alternateBgColor: 'bg-gray-100',
      fgColor: 'text-gray-100',
      alternateFgColor: 'text-gray-900',
      id: 'actualites',
    },
    {
      title: 'Prendre contact',
      image: '/images/flowers_5.jpg',
      bgColor: 'bg-c-yellow-2',
      fgColor: 'text-gray-900',
      id: 'prendre-contact',
    },
  ] as Section[],
}

export interface Actualite {
  title?: string
  date: string
  /**
   * Image URL
   */
  image: string
  lightImage: boolean
  id: string
}
