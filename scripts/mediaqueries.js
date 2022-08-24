
// width, height - when opening the window viewport
let initWidth = document.documentElement.clientWidth;
let initHeight = document.documentElement.clientHeight;

// js media queries inspector on the bottom left corner
const jsMQ = document.getElementById("js-media-queries");

// values on document load
let devicePixelRatio = window.devicePixelRatio;
let dprAsPercentage = roundDec2((devicePixelRatio * 100));
jsMQ.innerText = `devicePixelRatio: ${devicePixelRatio}dppx
dprAsPercentage: ${dprAsPercentage}%
clientWidth: ${initWidth}px
clientHeight: ${initHeight}px`;

// conditionally set the pixel density from the device display area
// media query "resolution" is not supported on Safari
// https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
const setPixelDensity = () => {

}

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
// grab the HTML body element that carry layout changes
// requires refactoring
// grab selector (use SelectorAll if any is repeated)
const cssVars = document.querySelector(":root");
// grab loaded css variables
function grabCssVars() {
    // css vars are read only --> getComputedStyle(element).getPropertyValue(property)
}


const elemPageCB = document.querySelector(".page-container-box");
const elemHeroCB = document.querySelector(".hero-container-box");
const elemMessCB = document.querySelector(".message-container-box");

const elemFSBody = document.querySelector(".fs-body");
const elemGradBT = document.querySelector(".gradient-bar-text");
const elemHeroPr = document.querySelector(".hero-proposal");
const elemHeroIv = document.querySelector(".hero-invite");
const elemMessPr = document.querySelector(".message-proposal");
const elemMessCT = document.querySelector(".message-cta");
const elemMessRs = document.querySelector(".message-reasoning");


// change layout to wide, square or narrow
// could be done with matchMedia(), but I am going for width vs height
// doing it with window.matchMedia() would be the same as with CSS
// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries

// remember this will run at each event resize
// which makes it quite memory expensive if several resizes
// update once, or set a threshold
window.addEventListener("resize", () => {
    
    // grab current changed display sizes
    // viewport width in pixels:
    let dWidth = document.documentElement.clientWidth;
    // viewport height in pixels
    let dHeight = document.documentElement.clientHeight;

    // if vWidth < vHeight ---> narrow layout
    // aspect-ratio: 0.8 from vWidth/vHeight ---> narrow layout
    // else, ---> wide layout 
    // will require tweaks for large displays
    // the problem with js media queries is that you have to set each layout trigger with explicit properties
    // js media queries have bigger priority (specificity)

    if (dWidth >= dHeight){
        jsMQ.innerText = "Wide Layout";

        elemPageCB.style.setProperty("flex-direction", "row");

        elemHeroCB.style.setProperty("width", "58.75%");
        elemHeroCB.style.setProperty("height", "100vh");

        elemMessCB.style.setProperty("width", "41.25%");
        elemMessCB.style.setProperty("height", "100vh");

        elemFSBody.style.setProperty("font-size", "var(--fs-body-large)");
        elemGradBT.style.setProperty("font-size", "var(--fs-small-large)");
        elemHeroPr.style.setProperty("font-size","var(--fs-h1-large)");
        elemHeroIv.style.setProperty("font-size", "var(--fs-h2-large)");
        elemMessPr.style.setProperty("font-size", "var(--fs-h2-large)");
        elemMessCT.style.setProperty("font-weight", "900");
        elemMessRs.style.setProperty("font-size", "var(--fs-body-large)");

    } else {
        // dWidth < dHeight
        jsMQ.innerText = "Narrow Layout";

        elemPageCB.style.setProperty("flex-direction", "column");

        elemHeroCB.style.setProperty("width", "100%");
        elemHeroCB.style.setProperty("height", "40%");

        elemMessCB.style.setProperty("width", "100%");
        elemMessCB.style.setProperty("height", "60%");

        elemBody.style.setProperty("font-size", "var(--fs-body-small)");
        elemGradBT.style.setProperty("font-size", "var(--fs-small-small)");
        elemHeroPr.style.setProperty("font-size","var(--fs-h1-small)");
        elemHeroIv.style.setProperty("font-size", "var(--fs-h2-small)");
        elemMessPr.style.setProperty("font-size", "var(--fs-h2-small)");
        elemMessCT.style.setProperty("font-weight", "700");
        elemMessRs.style.setProperty("font-size", "var(--fs-body-small)");
    }
});








// rounding decimals to .0
function roundDec2(num) {
    let rounded = Math.round((num + Number.EPSILON) * 100) / 100
    return rounded
};

/*

https://stackoverflow.com/questions/31955113/what-is-different-between-devicepixelratio-and-dppx
CSS interprets a device's resolution by the formula: 
device_resolution/css_pixel_ratio

For example:
Samsung Galaxy S III

Actual resolution: 720 x 1280
CSS Pixel Ratio: 2
Interpreted resolution: (720/2) x (1280/2) = 360 x 640

When viewing a web page, the CSS will think the device has a 360x640 resolution screen and Media Queries will respond as if the screen is 360x640.
But the rendered elements on the screen will be twice as sharp as an actual 360x640 screen.

The reason that CSS pixel ratio was created is because as phones screens get higher resolutions, if every device still had a CSS pixel ratio of 1 then webpages would render too small to see.

[...]
CSS features two units in which to express this magnitude:
dpi (dots per inch)
dppx (dots per pixel)

One dppx is the pixel density found in a 96dpi screen. (Because 96dpi was the dot density of CRT monitors)
1dppx = 96dpi

[...]
devicePixelRatio and dppx are exactly the same. 
The former is called from Javascript, and, the latter is used in CSS.
The browser asks for this value from the OS. 
The OS defines this value in its display mode.
Typical values are: @1x, @2x, @3x, @1.5x
The browser (engine) will use the media in @ dimension to achieve the highest quality.
This is done by the browser engine, not by us.

*/