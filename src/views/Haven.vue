<template>
  <div id="haven">
    <div v-if="state == 'screen'" class="lineupDiv" ref="lineupDiv">
      <screen ref="lineupScreen" :images="imgs"></screen>
    </div>
    <sidebar
      v-if="state == 'map'"
      v-on:updateFilter="updateFilter"
      ref="sidebar"
      class="sidebar columns"
    >
    </sidebar>
    <Map v-if="state == 'map'" :mapName="'haven'">
      <div
        class="mapDiv col-10"
        id="mapDrawings"
        ref="mapDiv"
        style="transform: scale(1)"
      >
        <img class="mapParts" src="../../public/havenMap.svg" />
        <svg
          @click="clickLineup($event)"
          class="mapParts"
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            v-if="filter == 'sonar'"
            class="lineups"
            data-id="1"
            data-location="ct spawn to A"
            data-type="sonar"
            data-bounces="0"
            data-charge="1"
            data-side="CT"
            data-difficulty="1"
          >
            <circle cx="147" cy="507" r="6" fill="#77DEFF" />
            <line
              x1="145.736"
              y1="506.192"
              x2="406.736"
              y2="98.1917"
              stroke="#77DEFF"
              stroke-width="3"
            />
            <path
              d="M407.5 90L414.861 102.75H400.139L407.5 90Z"
              fill="#3D9A35"
            />
          </g>
          <g
            v-if="filter == 'shock'"
            class="lineups"
            data-id="2"
            data-location="a long to garden"
            data-type="shock"
            data-bounces="0"
            data-charge="1"
            data-side="CT"
            data-difficulty="2"
          >
            <line
              x1="505.942"
              y1="125.833"
              x2="801.942"
              y2="364.833"
              stroke="#77DEFF"
              stroke-width="3"
            />
            <circle cx="505" cy="127" r="6" fill="#77DEFF" />
            <path
              d="M800.5 357L807.861 369.75H793.139L800.5 357Z"
              fill="#3D9A35"
            />
            <defs>
              <clipPath id="clip0">
                <rect x="141" y="90" width="268" height="427" fill="white" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </div>
    </Map>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from 'vue'
import Screen from "../components/Screen.vue";
import Map from "../components/Map.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Haven",
  data() {
    return {
      currentLineup: "",
      state: "map",
      zoomLevel: 0,
      filter: "sonar",
      imgs: [],
    };
  },
  components: {
    Screen,
    Map,
    Sidebar,
  },
  // window.addEventListener('mousewheel', (e) => { // disabling cause my zooming sucks and is annoying
  // let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
  // this.zoom(wDelta)
  // })
  // document.getElementById('mapDrawing').style.width = '500px'
  methods: {
    closeLineup() {
      this.state = "map";
    },
    loadPics() {
      let imgs = [];
      imgs.push(
        require("../../public/haven/" + this.currentLineup + "/test.jpg")
      );
      imgs.push(
        require("../../public/haven/" + this.currentLineup + "/test1.jpg")
      );
      imgs.push(
        require("../../public/haven/" + this.currentLineup + "/test1.jpg")
      );
      // console.log(this.imgs);
      switch (this.currentCharge) {
        case "1":
          imgs.push(require("../../public/UI/charge bar 1.svg"));
          break;
        case "2":
          imgs.push(require("../../public/UI/charge bar 2.svg"));
          break;
        case "3":
          imgs.push(require("../../public/UI/charge bar 3.svg"));
          break;
        default:
          imgs.push(require("../../public/UI/charge bar max.svg"));
      }
      switch (this.currentBounce) {
        case "1":
          imgs.push(require("../../public/UI/bounce1.svg"));
          break;
        case "2":
          imgs.push(require("../../public/UI/bounce2.svg"));
          break;
        default:
          imgs.push(require("../../public/UI/bounce0.svg"));
      }
      console.log(imgs);
      return imgs;
    },
    clickLineup(e) {
      if (!e.target.closest("g").matches(".lineups")) return; // check if clicking a lineup
      console.log(e.target.closest("g").getAttribute("data-id"));
      let current = e.target.closest("g");
      this.currentLineup = current.getAttribute("data-id");
      this.currentCharge = current.getAttribute("data-charge");
      this.currentBounce = current.getAttribute("data-bounces");
      //hide map, show screens

      // this.$refs.lineupScreen.loadPics(this.loadPics());
      this.imgs = this.loadPics();
      this.state = "screen";
    },
    updateFilter(newFilter) {
      this.filter = newFilter;
    },
    // changeScale(dir){
    //   var div = document.getElementById('drawings');
    //   div.style.transform = div.style.transform.replace(/scale\([0-9|\.]*\)/, 'scale(' + newScale + ')');
    // }
  },
};
</script>

<style>
#haven {
  height: 100%;
  width: 100%;
}
.lineupDiv {
  height: 100%;
}
</style>
