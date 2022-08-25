
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

    if (dWidth >= dHeight) {
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