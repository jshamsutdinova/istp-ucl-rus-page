import pdfInfo from '@/components/card/pdf-info/pdf-info.vue'

export default ({
  name: 'Presentation',

  components: {
    'pdf-info-card': pdfInfo
  },

  data: () => ({
    test_files: [
      {
        id: 1,
        name_conf: '16-я ежегодная конференция "Физика плазмы в солнечной системе"',
        date_place: '8-12 февраля 2021, ИКИ РАН, Россия',
        link_conf: 'https://plasma2021.cosmos.ru/',
        presentations: [
          {
            num: 1,
            type: 'Устный доклад',
            title: 'О природе КПП в слабой солнечной вспышке по данным радиогелиографов нового поколения',
            speaker: 'Куприянова Е.Г., ',
            authors: 'Колотков Д.Ю., Кашапова Л.К., Кудрявцева А.В., Zhang J., Reid H.A.S.',
            link: ''
          }
        ]
      },
      {
        id: 2,
        name_conf: 'National Astronomy Meeting, University of Bath',
        date_place: '19 - 23 июля 2021, Великобритания',
        link_conf: 'https://nam2021.org/',
        presentations: [
          {
            num: 1,
            type: 'Стендовый доклад',
            title: 'Possible microwave sources of type III storms on 10th April 2019',
            speaker: 'Hamish A.S. Reid, ',
            authors: 'Larisa K. Kashapova, Elena G. Kupriyanova, Jinge Zhang',
            link: 'https://ras.ac.uk/sites/default/files/NAM/P473%20-%20Reid.pdf'
          }
        ]
      },
      {
        id: 3,
        name_conf: 'Всероссийская астрономическая конференция',
        date_place: '23-28 августа 2021, ГАИШ МГУ, Москва, Россия',
        link_conf: 'https://www.vak2021.ru/',
        presentations: [
          {
            num: 1,
            type: 'Устный доклад',
            title: 'О микроволновых источниках шумовых бурь радиовсплесков III типа 10 апреля 2019 г.',
            speaker: 'Куприянова E.Г., ',
            authors: 'Кашапова Л.К., Кудрявцева А.В., Reid H.A.S., Zhang J.',
            link: 'https://drive.google.com/file/d/1-COes0BNwH6YpJPMjoOD_l_hSxQDZRCG/view?usp=sharing'
          },
          {
            num: 2,
            type: 'Устный доклад',
            title: 'О связи микроволнового излучения и метровых всплесков III типа в слабых транзиентных событиях',
            main_author: 'Алтынцев А.Т., ',
            speaker: 'Жданов Д.А., ',
            authors: 'Мешалкина Н.С., Мышьяков И.И., Reid H.A.S.',
            link: 'https://drive.google.com/file/d/1l2B9P-cIGpeFjxZWssi7weXySZfofBi8/view?usp=sharing'
          }
        ]
      },
      {
        id: 4,
        name_conf: 'Магнетизм и активность Cолнца и звезд',
        date_place: '31 августа - 3 сентября 2021, Крым, Россия',
        link_conf: 'https://sun.crao.ru/conferences/magnetism-and-activity-of-the-sun-and-stars-2021',
        presentations: [
          {
            num: 1,
            type: 'Устный доклад',
            title: 'Микроволновый  источник радиовсплесков III  типа по  данным  СРГ  и LOFAR',
            speaker: 'Куприянова  Е.Г., ',
            authors: 'Кашапова  Л.К., Reid H.A.S., Zhang J.',
            link: 'https://drive.google.com/file/d/1XaxSqjpftse6RmOxbGaHX9hLfwlIXOSt/view?usp=sharing'
          },
          {
            num: 2,
            type: 'Приглашенный доклад',
            title: 'Многоволновый радиогелиограф: слабые транзиентные явления в короне Солнца',
            speaker: 'Алтынцев А.Т., ',
            authors: 'Лесовой С.В., Мешалкина Н.С., Глоба М.В., Жданов Д.А., Мышьяков И.И., Reid H.A.S.',
            link: 'https://drive.google.com/file/d/1sktIZZjXp2utuXkh0jfy2McqmBECKM9Y/view?usp=sharing'
          }
        ]
      },
      {
        id: 5,
        name_conf: '16th European Solar Physics Meeting',
        date_place: '6-10 Сентября 2021, Online',
        link_conf: 'https://indico.ict.inaf.it/event/794/',
        presentations: [
          {
            num: 1,
            type: 'Приглашенный доклад',
            title: 'Radio signatures of solar flares',
            speaker: 'Larisa Kashapova',
            authors: '',
            link: 'https://drive.google.com/file/d/11KPkKdDsq5Iu2cj0knaICMkhpE2wC-8L/view?usp=sharing'
          },
          {
            num: 2,
            type: 'Стендовый доклад',
            title: 'Different properties of microwave and metric QPPs in a solar radio burst',
            speaker: 'Elena Kupriyanova, ',
            authors: 'Dmirtii Kolotkov, Larisa Kashapova, Anastasiya Kudryavtseva, Chengming Tan, Hamish Reid',
            link: 'https://drive.google.com/file/d/19PUXKjk_1mSW3MAJPb-MyZauakoipQNK/view?usp=sharing'
          }
        ]

      }
    ]
  }), // end methods

  methods: {
    openFile: function (url) {
      window.open(url, '_blank')
    }
  }
})
