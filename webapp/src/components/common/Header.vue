<template>
  <div class="header-container">
    <b-navbar class="header-bar" toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-container>
        <b-navbar-brand href="/"><h5>HOME</h5></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" v-on:click="clickProject">PROJECTS</b-nav-item>
            <b-nav-item href="https://github.com/ernestlwt">GITHUB</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    clickProject() {
      alert('Adding projects soon! Stay tuned!')
    }
  }
}
</script>
