<template>
  <div id="mapCompDiv">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    mapName: {
      type: String
    }
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
    }
  }
  // window.addEventListener('mousewheel', (e) => { // disabling cause my zooming sucks and is annoying
  // let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
  // this.zoom(wDelta)
  // })
  // document.getElementById('mapDrawing').style.width = '500px'
};
</script>

<style scoped>
@media (max-width: 750px) {
  #mapCompDiv {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 751px) {
  #mapCompDiv {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}

.mapParts {
  position: absolute;
  opacity: 1;
  /* left: 0%; */
}
#mapDrawings {
  /* height: 100px; */
  /* width: 50%; */
  /* top: -50px;
  left: 16%; */
  /* left: 16%; */
}
.lineups {
  cursor: pointer;
}

g:hover path[stroke="#24A749"] {
  stroke: green;
  stroke-width: 5;
  /* stroke-dasharray: 5 3; */
}
g:hover path {
  stroke: #2f3091;
  stroke-width: 1;
}
g:hover circle {
  stroke: rgb(106, 173, 106);
  stroke-width: 1;
}
</style>
