<template>
  <div>
    <ul class="sidebarList">
      <li class="sidebarLi" @click="toggleSonar()">
        <img id="sonar" src="../../public/UI/sonar.svg" />
      </li>
      <li class="sidebarLi" @click="toggleShock()">
        <img id="shock" src="../../public/UI/shock.svg" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      filter: "sonar",
    };
  },
  methods: {
    toggleSonar() {
      this.filter = "sonar";
      document.getElementById("sonar").style.filter = "invert(1)";
      document.getElementById("shock").style.filter = "invert(0)";
      this.$emit("updateFilter", this.filter);
    },
    toggleShock() {
      this.filter = "shock";
      document.getElementById("sonar").style.filter = "invert(0)";
      document.getElementById("shock").style.filter = "invert(1)";
      this.$emit("updateFilter", this.filter);
    },
    toggleWallbang() {
      console.log("wip");
      this.$emit("updateFilter", this.filter);
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  background: #b3b0aa;
  border-right: 1px solid rgb(136, 136, 136);
  height: 100%;
  width: 100px;
}
li {
  list-style-type: none;
}
.sidebarList {
  padding-left: 0;
  padding-top: 20px;
}
.sidebarLi {
  padding-top: 10px;
}
#sonar {
  filter: invert(1);
}
</style>
