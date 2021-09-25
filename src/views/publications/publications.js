import PublicationInfo from '@/components/card/publication-info/publication-info.vue'

export default ({
  name: 'Results',

  components: {
    'publication-info': PublicationInfo
  },

  data: () => ({
    publications: [
      {
        id: 1,
        authors: 'Куприянова Е.Г., Колотков Д.Ю., Кашапова Л.К., Кудрявцева А.В., Тан Ч.-М., Рид Х.А.С.',
        title: '"О ПРИРОДЕ КПП В СЛАБОЙ СОЛНЕЧНОЙ ВСПЫШКЕ ПО ДАННЫМ РАДИОГЕЛИОГРАФОВ НОВОГО ПОКОЛЕНИЯ"',
        source: 'Сборник тезисов 16-ой ежегодной конференции Физика Плазмы в Солнечной Системе 8-12 Февраля 2021, Институт Космический Исследований РАН, Москва, Россия, С.54',
        url: 'https://plasma2021.cosmos.ru/docs/2021/PLASMA-2021-AbstractBook-0202.pdf'
      },
      {
        id: 2,
        authors: 'Hamish A.S. Reid, Larisa K. Kashapova, Elena G. Kupriyanova, Jinge Zhang',
        title: '"Possible microwave sources of type III storms on 10th April 2019"',
        source: 'Abstract Book',
        url: 'https://ras.ac.uk/nam-2021/hamish-reid'
      },
      {
        id: 3,
        authors: 'Алтынцев А.Т., Жданов Д.А., Мешалкина Н.С., Мышьяков И.И., Reid H.A.S.',
        title: '"О связи микроволнового излучения и метровых всплесков III типа в слабых транзиентных событиях"',
        source: 'Сборник тезисов Всероссийской астрономической конференции "Астрономия в эпоху многоканальных исследований" 23-28 августа 2021, ГАИШ МГУ имени М.В. Ломоносова, Москва, Россия, С.341',
        url: 'https://www.vak2021.ru/wp-content/uploads/2021/08/vak2021_abstracts.pdf'
      },
      {
        id: 4,
        authors: 'Elena Kupriyanova, Dmirtii Kolotkov, Larisa Kashapova, Anastasiya Kudryavtseva, Zhang J., Reid H.A.S.',
        title: '"Different properties of microwave and metric QPPs in a solar radio burst"',
        source: 'Abstract Book',
        url: 'https://indico.ict.inaf.it/event/794/contributions/9623/contribution.pdf'
      },
      {
        id: 5,
        authors: 'Куприянова E.Г., Кашапова Л.К., Reid H.A.S., Zhang J.',
        title: '"Микроволновый  источник радиовсплесков III  типа по  данным  СРГ  и LOFAR"',
        source: 'Сборник тезисов',
        url: 'https://sun.crao.ru/images/conference/2021/report/Kuprianova1.pdf'
      },
      {
        id: 6,
        authors: 'Куприянова E.Г., Кашапова Л.К., Reid  H.A.S., Zhang J.',
        title: '"О микроволновых источниках шумовых бурь радиовсплесков III типа 10 апреля 2019 г."',
        source: 'Сборник тезисов Всероссийской астрономической конференции "Астрономия в эпоху многоканальных исследований" 23-28 августа 2021, ГАИШ МГУ имени М.В. Ломоносова, Москва, Россия, С.359',
        url: 'https://www.vak2021.ru/wp-content/uploads/2021/08/vak2021_abstracts.pdf'
      },
      {
        id: 7,
        authors: 'Алтынцев A.T., Лесовой С.В., Мешалкина Н.С., Глоба М.В., Жданов Д.А., Мышьяков И.И., Reid H.A.S.',
        title: '"Многоволновый радиогелиограф: слабые транзиентные явления в короне Солнца"',
        source: 'Сборник тезисов',
        url: 'https://sun.crao.ru/images/conference/2021/report/Altyncev.pdf'
      }
    ]
  })
})
