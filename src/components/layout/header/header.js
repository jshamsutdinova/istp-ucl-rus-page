export default ({
  name: 'Header',

  data: () => ({
    drawer: false,
    group: null,
    buttons: [
      { name: 'Главная', link: '/', icon: 'mdi mdi-home' },
      { name: 'Участники', link: '/members', icon: 'mdi mdi-human-male-female' },
      { name: 'Публикации', link: '/publications', icon: 'mdi mdi-book-open-variant' },
      { name: 'Презентации', link: '/presentations', icon: 'mdi mdi-presentation' },
      { name: 'Результаты', link: '/highlights', icon: 'mdi mdi-format-color-highlight' }
    ]
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }

})
