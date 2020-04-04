<template>
  <div id="app">
    <Header id="header"/>
    <div id="main-content">
      <router-view></router-view>
    </div>
    <Footer id="footer"/>
  </div>
</template>

<script>

import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

#header {
  height: $header_height;
}

#main-content {
  min-height: $page_min_height;
}

#footer {
  height: $footer_height;
}

</style>
