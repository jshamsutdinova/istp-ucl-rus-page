export default ({
  name: 'MemberInfo',

  props: {
    full_name: String,
    name_eng: String,
    institute: String,
    description: String
  },

  data: () => ({
    show: false
  })
})
