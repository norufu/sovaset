<template>
  <div id="split">
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
    <Map v-if="state == 'map'" :mapName="'split'">
      <div class="mapDiv col-10" id="mapDrawings" ref="mapDiv" style="transform: scale(1)">
        <img class="mapParts" src="../../public/splitMini.png" />

        <!-- svg here -->
        <svg
          @click="clickLineup($event)"
          class="mapParts"
          width="848"
          height="901"
          viewBox="0 0 848 901"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="1"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="1"
            data-location="A lobby to ramp"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Line up with about the middle of the rectangular thing on the ground, place crosshair in the center of the building at the height of the faint lines."
          >
            <circle id="Ellipse 1" cx="728" cy="285" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M330.5 300C334.642 300 338 296.642 338 292.5C338 288.358 334.642 285 330.5 285C326.358 285 323 288.358 323 292.5C323 296.642 326.358 300 330.5 300ZM330.5 298.75C333.952 298.75 336.75 295.952 336.75 292.5C336.75 289.048 333.952 286.25 330.5 286.25C327.048 286.25 324.25 289.048 324.25 292.5C324.25 295.952 327.048 298.75 330.5 298.75Z"
              fill="#6468B9"
            />
            <path
              d="M335.5 292.5C335.5 295.261 333.261 297.5 330.5 297.5C327.739 297.5 325.5 295.261 325.5 292.5C325.5 289.739 327.739 287.5 330.5 287.5C333.261 287.5 335.5 289.739 335.5 292.5Z"
              fill="#6468B9"
            />
            <path id="Line 1" d="M723 285L337 292.018" stroke="#24A749" stroke-width="3" />
          </g>

          <g
            id="2"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="2"
            data-location="A lobby to back of A site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the right corner then line up crosshair with the center of the light beem across from the small indent in the roof."
          >
            >
            <path id="Line 1_2" d="M577 86L234 81" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_2" cx="582" cy="86" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M227.5 88C231.642 88 235 84.6421 235 80.5C235 76.3579 231.642 73 227.5 73C223.358 73 220 76.3579 220 80.5C220 84.6421 223.358 88 227.5 88ZM227.5 86.75C230.952 86.75 233.75 83.9518 233.75 80.5C233.75 77.0482 230.952 74.25 227.5 74.25C224.048 74.25 221.25 77.0482 221.25 80.5C221.25 83.9518 224.048 86.75 227.5 86.75Z"
              fill="#6468B9"
            />
            <path
              d="M232.5 80.5C232.5 83.2614 230.261 85.5 227.5 85.5C224.739 85.5 222.5 83.2614 222.5 80.5C222.5 77.7386 224.739 75.5 227.5 75.5C230.261 75.5 232.5 77.7386 232.5 80.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="3"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="3"
            data-location="A lobby to heaven"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Back up against the wall and line up so there is no gap visible between the walls towards site. Put crosshair a bit out from the corner of the black area on the building."
          >
            >
            <path id="Line 2" d="M185 310L551 55" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_3" cx="555" cy="53" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M179.5 321C183.642 321 187 317.642 187 313.5C187 309.358 183.642 306 179.5 306C175.358 306 172 309.358 172 313.5C172 317.642 175.358 321 179.5 321ZM179.5 319.75C182.952 319.75 185.75 316.952 185.75 313.5C185.75 310.048 182.952 307.25 179.5 307.25C176.048 307.25 173.25 310.048 173.25 313.5C173.25 316.952 176.048 319.75 179.5 319.75Z"
              fill="#6468B9"
            />
            <path
              d="M184.5 313.5C184.5 316.261 182.261 318.5 179.5 318.5C176.739 318.5 174.5 316.261 174.5 313.5C174.5 310.739 176.739 308.5 179.5 308.5C182.261 308.5 184.5 310.739 184.5 313.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="4"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="4"
            data-location="Heaven window to A lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand against the left side of heaven window, put crosshair at the sort of square part of the roof that is slightly brighter white than the rest."
          >
            >
            <path id="Line 1_3" d="M243 235L634 85" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_4" cx="238" cy="237" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M640.5 90C644.642 90 648 86.6421 648 82.5C648 78.3579 644.642 75 640.5 75C636.358 75 633 78.3579 633 82.5C633 86.6421 636.358 90 640.5 90ZM640.5 88.75C643.952 88.75 646.75 85.9518 646.75 82.5C646.75 79.0482 643.952 76.25 640.5 76.25C637.048 76.25 634.25 79.0482 634.25 82.5C634.25 85.9518 637.048 88.75 640.5 88.75Z"
              fill="#6468B9"
            />
            <path
              d="M645.5 82.5C645.5 85.2614 643.261 87.5 640.5 87.5C637.739 87.5 635.5 85.2614 635.5 82.5C635.5 79.7386 637.739 77.5 640.5 77.5C643.261 77.5 645.5 79.7386 645.5 82.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="5"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="5"
            data-location="Heaven window to A lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand against the right wall of heaven window, aim at the top of the gray part where it meets the scaffolding."
          >
            >>
            <path id="Line 1_4" d="M253 234L457 85" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_5" cx="250" cy="237" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M462.5 88C466.642 88 470 84.6421 470 80.5C470 76.3579 466.642 73 462.5 73C458.358 73 455 76.3579 455 80.5C455 84.6421 458.358 88 462.5 88ZM462.5 86.75C465.952 86.75 468.75 83.9518 468.75 80.5C468.75 77.0482 465.952 74.25 462.5 74.25C459.048 74.25 456.25 77.0482 456.25 80.5C456.25 83.9518 459.048 86.75 462.5 86.75Z"
              fill="#6468B9"
            />
            <path
              d="M467.5 80.5C467.5 83.2614 465.261 85.5 462.5 85.5C459.739 85.5 457.5 83.2614 457.5 80.5C457.5 77.7386 459.739 75.5 462.5 75.5C465.261 75.5 467.5 77.7386 467.5 80.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="6"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="6"
            data-location="CT spawn to bottom mid"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the board on the wall then aim at the center of the bottom character on the sign."
          >
            >>
            <path id="Line 1_5" d="M165 499L527.014 474.205" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_6" cx="160" cy="499" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M533.5 481C537.642 481 541 477.642 541 473.5C541 469.358 537.642 466 533.5 466C529.358 466 526 469.358 526 473.5C526 477.642 529.358 481 533.5 481ZM533.5 479.75C536.952 479.75 539.75 476.952 539.75 473.5C539.75 470.048 536.952 467.25 533.5 467.25C530.048 467.25 527.25 470.048 527.25 473.5C527.25 476.952 530.048 479.75 533.5 479.75Z"
              fill="#6468B9"
            />
            <path
              d="M538.5 473.5C538.5 476.261 536.261 478.5 533.5 478.5C530.739 478.5 528.5 476.261 528.5 473.5C528.5 470.739 530.739 468.5 533.5 468.5C536.261 468.5 538.5 470.739 538.5 473.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="7"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="7"
            data-location="B site CT to above default"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand against the wall and line up so there is no gap between the wall in front of you and the wall with the B on it. Place crosshair in the gap between the leaves as pictured."
          >
            >>
            <path id="Line 1_6" d="M286 815L122 658" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_7" cx="118" cy="654" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M291.5 827C295.642 827 299 823.642 299 819.5C299 815.358 295.642 812 291.5 812C287.358 812 284 815.358 284 819.5C284 823.642 287.358 827 291.5 827ZM291.5 825.75C294.952 825.75 297.75 822.952 297.75 819.5C297.75 816.048 294.952 813.25 291.5 813.25C288.048 813.25 285.25 816.048 285.25 819.5C285.25 822.952 288.048 825.75 291.5 825.75Z"
              fill="#6468B9"
            />
            <path
              d="M296.5 819.5C296.5 822.261 294.261 824.5 291.5 824.5C288.739 824.5 286.5 822.261 286.5 819.5C286.5 816.739 288.739 814.5 291.5 814.5C294.261 814.5 296.5 816.739 296.5 819.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="8"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="8"
            data-location="Back site b to garage"
            datatype="sonar"
            data-bounces="0"
            data-charge="1"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the back corner of site, aim at the top of the 3rd line on the roof."
          >
            >>
            <path id="Line 1_7" d="M184 893L439.943 829.767" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_8" cx="179" cy="894" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M446.5 835C450.642 835 454 831.642 454 827.5C454 823.358 450.642 820 446.5 820C442.358 820 439 823.358 439 827.5C439 831.642 442.358 835 446.5 835ZM446.5 833.75C449.952 833.75 452.75 830.952 452.75 827.5C452.75 824.048 449.952 821.25 446.5 821.25C443.048 821.25 440.25 824.048 440.25 827.5C440.25 830.952 443.048 833.75 446.5 833.75Z"
              fill="#6468B9"
            />
            <path
              d="M451.5 827.5C451.5 830.261 449.261 832.5 446.5 832.5C443.739 832.5 441.5 830.261 441.5 827.5C441.5 824.739 443.739 822.5 446.5 822.5C449.261 822.5 451.5 824.739 451.5 827.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="9"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="9"
            data-location="B site hell to outside garage"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the T intersection in the bricks on the ground, then place the top left side of the tooltip with the bottom part of the sign."
          >
            >>
            <path id="Line 1_8" d="M317 746L676 756" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_9" cx="312" cy="746" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M682.5 764C686.642 764 690 760.642 690 756.5C690 752.358 686.642 749 682.5 749C678.358 749 675 752.358 675 756.5C675 760.642 678.358 764 682.5 764ZM682.5 762.75C685.952 762.75 688.75 759.952 688.75 756.5C688.75 753.048 685.952 750.25 682.5 750.25C679.048 750.25 676.25 753.048 676.25 756.5C676.25 759.952 679.048 762.75 682.5 762.75Z"
              fill="#6468B9"
            />
            <path
              d="M687.5 756.5C687.5 759.261 685.261 761.5 682.5 761.5C679.739 761.5 677.5 759.261 677.5 756.5C677.5 753.739 679.739 751.5 682.5 751.5C685.261 751.5 687.5 753.739 687.5 756.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="10"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="10"
            data-location="Outside B garage to B heaven"
            datatype="sonar"
            data-bounces="2"
            data-charge="4"
            data-side="t"
            data-difficulty="1"
            data-instructions="Back into the corner and line up the right part of the diamond with the left nub on the pipe."
          >
            >>
            <path id="Line 3" d="M317 662L377 634" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_2" d="M712 888L318 663" stroke="#24A749" stroke-width="3" />
            <path id="Line 1_9" d="M712 888L533 688" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_10" cx="530" cy="685" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_11" cx="712.5" cy="888.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_12" cx="316.5" cy="662.5" r="2.5" fill="#DF2E2E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M383.5 639C387.642 639 391 635.642 391 631.5C391 627.358 387.642 624 383.5 624C379.358 624 376 627.358 376 631.5C376 635.642 379.358 639 383.5 639ZM383.5 637.75C386.952 637.75 389.75 634.952 389.75 631.5C389.75 628.048 386.952 625.25 383.5 625.25C380.048 625.25 377.25 628.048 377.25 631.5C377.25 634.952 380.048 637.75 383.5 637.75Z"
              fill="#6468B9"
            />
            <path
              d="M388.5 631.5C388.5 634.261 386.261 636.5 383.5 636.5C380.739 636.5 378.5 634.261 378.5 631.5C378.5 628.739 380.739 626.5 383.5 626.5C386.261 626.5 388.5 628.739 388.5 631.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="11"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="10"
            data-location="Outside B garage to CT B"
            datatype="sonar"
            data-bounces="2"
            data-charge="4"
            data-side="t"
            data-difficulty="1"
            data-instructions="Back into the corner and line up the right side of the diamond slightly above the nub on the pipe."
          >
            >>">
            <path id="Line 1_10" d="M702 888L533 689" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_3" d="M702 888L300.793 683.405" stroke="#24A749" stroke-width="3" />
            <path id="Line 3_2" d="M299 683L233 740" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_13" cx="530" cy="685" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M227.5 752C231.642 752 235 748.642 235 744.5C235 740.358 231.642 737 227.5 737C223.358 737 220 740.358 220 744.5C220 748.642 223.358 752 227.5 752ZM227.5 750.75C230.952 750.75 233.75 747.952 233.75 744.5C233.75 741.048 230.952 738.25 227.5 738.25C224.048 738.25 221.25 741.048 221.25 744.5C221.25 747.952 224.048 750.75 227.5 750.75Z"
              fill="#6468B9"
            />
            <path
              d="M232.5 744.5C232.5 747.261 230.261 749.5 227.5 749.5C224.739 749.5 222.5 747.261 222.5 744.5C222.5 741.739 224.739 739.5 227.5 739.5C230.261 739.5 232.5 741.739 232.5 744.5Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_14" cx="702.5" cy="888.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_15" cx="299.5" cy="682.5" r="2.5" fill="#DF2E2E" />
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
  name: "Split",
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
  components: {
    Screen,
    Map,
    Sidebar
  },

  methods: {
    closeLineup() {
      this.state = "map";
    },
    loadPics() {
      let imgs = [];
      imgs.push(
        require("../../public/arrows/split/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_setup.png")
      );
      imgs.push(
        require("../../public/arrows/split/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_landing.png")
      );
      imgs.push(
        require("../../public/arrows/split/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_lineup_d.png")
      );
      imgs.push(
        require("../../public/arrows/split/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_lineup.png")
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
#split {
  height: 100%;
  width: 100%;
}
.lineupDiv {
  height: 100%;
}
g:hover line {
  stroke: black;
  stroke-width: 4;
}
</style>
