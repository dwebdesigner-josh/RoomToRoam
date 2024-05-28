Client Site: Room to Roam Records



1. JQUERY ANIMATIONS
    lottie/bodymovin are gone - they were pointless
        have been replaced by a simple jquery img src changing script (currently titled swirljqueryanimation.js)


    TODO: 
    - remove unused files once site is done (swirl2 js files and image bank most likely won't be used)
    - before publishing the site, change imagePath back to proper format on scripts (currently has /RoomToRoam the start of the path to appease the github pages file structure)

2. JQUERY STUTTER ISSUE ON FIRST TIME LOADING OF THE SITE (only the first few seconds) .. also a smaller stutter occurs when switching tabs and switching back
    - find way to delay jquery scripts from executing the animation (requestAnimationFrame(step);) until after all images from the asset folder have been cached/loaded - will prevent an initial stutter that shows up in the animation when it first starts 
        test1: cause of stutter is not with image cache as stutter happens on the first time a script is used even when its cache of imgs is shared with an already used/cached different script
            result: this is some type of loading issue with the script itself not the image base
        test2: reset cache to see when the stutter stops
            result: cache and cookie reset didn't bring the stutter back..?
        possible solutions?:
            - visibly hide img element/animation until the animation has run through all the way one time? if that is what causes the stutter? or just for a couple seconds of it running.. not sure.. but once it's run, it doesn't seem to ever be an issue again.
            - no solution needed? this is definitely low priority for now.. maybe test with a hover effect to start the animation to see if that changes things
                HOVER test: set one animation to hover and republished the site
                    -hover on first time use will stutter only if hover is done in the first few seconds (around 4-5) of loading the page
                    -hover start of animation after the first time has no stutter
                        RESULT:
                            - TIME is the issue here. Hovering over the animation for the first time does not cause it to stutter as long as you wait a few seconds before doing it on the first time accessing the site. So this is a matter of simply waiting a few seconds on the first loading of the page

                            POSSIBLE FIX: have something UX/UI related that prevents you from seeing/starting (where applicable) the animation on your first time using the site 
                                perhaps if no cache/cookies of the site are detected/first time visit to the 
  TODO>>                        site, (page as well? test later when multiple pages are up)
                                then play a greeting animation or loading animation at the start of loading the page, or pull up a welcome image that can be closed out of or closes itself (CSS animation)... just make sure it's something that doesn't poorly impact UX

  TODO- PREFERRED FIX:          POSSIBLE FIX 2: delay start of animation by a few seconds if page is loaded 
                                for the first time/no cookies/cache is detected
                                - this could be better on UX/UI as the user wouldn't even notice this
                                - if it's a hover animation or any other type of user activated animation start then the only time it wouldn't work would be the first couple seconds, the first time they ever use the site, so they'd be very unlikely to notice or be bothered by the delay, as by the time they know it's supposed to animate, they'll have the cookies/cache already and the delay won't be activated
                                - if it's a window on load animation or other automatic activated animation, then will need to have some transition into it to make it look natural when creating the animation itself (starting keyframe should be set to a part of the animation is minimally active) so it can ease into the animation
  TODO- tab change stutter      ALSO  .. also a smaller stutter occurs when switching tabs and switching back
                                so need to figure out if this needs a fix and if so what fix would work for it and work well with POSSIBLE FIX 2 above (ideally one thing to fix both, but a separate fix for each issue is fine if necessary)
                                        



3. TODO:
    - make documention for jquery animation files and existing documention notes from swirljqueryanimation.js to this readme instead 
    - explain formula for converting FPS to const timePerFrame = animationDuration / totalFrames; 
    - download copy of jquery to site directory rather than using the google API hosting link as its source 
        (https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js)
    - test and document standardized method of styling and positioning the jquery img src animation
        (should be a simple matter of styling the src img)
    -multiple jquery animations at once: works if you simply surround each script with an IIFE
        https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    - change starting frame: not on <img src=""> element, that just determines what image shows as the place holder while the page/script loads.. to determine the starting frame of the animation, in the script change let frameNumber1 = #; where # is the starting frame number

        