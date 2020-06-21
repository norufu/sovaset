<template>
  <div id="bind">
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
      <Map v-if="state == 'map'" :mapName="'bind'">
        <img class="mapParts scaleDown" src="../../public/bindMini.png" />

        <!-- svg here -->
        <svg
          @click="clickLineup($event)"
          class="mapParts scaleDown"
          width="1030"
          height="1024"
          viewBox="0 0 1030 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="9"
            v-if="filter == 'shock' && sideFilter == 't'"
            class="lineups"
            data-id="9"
            data-location="A lobby to hell"
            datatype="shock"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Line up with wall, then aim at bottom left of v pattern on the top of the building."
          >
            <path
              id="Vector"
              d="M799.5 225.5L804.5 230.5L799.5 235.5L794.5 230.5L799.5 225.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M799.5 238C803.642 238 807 234.642 807 230.5C807 226.358 803.642 223 799.5 223C795.358 223 792 226.358 792 230.5C792 234.642 795.358 238 799.5 238ZM799.5 236.75C802.952 236.75 805.75 233.952 805.75 230.5C805.75 227.048 802.952 224.25 799.5 224.25C796.048 224.25 793.25 227.048 793.25 230.5C793.25 233.952 796.048 236.75 799.5 236.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_3"
              d="M690 607C693.314 607 696 604.314 696 601C696 597.686 693.314 595 690 595C686.686 595 684 597.686 684 601C684 604.314 686.686 607 690 607Z"
              fill="#2EDF60"
            />
            <path id="Vector_4" d="M691.5 596L797 237" stroke="#24A749" stroke-width="3" />
          </g>

          <g
            id="1"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="1"
            data-location="A heaven to B fountain"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with middle of wall heaven, then put the second tick of your charge bar with the corner of the roof."
          >
            <path id="Vector_5" d="M227 657.5L794 247.5" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_6"
              d="M798 250C801.314 250 804 247.314 804 244C804 240.686 801.314 238 798 238C794.686 238 792 240.686 792 244C792 247.314 794.686 250 798 250Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_7"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M221.5 669C225.642 669 229 665.642 229 661.5C229 657.358 225.642 654 221.5 654C217.358 654 214 657.358 214 661.5C214 665.642 217.358 669 221.5 669ZM221.5 667.75C224.952 667.75 227.75 664.952 227.75 661.5C227.75 658.048 224.952 655.25 221.5 655.25C218.048 655.25 215.25 658.048 215.25 661.5C215.25 664.952 218.048 667.75 221.5 667.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_8"
              d="M226.5 661.5C226.5 664.261 224.261 666.5 221.5 666.5C218.739 666.5 216.5 664.261 216.5 661.5C216.5 658.739 218.739 656.5 221.5 656.5C224.261 656.5 226.5 658.739 226.5 661.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="2"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="2"
            data-location="Back of A site to outside showers"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Back up into corner (should pop off the ground slightly) then line up the handle of your knife near the bottom of the black part on the building."
          >
            <path
              id="Vector_9"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M867.5 541C871.642 541 875 537.642 875 533.5C875 529.358 871.642 526 867.5 526C863.358 526 860 529.358 860 533.5C860 537.642 863.358 541 867.5 541ZM867.5 539.75C870.952 539.75 873.75 536.952 873.75 533.5C873.75 530.048 870.952 527.25 867.5 527.25C864.048 527.25 861.25 530.048 861.25 533.5C861.25 536.952 864.048 539.75 867.5 539.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_10"
              d="M872.5 533.5C872.5 536.261 870.261 538.5 867.5 538.5C864.739 538.5 862.5 536.261 862.5 533.5C862.5 530.739 864.739 528.5 867.5 528.5C870.261 528.5 872.5 530.739 872.5 533.5Z"
              fill="#6468B9"
            />
            <path id="Vector_11" d="M864 527.5L688.5 257.464" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_12"
              d="M686 259C689.314 259 692 256.314 692 253C692 249.686 689.314 247 686 247C682.686 247 680 249.686 680 253C680 256.314 682.686 259 686 259Z"
              fill="#2EDF60"
            />
          </g>

          <g
            id="3"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="3"
            data-location="A site boxes to mid"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line with the edge of the box, then place the small line off your health bar with the side of the radiator just above the piece that sticks out."
          >
            <path id="Vector_13" d="M394.5 558L751.5 323.5" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_14"
              d="M756 327C759.314 327 762 324.314 762 321C762 317.686 759.314 315 756 315C752.686 315 750 317.686 750 321C750 324.314 752.686 327 756 327Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_15"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M388.5 569C392.642 569 396 565.642 396 561.5C396 557.358 392.642 554 388.5 554C384.358 554 381 557.358 381 561.5C381 565.642 384.358 569 388.5 569ZM388.5 567.75C391.952 567.75 394.75 564.952 394.75 561.5C394.75 558.048 391.952 555.25 388.5 555.25C385.048 555.25 382.25 558.048 382.25 561.5C382.25 564.952 385.048 567.75 388.5 567.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_16"
              d="M393.5 561.5C393.5 564.261 391.261 566.5 388.5 566.5C385.739 566.5 383.5 564.261 383.5 561.5C383.5 558.739 385.739 556.5 388.5 556.5C391.261 556.5 393.5 558.739 393.5 561.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="4"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="4"
            data-location="A site boxes to A market"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the edge of the box, then place the left side of your tooltip on the edge of the red flag on the wall and the top of your tooltip with the wire above the wall"
          >
            <path id="Vector_17" d="M521.5 559.5L753 325.118" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_18"
              d="M756 327C759.314 327 762 324.314 762 321C762 317.686 759.314 315 756 315C752.686 315 750 317.686 750 321C750 324.314 752.686 327 756 327Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_19"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M516.5 572C520.642 572 524 568.642 524 564.5C524 560.358 520.642 557 516.5 557C512.358 557 509 560.358 509 564.5C509 568.642 512.358 572 516.5 572ZM516.5 570.75C519.952 570.75 522.75 567.952 522.75 564.5C522.75 561.048 519.952 558.25 516.5 558.25C513.048 558.25 510.25 561.048 510.25 564.5C510.25 567.952 513.048 570.75 516.5 570.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_20"
              d="M521.5 564.5C521.5 567.261 519.261 569.5 516.5 569.5C513.739 569.5 511.5 567.261 511.5 564.5C511.5 561.739 513.739 559.5 516.5 559.5C519.261 559.5 521.5 561.739 521.5 564.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="5"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="1"
            data-location="A outside CT/Lamps to outside showers"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with wall near CT and place the left side of your tooltip between the 'rocks' and the black part of the roof. Top of tooltip with the top of the black part."
          >
            <path id="Vector_21" d="M864 585.5L685 310.5" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_22"
              d="M682 312C685.314 312 688 309.314 688 306C688 302.686 685.314 300 682 300C678.686 300 676 302.686 676 306C676 309.314 678.686 312 682 312Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_23"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M867.5 599C871.642 599 875 595.642 875 591.5C875 587.358 871.642 584 867.5 584C863.358 584 860 587.358 860 591.5C860 595.642 863.358 599 867.5 599ZM867.5 597.75C870.952 597.75 873.75 594.952 873.75 591.5C873.75 588.048 870.952 585.25 867.5 585.25C864.048 585.25 861.25 588.048 861.25 591.5C861.25 594.952 864.048 597.75 867.5 597.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_24"
              d="M872.5 591.5C872.5 594.261 870.261 596.5 867.5 596.5C864.739 596.5 862.5 594.261 862.5 591.5C862.5 588.739 864.739 586.5 867.5 586.5C870.261 586.5 872.5 588.739 872.5 591.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="6"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="6"
            data-location="A boxes to outside B teleport room"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Line up with the box then place the tip of the arrows above your tooltip on the cable between the two triangles."
          >
            <path id="Vector_25" d="M854 647.5L786.5 344.5" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_26"
              d="M785 345C788.314 345 791 342.314 791 339C791 335.686 788.314 333 785 333C781.686 333 779 335.686 779 339C779 342.314 781.686 345 785 345Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_27"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M855.5 662C859.642 662 863 658.642 863 654.5C863 650.358 859.642 647 855.5 647C851.358 647 848 650.358 848 654.5C848 658.642 851.358 662 855.5 662ZM855.5 660.75C858.952 660.75 861.75 657.952 861.75 654.5C861.75 651.048 858.952 648.25 855.5 648.25C852.048 648.25 849.25 651.048 849.25 654.5C849.25 657.952 852.048 660.75 855.5 660.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_28"
              d="M860.5 654.5C860.5 657.261 858.261 659.5 855.5 659.5C852.739 659.5 850.5 657.261 850.5 654.5C850.5 651.739 852.739 649.5 855.5 649.5C858.261 649.5 860.5 651.739 860.5 654.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="7"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="7"
            data-location="Back Site A to B long"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Back up into the corner, then line up the triangle part of your tooltip with the diagonal beam on the wall, and the diagonal beem of light."
          >
            <path id="Vector_29" d="M199.5 582L724.5 257" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_30"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M193.5 593C197.642 593 201 589.642 201 585.5C201 581.358 197.642 578 193.5 578C189.358 578 186 581.358 186 585.5C186 589.642 189.358 593 193.5 593ZM193.5 591.75C196.952 591.75 199.75 588.952 199.75 585.5C199.75 582.048 196.952 579.25 193.5 579.25C190.048 579.25 187.25 582.048 187.25 585.5C187.25 588.952 190.048 591.75 193.5 591.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_31"
              d="M198.5 585.5C198.5 588.261 196.261 590.5 193.5 590.5C190.739 590.5 188.5 588.261 188.5 585.5C188.5 582.739 190.739 580.5 193.5 580.5C196.261 580.5 198.5 582.739 198.5 585.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_32"
              d="M729 260C732.314 260 735 257.314 735 254C735 250.686 732.314 248 729 248C725.686 248 723 250.686 723 254C723 257.314 725.686 260 729 260Z"
              fill="#2EDF60"
            />
          </g>

          <g
            id="8"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="8"
            data-location="A short towards showers to outside lamps/cubby"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="t"
            data-difficulty="1"
            data-instructions="Stand in the corner then place crosshair where the leaves meet as shown."
          >
            <path id="Vector_33" d="M728.5 581.5L654 364" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_34"
              d="M731 592C734.314 592 737 589.314 737 586C737 582.686 734.314 580 731 580C727.686 580 725 582.686 725 586C725 589.314 727.686 592 731 592Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_35"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M651.5 365C655.642 365 659 361.642 659 357.5C659 353.358 655.642 350 651.5 350C647.358 350 644 353.358 644 357.5C644 361.642 647.358 365 651.5 365ZM651.5 363.75C654.952 363.75 657.75 360.952 657.75 357.5C657.75 354.048 654.952 351.25 651.5 351.25C648.048 351.25 645.25 354.048 645.25 357.5C645.25 360.952 648.048 363.75 651.5 363.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_36"
              d="M656.5 357.5C656.5 360.261 654.261 362.5 651.5 362.5C648.739 362.5 646.5 360.261 646.5 357.5C646.5 354.739 648.739 352.5 651.5 352.5C654.261 352.5 656.5 354.739 656.5 357.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="10"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="10"
            data-location="A short towards showers to back site heaven"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Line up with the wall then aim on the top left part of the darker texture as shown."
          >
            >
            <path id="Vector_37" d="M692 596L811.5 262" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_38"
              d="M690 607C693.314 607 696 604.314 696 601C696 597.686 693.314 595 690 595C686.686 595 684 597.686 684 601C684 604.314 686.686 607 690 607Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_39"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M814.5 263C818.642 263 822 259.642 822 255.5C822 251.358 818.642 248 814.5 248C810.358 248 807 251.358 807 255.5C807 259.642 810.358 263 814.5 263ZM814.5 261.75C817.952 261.75 820.75 258.952 820.75 255.5C820.75 252.048 817.952 249.25 814.5 249.25C811.048 249.25 808.25 252.048 808.25 255.5C808.25 258.952 811.048 261.75 814.5 261.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_40"
              d="M819.5 255.5C819.5 258.261 817.261 260.5 814.5 260.5C811.739 260.5 809.5 258.261 809.5 255.5C809.5 252.739 811.739 250.5 814.5 250.5C817.261 250.5 819.5 252.739 819.5 255.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="11"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="11"
            data-location="T spawn near market to B site"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="t"
            data-difficulty="3"
            data-instructions="Line up with edge of the wall, then place the line coming off your health bar with the middle of the line separating the blocks in the wall. Ideally the arrow lands exactly on the corner of site (covering back site and elbow) but it's inconsistent. If you have a better lineup to do this let me know."
          >
            >
            <path id="Vector_41" d="M520.5 710.5L244.5 326" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_42"
              d="M524 721C527.314 721 530 718.314 530 715C530 711.686 527.314 709 524 709C520.686 709 518 711.686 518 715C518 718.314 520.686 721 524 721Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_43"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M240.5 328C244.642 328 248 324.642 248 320.5C248 316.358 244.642 313 240.5 313C236.358 313 233 316.358 233 320.5C233 324.642 236.358 328 240.5 328ZM240.5 326.75C243.952 326.75 246.75 323.952 246.75 320.5C246.75 317.048 243.952 314.25 240.5 314.25C237.048 314.25 234.25 317.048 234.25 320.5C234.25 323.952 237.048 326.75 240.5 326.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_44"
              d="M245.5 320.5C245.5 323.261 243.261 325.5 240.5 325.5C237.739 325.5 235.5 323.261 235.5 320.5C235.5 317.739 237.739 315.5 240.5 315.5C243.261 315.5 245.5 317.739 245.5 320.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="12"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="12"
            data-location="Mid box to right side B site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Line up with the edge of the box in mid, place the top left corner of the tooltip with the bottom right corner of the triangle shadow."
          >
            >
            <path id="Vector_45" d="M419 486L363 276" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_46"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M360.5 277C364.642 277 368 273.642 368 269.5C368 265.358 364.642 262 360.5 262C356.358 262 353 265.358 353 269.5C353 273.642 356.358 277 360.5 277ZM360.5 275.75C363.952 275.75 366.75 272.952 366.75 269.5C366.75 266.048 363.952 263.25 360.5 263.25C357.048 263.25 354.25 266.048 354.25 269.5C354.25 272.952 357.048 275.75 360.5 275.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_47"
              d="M365.5 269.5C365.5 272.261 363.261 274.5 360.5 274.5C357.739 274.5 355.5 272.261 355.5 269.5C355.5 266.739 357.739 264.5 360.5 264.5C363.261 264.5 365.5 266.739 365.5 269.5Z"
              fill="#6468B9"
            />
            <path
              id="Vector_48"
              d="M421 497C424.314 497 427 494.314 427 491C427 487.686 424.314 485 421 485C417.686 485 415 487.686 415 491C415 494.314 417.686 497 421 497Z"
              fill="#2EDF60"
            />
          </g>

          <g
            id="13"
            v-if="filter == 'sonar' && sideFilter == 't'"
            class="lineups"
            data-id="13"
            data-location="B long to left side B site"
            datatype="sonar"
            data-bounces="0"
            data-charge="2"
            data-side="t"
            data-difficulty="1"
            data-instructions="Back into the corner then place crosshair under the corner where the support beam and roof meet."
          >
            >
            <path id="Vector_49" d="M185.5 568L276 243" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_50"
              d="M184 579C187.314 579 190 576.314 190 573C190 569.686 187.314 567 184 567C180.686 567 178 569.686 178 573C178 576.314 180.686 579 184 579Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_51"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M278.5 244C282.642 244 286 240.642 286 236.5C286 232.358 282.642 229 278.5 229C274.358 229 271 232.358 271 236.5C271 240.642 274.358 244 278.5 244ZM278.5 242.75C281.952 242.75 284.75 239.952 284.75 236.5C284.75 233.048 281.952 230.25 278.5 230.25C275.048 230.25 272.25 233.048 272.25 236.5C272.25 239.952 275.048 242.75 278.5 242.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_52"
              d="M283.5 236.5C283.5 239.261 281.261 241.5 278.5 241.5C275.739 241.5 273.5 239.261 273.5 236.5C273.5 233.739 275.739 231.5 278.5 231.5C281.261 231.5 283.5 233.739 283.5 236.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="14"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="14"
            data-location="B site to B long fountain"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="1"
            data-instructions="Back into the corner then place the tip of the shock dart icon with the top middle of the hanging ball aligned with the middle rope."
          >
            >
            <path id="Vector_53" d="M242 630L368 282" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_54"
              d="M370 283C373.314 283 376 280.314 376 277C376 273.686 373.314 271 370 271C366.686 271 364 273.686 364 277C364 280.314 366.686 283 370 283Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_55"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M239.5 644C243.642 644 247 640.642 247 636.5C247 632.358 243.642 629 239.5 629C235.358 629 232 632.358 232 636.5C232 640.642 235.358 644 239.5 644ZM239.5 642.75C242.952 642.75 245.75 639.952 245.75 636.5C245.75 633.048 242.952 630.25 239.5 630.25C236.048 630.25 233.25 633.048 233.25 636.5C233.25 639.952 236.048 642.75 239.5 642.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_56"
              d="M244.5 636.5C244.5 639.261 242.261 641.5 239.5 641.5C236.739 641.5 234.5 639.261 234.5 636.5C234.5 633.739 236.739 631.5 239.5 631.5C242.261 631.5 244.5 633.739 244.5 636.5Z"
              fill="#6468B9"
            />
          </g>

          <g
            id="15"
            v-if="filter == 'sonar' && sideFilter == 'ct'"
            class="lineups"
            data-id="15"
            data-location="B site to mid market"
            datatype="sonar"
            data-bounces="0"
            data-charge="3"
            data-side="ct"
            data-difficulty="2"
            data-instructions="Line up with the edge of the door and place the top left corner of your charge bar with the bottom right corner of the shadow."
          >
            >>
            <path id="Vector_57" d="M420 614.5L345 240.5" stroke="#24A749" stroke-width="3" />
            <path
              id="Vector_58"
              d="M343 242C346.314 242 349 239.314 349 236C349 232.686 346.314 230 343 230C339.686 230 337 232.686 337 236C337 239.314 339.686 242 343 242Z"
              fill="#2EDF60"
            />
            <path
              id="Vector_59"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M421.5 629C425.642 629 429 625.642 429 621.5C429 617.358 425.642 614 421.5 614C417.358 614 414 617.358 414 621.5C414 625.642 417.358 629 421.5 629ZM421.5 627.75C424.952 627.75 427.75 624.952 427.75 621.5C427.75 618.048 424.952 615.25 421.5 615.25C418.048 615.25 415.25 618.048 415.25 621.5C415.25 624.952 418.048 627.75 421.5 627.75Z"
              fill="#6468B9"
            />
            <path
              id="Vector_60"
              d="M426.5 621.5C426.5 624.261 424.261 626.5 421.5 626.5C418.739 626.5 416.5 624.261 416.5 621.5C416.5 618.739 418.739 616.5 421.5 616.5C424.261 616.5 426.5 618.739 426.5 621.5Z"
              fill="#6468B9"
            />
          </g>
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0" transform="scale(0.000976562)" />
            </pattern>
            <clipPath id="clip0">
              <rect width="74" height="235" fill="white" transform="translate(353 262)" />
            </clipPath>
          </defs>
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
  name: "Bind",
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
      let screenData = MapService.clickLineup(e, "bind");
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
#bind {
  height: 100%;
  width: 100%;
  /* background-image: url("../../public/UI/background.svg");
  background-size: cover; */
}
.lineupDiv {
  height: 100%;
}
html {
  height: 100%;
}
.mapDiv {
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.scaleDown {
  transform: scale(0.8);
}
</style>
