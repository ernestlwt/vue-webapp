<template>
  <b-container fluid class="experience_section py-5">
    <b-container class="align-middle">
      <b-row>
        <b-col>
          <h1 class="experience_header">Work Experiences</h1>
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
          description: "Experiment and evaluate state of the art computer vision techniques. Also does rapid prototyping to create minimum viable products to quickly learn feedback from end users"
        },{
          company: "NTUC Income",
          position: "Intern",
          period: "2018 May - 2018 August",
          description: "Help to implement Test driven development by creating unit tests on existing applications. Also help to integrated batch jobs to enable Devops Implementation. Completed the internship as one of the top 3 performing intern and also won a Design Thinking Hackathon as part of the internship"
        },{
          company: "BanffCyber",
          position: "Intern",
          period: "2017 May - 2017 August",
          description: "Assisted in pre-sales and solution demonstration. A web defacement showcase was created to better demonstrate the propietary defacement monitoring solution"
        },{
          company: "Centre of Strategic Infocomm Technologies",
          position: "Intern",
          period: "2012 April - 2012 July",
          description: "As part of the scholarship programme, I interned at CSIT to create a tool that can obtain statistics of background applications on Windows XP"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.experience_section {
  background-color: #F2E9DC;
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.experience_header {
  color: #444444;
}

.experience_card {
  width: 100%;
}

</style>
