<template>
  <div class="home">
    <button
      class="split mapButton"
      @click="() => $router.push('Split')"
    ></button>
    <button
      class="haven mapButton"
      @click="() => $router.push('Haven')"
    ></button>
    <button class="bind mapButton" @click="() => $router.push('Bind')"></button>
    <button
      class="ascent mapButton"
      @click="() => $router.push('ascent')"
    ></button>

    <!-- <button class = "sova agentButton" ></button>
    <button class = "cypher agentButton" ></button>
    <button class = "viper agentButton" ></button> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.home {
  background-color: rgba(0, 0, 0, 0);
}
.mapButton {
  background-size: 100%;
  width: 600px;
  height: 350px;
  cursor: pointer;
  margin: 30px;
  border-radius: 5px;
  border: 1px solid rgb(143, 143, 143);
}
.split {
  background-image: url("../../public/UI/split_cover.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.bind {
  background-image: url("../../public/UI/bind_cover.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.haven {
  background-image: url("../../public/UI/haven_cover.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.ascent {
  background-image: url("../../public/UI/ascent_cover.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
