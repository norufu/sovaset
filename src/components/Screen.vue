<template>
  <div class="screen bg">
    <div class="ui">
      <img class="uiIcon" @click="share()" src="../../public/UI/share.svg" />
      <img class="uiIcon" @click="issue()" src="../../public/UI/report.svg" />
      <img class="uiIcon" @click="close()" src="../../public/UI/close.svg" />
    </div>
    <div class="pageWrapper">
      <div class="contentWrapper">
        <div class="leftBox">
          <img class="pics" :src="images[0]" />
          <img class="pics" :src="images[1]" />
        </div>
        <div class="rightBox">
          <img class="p3" :src="images[2]" />
          <div class="shockBox">
            <img class="bar" :src="images[3]" />
            <img class="bounce" :src="images[4]" />
          </div>
        </div>
      </div>
    </div>
    <!-- <img class = 'bg' src="../../public/background.svg"> -->

    <!-- <img ref = "lu" :src="'../../public/haven/' + this.lineup + '/test.jpg'"> -->

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Screen",
  props: {
    images: {
      type: Array,
    },
  },
  data() {
    return {
      imgs: [],
    };
  },
  methods: {
    close() {
      this.imgs = [];
      this.$parent.closeLineup();
    },
    issue() {
      console.log("wip issue");
    },
    share() {
      console.log("wip share");
    },
  },
};
</script>

<style scoped>
.pageWrapper {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px dashed black;
}
.contentWrapper {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  border: 1px dashed blue;
}
.leftBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px;
  border: 1px dashed #f0f;
}
.rightBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px;
  border: 1px dashed #f0f;
}
.shockBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px dashed green;
}
.pics {
  width: 320px;
  height: 180px;
}
/* .bg {
    position: absolute;
    left:0px;
    width:1920px;
    height:1080px;
  }
  .screen {
    position: grid;

    background-image: url("../../public/UI/background.svg")
  }
  .p1 {
    position: absolute;
    left:3%;
    top:5%;
    width: 533px;
    height: 300px;
  }
  .p2 {
    position: absolute;
    left: 3%;
    top: 46%;
    width: 533px;
    height: 300px;
  }
  .p3 {
    position: absolute;
    left: 34%;
    top: 6%;
    width: 1200px;
    height: 675px;
  }
  .bar {
    position: absolute;
    top: 72%;
    left: 50%;
  }
  .bounce {
    position: absolute;
    top: 80%;
    left: 65%;
    transform: scale(1.5);

  }
  .uiIcon:hover {
    cursor: pointer;
  }
  .uiIcon {
    margin: 5px;
  }

  button {
    width: 30px;
    height: 30  px;
  }
  .exit {
    color:red;
  }

  .ui {
    display: absolute;
    float: right;
    margin-right: 25px;
    margin-top: 5px;
    background-color:rgba(0, 0, 0, 0) 
  }
*/
</style>
