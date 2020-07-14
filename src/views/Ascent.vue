<template>
  <div id="ascent">
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
      <Map class="mapComp" v-if="state == 'map'" :mapName="'ascent'">
        <img class="mapParts scaleDownRotate" src="../../public/ascentMini.png" />

        <!-- svg here -->
        <svg
          @click="clickLineup($event)"
          class="mapParts scaleDownRotate"
          width="945"
          height="885"
          viewBox="0 0 945 885"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="1"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="1"
            data-location="B switch to B lobby"
            datatype="sonar"
            data-bounces="1"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the cornern then put crosshair at the point on the roof in the background."
          >
            <path id="Line 1" d="M213 687L413 543" stroke="#24A749" stroke-width="3" />
            <path id="Line 2" d="M591 662L414 543" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1" cx="209" cy="690" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_2" cx="413.5" cy="542.5" r="2.5" fill="#DF2E2E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M596.5 673C600.642 673 604 669.642 604 665.5C604 661.358 600.642 658 596.5 658C592.358 658 589 661.358 589 665.5C589 669.642 592.358 673 596.5 673ZM596.5 671.75C599.952 671.75 602.75 668.952 602.75 665.5C602.75 662.048 599.952 659.25 596.5 659.25C593.048 659.25 590.25 662.048 590.25 665.5C590.25 668.952 593.048 671.75 596.5 671.75Z"
              fill="#6468B9"
            />
            <path
              d="M601.5 665.5C601.5 668.261 599.261 670.5 596.5 670.5C593.739 670.5 591.5 668.261 591.5 665.5C591.5 662.739 593.739 660.5 596.5 660.5C599.261 660.5 601.5 662.739 601.5 665.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="2"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="2"
            data-location="B stairs to A long Gelato"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand at the top of the steps against the back wall, place top of left diamond just under the roof."
          >
            >
            <path id="Line 1_2" d="M180 678L669 222" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_3" cx="177" cy="681" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M673.5 225C677.642 225 681 221.642 681 217.5C681 213.358 677.642 210 673.5 210C669.358 210 666 213.358 666 217.5C666 221.642 669.358 225 673.5 225ZM673.5 223.75C676.952 223.75 679.75 220.952 679.75 217.5C679.75 214.048 676.952 211.25 673.5 211.25C670.048 211.25 667.25 214.048 667.25 217.5C667.25 220.952 670.048 223.75 673.5 223.75Z"
              fill="#6468B9"
            />
            <path
              d="M678.5 217.5C678.5 220.261 676.261 222.5 673.5 222.5C670.739 222.5 668.5 220.261 668.5 217.5C668.5 214.739 670.739 212.5 673.5 212.5C676.261 212.5 678.5 214.739 678.5 217.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="3"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="3"
            data-location="B lobby to market"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner, align the top of the 2nd tick in the charge bar with the top right of the window then step forward a bit by tapping W."
          >
            >>
            <path id="Line 1_3" d="M583 736L234 514" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_4" cx="587" cy="739" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M228.5 518C232.642 518 236 514.642 236 510.5C236 506.358 232.642 503 228.5 503C224.358 503 221 506.358 221 510.5C221 514.642 224.358 518 228.5 518ZM228.5 516.75C231.952 516.75 234.75 513.952 234.75 510.5C234.75 507.048 231.952 504.25 228.5 504.25C225.048 504.25 222.25 507.048 222.25 510.5C222.25 513.952 225.048 516.75 228.5 516.75Z"
              fill="#6468B9"
            />
            <path
              d="M233.5 510.5C233.5 513.261 231.261 515.5 228.5 515.5C225.739 515.5 223.5 513.261 223.5 510.5C223.5 507.739 225.739 505.5 228.5 505.5C231.261 505.5 233.5 507.739 233.5 510.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="4"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="4"
            data-location="T spawn near A to catwalk"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Standing against the wall, line the right side of the charge bar up with the line in the bricks. Put the T with the roof and the line running vertically in the center of the left diamond."
          >
            >>>
            <path id="Line 1_4" d="M397 291L661 282" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_5" cx="666" cy="281" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M390.5 299C394.642 299 398 295.642 398 291.5C398 287.358 394.642 284 390.5 284C386.358 284 383 287.358 383 291.5C383 295.642 386.358 299 390.5 299ZM390.5 297.75C393.952 297.75 396.75 294.952 396.75 291.5C396.75 288.048 393.952 285.25 390.5 285.25C387.048 285.25 384.25 288.048 384.25 291.5C384.25 294.952 387.048 297.75 390.5 297.75Z"
              fill="#6468B9"
            />
            <path
              d="M395.5 291.5C395.5 294.261 393.261 296.5 390.5 296.5C387.739 296.5 385.5 294.261 385.5 291.5C385.5 288.739 387.739 286.5 390.5 286.5C393.261 286.5 395.5 288.739 395.5 291.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="5"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="5"
            data-location="A long gelato to A site"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="t"
            data-difficulty="2"
            data-instructions="Wedge yourself between the chair and the table, place crosshair at the bottom right of the flag as shown. Start charging then jump and release the arrow on the way up."
          >
            >>>
            <path id="Line 1_5" d="M257 174L646 201" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_6" cx="651" cy="201" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M250.5 181C254.642 181 258 177.642 258 173.5C258 169.358 254.642 166 250.5 166C246.358 166 243 169.358 243 173.5C243 177.642 246.358 181 250.5 181ZM250.5 179.75C253.952 179.75 256.75 176.952 256.75 173.5C256.75 170.048 253.952 167.25 250.5 167.25C247.048 167.25 244.25 170.048 244.25 173.5C244.25 176.952 247.048 179.75 250.5 179.75Z"
              fill="#6468B9"
            />
            <path
              d="M255.5 173.5C255.5 176.261 253.261 178.5 250.5 178.5C247.739 178.5 245.5 176.261 245.5 173.5C245.5 170.739 247.739 168.5 250.5 168.5C253.261 168.5 255.5 170.739 255.5 173.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="6"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="6"
            data-location="A garden to mid B connector"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner, place crosshair slightly left of the tip of the leaf as shown."
          >
            >>>
            <path id="Line 1_6" d="M503 565L343 208" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_7" cx="340" cy="204" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M505.5 579C509.642 579 513 575.642 513 571.5C513 567.358 509.642 564 505.5 564C501.358 564 498 567.358 498 571.5C498 575.642 501.358 579 505.5 579ZM505.5 577.75C508.952 577.75 511.75 574.952 511.75 571.5C511.75 568.048 508.952 565.25 505.5 565.25C502.048 565.25 499.25 568.048 499.25 571.5C499.25 574.952 502.048 577.75 505.5 577.75Z"
              fill="#6468B9"
            />
            <path
              d="M510.5 571.5C510.5 574.261 508.261 576.5 505.5 576.5C502.739 576.5 500.5 574.261 500.5 571.5C500.5 568.739 502.739 566.5 505.5 566.5C508.261 566.5 510.5 568.739 510.5 571.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="7"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="7"
            data-location="A garden to T catwalk"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner and align the point of the triangle above the tooltip with the bottom left of the box on the wall."
          >
            >>>>
            <path id="Line 1_7" d="M655 357L344 206" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_8" cx="340" cy="204" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M660.5 368C664.642 368 668 364.642 668 360.5C668 356.358 664.642 353 660.5 353C656.358 353 653 356.358 653 360.5C653 364.642 656.358 368 660.5 368ZM660.5 366.75C663.952 366.75 666.75 363.952 666.75 360.5C666.75 357.048 663.952 354.25 660.5 354.25C657.048 354.25 654.25 357.048 654.25 360.5C654.25 363.952 657.048 366.75 660.5 366.75Z"
              fill="#6468B9"
            />
            <path
              d="M665.5 360.5C665.5 363.261 663.261 365.5 660.5 365.5C657.739 365.5 655.5 363.261 655.5 360.5C655.5 357.739 657.739 355.5 660.5 355.5C663.261 355.5 665.5 357.739 665.5 360.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="8"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="8"
            data-location="Market to B lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner and put top left of the charge bar aligned with the bottom right of the trim on the building."
          >
            >>>>
            <path id="Line 1_8" d="M502 743L258 405" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_9" cx="255" cy="401" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M505.5 756C509.642 756 513 752.642 513 748.5C513 744.358 509.642 741 505.5 741C501.358 741 498 744.358 498 748.5C498 752.642 501.358 756 505.5 756ZM505.5 754.75C508.952 754.75 511.75 751.952 511.75 748.5C511.75 745.048 508.952 742.25 505.5 742.25C502.048 742.25 499.25 745.048 499.25 748.5C499.25 751.952 502.048 754.75 505.5 754.75Z"
              fill="#6468B9"
            />
            <path
              d="M510.5 748.5C510.5 751.261 508.261 753.5 505.5 753.5C502.739 753.5 500.5 751.261 500.5 748.5C500.5 745.739 502.739 743.5 505.5 743.5C508.261 743.5 510.5 745.739 510.5 748.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="9"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="9"
            data-location="CT spawn to back site B"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Wedge yourself in the corner between the trashcan and the wall, aim at the end of the roof as shown."
          >
            >>>>
            <path id="Line 1_9" d="M302 828.5L17.4299 346.755" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_10" cx="15" cy="343" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M305.5 842C309.642 842 313 838.642 313 834.5C313 830.358 309.642 827 305.5 827C301.358 827 298 830.358 298 834.5C298 838.642 301.358 842 305.5 842ZM305.5 840.75C308.952 840.75 311.75 837.952 311.75 834.5C311.75 831.048 308.952 828.25 305.5 828.25C302.048 828.25 299.25 831.048 299.25 834.5C299.25 837.952 302.048 840.75 305.5 840.75Z"
              fill="#6468B9"
            />
            <path
              d="M310.5 834.5C310.5 837.261 308.261 839.5 305.5 839.5C302.739 839.5 300.5 837.261 300.5 834.5C300.5 831.739 302.739 829.5 305.5 829.5C308.261 829.5 310.5 831.739 310.5 834.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="10"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="10"
            data-location="CT spawn to A site"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Wedge yourself in the corner of the wall and the plant, put the tip of the shock icon where the roofs meet."
          >
            >>>>
            <path id="Line 1_10" d="M67 454L316.442 39.2654" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_11" cx="64" cy="458" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M319.5 41C323.642 41 327 37.6421 327 33.5C327 29.3579 323.642 26 319.5 26C315.358 26 312 29.3579 312 33.5C312 37.6421 315.358 41 319.5 41ZM319.5 39.75C322.952 39.75 325.75 36.9518 325.75 33.5C325.75 30.0482 322.952 27.25 319.5 27.25C316.048 27.25 313.25 30.0482 313.25 33.5C313.25 36.9518 316.048 39.75 319.5 39.75Z"
              fill="#6468B9"
            />
            <path
              d="M324.5 33.5C324.5 36.2614 322.261 38.5 319.5 38.5C316.739 38.5 314.5 36.2614 314.5 33.5C314.5 30.7386 316.739 28.5 319.5 28.5C322.261 28.5 324.5 30.7386 324.5 33.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="11"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="11"
            data-location="Lobby to mid connector to mid"
            datatype="sonar"
            data-bounces="1"
            data-charge="3"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner where the barrier and wall is (or just slightly in front of the wall if the round has started) and aim at the bottom middle of the white part of the sign."
          >
            >>>>
            <path id="Line 1_11" d="M498 597L444.789 357.047" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_2" d="M399 508L444 357" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_12" cx="499" cy="602" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_13" cx="444.5" cy="356.5" r="2.5" fill="#DF2E2E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M396.5 522C400.642 522 404 518.642 404 514.5C404 510.358 400.642 507 396.5 507C392.358 507 389 510.358 389 514.5C389 518.642 392.358 522 396.5 522ZM396.5 520.75C399.952 520.75 402.75 517.952 402.75 514.5C402.75 511.048 399.952 508.25 396.5 508.25C393.048 508.25 390.25 511.048 390.25 514.5C390.25 517.952 393.048 520.75 396.5 520.75Z"
              fill="#6468B9"
            />
            <path
              d="M401.5 514.5C401.5 517.261 399.261 519.5 396.5 519.5C393.739 519.5 391.5 517.261 391.5 514.5C391.5 511.739 393.739 509.5 396.5 509.5C399.261 509.5 401.5 511.739 401.5 514.5Z"
              fill="#6468B9"
            />
          </g>
        </svg>
      </Map>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Vue from 'vue'
import Screen from "../components/Screen.vue";
import Map from "../components/Map.vue";
import Sidebar from "../components/Sidebar.vue";
import { MapService } from "../services/MapService.js";

export default {
  name: "Ascent",
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
    clickLineup(e) {
      let screenData = MapService.clickLineup(e, "ascent");
      this.imgs = screenData.imgs;
      this.currentInstructions = screenData.instructions;
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
#ascent {
  height: 100%;
  width: 100%;
  /* background-image: url("../../public/UI/background.svg");
  background-size: cover; */
}
html {
  height: calc(100% - 56px);
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
@media (max-width: 750px) {
  .scaleDownRotate {
    margin-top: 95px;
    width: 100%;
    height: auto;
    transform: scale(0.8) rotate(90deg);
    top: 20%;
  }
}
@media (min-width: 751px) {
  .scaleDownRotate {
    width: auto;
    height: 100%;
    transform: scale(0.8) rotate(90deg);
  }
}
</style>
