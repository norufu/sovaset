//functions for use between all the maps

const MapService = {
  loadPics(mapName, id, charge, bounce, instructions) {
    console.log(mapName, id, charge, bounce, instructions);
    let imgs = [];
    imgs.push(
      require("../../public/arrows/" +
        mapName +
        "/" +
        id +
        "/" +
        id +
        "_setup.png")
    );
    imgs.push(
      require("../../public/arrows/" +
        mapName +
        "/" +
        id +
        "/" +
        id +
        "_landing.png")
    );
    imgs.push(
      require("../../public/arrows/" +
        mapName +
        "/" +
        id +
        "/" +
        id +
        "_lineup_d.png")
    );
    imgs.push(
      require("../../public/arrows/" +
        mapName +
        "/" +
        id +
        "/" +
        id +
        "_lineup.png")
    );
    // console.log(this.imgs);
    switch (charge) {
      case "1":
        imgs.push(require("../../public/UI/charge bar 1-v.svg"));
        break;
      case "2":
        imgs.push(require("../../public/UI/charge bar 2-v.svg"));
        break;
      case "3":
        imgs.push(require("../../public/UI/charge bar 3-v.svg"));
        break;
      default:
        imgs.push(require("../../public/UI/charge bar 4-v.svg"));
    }
    switch (bounce) {
      case "1":
        imgs.push(require("../../public/UI/bounce 1-v.svg"));
        break;
      case "2":
        imgs.push(require("../../public/UI/bounce 2-v.svg"));
        break;
      default:
        imgs.push(require("../../public/UI/bounce 0-v.svg"));
    }
    console.log(imgs);
    return imgs;
  },
  clickLineup(e, mapName) {
    if (!e.target.closest("g").matches(".lineups")) return; // check if clicking a lineup
    console.log(e.target.closest("g").getAttribute("data-id"));
    let current = e.target.closest("g");
    // id = current.getAttribute("data-id");
    // this.currentCharge = current.getAttribute("data-charge");
    // this.currentBounce = current.getAttribute("data-bounces");
    // this.currentInstructions = current.getAttribute("data-instructions");

    //hide map, show screens

    // this.$refs.lineupScreen.loadPics(this.loadPics());
    let imgs = this.loadPics(
      mapName,
      current.getAttribute("data-id"),
      current.getAttribute("data-charge"),
      current.getAttribute("data-bounces")
    );
    let r = {
      imgs: imgs,
      instructions: current.getAttribute("data-instructions"),
    };
    return r;
  },
  // changeScale(dir){
  //   var div = document.getElementById('drawings');
  //   div.style.transform = div.style.transform.replace(/scale\([0-9|\.]*\)/, 'scale(' + newScale + ')');
  // }
};

export { MapService };
