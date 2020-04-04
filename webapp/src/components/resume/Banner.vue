<template>
  <b-container fluid class="banner_section">
    <b-row>
      <b-col align="center">
        <img class="avatar_img" src="/avatar.png" alt="avatar"/>
        <h1>Hello! I am Ernest</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" align="center">
        <p>Software Engineer - Self-Proclaimed Philosopher - Cookie Monster</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>

.banner_section {
  background-color: #1abc9c;
  color: white;
  padding: 15px;
}

.avatar_img {
  max-height: 30vh;
  width: auto;
}


</style>
