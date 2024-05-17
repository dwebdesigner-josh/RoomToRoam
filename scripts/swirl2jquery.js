// inspiration: https://www.sitepoint.com/frame-by-frame-animation-css-javascript/#1framebyframeanimationbychangingtheimagessource
(() => {
//CHANGE class of $element below to match the HTML class of the img we're targeting
const $element = $('.swirl2');
//CHANGE the path below to match the folder containing the src imgs
const imagePath = '../scripts/swirl1/images';
const totalFrames = 99;
const animationDuration = 7150;
// TODO - figure out a proper formula for converting FPS into the above numbers
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 33;

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
//CHANGE path/image name to match, IF MULTIPLE JQUERY ANIMATIONS CHANGE DIV ID FORMAT TO BE UNIQUE TO EACH - unless using the same img base for each animation

//$(document).ready(() => {
  //for (var i = 1; i < totalFrames + 1; i++) {
    //$('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/seq_0_${i}.jpg');"></div>`);
  //}
//});

// wait for images to be downloaded and start the animation
$(window).on('load', () => {
  requestAnimationFrame(step);
});

})();
//The empty parentheses () indicate that the function takes no argument(s), and are required by the syntax. Arrow function expressions are also anonymous, whether they take arguments or not. That just means they don't have a specific name.

//TODO - find a way to make the animation only start on hover (stays on still image before then)
//HOWTO - pick starting keyframe - simply change the img src on html doc to match the file/keyframe number you want it to start on (see below for possible issue if multiple animations are being controlled by same jquery)
    //HOWTO - animations start staggered then sync up- if multiple animations are being controlled by the same jquery doc, then once one of the animations gets to the point where its sequence number is the same as the total number of imgs in the sequence, all of the animations will be reset not just that one, so if one starts on a different keyframe than the others, it will change back to being in sync with them after that first reset
//TODO - figure out issue with this: multiple JQuery JS files targetting the same images src folder .. the swirl2jquery.js isn't animating but the swirlqueryanimation.js animations are animating ... possible issue with 2 jquery scripts trying to pull from the same sequence directory at once? 
                //test1: separate directory for swirl2query.js images | result: same issue 
                //test2: switch <script src="jqueryfilename"> order in html doc | result: only the first jquery doc linked works
                  //fix1: move both scripts to the head rather than the body | result: FAILURE now none of them are animated
                  //fix2: ? most likely an issue with the document and window functions above.. continue on next session to diagnose this and find a way to make 2 query animations work on the same page
                  //fix3: changing img src names for swirl2 imgs - used powershell:   Get-ChildItem *.jpg| Rename-Item -NewName { $_ -replace 'seq_0_','seq_1_'}     | RESULT: didn't work
//TODO: once this is fixed, change names back in images2 folder/get rid of images 2 folder most likely as it's a waste of loading times and uses extra data for no reason (originally only made it to try to fix this issue and it didn't)
                  //fix4: route swirl2jquery.js back to the images src folder rather than having a separate one, and get rid of the div creation script in swirl2jquery ($body append....)
                  //fix5: change name of all variables in swirljqueryanimation.js script so that both scripts aren't using the same variable names (did this because of an error showing up in chrome dev tools which said soandso variable has already been defined) | RESULT: error now gone, but now only the second placed script in the html doc runs (not matter which script it is, only the second loaded one runs.. WTF!!!)
                  //FIX FINAL: per GPT, and https://developer.mozilla.org/en-US/docs/Glossary/IIFE , I used an IIFE to enclose both jquery scripts and it solved the issue  SYNTAX:   OPEN:  (() => {   CLOSE:    })(); 
                  //SOLVED