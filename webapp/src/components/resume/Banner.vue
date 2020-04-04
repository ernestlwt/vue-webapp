<template>
  <b-container fluid class="banner_section d-flex">
    <b-container class="banner_section d-flex">
      <b-row class="banner_row justify-content-sm-center">
        <b-col sm="auto" align="center" align-self="center">
          <img class="avatar_img" src="/avatar.png" alt="avatar"/>
        </b-col>
        <b-col align-self="center">
          <h1>Ernest Lim</h1>
          <h6>
            Software Engineer in Singapore
          </h6>
          <p>
            I am passionate in programming. Enjoys learning how to use new technologies and full-stack development.
            Even this website is just a mini-project for me to learn Vuejs and Google Cloud. I intend to add more
            mini-project to this site. Stay tuned!
          </p>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style lang="scss">

.banner_section {
  background-color: #1abc9c;
  color: white;
  min-height: 50vh;
}

.banner_row {
  flex: 1;
}

.avatar_img {
  max-height: 30vh;
  max-width: 100vh;
  width: auto;
}


</style>
