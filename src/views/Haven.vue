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
    <div v-if="state == 'map'" class="mapDiv">
      <Map :mapName="'haven'">
        <img class="mapParts scaleDown" src="../../public/havenMap.svg" />
        <svg
          @click="clickLineup($event)"
          class="mapParts scaleDown"
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

          <g
            id="13"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="13"
            data-location="Mid window to B site"
            datatype="sonar"
            data-bounces="1"
            data-charge="4"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand at the back wall of mid window and move till you can slightly see the second beam on the wall. Aim at the bottom of the hanging clothes and down from the 2nd small bump on the shadow."
          >
            <path id="Line 1_14" d="M694 554L574 483" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_2" d="M358 582L573 483" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_15" cx="697" cy="556" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M352.5 593C356.642 593 360 589.642 360 585.5C360 581.358 356.642 578 352.5 578C348.358 578 345 581.358 345 585.5C345 589.642 348.358 593 352.5 593ZM352.5 591.75C355.952 591.75 358.75 588.952 358.75 585.5C358.75 582.048 355.952 579.25 352.5 579.25C349.048 579.25 346.25 582.048 346.25 585.5C346.25 588.952 349.048 591.75 352.5 591.75Z"
              fill="#6468B9"
            />
            <path
              d="M357.5 585.5C357.5 588.261 355.261 590.5 352.5 590.5C349.739 590.5 347.5 588.261 347.5 585.5C347.5 582.739 349.739 580.5 352.5 580.5C355.261 580.5 357.5 582.739 357.5 585.5Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_16" cx="573.5" cy="482.5" r="2.5" fill="#DF2E2E" />
          </g>

          <g
            id="14"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="14"
            data-location="c link to b site"
            datatype="sonar"
            data-bounces="2"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner, aim slightly above the cable on the floor (not precise)."
          >
            <path id="Line 3" d="M359 596L473 543" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_3" d="M394 609L381 604" stroke="#24A749" stroke-width="3" />
            <path id="Line 1_15" d="M380 603.5L360.5 597" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_17" cx="398" cy="611" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_18" cx="380.5" cy="603.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_19" cx="359.5" cy="596.5" r="2.5" fill="#DF2E2E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M479.5 548C483.642 548 487 544.642 487 540.5C487 536.358 483.642 533 479.5 533C475.358 533 472 536.358 472 540.5C472 544.642 475.358 548 479.5 548ZM479.5 546.75C482.952 546.75 485.75 543.952 485.75 540.5C485.75 537.048 482.952 534.25 479.5 534.25C476.048 534.25 473.25 537.048 473.25 540.5C473.25 543.952 476.048 546.75 479.5 546.75Z"
              fill="#6468B9"
            />
            <path
              d="M484.5 540.5C484.5 543.261 482.261 545.5 479.5 545.5C476.739 545.5 474.5 543.261 474.5 540.5C474.5 537.739 476.739 535.5 479.5 535.5C482.261 535.5 484.5 537.739 484.5 540.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="15"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="15"
            data-location="A link to Asite"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="ct"
            data-difficulty="2"
            data-instructions="Stand in the corner, place crosshair above the roof and line up the bottom of the right diamond with the small square on the wall."
          >
            <path id="Line 1_16" d="M382 409L453 255" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_20" cx="380" cy="413" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M456.5 257C460.642 257 464 253.642 464 249.5C464 245.358 460.642 242 456.5 242C452.358 242 449 245.358 449 249.5C449 253.642 452.358 257 456.5 257ZM456.5 255.75C459.952 255.75 462.75 252.952 462.75 249.5C462.75 246.048 459.952 243.25 456.5 243.25C453.048 243.25 450.25 246.048 450.25 249.5C450.25 252.952 453.048 255.75 456.5 255.75Z"
              fill="#6468B9"
            />
            <path
              d="M461.5 249.5C461.5 252.261 459.261 254.5 456.5 254.5C453.739 254.5 451.5 252.261 451.5 249.5C451.5 246.739 453.739 244.5 456.5 244.5C459.261 244.5 461.5 246.739 461.5 249.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="16"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="16"
            data-location="A site to A lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the line on the steps, then place the right side of the right diamond on the black part of the light bulb."
          >
            >
            <path id="Line 1_17" d="M803 346L508 129" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_21" cx="505" cy="127" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M808.5 358C812.642 358 816 354.642 816 350.5C816 346.358 812.642 343 808.5 343C804.358 343 801 346.358 801 350.5C801 354.642 804.358 358 808.5 358ZM808.5 356.75C811.952 356.75 814.75 353.952 814.75 350.5C814.75 347.048 811.952 344.25 808.5 344.25C805.048 344.25 802.25 347.048 802.25 350.5C802.25 353.952 805.048 356.75 808.5 356.75Z"
              fill="#6468B9"
            />
            <path
              d="M813.5 350.5C813.5 353.261 811.261 355.5 808.5 355.5C805.739 355.5 803.5 353.261 803.5 350.5C803.5 347.739 805.739 345.5 808.5 345.5C811.261 345.5 813.5 347.739 813.5 350.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="17"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="17"
            data-location="B link to default"
            datatype="shock"
            data-bounces="0"
            data-charge="1"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner then aim anywhere from the roof support to the cable depending on where you want it to land."
          >
            >
            <path id="Line 1_18" d="M427 403L411 162" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_22" cx="427" cy="404" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9_2"
              d="M410.5 150.5L415.5 155.5L410.5 160.5L405.5 155.5L410.5 150.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_17"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M410.5 163C414.642 163 418 159.642 418 155.5C418 151.358 414.642 148 410.5 148C406.358 148 403 151.358 403 155.5C403 159.642 406.358 163 410.5 163ZM410.5 161.75C413.952 161.75 416.75 158.952 416.75 155.5C416.75 152.048 413.952 149.25 410.5 149.25C407.048 149.25 404.25 152.048 404.25 155.5C404.25 158.952 407.048 161.75 410.5 161.75Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="18"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="18"
            data-location="Grass to garage"
            datatype="sonar"
            data-bounces="0"
            data-charge="4"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand outside garage doros and aim at the circle on the curtain above the door."
          >
            >
            <path id="Line 1_19" d="M519 683L580 624" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_23" cx="583" cy="621" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M514.5 695C518.642 695 522 691.642 522 687.5C522 683.358 518.642 680 514.5 680C510.358 680 507 683.358 507 687.5C507 691.642 510.358 695 514.5 695ZM514.5 693.75C517.952 693.75 520.75 690.952 520.75 687.5C520.75 684.048 517.952 681.25 514.5 681.25C511.048 681.25 508.25 684.048 508.25 687.5C508.25 690.952 511.048 693.75 514.5 693.75Z"
              fill="#6468B9"
            />
            <path
              d="M519.5 687.5C519.5 690.261 517.261 692.5 514.5 692.5C511.739 692.5 509.5 690.261 509.5 687.5C509.5 684.739 511.739 682.5 514.5 682.5C517.261 682.5 519.5 684.739 519.5 687.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="19"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="19"
            data-location="A lobby to A long"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Go against the edge of the wall then move until the lantern in the tree is ligned up with the 2nd support on the wall (where crosshair is in the setup picture). Then aim at the smoke between them."
          >
            >
            <path id="Line 1_20" d="M798 441L537 126" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_24" cx="799" cy="442" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M532.5 129C536.642 129 540 125.642 540 121.5C540 117.358 536.642 114 532.5 114C528.358 114 525 117.358 525 121.5C525 125.642 528.358 129 532.5 129ZM532.5 127.75C535.952 127.75 538.75 124.952 538.75 121.5C538.75 118.048 535.952 115.25 532.5 115.25C529.048 115.25 526.25 118.048 526.25 121.5C526.25 124.952 529.048 127.75 532.5 127.75Z"
              fill="#6468B9"
            />
            <path
              d="M537.5 121.5C537.5 124.261 535.261 126.5 532.5 126.5C529.739 126.5 527.5 124.261 527.5 121.5C527.5 118.739 529.739 116.5 532.5 116.5C535.261 116.5 537.5 118.739 537.5 121.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="20"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="20"
            data-location="C site to grass"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up so the box lines up with the end of the wall on c long. Line up the top left of the tooltip with the square on the wall."
          >
            >
            <path id="Line 1_21" d="M329 850L637 640" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_25" cx="326" cy="852" r="6" fill="#2EDF60" />
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
            id="21"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="21"
            data-location="C plat to A lobby"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand on the box that let's you jump upto C plat then position the top right of your charge bar with the piece of wood sticking off the roof."
          >
            >
            <path id="Line 1_22" d="M376 934L791 486" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_26" cx="373" cy="938" r="6" fill="#2EDF60" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M795.5 488C799.642 488 803 484.642 803 480.5C803 476.358 799.642 473 795.5 473C791.358 473 788 476.358 788 480.5C788 484.642 791.358 488 795.5 488ZM795.5 486.75C798.952 486.75 801.75 483.952 801.75 480.5C801.75 477.048 798.952 474.25 795.5 474.25C792.048 474.25 789.25 477.048 789.25 480.5C789.25 483.952 792.048 486.75 795.5 486.75Z"
              fill="#6468B9"
            />
            <path
              d="M800.5 480.5C800.5 483.261 798.261 485.5 795.5 485.5C792.739 485.5 790.5 483.261 790.5 480.5C790.5 477.739 792.739 475.5 795.5 475.5C798.261 475.5 800.5 477.739 800.5 480.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="22"
            v-if="filter == 'shock' && sideFilter == 't'"
            class="lineups"
            data-id="22"
            data-location="A long to default"
            datatype="sonar"
            data-bounces="0"
            data-charge="1"
            data-side="t"
            data-difficulty="1"
            data-instructions="Push yourself into the corner on long, then place the lamp between the two diamonds."
          >
            >
            <path id="Line 1_23" d="M648 252L424 188" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_27" cx="652" cy="251" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9_3"
              d="M417.5 180.5L422.5 185.5L417.5 190.5L412.5 185.5L417.5 180.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_22"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M417.5 193C421.642 193 425 189.642 425 185.5C425 181.358 421.642 178 417.5 178C413.358 178 410 181.358 410 185.5C410 189.642 413.358 193 417.5 193ZM417.5 191.75C420.952 191.75 423.75 188.952 423.75 185.5C423.75 182.048 420.952 179.25 417.5 179.25C414.048 179.25 411.25 182.048 411.25 185.5C411.25 188.952 414.048 191.75 417.5 191.75Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="23"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="23"
            data-location="A link to default"
            datatype="shock"
            data-bounces="2"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner (don't have to as long as you hit the proper part of the wall) and aim at the back wall lined up with the dashed line of the middle metal box."
          >
            >
            <path id="Line 2_4" d="M348 582L478 556" stroke="#24A749" stroke-width="3" />
            <path id="Line 3_2" d="M479 555L433 536" stroke="#24A749" stroke-width="3" />
            <path id="Line 1_24" d="M348 580L426.952 315" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_28" cx="427" cy="311" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_29" cx="347.5" cy="581.5" r="2.5" fill="#DF2E2E" />
            <path
              id="Polygon 9_4"
              d="M426.5 528.5L431.5 533.5L426.5 538.5L421.5 533.5L426.5 528.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_23"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M426.5 541C430.642 541 434 537.642 434 533.5C434 529.358 430.642 526 426.5 526C422.358 526 419 529.358 419 533.5C419 537.642 422.358 541 426.5 541ZM426.5 539.75C429.952 539.75 432.75 536.952 432.75 533.5C432.75 530.048 429.952 527.25 426.5 527.25C423.048 527.25 420.25 530.048 420.25 533.5C420.25 536.952 423.048 539.75 426.5 539.75Z"
              fill="#6468B9"
            />
            <circle id="Ellipse 1_30" cx="479.5" cy="555.5" r="2.5" fill="#DF2E2E" />
          </g>

          <g
            id="24"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="24"
            data-location="C link to B site default"
            datatype="shock"
            data-bounces="2"
            data-charge="4"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the doorway of garage (not precise as long as you hit the proper part of the wall) and aim at the back wall about the height of barrier in back of site."
          >
            >
            <path id="Line 1_25" d="M479 466L351 442" stroke="#24A749" stroke-width="3" />
            <path id="Line 2_5" d="M402 686L350 443" stroke="#24A749" stroke-width="3" />
            <path id="Line 3_3" d="M433 488L479 467" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_31" cx="403" cy="690" r="6" fill="#2EDF60" />
            <circle id="Ellipse 1_32" cx="349.5" cy="441.5" r="2.5" fill="#DF2E2E" />
            <circle id="Ellipse 1_33" cx="479.5" cy="466.5" r="2.5" fill="#DF2E2E" />
            <path
              id="Polygon 9_5"
              d="M426.5 485.5L431.5 490.5L426.5 495.5L421.5 490.5L426.5 485.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_24"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M426.5 498C430.642 498 434 494.642 434 490.5C434 486.358 430.642 483 426.5 483C422.358 483 419 486.358 419 490.5C419 494.642 422.358 498 426.5 498ZM426.5 496.75C429.952 496.75 432.75 493.952 432.75 490.5C432.75 487.048 429.952 484.25 426.5 484.25C423.048 484.25 420.25 487.048 420.25 490.5C420.25 493.952 423.048 496.75 426.5 496.75Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="25"
            v-if="filter == 'shock' && sideFilter == 'ct'"
            class="lineups"
            data-id="25"
            data-location="C link to C default"
            datatype="shock"
            data-bounces="0"
            data-charge="1"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Stand in the corner and line up the middle of mouse tooltip with the spot where the roofs meet."
          >
            >
            <path id="Line 1_26" d="M417 805L352 615" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_34" cx="350" cy="611" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9_6"
              d="M419.5 806.5L424.5 811.5L419.5 816.5L414.5 811.5L419.5 806.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_25"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M419.5 819C423.642 819 427 815.642 427 811.5C427 807.358 423.642 804 419.5 804C415.358 804 412 807.358 412 811.5C412 815.642 415.358 819 419.5 819ZM419.5 817.75C422.952 817.75 425.75 814.952 425.75 811.5C425.75 808.048 422.952 805.25 419.5 805.25C416.048 805.25 413.25 808.048 413.25 811.5C413.25 814.952 416.048 817.75 419.5 817.75Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="26"
            v-if="filter == 'shock' && sideFilter == 't'"
            class="lineups"
            data-id="26"
            data-location="C long cubby to default"
            datatype="shock"
            data-bounces="0"
            data-charge="1"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner of cubby then aim at the floating leaf."
          >
            >
            <path id="Line 1_27" d="M631 813L426 812.005" stroke="#24A749" stroke-width="3" />
            <circle id="Ellipse 1_35" cx="635" cy="812" r="6" fill="#2EDF60" />
            <path
              id="Polygon 9_7"
              d="M419.5 806.5L424.5 811.5L419.5 816.5L414.5 811.5L419.5 806.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_26"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M419.5 819C423.642 819 427 815.642 427 811.5C427 807.358 423.642 804 419.5 804C415.358 804 412 807.358 412 811.5C412 815.642 415.358 819 419.5 819ZM419.5 817.75C422.952 817.75 425.75 814.952 425.75 811.5C425.75 808.048 422.952 805.25 419.5 805.25C416.048 805.25 413.25 808.048 413.25 811.5C413.25 814.952 416.048 817.75 419.5 817.75Z"
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
    clickLineup(e) {
      let screenData = MapService.clickLineup(e, "haven");
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
#haven {
  height: 100%;
  width: 100%;
  /* background-image: url("../../public/UI/background.svg");
  background-size: cover; */
}
html {
  height: 100%;
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
  .scaleDown {
    margin-top: 95px;
    width: 100%;
    height: auto;
    transform: scale(0.8);
    top: 20%;
  }
}
@media (min-width: 751px) {
  .scaleDown {
    width: auto;
    height: 100%;
    transform: scale(0.8);
  }
}
</style>
