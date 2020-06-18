<template>
  <div class="screen bg">
    <div class="pageWrapper">
      <div class="contentWrapper">
        <div class="leftBox">
          <img class="pics" :src="images[0]" />
          <img class="pics" :src="images[1]" />
        </div>
        <div class="rightBox">
          <div class="rightImageDiv">
            <img
              v-if="drawState == true"
              class="picRight rightBoxContent"
              :src="images[2]"
            />
            <img
              v-if="drawState == false"
              class="picRight rightBoxContent"
              :src="images[3]"
            />

            <span class="imageIcons">
              <img
                @click="toggleDraw()"
                class="drawIcon icon rightBoxContent"
                src="../../public/UI/draw_icon.svg"
              />
              <img
                @click="toggleInfo()"
                class="infoIcon icon rightBoxContent"
                src="../../public/UI/information_icon.svg"
              />
            </span>

            <span v-if="showTip == true" class="tip">
              <p>
                {{ instructions }}
              </p>
            </span>
          </div>

          <div class="shockBox rightBoxContent">
            <img class="bar" :src="images[4]" />
            <img class="bounce" :src="images[5]" />
          </div>
        </div>
        <div class="ui">
          <img
            class="uiIcon icon"
            @click="close()"
            src="../../public/UI/close.svg"
          />
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
    location: {
      type: String,
    },
    instructions: {
      type: String,
    },
  },
  data() {
    return {
      imgs: [],
      drawState: false,
      showTip: false,
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
    toggleDraw() {
      console.log(this.drawState);
      if (this.drawState == true) {
        this.drawState = false;
        console.log("yes");
      } else {
        this.drawState = true;
      }
    },
    toggleInfo() {
      if (this.showTip == true) {
        this.showTip = false;
      } else {
        this.showTip = true;
      }
      console.log(this.instructions);
    },
  },
};
</script>

<style>
@media (max-width: 1399px) {
  html {
    height: auto;
  }
}
</style>
<style scoped>
.icon {
  cursor: pointer;
}
@media (max-width: 1399px) {
  html {
    height: 10px;
  }
  .pageWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    /* border: 1px dashed black; */
    background-image: url("../../public/UI/background.svg");
    background-size: cover;
  }
  .contentWrapper {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    /* border: 1px dashed blue; */
  }
  .leftBox {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    /* border: 1px dashed #f0f; */
    background-color: rgba(0, 0, 0, 0);
  }
  .rightBox {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px dashed #f0f; */
    background-color: rgba(0, 0, 0, 0);
  }
  .rightImageDiv {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }
  .rightImageDiv .imageIcons {
    position: absolute;
    bottom: 0px;
    left: 10%;
  }
  .shockBox {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    /* border: 1px dashed green; */
    background-color: rgba(0, 0, 0, 0);
  }
  .rightBoxContent {
    margin-bottom: 10px;
  }
  .pics {
    width: 80%;
    height: auto;
    margin-bottom: 50px;
    /* border: 1px solid rgb(143, 143, 143); */
  }
  .picRight {
    width: 80%;
    height: auto;
    /* border: 1px solid rgb(143, 143, 143); */
  }
  .screen {
    display: flex;
    height: 100%;
  }
  .ui {
    position: absolute;
    height: calc(97% - 56px);
    top: 150px;
    left: 93%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: rgba(0, 0, 0, 0);
  }
  .uiIcon {
    margin-bottom: 10px;
    height: 30px;
    width: 30px;
  }
  .tip {
    position: absolute;
    bottom: 50%;
    width: 300px;
    left: 11%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20%;
  }
  .tip p {
    color: white;
    margin-bottom: 0;
  }
}
@media (min-width: 992px) {
  .ui {
    position: absolute;
    height: calc(97% - 56px);
    top: 80px;
    left: 93%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: rgba(0, 0, 0, 0);
  }
  .tip {
    position: absolute;
    bottom: 50%;
    width: 300px;
    left: 11%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20%;
  }
  .tip p {
    color: white;
    margin-bottom: 0;
  }
}
@media (min-width: 1400px) {
  .pageWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    /* border: 1px dashed black; */
    background-image: url("../../public/UI/background.svg");
    background-size: cover;
  }
  .contentWrapper {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    /* border: 1px dashed blue; */
  }
  .leftBox {
    height: 642px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin-left: 50px;
    /* padding: 100px; */
    /* border: 1px dashed #f0f; */
    background-color: rgba(0, 0, 0, 0);
  }
  .rightBox {
    height: 642px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    /* padding: 100px; */
    /* border: 1px dashed #f0f; */
    background-color: rgba(0, 0, 0, 0);
  }
  .rightImageDiv {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }
  .rightImageDiv .imageIcons {
    position: absolute;
    bottom: 0px;
    left: 10%;
  }
  .tip {
    position: absolute;
    bottom: 50%;
    width: 300px;
    left: 11%;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20%;
  }
  .tip p {
    color: white;
    margin-bottom: 0;
  }
  .shockBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px dashed green; */
    background-color: rgba(0, 0, 0, 0);
  }
  .rightBoxContent {
    margin-bottom: 10px;
  }
  .pics {
    width: 518px;
    height: 291px;
    margin-bottom: 50px;
    border: 1px solid rgb(143, 143, 143);
  }
  .picRight {
    width: 80%;
    height: auto;
    border: 1px solid rgb(143, 143, 143);
  }
  .screen {
    display: flex;
    height: 100%;
  }
  .ui {
    position: absolute;
    height: calc(97% - 56px);
    /* top: calc(10% - 56px); */
    left: 97%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: rgba(0, 0, 0, 0);
  }
  .uiIcon {
    margin-bottom: 10px;
    height: 30px;
    width: 30px;
  }
}
/*

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
