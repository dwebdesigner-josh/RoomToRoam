Client Site: Room to Roam Records

setting up and styling lottie.js scripted json animations:
    Setting up 
        - within HTML doc, make script container div, within it input 2 script links: lottie.js (engine) and name.js (animation control and path selector for animation json)
        - img sequence folder will be referenced by .json
        - .json will be referenced by name.js
        - contain all in folder of the name of the animation, with subfolder for img sequence, with possibility of keeping one lottie.js file for multiple separate animations/folders if needed settings are the same

    Styling 
        DIV scripts container
        - perhaps not necessary to have, as the SVG container below is made by default by lottie, and is ultimately necessary for styling most of the time, also the SVG container may sometimes ignore the position of the DIV container
        -however, if done properly, this can still have its uses
            also, if you delete or modify the viewBox, transform, height, width styles of the SVG container as detailed below, the DIV becomes more important/its uses will change

        SVG animation container (made by lottie.js)
NOTE: VANILLAlottie.js is an unmodified version of the lottie.js file (reusable) that hasn't been styled yet
        - in lottie.js (engine) file, search for the following:
            "/*set STYLES HERE*/" if I have already set up a landmark to search by
            or "this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h)" if I haven't set up the above landmark yet
                - this first line sets the viewBox
                    For <svg>, 
                        - viewBox="" - property of <svg> -  defines the boundaries of the SVG (basically box size)
                        - when tweaking/defining positions of different points of the elements in the SVG, their positions will be relative to this
                        - defines aspect ratio
                        - defines origin (upper left corner I believe) of SVG for coordinate system
        - the code following this line will include svgElement.style.width="",this.svgElement.style.height="",this.svgElement.style.transform="",this.svgElement.style.contentVisibility=...
            - this sets the height, width, transform, and visibility of the SVG element that acts as the container of the animation

        IMG Sequence / JSON

                EACH JSON OBJECT (representing an img in the sequence) LOOKS LIKE:
                    {"id":"imgSeq_0","w":304,"h":285,"t":"seq","u":"images/","p":"seq_0_0.jpg","e":0}
https://www.w3schools.com/js/js_json_syntax.asp
                        These are shortened "name":"value" pairs
                        - ID is self explanatory
                        - w is width
                        - h is height
                        - t is ?
                        - u is ?
                        - p is ?
                        - e is ?
TODO: figure out the rest of the shorthand used in the JSON objects of this sequence
        - ideally, have the correct resolution you want as the original img sequence's resolutions
        - however, you can manually adjust the resolution of the animation (img sequence):
            open JSON in vscode
            figure out the current resolution values (ex: 304 x 285)
                - in JSON file, Ctrl F to highlight all of the first resolution value (ex: Ctrl F:"304")
                - use dropdown arrow in search field to bring up the replace feature
                - in the bottom bottom (replace) enter the desired new dimension, then click replace all
                - repeat the above for the second dimension (ex: Ctrl F:"285")
            - changing all height and width values to % values is not something I'm going to bother with right now because it is not very clean to do that
TODO figure out how to do that^ (would require js var's most likely)
        - possible other step for styling:
            ?

            