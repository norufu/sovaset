<template>
  <div id="haven">
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
    <Map v-if="state == 'map'" :mapName="'haven'">
      <div class="mapDiv col-10" id="mapDrawings" ref="mapDiv" style="transform: scale(1)">
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
            id="1"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="1"
            data-location="CT to A site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Walk up the metal beam into the corner, aim at the corner of the roof as shown."
          >
            <path id="Line 1" d="M150.5 498.5L403.5 101" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1" cx="147" cy="503" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M407.5 103C411.642 103 415 99.6421 415 95.5C415 91.3579 411.642 88 407.5 88C403.358 88 400 91.3579 400 95.5C400 99.6421 403.358 103 407.5 103ZM407.5 101.75C410.952 101.75 413.75 98.9518 413.75 95.5C413.75 92.0482 410.952 89.25 407.5 89.25C404.048 89.25 401.25 92.0482 401.25 95.5C401.25 98.9518 404.048 101.75 407.5 101.75Z"
              fill="#6468B9"
            />
            <path
              d="M412.5 95.5C412.5 98.2614 410.261 100.5 407.5 100.5C404.739 100.5 402.5 98.2614 402.5 95.5C402.5 92.7386 404.739 90.5 407.5 90.5C410.261 90.5 412.5 92.7386 412.5 95.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="2"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="2"
            data-location="A long to A lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="2"
            data-instructions="Line up with the line on the ground then line up the left of the diamond with the center of the roof on the line."
          >
            >
            <path id="Line 1_2" d="M509 130L796.529 361.167" stroke="#24A749" stroke-width="3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M801.5 373C805.642 373 809 369.642 809 365.5C809 361.358 805.642 358 801.5 358C797.358 358 794 361.358 794 365.5C794 369.642 797.358 373 801.5 373ZM801.5 371.75C804.952 371.75 807.75 368.952 807.75 365.5C807.75 362.048 804.952 359.25 801.5 359.25C798.048 359.25 795.25 362.048 795.25 365.5C795.25 368.952 798.048 371.75 801.5 371.75Z"
              fill="#6468B9"
            />
            <path
              d="M806.5 365.5C806.5 368.261 804.261 370.5 801.5 370.5C798.739 370.5 796.5 368.261 796.5 365.5C796.5 362.739 798.739 360.5 801.5 360.5C804.261 360.5 806.5 362.739 806.5 365.5Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_2" cx="505" cy="127" r="6" fill="#2EDF60" />
          </g>

          <g
            id="3"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="3"
            data-location="CT garage to mid garage"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the edge of the board on the window, position the crosshair around the small corner on the roof and the left side of the chargebar around the bottom of the box on the wall."
          >
            >
            <path id="Line 1_3" d="M328.5 658.5L635.5 636" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_3" cx="323" cy="659" r="6" fill="#2EDF60" />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M642.5 643C646.642 643 650 639.642 650 635.5C650 631.358 646.642 628 642.5 628C638.358 628 635 631.358 635 635.5C635 639.642 638.358 643 642.5 643ZM642.5 641.75C645.952 641.75 648.75 638.952 648.75 635.5C648.75 632.048 645.952 629.25 642.5 629.25C639.048 629.25 636.25 632.048 636.25 635.5C636.25 638.952 639.048 641.75 642.5 641.75Z"
              fill="#6468B9"
            />
            <path
              d="M647.5 635.5C647.5 638.261 645.261 640.5 642.5 640.5C639.739 640.5 637.5 638.261 637.5 635.5C637.5 632.739 639.739 630.5 642.5 630.5C645.261 630.5 647.5 632.739 647.5 635.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="8"
            v-if="filter == 'shock' && sideFilter == 't'"
            class="lineups"
            data-id="8"
            data-location="C long to back plat"
            datatype="shock"
            data-bounces="1"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner and place crosshair above the right side of the box on the wall across from the top of the pillar in the background."
          >
            <path id="Line 1_8" d="M367 929.5L321.5 903.5" stroke="#24A749" stroke-width="3" />
            <path id="Line 1_9" d="M322.5 902L754 797.5" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_8" cx="320.5" cy="902.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_9" cx="759" cy="796" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9"
              d="M373.5 927.5L378.5 932.5L373.5 937.5L368.5 932.5L373.5 927.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_8"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M373.5 940C377.642 940 381 936.642 381 932.5C381 928.358 377.642 925 373.5 925C369.358 925 366 928.358 366 932.5C366 936.642 369.358 940 373.5 940ZM373.5 938.75C376.952 938.75 379.75 935.952 379.75 932.5C379.75 929.048 376.952 926.25 373.5 926.25C370.048 926.25 367.25 929.048 367.25 932.5C367.25 935.952 370.048 938.75 373.5 938.75Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="12"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="12"
            data-location="A long to A site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner on the sandbags, aim at the corner of the building where the colour changes."
          >
            >>
            <path id="Line 1_4" d="M337 178.5L673 286.5" stroke="#24A749" stroke-width="3" />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M330.5 184C334.642 184 338 180.642 338 176.5C338 172.358 334.642 169 330.5 169C326.358 169 323 172.358 323 176.5C323 180.642 326.358 184 330.5 184ZM330.5 182.75C333.952 182.75 336.75 179.952 336.75 176.5C336.75 173.048 333.952 170.25 330.5 170.25C327.048 170.25 324.25 173.048 324.25 176.5C324.25 179.952 327.048 182.75 330.5 182.75Z"
              fill="#6468B9"
            />
            <path
              d="M335.5 176.5C335.5 179.261 333.261 181.5 330.5 181.5C327.739 181.5 325.5 179.261 325.5 176.5C325.5 173.739 327.739 171.5 330.5 171.5C333.261 171.5 335.5 173.739 335.5 176.5Z"
              fill="#6468B9"
            />

            <circle id="Ellipse 1_4" cx="678" cy="288" r="6" fill="#2EDF60" />
          </g>

          <g
            id="7"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="7"
            data-location="C long to C site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner and aim at the tip of the leaf as shown."
          >
            >>
            <path id="Line 1_5" d="M327.5 810L753.5 795.5" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_5" cx="759" cy="795" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M320.5 818C324.642 818 328 814.642 328 810.5C328 806.358 324.642 803 320.5 803C316.358 803 313 806.358 313 810.5C313 814.642 316.358 818 320.5 818ZM320.5 816.75C323.952 816.75 326.75 813.952 326.75 810.5C326.75 807.048 323.952 804.25 320.5 804.25C317.048 804.25 314.25 807.048 314.25 810.5C314.25 813.952 317.048 816.75 320.5 816.75Z"
              fill="#6468B9"
            />
            <path
              d="M325.5 810.5C325.5 813.261 323.261 815.5 320.5 815.5C317.739 815.5 315.5 813.261 315.5 810.5C315.5 807.739 317.739 805.5 320.5 805.5C323.261 805.5 325.5 807.739 325.5 810.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="5"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="5"
            data-location="A long to mid garage"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the line on the ground and put the top of the second tick of the cahrge bar slightly above the dark line on the wooden beam."
          >
            >>
            <path id="Line 1_6" d="M633 664.5L506.5 131.5" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_6" cx="505" cy="127" r="6" fill="#2EDF60" />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M634.5 679C638.642 679 642 675.642 642 671.5C642 667.358 638.642 664 634.5 664C630.358 664 627 667.358 627 671.5C627 675.642 630.358 679 634.5 679ZM634.5 677.75C637.952 677.75 640.75 674.952 640.75 671.5C640.75 668.048 637.952 665.25 634.5 665.25C631.048 665.25 628.25 668.048 628.25 671.5C628.25 674.952 631.048 677.75 634.5 677.75Z"
              fill="#6468B9"
            />
            <path
              d="M639.5 671.5C639.5 674.261 637.261 676.5 634.5 676.5C631.739 676.5 629.5 674.261 629.5 671.5C629.5 668.739 631.739 666.5 634.5 666.5C637.261 666.5 639.5 668.739 639.5 671.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="4"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="4"
            data-location="A site to C long"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner at the back of site, line up the top left corner of the tooltip with the corner on the wooden trim of the building."
          >
            >>
            <path id="Line 1_7" d="M805 752L361 98.4999" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_7" cx="358" cy="94" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M809.5 765C813.642 765 817 761.642 817 757.5C817 753.358 813.642 750 809.5 750C805.358 750 802 753.358 802 757.5C802 761.642 805.358 765 809.5 765ZM809.5 763.75C812.952 763.75 815.75 760.952 815.75 757.5C815.75 754.048 812.952 751.25 809.5 751.25C806.048 751.25 803.25 754.048 803.25 757.5C803.25 760.952 806.048 763.75 809.5 763.75Z"
              fill="#6468B9"
            />
            <path
              d="M814.5 757.5C814.5 760.261 812.261 762.5 809.5 762.5C806.739 762.5 804.5 760.261 804.5 757.5C804.5 754.739 806.739 752.5 809.5 752.5C812.261 752.5 814.5 754.739 814.5 757.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="6"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="6"
            data-location="CT garage to mid garage"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the wall, then align the bottom of the right diamond with the flag and the charge bar around the center of the tile on the roof."
          >
            >>
            <path id="Line 1_8" d="M625.5 698.5L286.5 675" stroke="#24A749" stroke-width="3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M632.5 707C636.642 707 640 703.642 640 699.5C640 695.358 636.642 692 632.5 692C628.358 692 625 695.358 625 699.5C625 703.642 628.358 707 632.5 707ZM632.5 705.75C635.952 705.75 638.75 702.952 638.75 699.5C638.75 696.048 635.952 693.25 632.5 693.25C629.048 693.25 626.25 696.048 626.25 699.5C626.25 702.952 629.048 705.75 632.5 705.75Z"
              fill="#6468B9"
            />
            <path
              d="M637.5 699.5C637.5 702.261 635.261 704.5 632.5 704.5C629.739 704.5 627.5 702.261 627.5 699.5C627.5 696.739 629.739 694.5 632.5 694.5C635.261 694.5 637.5 696.739 637.5 699.5Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_8" cx="281" cy="674" r="6" fill="#2EDF60" />
          </g>

          <g
            id="9"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="9"
            data-location="CT C site to C long"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Back into the corner and align the second tick of your charge bar with the point on the building in the distance. The top of the charge bar should be in line with the actual building part."
          >
            >>
            <path id="Line 1_9" d="M765.5 787.5L292.5 769" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_9" cx="287" cy="768" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M772.5 796C776.642 796 780 792.642 780 788.5C780 784.358 776.642 781 772.5 781C768.358 781 765 784.358 765 788.5C765 792.642 768.358 796 772.5 796ZM772.5 794.75C775.952 794.75 778.75 791.952 778.75 788.5C778.75 785.048 775.952 782.25 772.5 782.25C769.048 782.25 766.25 785.048 766.25 788.5C766.25 791.952 769.048 794.75 772.5 794.75Z"
              fill="#6468B9"
            />
            <path
              d="M777.5 788.5C777.5 791.261 775.261 793.5 772.5 793.5C769.739 793.5 767.5 791.261 767.5 788.5C767.5 785.739 769.739 783.5 772.5 783.5C775.261 783.5 777.5 785.739 777.5 788.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="10"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="10"
            data-location="CT to C site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the circle mark on the wall, put the center of the 2nd tick on the charge bar at the corner of the gap in the roof."
          >
            >>
            <path id="Line 1_10" d="M431.5 919.5L253.5 651.5" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_10" cx="251" cy="647" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M435.5 933C439.642 933 443 929.642 443 925.5C443 921.358 439.642 918 435.5 918C431.358 918 428 921.358 428 925.5C428 929.642 431.358 933 435.5 933ZM435.5 931.75C438.952 931.75 441.75 928.952 441.75 925.5C441.75 922.048 438.952 919.25 435.5 919.25C432.048 919.25 429.25 922.048 429.25 925.5C429.25 928.952 432.048 931.75 435.5 931.75Z"
              fill="#6468B9"
            />
            <path
              d="M440.5 925.5C440.5 928.261 438.261 930.5 435.5 930.5C432.739 930.5 430.5 928.261 430.5 925.5C430.5 922.739 432.739 920.5 435.5 920.5C438.261 920.5 440.5 922.739 440.5 925.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="11"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="11"
            data-location="A link to A site"
            datatype="sonar"
            data-bounces="1"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the edge of the box, there are 2 small circular marks on the wood, aim at the top right one (crosshair covers it in the pictures)."
          >
            >>
            <path id="Line 1_11" d="M351.5 347L343.5 333.5" stroke="#24A749" stroke-width="3" />
            <path id="Line 2" d="M353.5 347L472 176" stroke="#24A749" stroke-width="3" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M476.5 178C480.642 178 484 174.642 484 170.5C484 166.358 480.642 163 476.5 163C472.358 163 469 166.358 469 170.5C469 174.642 472.358 178 476.5 178ZM476.5 176.75C479.952 176.75 482.75 173.952 482.75 170.5C482.75 167.048 479.952 164.25 476.5 164.25C473.048 164.25 470.25 167.048 470.25 170.5C470.25 173.952 473.048 176.75 476.5 176.75Z"
              fill="#6468B9"
            />
            <path
              d="M481.5 170.5C481.5 173.261 479.261 175.5 476.5 175.5C473.739 175.5 471.5 173.261 471.5 170.5C471.5 167.739 473.739 165.5 476.5 165.5C479.261 165.5 481.5 167.739 481.5 170.5Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_11" cx="352.5" cy="348.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_12" cx="341" cy="329" r="6" fill="#2EDF60" />
          </g>

          <!-- <g class="lineups">
            <line
              x1="8.73648"
              y1="410.192"
              x2="262.737"
              y2="13.1916"
              stroke="#28BA51"
              stroke-width="3"
            />
            <circle cx="6" cy="415" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M266.5 15C270.642 15 274 11.6421 274 7.5C274 3.35786 270.642 0 266.5 0C262.358 0 259 3.35786 259 7.5C259 11.6421 262.358 15 266.5 15ZM266.5 13.75C269.952 13.75 272.75 10.9518 272.75 7.5C272.75 4.04822 269.952 1.25 266.5 1.25C263.048 1.25 260.25 4.04822 260.25 7.5C260.25 10.9518 263.048 13.75 266.5 13.75Z"
              fill="#6468B9"
            />
            <path
              d="M271.5 7.5C271.5 10.2614 269.261 12.5 266.5 12.5C263.739 12.5 261.5 10.2614 261.5 7.5C261.5 4.73858 263.739 2.5 266.5 2.5C269.261 2.5 271.5 4.73858 271.5 7.5Z"
              fill="#6468B9"
            />
          </g>-->

          <!-- <g
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

          <g>
            <path
              id="Line 1"
              d="M10 9L297.529 240.167"
              stroke="#24A749"
              stroke-width="3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M302.5 252C306.642 252 310 248.642 310 244.5C310 240.358 306.642 237 302.5 237C298.358 237 295 240.358 295 244.5C295 248.642 298.358 252 302.5 252ZM302.5 250.75C305.952 250.75 308.75 247.952 308.75 244.5C308.75 241.048 305.952 238.25 302.5 238.25C299.048 238.25 296.25 241.048 296.25 244.5C296.25 247.952 299.048 250.75 302.5 250.75Z"
              fill="#6468B9"
            />
            <path
              d="M307.5 244.5C307.5 247.261 305.261 249.5 302.5 249.5C299.739 249.5 297.5 247.261 297.5 244.5C297.5 241.739 299.739 239.5 302.5 239.5C305.261 239.5 307.5 241.739 307.5 244.5Z"
              fill="#6468B9"
            />

            <circle id="Ellipse 1" cx="6" cy="6" r="6" fill="#2EDF60" />
          </g>-->

          <!-- 
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
          </g>-->
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
        require("../../public/arrows/haven/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_setup.png")
      );
      imgs.push(
        require("../../public/arrows/haven/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_landing.png")
      );
      imgs.push(
        require("../../public/arrows/haven/" +
          this.currentLineup +
          "/" +
          this.currentLineup +
          "_lineup_d.png")
      );
      imgs.push(
        require("../../public/arrows/haven/" +
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
#haven {
  height: 100%;
  width: 100%;
  /* background-image: url("../../public/UI/background.svg");
  background-size: cover; */
}
.lineupDiv {
  height: 100%;
}
</style>
