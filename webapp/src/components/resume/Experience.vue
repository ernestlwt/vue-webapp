<template>
  <b-container fluid class="experience_section">
    <b-container>
      <b-row class="p-3">
        <b-col align="center" class="p-3">
          <h1>Work Experiences</h1>
        </b-col>
      </b-row>
      <b-row class="p-3">
        <b-card title="Defence Science and Technology Agency" sub-title="Engineer, 2019 July - now" class="experience_card">
          <b-card-text>
            Experimentation and prototyping of Computer Vision Related projects
          </b-card-text>
        </b-card>
      </b-row>
      <b-row class="p-3">
        <b-card title="NTUC Income" sub-title="Intern, 2018 May - 2018 August" class="experience_card">
          <b-card-text>
            Develop unit tests for existing web application
          </b-card-text>
          <b-card-text>
            Integrated batch jobs to enable DevOps Integration
          </b-card-text>
          <b-card-text>
            Top 3 performing intern and won a Design Thinking Hackathon as part of the internship programme
          </b-card-text>
        </b-card>
      </b-row>
      <b-row class="p-3">
        <b-card title="Banff Cyber" sub-title="Intern, 2017 May - 2017 August" class="experience_card">
          <b-card-text>
            Assisted in pre-sales and solution demonstration
          </b-card-text>
          <b-card-text>
            Created a web defacement showcase to demonstrate propietary defacement monitoring solution
          </b-card-text>
        </b-card>
      </b-row>
      <b-row class="p-3">
        <b-card title="Centre of Strategic Infocomm Technologies" sub-title="Intern, 2012 April - 2012 July" class="experience_card">
          <b-card-text>
            Created tools to obtain statistic of background application on Windows
          </b-card-text>
        </b-card>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Experience"
}
</script>

<style scoped>

.experience_section {
  background-color: #DBB68F;
  color: #444444;
}

.experience_card {
  width: 100%;
}

</style>
