Client Site: Room to Roam Records



1. JQUERY ANIMATIONS
    lottie/bodymovin are gone - they were pointless
        have been replaced by a simple jquery img src changing script (currently titled swirljqueryanimation.js)


    TODO: 
    - make documention for jquery animation files and existing documention notes from swirljqueryanimation.js to this readme instead 
    - explain formula for converting FPS to const timePerFrame = animationDuration / totalFrames; 
    - download copy of jquery to site directory rather than using the google API hosting link as its source 
        (https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js)
    - test and document standardized method of styling and positioning the jquery img src animation
        (should be a simple matter of styling the src img)
    -multiple jquery animations at once: works if you simply surround each script with an IIFE
        https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    - change starting frame: not on <img src=""> element, that just determines what image shows as the place holder while the page/script loads.. to determine the starting frame of the animation, in the script change let frameNumber1 = #; where # is the starting frame number

        