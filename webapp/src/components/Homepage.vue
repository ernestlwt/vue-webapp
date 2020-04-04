<template>
  <div>
    <Banner />
    <Experience />
    <Skill />
  </div>
</template>

<script>
import Banner from './resume/Banner'
import Experience from './resume/Experience'
import Skill from './resume/Skill'


export default {
  name: 'Homepage',
  components: {
    Banner,
    Experience,
    Skill
  }
}
</script>
