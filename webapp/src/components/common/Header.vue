<template>
  <div class="header-container">
    <b-navbar class="header-bar" toggleable="lg" type="dark" variant="secondary">
      <b-container>
        <b-navbar-brand href="#">HOME</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">PORTFOLIO</b-nav-item>
            <b-nav-item href="#">ABOUT</b-nav-item>
            <b-nav-item href="#">CONTACT</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>
