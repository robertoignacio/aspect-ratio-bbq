
// width, height - when opening the window viewport
let initWidth = document.documentElement.clientWidth;
let initHeight = document.documentElement.clientHeight;

// js media queries inspector on the bottom left corner
const jsMQ = document.querySelector("#devicepixelratio-insp");

// values on document load
let devicePixelRatio = window.devicePixelRatio;
let dprAsPercentage = roundDec2((devicePixelRatio * 100));
jsMQ.innerText = `devicePixelRatio: ${devicePixelRatio}dppx
dprAsPercentage: ${dprAsPercentage}%
clientWidth: ${initWidth}px
clientHeight: ${initHeight}px`;

// conditionally set the pixel density from the device display area
// media query "resolution" is not supported on Safari
// TBD:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
const setPixelDensity = () => {
}

window.addEventListener("resize", () => {
    // grab current changed display sizes
    // viewport width in pixels:
    let dWidth = document.documentElement.clientWidth;
    // viewport height in pixels
    let dHeight = document.documentElement.clientHeight;

    let devicePixelRatioUpd = window.devicePixelRatio;
    let dprAsPercentageUpd = roundDec2((devicePixelRatio * 100));

    jsMQ.innerText = `devicePixelRatio: ${devicePixelRatioUpd}dppx
    dprAsPercentage: ${dprAsPercentageUpd}%
    clientWidth: ${dWidth}px
    clientHeight: ${dHeight}px`;
})

// rounding decimals to .0
function roundDec2(num) {
    let rounded = Math.round((num + Number.EPSILON) * 100) / 100
    return rounded
};
