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
  font-size: 1.5em;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2.5em;
}

h3 {
  font-size: 2.25em;
}

h4 {
  font-size: 2em;
}

h5 {
  font-size: 1.75em;
}

h6 {
  font-size: 1.25em;
}

p {
  font-size: 1em;
}


#header {
  height: 76px;
}

#main-content {
  min-height: calc(100vh - 76px - 68px); /* screen height - header - footer */
}

#footer {
  height: 68px;
}

</style>
