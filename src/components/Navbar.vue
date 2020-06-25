<template>
  <div>
    <b-navbar class="navbar-custom shadow-sm" toggleable="lg">
      <b-navbar-brand to="/" href="#">
        <img class="logo" src="../../public/UI/logo.svg" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="navItems" @click="() => $router.push('About')" href="#">Contact</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {}
};
</script>

<style scoped>
.logo {
  transform: scale(1.4);
  margin-left: 20px;
}
.navbar-custom {
  background-color: black;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}
/* Modify brand and text color */
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: #f74654;
}
</style>
