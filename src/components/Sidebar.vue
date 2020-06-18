<template>
  <div>
    <ul class="sidebarList">
      <li class="sidebarLi" @click="toggleSonar()">
        <img id="sonar" src="../../public/UI/sonar.svg" />
      </li>
      <li class="sidebarLi" @click="toggleShock()">
        <img id="shock" src="../../public/UI/shock.svg" />
      </li>
      <ul class="sidebarList">
        <li class="sidebarLi" @click="toggleA()">
          <img id="a" src="../../public/UI/a.svg" />
        </li>
        <li class="sidebarLi" @click="toggleD()">
          <img id="d" src="../../public/UI/d.svg" />
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      filter: "sonar"
    };
  },
  methods: {
    toggleSonar() {
      this.filter = "sonar";
      document.getElementById("sonar").style.filter =
        "invert(0.5) sepia(1) brightness(1) saturate(3) hue-rotate(90deg)";
      document.getElementById("shock").style.filter = "invert(0)";
      this.$emit("updateFilter", this.filter);
    },
    toggleShock() {
      this.filter = "shock";
      document.getElementById("sonar").style.filter = "invert(0)";
      document.getElementById("shock").style.filter =
        "invert(0.5) sepia(1) brightness(1) saturate(3) hue-rotate(90deg)";
      this.$emit("updateFilter", this.filter);
    },
    toggleWallbang() {
      console.log("wip");
      this.$emit("updateFilter", this.filter);
    },
    toggleA() {
      document.getElementById("a").style.filter =
        "invert(0.5) sepia(1) brightness(1) saturate(3) hue-rotate(90deg)";
      document.getElementById("d").style.filter = "invert(0)";
      this.$emit("updateSide", "t");
    },
    toggleD() {
      console.log("d");
      document.getElementById("d").style.filter =
        "invert(0.5) sepia(1) brightness(1) saturate(3) hue-rotate(90deg)";
      document.getElementById("a").style.filter = "invert(0)";
      this.$emit("updateSide", "ct");
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  background: black;
  /* border-right: 1px solid rgb(136, 136, 136); */
  height: calc(100% - 56px);
  width: 100px;
}

li {
  list-style-type: none;
}
.sidebarList {
  padding-left: 0;
  padding-top: 20px;
  margin-top: 5px;
}
.sidebarLi {
  padding-top: 20px;
  cursor: pointer;
}
#sonar {
  filter: invert(0.5) sepia(1) brightness(1) saturate(3) hue-rotate(90deg);
}
#a {
  filter: invert(0.5) sepia(1) brightness(1) saturate(3) hue-rotate(90deg);
}
</style>
