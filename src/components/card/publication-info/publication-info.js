export default ({
  name: 'PublicationInfo',

  props: {
    authors: String,
    title: String,
    source: String,
    url: String
  },

  methods: {
    openArticle: function (url) {
      window.open(url, '_blank')
    }
  }
})
