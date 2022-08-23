
/* A very simple script for inspecting the aspect-ratio (width to height), the width in pixels and the height in pixels, to use it for designing the CSS @media queries. Note this script does not solve the precision issue of the floating point values in JavaScript.
Add it to the html file with a <div id="aspect-inspector"></div>
By: R. Villalón S.  2022, License: MIT
*/

// grab the aspect inspector location in the HTML
const aspectInpector = document.getElementById("aspect-inspector");

// width, height - when opening the window viewport
let initW = document.documentElement.clientWidth;
let initH = document.documentElement.clientHeight;

aspectInpector.innerText = `aspect-ratio: ${roundDec3(initW/initH)}
width: ${initW}px
height: ${initH}px`;

window.addEventListener("resize", () => {
    // viewport width in pixels:
    let vWidth = document.documentElement.clientWidth;
    // viewport height in pixels
    let vHeight = document.documentElement.clientHeight;

    // aspect ratio works in fractions so
    aspectInpector.innerText = `aspect-ratio: ${roundDec3(vWidth/vHeight)}
    width: ${vWidth}px
    height: ${vHeight}px`;
});

function roundDec3(num) {
    let rounded = Math.round((num + Number.EPSILON) * 1000) / 1000
    return rounded
};

