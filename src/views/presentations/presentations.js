import pdfInfo from '@/components/card/pdf-info/pdf-info.vue'
import json from './presentations-data.json'

export default ({
  name: 'Presentation',

  components: {
    'pdf-info-card': pdfInfo
  },

  data: () => ({
    files: json.files
  }), // end data

  methods: {
    openFile: function (url) {
      window.open(url, '_blank')
    }
  }, // end methods

  mounted () {
    this.files.sort((a, b) => b.id - a.id)
  }
})
