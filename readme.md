Client Site: Room to Roam Records



-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
HOME PAGE NOTES:

1. TODO - general:
   - home page: accessibility and SEO overview/improvements as needed

  - consider implementing startest into background image (for animated star flickering)

   - slide.js:
         TODO: add scroll (swipe) function (optional) on mobile instead of the single click, possibly use it to replace the transition delay functions
         TODO: OPTIMIZE slide.js (SEE slideoptimized.js to get started)

    - prefers-reduced-motion media query on nav menu -  fix so opacity transition actually works and translate 
    transition actually stops happening
    - set up prefers-reduced-motion accessibility feature for tree logo transformation transition and swirl animation disabling as well
    -pixelation issue on highlight background when scaled down viewport width - see screenshot in room to roam notes folder
        possible issue/fix:
        https://css-tricks.com/forums/topic/scaling-down-images-with-css-makes-them-blurry/
    - consider a loading screen on first visit or landing page overlay on the home screen or something of that sort, as the highlight image is also going to take a couple seconds to load so it's not just a matter of the jquery animations
        - possible fix - hide all elements like large images and jquery animations until the page is loaded, with a css transition animation or some similar quick to load effect as sort of the page loading animation - see https://therecordcompany.net/ (all elements hidden until fully loaded) 
            see this site for the CSS transition on load: https://stackoverflow.com/questions/6805482/css3-transition-animation-on-load
        - possible fix: simply hide the page on a delay until everything is ready: https://stackoverflow.com/questions/9550760/hide-page-until-everything-is-loaded-advanced
            ex: https://www.therecordco.org/
        - https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading
    - remove unused files once site is done (swirl2 js files and image bank most likely won't be used)

    - before publishing the site, change imagePath back to proper format on scripts (currently has /RoomToRoam the start of the path to appease the github pages file structure)

    - look into SEO plugin: Yoast SEO plugin v22.7 - https://yoast.com/wordpress/plugins/seo/ 
        as used on both record sites above




2. TODO - jqeury:
    - make documentation for jquery animation files and existing documention notes from swirljqueryanimation.js to this readme instead 
    - explain formula for converting FPS to const timePerFrame = animationDuration / totalFrames; 
    - download copy of jquery to site directory rather than using the google API hosting link as its source 
        (https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js)
    - test and document standardized method of styling and positioning the jquery img src animation
        (should be a simple matter of styling the src img)
    -multiple jquery animations at once: works if you simply surround each script with an IIFE
        https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    - change starting frame: not on <img src=""> element, that just determines what image shows as the place holder while the page/script loads.. to determine the starting frame of the animation, in the script change let frameNumber1 = #; where # is the starting frame number





-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
RESEARCH NOTES:

- SAFARI JS/HAMBURGER
    FINAL FIX:
        just a syntax issue, and a combinator issue:
            replacing 
                #topnav-open[aria-expanded="true"]{
                    + #topnav-menu{translate: 0;} 
                }
            with 
                #topnav-open[aria-expanded="true"] ~ #topnav-menu {
                    translate: 0; 
                }
            fixes everything

    INITIAL FIX:
    /*HAMBURGER MENU SOLUTION FOUND - REMOVAL OF BELOW + COMBINATOR BASED TRANSLATION, replaced with JS based translation using topNavMenu.setAttribute ("style","translate: 0;") with a click event listener on the open button to activate the function*/
        /*THIS + COMBINATOR DOES NOT WORK ON SAFARI*/
                #topnav-open[aria-expanded="true"]{
                    + #topnav-menu{translate: 0;} 
                }

            rough replacement JS
                    function openMobileMenu(){
                     alert('Open menu function called');
                     topNavMenu.setAttribute ("style","translate: 0;");
                    }
        further notes on research/fix:https://stackoverflow.com/questions/78605252/solved-hamburger-menu-using-aria-expanded-js-jquery-and-css-translation-not 

