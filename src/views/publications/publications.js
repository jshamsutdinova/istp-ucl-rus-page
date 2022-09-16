import PublicationInfo from '@/components/card/publication-info/publication-info.vue'
import json from './publication-data.json'

export default ({
  name: 'Results',

  components: {
    'publication-info': PublicationInfo
  },

  data: () => ({
    publications: json.publications
  }),

  mounted () {
    this.publications.sort((a, b) => b.id - a.id)
  }
})
