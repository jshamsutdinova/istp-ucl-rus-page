module.exports = {
  publicPath: '/mw-sources-of-meter-radio-events/',

  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