- STARTEST - CSS opacity and visibility transition animation using star background img and star img overlayed 
    - https://stackoverflow.com/questions/8449933/how-to-transition-css-display-opacity-properties
        for opacity transition
            - HOVER EFFECT TRANSITION LOOKS GREAT FOR ANOTHER USE SOMEWHERE ON THE SITE (like purposely have the animation only flicker the stars when something on the site is clicked/hovered over-maybe use for a review article read more link or something like that)
    - animation-iteration-count: infinite;
        for looping/automatic keyframe animation

- JQUERY STUTTER ISSUE ON FIRST TIME LOADING OF THE SITE (only the first few seconds) .. also a smaller stutter occurs when switching tabs and switching back
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
                                        

- how i found body height function based on viewport width:
gathered data (w and h) of various webpage sizes, making sure to make the viewport height small when gather the data as the 100svh on the header is nullified when the vh is small and that is just set to the min height of 500px
  plug in height and width data into desmos graphing calculator (y=h, x=w)
    run formula: y~a(x^2)+b(x)+c
    find the a b and c constant values from desmos magic
  did this with 2 separate formulas/data sets (1 with all gathered width/height measurements done with <850px viewport width, and the other with >850px vw - for media query changes to be accounted for)
      formula found for <850px: 
        h~0.0020557(w^2)+1.24901(w)+858.6
          +100svh (for the header when not at min value)
      formula found for >850px: 
        h~.000032355(w^2)+2.21241(w)+574.215
          +100svh (for the header when not at min value)
    OR - linear (since the hyperbolic forumlae above have a values near 0 anyway):
        linear formula for <850px:
            h~3.31618(w)+417.909 >>> 
                            MOBILE :         h=3.32w+418 CLOSE ENOUGH TO THE DATA
        linear formula for >850px:
            h~2.37198(w)+426.538 >>> 
                            DESKTOP :         h=2.37w+427 EXTREMELY CLOSE TO THE DATA

                                              with svh change added for header: +100svh-500px (add to end of each formula)

                      FINAL FORMULAE USED:   
                        /*MOBILE*/
                        @media screen and (max-width: 850px){
                          .loadcontainer {height: calc(350vw + 418px);}
                        }
                            perfected to  #loadcontainer {height: calc(362vw - 82px + 100svh);}
                        /*DESKTOP*/
                        @media screen and (min-width: 850px){
                          .loadcontainer {height: calc(237vw + 427px);}
                        }
                            perfected to   #loadcontainer {height: calc(237vw - 73px + 100svh);}


                        CHANGES TO HEIGHT: 
                          header minheight mobile still 500px, 
                          header minheight desktop now 50vw
                          missionstatement height now 360 px instead of 30vw
                          highlight div aka slider: margin-top: 100px; and margin-bottom: 60px;
                            
                            formulas changed to:

                                      MOBILE
                                        height: calc(332vw + 438px + 100svh);
                                      DESKTOP
                                        height: calc(222vw + 438px + 100svh);
                                          a bit of an overshot on some windows but it looks good
                                          why did I choose it? idk man it just worked




