// inspiration: https://www.sitepoint.com/frame-by-frame-animation-css-javascript/#1framebyframeanimationbychangingtheimagessource
(() => {
//CHANGE class of $element below to match the HTML class of the img we're targeting
const $element = $('.swirl-image');
//CHANGE the path below to match the folder containing the src imgs
const imagePath = '/scripts/swirl1/centeredimages';
//TEST PATH TO MATCH GITHUB PAGES: '/scripts....' instead of '/scripts....'
const totalFrames = 99;
const animationDuration = 7150;
// TODO - figure out a proper formula for converting FPS into the above numbers
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
//CHANGE number set here is the starting frame number
let frameNumber = 1;

// 'step' function will be called each time browser rerender the content
// we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
function step(startTime) {
  // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
  // first of all we calculate how much time has passed from the last time when frame was update
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;
  
  // then we check if it is time to update the frame
  if (timeFromLastUpdate > timePerFrame) {
    // and update it accordingly
    //CHANGE name and extension in +'' field accordingly to match sequence naming system
    $element.attr('src', imagePath + `/seq_0_${frameNumber}.jpg`);
    // reset the last update time
    timeWhenLastUpdate = startTime;
    
    // then increase the frame number or reset it if it is the last frame
    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }        
  }
  
  requestAnimationFrame(step);
}

// create a set of hidden divs
// and set their background-image attribute to required images
// that will force browser to download the images
//CHANGE path/image name to match, IF MULTIPLE JQUERY ANIMATIONS CHANGE DIV ID FORMAT TO BE UNIQUE TO EACH - unless using the same img base for each animation, in which case REMOVE this from all but one script
//$(document).ready(() => {
  //for (var i = 1; i < totalFrames + 1; i++) {
    //$('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/seq_0_${i}.jpg');"></div>`);
  //}
//});

// start animation after waiting for page content to load
$(window).on('load', () => {
  requestAnimationFrame(step);
});

// TODO - consider adding a delay timer to the above ^ to avoid visible buffering 


})();
