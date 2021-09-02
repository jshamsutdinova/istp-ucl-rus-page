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
      }
    ]
  })
})
