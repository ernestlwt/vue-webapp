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

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
#app {
  font-family: 'Raleway', sans-serif;
  color: #2c3e50;
  background-color: 
}

#header {
  height: 58px;
}

#main-content {
  min-height: calc(100vh - 58px - 56px); /* screen height - header - footer */
}

#footer {
  height: 56px;
}

</style>
