<template>
  <div id="app">
    <Header id="header"/>
    <div id="main-content">
      <img alt="Vue logo" src="./assets/logo.png">
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}

#header {
  height: 56px;
}

#main-content {
  min-height: calc(100vh - 56px - 56px); /* screen height - header - footer */
}

#footer {
  height: 56px;
}

</style>