SAVE: (artists.js)

  (() => {
    // Loop through elements with ids starting with 'td-expand-' 
    const tdExpand = document.querySelectorAll('[id^="td-expand-"]');
    
    //nodelist function - https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach  
    tdExpand.forEach(function(tdExpand) {
            //for later - if id="td-expand-idNumber" , then:
            // const idNumber = parseInt(tdExpand.id.split('-')[2], 10);

            function listExpand(){
                if (tdExpand.getAttribute('aria-expanded') === 'true') {
                    tdExpand.setAttribute('aria-expanded', 'false');
                } else {
                    tdExpand.setAttribute('aria-expanded', 'true');
                }
            }

        tdExpand.addEventListener('click', listExpand);
              
        tdExpand.addEventListener('keydown', function(event) {
            // Check if the key pressed is Enter (key code 13)
            if (event.key === 'Enter' || event.keyCode === 13) {
                listExpand();
            }
        });
    });
  })();







  SAVE
         <tr>
               
          <td class="td-artist">Balla Dambdan</td>
          <td class="td-medium">Writing</td>
          <td class="td-featured-date">>Date Featured: 2024-03</td>
          <td>
            <div class="td-details">
              <section id="td-expand-3" class="list-artist-details" tabindex="0" aria-expanded="false">
                <div class="list-artist-text">
                  <div class="list-background-container"><img class="list-background-img" src="/images/technicolors.jpg" alt="" width="100%"></div>
                  <div class="list-backgroundedge-container"><img class="list-backgroundedge" src="/images/back2.jpg" alt="" width="100%" height="100%"></div>
                  <span class="list-span-filler"></span>
                  <a class="list-artist-name-link" href="/artists/BallaDambdan/" target="_self">
                      <h2>Balla Dambdan</h2>
                    </a>
                  <article class="list-artist-details-article">
                      <div class="list-slideP">
                        <p>Author<br>Sci-fi<br><p class="latestwork">Latest Work: Galactic Echoes</p></p>
                        <p class="list-slideP-expanded">Balla Dambdan is a celebrated author in the realm of science fiction, known for her imaginative and thought-provoking narratives that captivate readers around the globe. Born in Accra, Ghana, Balla's early fascination with the stars and the future propelled her into the world of speculative fiction, where she has carved out a unique niche with her compelling storytelling. <br><br>Balla's journey into writing began in her teenage years, inspired by classic sci-fi literature and the technological advancements of her time. She pursued a degree in Astrophysics at the University of Cape Town, which provided her with a solid foundation in scientific principles that she skillfully integrates into her writing. Her academic background adds a layer of authenticity and depth to her futuristic worlds, making them both believable and awe-inspiring.</p>
                        <a style="z-index: 300; position: relative; text-decoration: none; padding-bottom: .2rem; border-bottom: 1px inset white;" class="list-slideP-expanded"  href="/artists/BallaDambdan/" aria-label="Continue to this artist's page." target="_self">View Artist's Page</a>
                        </div>     
                      </article>
                      <a href="/artists/BallaDambdan/" class="continue-arrowright-container" aria-label="Continue to this artist's page."><img class="continue-arrowright" src="/images/continuearrowrightVblue.png" height="100%" width="100%" alt=""></a>
                  </div>
                  <img class="list-img-expand-arrowdown" src="/images/expandarrowdown.png" alt="" width="50px">
                  <img class="list-img-expand-arrowup" src="/images/expandarrowup.png" alt="" width="50px">
                 </section>
              </div>
            </td>  
        </tr>
        <tr>
          
          <td class="td-artist">Taige OReilly</td>      <!--MAKE SURE TO LEAVE OUT APOSTROPHES IN THE TD (for search functionality)-->
          <td class="td-medium">Music</td>
          <td class="td-featured-date">>Date Featured: 2021-12</td>
          <td>
            <div class="td-details">
              <section id="td-expand-4" class="list-artist-details" tabindex="0" aria-expanded="false">
                <div class="list-artist-text">
                  <div class="list-background-container"><img class="list-background-img" src="/images/technicolors.jpg" alt="" width="100%"></div>
                  <div class="list-backgroundedge-container"><img class="list-backgroundedge" src="/images/back2.jpg" alt="" width="100%" height="100%"></div>
                  <span class="list-span-filler"></span>
                  <a class="list-artist-name-link" href="/artists/TaigeOreilly/" target="_self">
                      <h2>Taige O'Reilly</h2>
                    </a>
                  <article class="list-artist-details-article">
                      <div class="list-slideP">
                        <p>Music<br>Alternative<br><p class="latestwork">Latest Work: Confusion</p></p>
                        <p class="list-slideP-expanded">Taige O'Reilly is a self-named indie music artist known for her distinctive style and introspective lyrics that resonate with listeners worldwide. Hailing from Dublin, Ireland, Taige discovered her passion for music at a young age, drawing inspiration from the city's vibrant cultural scene and its rich musical heritage.<br><br>Her musical journey began with humble beginnings, playing acoustic sets in local pubs and cafes, where her raw talent and emotive performances quickly garnered attention. Influenced by a diverse range of genres, from folk to indie rock, Taige developed a sound that blends haunting melodies with poignant storytelling.<br><br>Taige's debut album, "Echoes of Silence," captured the essence of her introspective songwriting and garnered critical acclaim for its authenticity and emotional depth. Her lyrics delve into themes of love, loss, and personal growth, offering listeners a glimpse into her own journey and reflections on life's complexities.</p>
                          <a style="z-index: 300; position: relative; text-decoration: none; padding-bottom: .2rem; border-bottom: 1px inset white;" class="list-slideP-expanded"  href="/artists/TaigeOreilly/" aria-label="Continue to this artist's page." target="_self">View Artist's Page</a>
                        </div>       
                      </article>
                      <a href="/artists/TaigeOreilly/" class="continue-arrowright-container" aria-label="Continue to this artist's page."><img class="continue-arrowright" src="/images/continuearrowrightVblue.png" height="100%" width="100%" alt=""></a>
                  </div>
                  <img class="list-img-expand-arrowdown" src="/images/expandarrowdown.png" alt="" width="50px">
                  <img class="list-img-expand-arrowup" src="/images/expandarrowup.png" alt="" width="50px">
                 </section>
              </div>
            </td>
        </tr>
        <tr>
          
          <td class="td-artist">Mambo Jambo</td>
          <td class="td-medium">Music</td>
          <td class="td-featured-date">>Date Featured: 2022-09</td>
          <td>
            <div class="td-details">
              <section id="td-expand-5" class="list-artist-details" tabindex="0" aria-expanded="false">
                <div class="list-artist-text">
                  <div class="list-background-container"><img class="list-background-img" src="/images/technicolors.jpg" alt="" width="100%"></div>
                  <div class="list-backgroundedge-container"><img class="list-backgroundedge" src="/images/back2.jpg" alt="" width="100%" height="100%"></div>
                  <span class="list-span-filler"></span>
                  <a class="list-artist-name-link" href="/artists/MamboJambo/" target="_self">
                      <h2>Mambo Jambo</h2>
                    </a>
                  <article class="list-artist-details-article">
                      <div class="list-slideP">
                        <p>Music<br>Jungle<br><p class="latestwork">Latest Work: Rhythms of the Rainforest</p></p>
                        <p class="list-slideP-expanded">Mambo Jambo is an electrifying jungle music group renowned for their high-energy performances and innovative fusion of traditional rhythms with modern electronic beats. Originating from the lush landscapes of the Amazon rainforest, the group was founded by a diverse ensemble of musicians who share a deep passion for the rich musical traditions of their homeland.
                          <br><br>
                          The journey of Mambo Jambo began when its members, hailing from various indigenous tribes, came together with a shared vision of preserving and modernizing their ancestral sounds. Their music is a vibrant tapestry of rhythmic drumming, intricate melodies, and dynamic bass lines, all seamlessly blended with contemporary electronic elements to create a unique and captivating auditory experience.
                          <br><br>
                          Mambo Jambo's debut album, "Rhythms of the Rainforest," quickly catapulted them to international acclaim, praised for its authenticity and innovative sound. The album showcases their ability to transport listeners to the heart of the jungle, with tracks that feature the enchanting sounds of native instruments like the marimba, panpipes, and traditional drums, interwoven with pulsating electronic beats.</p>
                        <a style="z-index: 300; position: relative; text-decoration: none; padding-bottom: .2rem; border-bottom: 1px inset white;" class="list-slideP-expanded"  href="/artists/MamboJambo/" aria-label="Continue to this artist's page." target="_self">View Artist's Page</a>
                        </div>       
                      </article>
                      <a href="/artists/MamboJambo/" class="continue-arrowright-container" aria-label="Continue to this artist's page."><img class="continue-arrowright" src="/images/continuearrowrightVblue.png" height="100%" width="100%" alt=""></a>
                  </div>
                  <img class="list-img-expand-arrowdown" src="/images/expandarrowdown.png" alt="" width="50px">
                  <img class="list-img-expand-arrowup" src="/images/expandarrowup.png" alt="" width="50px">
                 </section>
              </div>
            </td>
        </tr>
        <tr>
          
          <td class="td-artist">Zer0</td>
          <td class="td-medium">Design</td>
          <td class="td-featured-date">>Date Featured: 2024-07</td>
          <td>
            <div class="td-details">
              <section id="td-expand-6" class="list-artist-details" tabindex="0" aria-expanded="false">
                <div class="list-artist-text">
                  <div class="list-background-container"><img class="list-background-img" src="/images/technicolors.jpg" alt="" width="100%"></div>
                  <div class="list-backgroundedge-container"><img class="list-backgroundedge" src="/images/back2.jpg" alt="" width="100%" height="100%"></div>
                  <span class="list-span-filler"></span>
                  <a class="list-artist-name-link" href="/artists/Zer0/" target="_self">
                      <h2>Zer0</h2>
                    </a>
                  <article class="list-artist-details-article">
                      <div class="list-slideP">
                        <p>Design<br>Graphic Design<br><p class="latestwork">Latest Work: Digital Dreams</p></p>
                        <p class="list-slideP-expanded">Zer0 is a trailblazing graphic designer renowned for her avant-garde approach and striking visual compositions that challenge conventional design paradigms. Based in Berlin, Germany, Zer0 has carved out a niche in the design world with her bold, minimalist aesthetics and innovative use of digital media.
                          <br><br>
                          Zer0's journey into graphic design began during her studies at the Berlin University of the Arts, where she developed a deep appreciation for the interplay between form, function, and technology. Her academic background, combined with a natural talent for visual storytelling, allowed her to experiment with various styles and techniques, ultimately forging a unique and recognizable design identity.
                          <br><br>
                          Her portfolio is a testament to her versatility and creativity, featuring a wide range of projects that include branding, digital art, and interactive media. Zer0's work often incorporates clean lines, geometric shapes, and a striking use of negative space, resulting in designs that are both visually arresting and conceptually profound. Her ability to distill complex ideas into simple, elegant visuals has garnered her widespread acclaim and a loyal client base.
                          <br><br>
                          Zer0's latest exhibition, "Digital Dreams," showcased her innovative approach to graphic design, blending traditional design principles with cutting-edge digital technologies. The exhibition was a critical success, highlighting her ability to create immersive visual experiences that resonate on both aesthetic and emotional levels.</p>
                        <a style="z-index: 300; position: relative; text-decoration: none; padding-bottom: .2rem; border-bottom: 1px inset white;" class="list-slideP-expanded"  href="/artists/Zer0/" aria-label="Continue to this artist's page." target="_self">View Artist's Page</a>
                        </div>       
                      </article>
                      <a href="/artists/Zer0/" class="continue-arrowright-container" aria-label="Continue to this artist's page."><img class="continue-arrowright" src="/images/continuearrowrightVblue.png" height="100%" width="100%" alt=""></a>
                  </div>
                  <img class="list-img-expand-arrowdown" src="/images/expandarrowdown.png" alt="" width="50px">
                  <img class="list-img-expand-arrowup" src="/images/expandarrowup.png" alt="" width="50px">
                 </section>
              </div>
            </td>
        </tr>
        <tr>
          
          <td class="td-artist">Andy Semalum</td>
          <td class="td-medium">Design</td>
          <td class="td-featured-date">>Date Featured: 2023-01</td>
          <td>
            <div class="td-details">
              <section id="td-expand-2" class="list-artist-details" tabindex="0" aria-expanded="false">
                <div class="list-artist-text">
                  <div class="list-background-container"><img class="list-background-img" src="/images/technicolors.jpg" alt="" width="100%"></div>
                  <div class="list-backgroundedge-container"><img class="list-backgroundedge" src="/images/back2.jpg" alt="" width="100%" height="100%"></div>
                  <span class="list-span-filler"></span>
                  <a class="list-artist-name-link" href="/artists/AndySemalum/" target="_self">
                      <h2>Andy Semalum</h2>
                    </a>
                  <article class="list-artist-details-article">
                      <div class="list-slideP">
                        <p class="list-summary">Design<br>Clothing<br><p class="latestwork">Latest Work: The Ega Brag Line</p></p>
                        <p class="list-slideP-expanded">Andy Semalum is a visionary clothing designer renowned for his avant-garde approach to fashion. Born and raised in Paris, Andy's creative journey began in the bustling heart of the city's fashion district, where he developed a keen eye for detail and a passion for innovative design. He studied at the prestigious École de la Chambre Syndicale de la Couture Parisienne, where he honed his skills in tailoring and fabric manipulation. <br><br>After graduating, Andy launched his own fashion label, Semalum Couture, which quickly gained acclaim for its bold, artistic creations that challenge conventional fashion norms. His collections often feature a blend of intricate handcrafting and modern technology, resulting in unique, wearable art pieces that captivate audiences worldwide.</p>
                        <a style="z-index: 300; position: relative; text-decoration: none; padding-bottom: .2rem; border-bottom: 1px inset white;" class="list-slideP-expanded"  href="/artists/AndySemalum/" aria-label="Continue to this artist's page." target="_self">View Artist's Page</a>
                        </div>      
                      </article>
                      <a href="/artists/AndySemalum/" class="continue-arrowright-container" aria-label="Continue to this artist's page."><img class="continue-arrowright" src="/images/continuearrowrightVblue.png" height="100%" width="100%" alt=""></a>
                  </div>
                  <img class="list-img-expand-arrowdown" src="/images/expandarrowdown.png" alt="" width="50px">
                  <img class="list-img-expand-arrowup" src="/images/expandarrowup.png" alt="" width="50px">
                 </section>
              </div>
            </td>
        </tr>


         <tr>
          <td class="td-artist">Yves Behar</td>
          <td class="td-medium">Design</td>
          <td class="td-featured-date">Date Featured: 2024-03</td>
          <td>
            <div class="td-details">
              <section id="td-expand-32" class="list-artist-details" tabindex="0" aria-expanded="false">
                <div class="list-artist-text">
                  <div class="list-background-container"><img class="list-background-img" src="/images/technicolors.jpg" alt="" width="100%"></div>
                  <div class="list-backgroundedge-container"><img class="list-backgroundedge" src="/images/back2.jpg" alt="" width="100%" height="100%"></div>
                  <span class="list-span-filler"></span>
                  <a class="list-artist-name-link" href="/artists/YvesBehar/" target="_self">
                    <h2>Yves Behar</h2>
                  </a>
                  <article class="list-artist-details-article">
                    <div class="list-slideP">
                      <p>Design<br>Industrial Design<br><p class="latestwork">Latest Work: The Future of Wearable Tech</p></p>
                      <p class="list-slideP-expanded">Yves Behar is a celebrated Swiss-American industrial designer known for his innovative and forward-thinking approach to design. Based in San Francisco, Behar is recognized for his work in consumer electronics, sustainable design, and social impact projects.
                        <br><br>
                        Behar’s design firm, fuseproject, has produced a wide range of influential products, including the award-winning One Laptop Per Child initiative and the August Smart Lock. His work emphasizes the integration of technology and design to improve everyday life and address global challenges.
                        <br><br>
                        His latest work, "The Future of Wearable Tech," released in March 2024, explores new possibilities in wearable technology through a series of conceptual designs and prototypes. This project reflects Behar’s ongoing commitment to pushing the boundaries of design and enhancing human experience through innovation.</p>
                      <a style="z-index: 300; position: relative; text-decoration: none; padding-bottom: .2rem; border-bottom: 1px inset white;" class="list-slideP-expanded" href="/artists/YvesBehar/" aria-label="Continue to this artist's page." target="_self">View Artist's Page</a>
                    </div>
                  </article>
              <a href="/artists/YvesBehar/" class="continue-arrowright-container" aria-label="Continue to this artist's page."><img class="continue-arrowright" src="/images/continuearrowrightVblue.png" height="100%" width="100%" alt=""></a>
          </div>
          <img class="list-img-expand-arrowdown" src="/images/expandarrowdown.png" alt="" width="50px">
          <img class="list-img-expand-arrowup" src="/images/expandarrowup.png" alt="" width="50px">
         </section>
              </div>
            </td>
        </tr>