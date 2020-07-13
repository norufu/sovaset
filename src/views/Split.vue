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
    <div v-if="state == 'map'" class="mapDiv">
      <Map v-if="state == 'map'" :mapName="'split'">
        <img class="mapParts scaleDownRotate" src="../../public/splitMini.png" />

        <!-- svg here -->
        <svg
          @click="clickLineup($event)"
          class="mapParts scaleDownRotate"
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

          <g
            id="12"
            v-if="filter == 'shock' && sideFilter == 't'"
            class="lineups"
            data-id="12"
            data-location="A lobby to default"
            datatype="shock"
            data-bounces="0"
            data-charge="1"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand on the edge of the planter and put the top of your charge bar lined up with the blue light on the tower. The first tick of your charge bar with the beam."
          >
            <circle id="Ellipse 1_16" cx="561" cy="85" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9"
              d="M230.5 68.5L235.5 73.5L230.5 78.5L225.5 73.5L230.5 68.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_12"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M230.5 81C234.642 81 238 77.6421 238 73.5C238 69.3579 234.642 66 230.5 66C226.358 66 223 69.3579 223 73.5C223 77.6421 226.358 81 230.5 81ZM230.5 79.75C233.952 79.75 236.75 76.9518 236.75 73.5C236.75 70.0482 233.952 67.25 230.5 67.25C227.048 67.25 224.25 70.0482 224.25 73.5C224.25 76.9518 227.048 79.75 230.5 79.75Z"
              fill="#6468B9"
            />
            <path id="Line 1_11" d="M556 85L237.001 73.9622" stroke="#24A749" stroke-width="3" />
          </g>

          <g
            id="13"
            v-if="filter == 'shock' && sideFilter == 't'"
            class="lineups"
            data-id="13"
            data-location="A lobby to back of sign"
            datatype="shock"
            data-bounces="0"
            data-charge="1"
            data-side="t"
            data-difficulty="1"
            data-instructions="Standing on the step, line up with the edge of the planter. Line up the right tip of the shock dart icon with the corner of the roof as shown."
          >
            >
            <circle id="Ellipse 1_17" cx="582" cy="95" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9_2"
              d="M274.5 36.5L279.5 41.5L274.5 46.5L269.5 41.5L274.5 36.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_13"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M274.5 49C278.642 49 282 45.6421 282 41.5C282 37.3579 278.642 34 274.5 34C270.358 34 267 37.3579 267 41.5C267 45.6421 270.358 49 274.5 49ZM274.5 47.75C277.952 47.75 280.75 44.9518 280.75 41.5C280.75 38.0482 277.952 35.25 274.5 35.25C271.048 35.25 268.25 38.0482 268.25 41.5C268.25 44.9518 271.048 47.75 274.5 47.75Z"
              fill="#6468B9"
            />
            <path id="Line 1_12" d="M577 94L281 43" stroke="#24A749" stroke-width="3" />
          </g>

          <g
            id="14"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="14"
            data-location="B CT to Default"
            datatype="shock"
            data-bounces="1"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner and aim slightly below the line on the wall in the center of the dark spot."
          >
            >
            <path id="Line 1_13" d="M286 795L204 727" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_4" d="M144 773L202 726" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_18" cx="141" cy="776" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9_3"
              d="M291.5 793.5L296.5 798.5L291.5 803.5L286.5 798.5L291.5 793.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_14"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M291.5 806C295.642 806 299 802.642 299 798.5C299 794.358 295.642 791 291.5 791C287.358 791 284 794.358 284 798.5C284 802.642 287.358 806 291.5 806ZM291.5 804.75C294.952 804.75 297.75 801.952 297.75 798.5C297.75 795.048 294.952 792.25 291.5 792.25C288.048 792.25 285.25 795.048 285.25 798.5C285.25 801.952 288.048 804.75 291.5 804.75Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_19" cx="202.5" cy="725.5" r="2.5" fill="#DF2E2E" />
          </g>

          <g
            id="15"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="15"
            data-location="B CT to default"
            datatype="shock"
            data-bounces="2"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up so the left side of the doorway aligns with the second vertical line on the wall. There's a horizontal white line on the wall, put your crosshair near where that and the vertical line meet."
          >
            >
            <path id="Line 1_14" d="M189 748L144 687" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_5" d="M190 748L202 727" stroke="#24A749" stroke-width="3" />
            <path id="Line 3_3" d="M286 795L203 726" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_20" cx="141" cy="683" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_21" cx="189.5" cy="748.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_22" cx="202.5" cy="725.5" r="2.5" fill="#DF2E2E" />
            <path
              id="Polygon 9_4"
              d="M291.5 793.5L296.5 798.5L291.5 803.5L286.5 798.5L291.5 793.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_15"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M291.5 806C295.642 806 299 802.642 299 798.5C299 794.358 295.642 791 291.5 791C287.358 791 284 794.358 284 798.5C284 802.642 287.358 806 291.5 806ZM291.5 804.75C294.952 804.75 297.75 801.952 297.75 798.5C297.75 795.048 294.952 792.25 291.5 792.25C288.048 792.25 285.25 795.048 285.25 798.5C285.25 801.952 288.048 804.75 291.5 804.75Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="16"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="16"
            data-location="B heaven to default"
            datatype="shock"
            data-bounces="1"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand on the top step against the wall in heaven. Aim just left of the dark splotch on the wall."
          >
            >
            <path id="Line 3_4" d="M288 793L229 720" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_6" d="M229 721L420 591" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_23" cx="229.5" cy="720.5" r="2.5" fill="#DF2E2E" />
            <path
              id="Polygon 9_5"
              d="M291.5 793.5L296.5 798.5L291.5 803.5L286.5 798.5L291.5 793.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_16"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M291.5 806C295.642 806 299 802.642 299 798.5C299 794.358 295.642 791 291.5 791C287.358 791 284 794.358 284 798.5C284 802.642 287.358 806 291.5 806ZM291.5 804.75C294.952 804.75 297.75 801.952 297.75 798.5C297.75 795.048 294.952 792.25 291.5 792.25C288.048 792.25 285.25 795.048 285.25 798.5C285.25 801.952 288.048 804.75 291.5 804.75Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_24" cx="424" cy="588" r="6" fill="#2EDF60" />
          </g>

          <g
            id="17"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="17"
            data-location="Back site B to mid"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the rusted line on the metal piece against the wall. Look up and put the 0 on your bounce counter just above the right tip of the tower."
          >
            >
            <path id="Line 2_7" d="M241 893L552.487 501.387" stroke="#24A749" stroke-width="3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M556.5 504C560.642 504 564 500.642 564 496.5C564 492.358 560.642 489 556.5 489C552.358 489 549 492.358 549 496.5C549 500.642 552.358 504 556.5 504ZM556.5 502.75C559.952 502.75 562.75 499.952 562.75 496.5C562.75 493.048 559.952 490.25 556.5 490.25C553.048 490.25 550.25 493.048 550.25 496.5C550.25 499.952 553.048 502.75 556.5 502.75Z"
              fill="#6468B9"
            />
            <path
              d="M561.5 496.5C561.5 499.261 559.261 501.5 556.5 501.5C553.739 501.5 551.5 499.261 551.5 496.5C551.5 493.739 553.739 491.5 556.5 491.5C559.261 491.5 561.5 493.739 561.5 496.5Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_25" cx="239" cy="895" r="6" fill="#2EDF60" />
          </g>

          <g
            id="18"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="18"
            data-location="B heaven to mid"
            datatype="sonar"
            data-bounces="1"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand where the floor panels make a T with the edge of heaven. Aim just above and left of the blue light."
          >
            >
            <path id="Line 1_15" d="M386 858L325 698" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_8" d="M387 858L578.412 467.201" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_26" cx="324" cy="694" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_27" cx="386.5" cy="858.5" r="2.5" fill="#DF2E2E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M581.5 469C585.642 469 589 465.642 589 461.5C589 457.358 585.642 454 581.5 454C577.358 454 574 457.358 574 461.5C574 465.642 577.358 469 581.5 469ZM581.5 467.75C584.952 467.75 587.75 464.952 587.75 461.5C587.75 458.048 584.952 455.25 581.5 455.25C578.048 455.25 575.25 458.048 575.25 461.5C575.25 464.952 578.048 467.75 581.5 467.75Z"
              fill="#6468B9"
            />
            <path
              d="M586.5 461.5C586.5 464.261 584.261 466.5 581.5 466.5C578.739 466.5 576.5 464.261 576.5 461.5C576.5 458.739 578.739 456.5 581.5 456.5C584.261 456.5 586.5 458.739 586.5 461.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="19"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="19"
            data-location="B CT to market"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the doorway then look up. There are 3 small ^'s on the tooltip. Line the middle one up with the bottom of the edge of the window."
          >
            >
            <path id="Line 1_16" d="M239 750L571 581" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_28" cx="235" cy="752" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M577.5 585C581.642 585 585 581.642 585 577.5C585 573.358 581.642 570 577.5 570C573.358 570 570 573.358 570 577.5C570 581.642 573.358 585 577.5 585ZM577.5 583.75C580.952 583.75 583.75 580.952 583.75 577.5C583.75 574.048 580.952 571.25 577.5 571.25C574.048 571.25 571.25 574.048 571.25 577.5C571.25 580.952 574.048 583.75 577.5 583.75Z"
              fill="#6468B9"
            />
            <path
              d="M582.5 577.5C582.5 580.261 580.261 582.5 577.5 582.5C574.739 582.5 572.5 580.261 572.5 577.5C572.5 574.739 574.739 572.5 577.5 572.5C580.261 572.5 582.5 574.739 582.5 577.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="20"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="20"
            data-location="B garage entrance to B lobby"
            datatype="sonar"
            data-bounces="2"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the doorway of garage. There are two little nubs on the cable, while crouching put your crosshair slightly below the left one and in line with the top one. Fire while crouching."
          >
            >
            <path id="Line 1_17" d="M378 852L508 796" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_9" d="M508 795L443 762" stroke="#24A749" stroke-width="3" />
            <path id="Line 3_5" d="M627 691L442 761" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_29" cx="374" cy="854" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_30" cx="509.5" cy="795.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_31" cx="441.5" cy="761.5" r="2.5" fill="#DF2E2E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M633.5 696C637.642 696 641 692.642 641 688.5C641 684.358 637.642 681 633.5 681C629.358 681 626 684.358 626 688.5C626 692.642 629.358 696 633.5 696ZM633.5 694.75C636.952 694.75 639.75 691.952 639.75 688.5C639.75 685.048 636.952 682.25 633.5 682.25C630.048 682.25 627.25 685.048 627.25 688.5C627.25 691.952 630.048 694.75 633.5 694.75Z"
              fill="#6468B9"
            />
            <path
              d="M638.5 688.5C638.5 691.261 636.261 693.5 633.5 693.5C630.739 693.5 628.5 691.261 628.5 688.5C628.5 685.739 630.739 683.5 633.5 683.5C636.261 683.5 638.5 685.739 638.5 688.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="22"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="22"
            data-location="A site to B lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the center of the V on the back wall. Put the tip of the shock icon at the bottom left part of the crown on the building where the bush covers a bit."
          >
            >
            <path id="Line 1_19" d="M661 705L276.425 14.7635" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_33" cx="274" cy="12" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M664.5 718C668.642 718 672 714.642 672 710.5C672 706.358 668.642 703 664.5 703C660.358 703 657 706.358 657 710.5C657 714.642 660.358 718 664.5 718ZM664.5 716.75C667.952 716.75 670.75 713.952 670.75 710.5C670.75 707.048 667.952 704.25 664.5 704.25C661.048 704.25 658.25 707.048 658.25 710.5C658.25 713.952 661.048 716.75 664.5 716.75Z"
              fill="#6468B9"
            />
            <path
              d="M669.5 710.5C669.5 713.261 667.261 715.5 664.5 715.5C661.739 715.5 659.5 713.261 659.5 710.5C659.5 707.739 661.739 705.5 664.5 705.5C667.261 705.5 669.5 707.739 669.5 710.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="21"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="21"
            data-location="A site to mid"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the center of the V on the back wall. Put the top of the right diamond touching the bottom of the white part of the building."
          >
            >
            <path id="Line 1_18" d="M553 506L275.571 16.2428" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_32" cx="274" cy="12" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M556.5 519C560.642 519 564 515.642 564 511.5C564 507.358 560.642 504 556.5 504C552.358 504 549 507.358 549 511.5C549 515.642 552.358 519 556.5 519ZM556.5 517.75C559.952 517.75 562.75 514.952 562.75 511.5C562.75 508.048 559.952 505.25 556.5 505.25C553.048 505.25 550.25 508.048 550.25 511.5C550.25 514.952 553.048 517.75 556.5 517.75Z"
              fill="#6468B9"
            />
            <path
              d="M561.5 511.5C561.5 514.261 559.261 516.5 556.5 516.5C553.739 516.5 551.5 514.261 551.5 511.5C551.5 508.739 553.739 506.5 556.5 506.5C559.261 506.5 561.5 508.739 561.5 511.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="23"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="23"
            data-location="A site to A lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the back corner, put top of the ^ on your tooltip at the end of the rounded triangle on the wall."
          >
            >
            <path id="Line 1_20" d="M523 136L197.126 9.6684" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_34" cx="193" cy="8" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M529.5 146C533.642 146 537 142.642 537 138.5C537 134.358 533.642 131 529.5 131C525.358 131 522 134.358 522 138.5C522 142.642 525.358 146 529.5 146ZM529.5 144.75C532.952 144.75 535.75 141.952 535.75 138.5C535.75 135.048 532.952 132.25 529.5 132.25C526.048 132.25 523.25 135.048 523.25 138.5C523.25 141.952 526.048 144.75 529.5 144.75Z"
              fill="#6468B9"
            />
            <path
              d="M534.5 138.5C534.5 141.261 532.261 143.5 529.5 143.5C526.739 143.5 524.5 141.261 524.5 138.5C524.5 135.739 526.739 133.5 529.5 133.5C532.261 133.5 534.5 135.739 534.5 138.5Z"
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
    clickLineup(e) {
      let screenData = MapService.clickLineup(e, "split");
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
#split {
  width: 100%;
  height: 100%;
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
