<template>
  <div id="app">
    <Navbar id="nav" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
html {
  height: calc(100% - 56px);
  background-color: #ece9e1;
}
body {
  background-color: #ece9e1;
  height: 100%;
  /* height: calc(100% - 56px); */
}

div {
  background-color: #ece9e1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
