<template>
  <div>
    <Banner />
    <Experience />
  </div>
</template>

<script>
import Banner from './resume/Banner'
import Experience from './resume/Experience'

export default {
  name: 'Homepage',
  components: {
    Banner,
    Experience
  }
}
</script>
