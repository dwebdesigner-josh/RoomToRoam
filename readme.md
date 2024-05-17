Client Site: Room to Roam Records



1. JQUERY ANIMATIONS
    lottie/bodymovin are gone - they were pointless
        have been replaced by a simple jquery img src changing script (currently titled swirljqueryanimation.js)


    TODO: 
    - before publishing the site, change imagePath back to proper format on scripts (currently has /RoomToRoam the start of the path to appease the github pages file structure)
    - find way to delay jquery scripts from executing the animation (requestAnimationFrame(step);) until after all images from the asset folder have been cached/loaded - will prevent an initial stutter that shows up in the animation when it first starts 
        test1: cause of stutter is not with image cache as stutter happens on the first time a script is used even when its cache of imgs is shared with an already used/cached different script
            result: this is some type of loading issue with the script itself not the image base
        test2: reset cache to see when the stutter stops
            result: cache and cookie reset didn't bring the stutter back..?
        possible solutions?:
            - visibly hide img element/animation until the animation has run through all the way one time? if that is what causes the stutter? or just for a couple seconds of it running.. not sure.. but once it's run, it doesn't seem to ever be an issue again.
            - no solution needed? this is definitely low priority for now.. maybe test with a hover effect to start the animation to see if that changes things

    - make documention for jquery animation files and existing documention notes from swirljqueryanimation.js to this readme instead 
    - explain formula for converting FPS to const timePerFrame = animationDuration / totalFrames; 
    - download copy of jquery to site directory rather than using the google API hosting link as its source 
        (https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js)
    - test and document standardized method of styling and positioning the jquery img src animation
        (should be a simple matter of styling the src img)
    -multiple jquery animations at once: works if you simply surround each script with an IIFE
        https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    - change starting frame: not on <img src=""> element, that just determines what image shows as the place holder while the page/script loads.. to determine the starting frame of the animation, in the script change let frameNumber1 = #; where # is the starting frame number

        