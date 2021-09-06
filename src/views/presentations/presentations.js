import pdfInfo from '@/components/card/pdf-info/pdf-info.vue'

export default ({
  name: 'Presentation',

  components: {
    'pdf-info-card': pdfInfo
  },

  data: () => ({
    files: [
      {
        id: 1,
        type: 'Устный доклад',
        title: 'Микроволновый  источник радиовсплесков III  типа по  данным  СРГ  и LOFAR',
        mainAuthor: 'Куприянова  Е.Г.',
        authors: 'Кашапова  Л.К., Reid    H.A.S.,    Zhang    J.'
      },
      {
        id: 2,
        type: 'Стендовый доклад',
        title: 'Природа квазипериодических колебаний с очень короткими периодами (1.5–8 сек) в круговой ленточной вспышке 6 августа 2002г',
        mainAuthor: 'Н.С. Мешалкина',
        authors: 'А.Т. Алтынцев, Р.А. Сыч',
        link: 'https://sun.crao.ru/images/conference/2021/poster/Meshalkina_poster.pdf'
      }
    ]
  })
})
