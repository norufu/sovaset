<template>
  <div id="mapStructure">
    <div v-if="state == 'screen'" class="lineupDiv" ref="lineupDiv">
      <screen ref="lineupScreen" :images="imgs" :instructions="currentInstructions"></screen>
    </div>
    <sidebar
      v-if="state == 'map'"
      v-on:updateFilter="updateFilter"
      v-on:updateSide="updateSide"
      ref="sidebar"
      class="sidebar columns"
    ></sidebar>
    <div v-if="state == 'map'" class="mapDiv">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from 'vue'
import Screen from "../components/Screen.vue";
// import Map from "../components/Map.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "MapFunctionality",
  data() {
    return {
      currentLineup: "",
      state: "map",
      zoomLevel: 0,
      filter: "sonar",
      sideFilter: "t",
      imgs: []
    };
  },
  props: {
    mapName: {
      type: String
    }
  },
  components: {
    Screen,
    // Map,
    Sidebar
  },

  methods: {
    closeLineup() {
      this.state = "map";
    },
    loadPics() {
      let imgs = [];
      imgs.push(
        require("../../public/arrows/" +
          this.mapName +
          "/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_setup.png")
      );
      imgs.push(
        require("../../public/arrows/" +
          this.mapName +
          "/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_landing.png")
      );
      imgs.push(
        require("../../public/arrows/" +
          this.mapName +
          "/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_lineup_d.png")
      );
      imgs.push(
        require("../../public/arrows/" +
          this.mapName +
          "/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_lineup.png")
      );
      // console.log(this.imgs);
      switch (this.currentCharge) {
        case "1":
          imgs.push(require("../../public/UI/charge bar 1-v.svg"));
          break;
        case "2":
          imgs.push(require("../../public/UI/charge bar 2-v.svg"));
          break;
        case "3":
          imgs.push(require("../../public/UI/charge bar 3-v.svg"));
          break;
        default:
          imgs.push(require("../../public/UI/charge bar 4-v.svg"));
      }
      switch (this.currentBounce) {
        case "1":
          imgs.push(require("../../public/UI/bounce 1-v.svg"));
          break;
        case "2":
          imgs.push(require("../../public/UI/bounce 2-v.svg"));
          break;
        default:
          imgs.push(require("../../public/UI/bounce 0-v.svg"));
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
      this.currentInstructions = current.getAttribute("data-instructions");

      //hide map, show screens

      // this.$refs.lineupScreen.loadPics(this.loadPics());
      this.imgs = this.loadPics();
      this.state = "screen";
    },
    updateFilter(newFilter) {
      this.filter = newFilter;
    },
    updateSide(newFilter) {
      this.sideFilter = newFilter;
    }
    // changeScale(dir){
    //   var div = document.getElementById('drawings');
    //   div.style.transform = div.style.transform.replace(/scale\([0-9|\.]*\)/, 'scale(' + newScale + ')');
    // }
  }
};
</script>

<style>
#MapStructure {
  height: 100%;
  width: 100%;
  /* background-image: url("../../public/UI/background.svg");
  background-size: cover; */
}
.lineupDiv {
  height: 100%;
}
.mapDiv {
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
