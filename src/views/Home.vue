<template>
  <div class = "home">
    <button class = 'split mapButton' @click="()=>$router.push('Split')">Split</button>
    <button class = 'haven mapButton' @click="()=>$router.push('Haven')">Haven</button>
    <button class = 'bind mapButton' @click="()=>$router.push('Bind')">Bind</button>

    <!-- <button class = "sova agentButton" ></button>
    <button class = "cypher agentButton" ></button>
    <button class = "viper agentButton" ></button> -->

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
.mapButton {
  background-size: 100%;
  width: 150px;
  height: 150px;
  cursor: pointer;
  margin: 30px;
  border-radius: 5px;
  border: solid 1px black;
}
.sova {
  background-image: url("../../public/agents/sovaFace.png");
}
.viper {
  background-image: url("../../public/agents/viperFace.png");
}
.cypher {
  background-image: url("../../public/agents/cypherFace.png");
}
</style>
