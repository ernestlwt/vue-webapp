<template>
  <div>
    <Banner />
    <About />
    <Experience />
  </div>
</template>

<script>
import Banner from './resume/Banner'
import About from './resume/About'
import Experience from './resume/Experience'

export default {
  name: 'Homepage',
  components: {
    Banner,
    About,
    Experience
  }
}
</script>
