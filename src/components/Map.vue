<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    mapName: {
      type: String,
    },
  },
  methods: {
    zoom(dir) {
      let div = document.getElementById("mapDrawings");
      let curScale = div.style.transform.replace("scale(", "");
      curScale = curScale.replace(")", "");
      curScale = Number(curScale);
      let newScale = 0;

      if (dir === "down" && curScale > 0.5) {
        newScale = curScale - 0.1;
        div.style.transform = "scale(" + newScale + ")";
      } else if (dir === "up" && curScale < 1.5) {
        newScale = curScale + 0.1;
        div.style.transform = "scale(" + newScale + ")";
      }
    },
  },
};
</script>

<style scoped>
.mapParts {
  position: absolute;
  left: 0%;
}
#mapDrawings {
  /* height: 100px; */
  /* width: 50%; */
  top: -50px;
  left: 10%;
}
.lineups {
  cursor: pointer;
}
</style>
