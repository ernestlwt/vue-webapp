module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss"; @import "@/styles/_fonts.scss";`
      }
    }
  }
}
