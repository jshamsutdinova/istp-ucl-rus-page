export default {
  name: 'pdfInfo',

  props: {
    type: String,
    title: String,
    mainAuthor: String,
    authors: String,
    link: String
  },

  methods: {
    openFile: function (url) {
      window.open(url, '_blank')
    }
  }
}
