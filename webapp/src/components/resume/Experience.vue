<template>
  <b-container fluid class="experience_section">
    <b-container>
      <b-row class="p-3">
        <b-col align="center" class="p-3">
          <h1>Work Experiences</h1>
        </b-col>
      </b-row>
      <ExperienceCard v-for="experience in experiences" v-bind:key="experience.company" v-bind:experience="experience" />
    </b-container>
  </b-container>
</template>

<script>

import ExperienceCard from './ExperienceCard'

export default {
  name: "Experience",
  components: {
    ExperienceCard
  },
  data: function() {
    return {
      experiences: [
        {
          company: "Defence Science and Technology Agency",
          position: "Engineer",
          period: "2019 July - now",
          tasks: [
            "Experimentation and prototyping of Computer Vision Related projects"
          ]
        },{
          company: "NTUC Income",
          position: "Intern",
          period: "2018 May - 2018 August",
          tasks: [
            "Develop unit tests for existing web application",
            "Integrated batch jobs to enable DevOps Implementation",
            "Top 3 performing intern and won a Design Thinking Hackathon as part of Internship"
          ]
        },{
          company: "BanffCyber",
          position: "Intern",
          period: "2017 May - 2017 August",
          tasks: [
            "Assisted in pre-sales and solution demonstration",
            "Created a web defacement showcase to demonstrate propietary defacement monitoring solution"
          ]
        },{
          company: "Centre of Strategic Infocomm Technologies",
          position: "Intern",
          period: "2012 April - 2012 July",
          tasks: [
            "Created a tool to obtain statistics of background application on Windows"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

.experience_section {
  background-color: #EEEEEE;
}

.experience_card {
  width: 100%;
}

</style>
