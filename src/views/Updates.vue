<template>
  <div class="updates">
    <div class="content">
      <h1>Update History</h1>
      <ul>
        <li>07/13/2020 - Fixed css for smaller screens, added new shocks for default plants and sonars on Haven/Split/Bind, added this page</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Updates",
  methods: {}
};
</script>

<style scoped>
.updates {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.content {
  width: 50%;
}
h1 {
  margin-top: 5%;
  color: whitesmoke;
  font-size: 50px;
}
li {
  margin-top: 5%;
  color: whitesmoke;
  font-size: 20px;
}
p {
  font-size: 20px;
  margin-top: 20px;
  color: whitesmoke;
}
a {
  color: red;
}
</style>
