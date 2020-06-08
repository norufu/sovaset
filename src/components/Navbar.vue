<template>
  <div>
    <b-navbar class="navbar-custom shadow-sm" toggleable="lg">
      <b-navbar-brand to="/" href="#">SS</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="navItems" href="#">Characters</b-nav-item>
        <b-nav-item class="navItems" href="#">Wallbangs</b-nav-item>
        <b-nav-item class="navItems" href="#">Plants</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {},
};
</script>

<style scoped>
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
