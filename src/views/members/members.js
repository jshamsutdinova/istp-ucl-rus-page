import MemberInfo from '@/components/card/member-info/member-info.vue'

export default ({
  name: 'Members',

  components: {
    'member-info': MemberInfo
  },

  data: () => ({
    british_members: [
      {
        id: 1,
        name: 'Хемиш Рид (Р)',
        name_eng: 'Hamish Reid (PI)',
        institute: 'University College London',
        description: 'Ускорение электронов и их последующий перенос через солнечную корону и солнечный ветер'
      },
      {
        id: 2,
        name: 'Сара Мэттью',
        name_eng: 'Sarah Matthews',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 3,
        name: 'Дэвид Лонг',
        name_eng: 'David Long',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 4,
        name: 'Джерардо Варлори',
        name_eng: 'Gherardo Varlori',
        institute: 'University College London',
        description: 'Research interests'
      },
      {
        id: 5,
        name: 'Райн Френч',
        name_eng: 'Ryan French',
        institute: 'University College London',
        description: 'Взрывное выделение энергии при солнечных вспышках, сочетающее EUV / UV-спектроскопию (например, Hinode-EIS и IRIS) с наземными коронографами (CoMP и K-Cor)'
      },
      {
        id: 6,
        name: 'Джинг Танг',
        name_eng: 'Jinge Zhang',
        institute: 'University College London',
        description: 'Изучение переноса ускоренных электронов и закрытых магнитных трубок в солнечной короне путем анализа всплесков типа J и U, наблюдаемых LOFAR'
      },
      {
        id: 7,
        name: 'Камилла Лорфинг',
        name_eng: 'Camile Lorfing',
        institute: 'University College London',
        description: 'Research interests'
      }
    ],
    russian_members: [
      {
        id: 1,
        name: 'Александр Алтынцев (Р)',
        institute: 'Институт Солнечно-Земной Физики',
        shortNameInst: 'Инст. Солнечно-Земной Физики',
        description: 'Солнечная радиоастрономия, переходные процессы, солнечные вспышки, ускорение электронов'
      },
      {
        id: 2,
        name: 'Лариса Кашапова',
        institute: 'Институт Солнечно-Земной Физики',
        shortNameInst: 'Инст. Солнечно-Земной Физики',
        description: 'Процессы выделения и переноса энергии при солнечных вспышках'
      },
      {
        id: 3,
        name: 'Наталия Мешалкина',
        institute: 'Институт Солнечно-Земной Физики',
        shortNameInst: 'Инст. Солнечно-Земной Физики',
        description: 'Процессы пересоединения в солнечных вспышках, источники тонкой временной структуры микроволнового излучения в солнечных вспышках, свойства и характеристики источников вспышек в радио- и жестком рентгеновском излучениях'
      },
      {
        id: 4,
        name: 'Елена Куприянова',
        institute: 'Обсерватория Пулково',
        shortNameInst: 'Обсерватория Пулково',
        description: 'Квазипериодические пульсации при многоволновом излучении солнечных вспышек'
      },
      {
        id: 5,
        name: 'Дмитрий Жданов',
        institute: 'Институт Солнечно-Земной Физики',
        shortNameInst: 'Инст. Солнечно-Земной Физики',
        description: 'Микроволновые тонкие структуры солнечных вспышек и микроволновые динамические спектры, наблюдаемые с помощью широкополосного микроволнового спектрополяриметра Бадары (ББМС)'
      },
      {
        id: 6,
        name: 'Иван Мышьяков',
        institute: 'Институт Солнечно-Земной Физики',
        shortNameInst: 'Инст. Солнечно-Земной Физики',
        description: 'Восстановление коронального магнитного поля'
      }
    ]
  }) // end data()

})
