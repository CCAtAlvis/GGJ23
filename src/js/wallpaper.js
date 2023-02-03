// Stars Position
const topp = document.getElementById("top");
function setStars(numS) {
    for (let i = 0; i < numS; i++) {
        let stars = document.createElement("div");
        stars.setAttribute("class", "stars");
        stars.style.left = 100 * Math.random() + "%";
        stars.style.top = 55 * Math.random() + "%";
        topp.appendChild(stars);
    }
}
setStars(250);

// create synth grids
const wallpaperGrid = document.querySelector("#wallpaper #grid");
function createSynthGrid(num) {
    for(let i=0; i<num; i++) {
        const div = document.createElement("div");
        wallpaperGrid.appendChild(div);
    }
}
createSynthGrid(640);

// create mountains
const wallpaperMountain = document.querySelector("#wallpaper #mountain");
function createMountain(num) {
    for(let i=0; i<num; i++) {
        const div = document.createElement("div");
        wallpaperMountain.appendChild(div);
    }
}
createMountain(8);
