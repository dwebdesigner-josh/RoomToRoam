(() => {

    let slideCount1 = 1
    let slideCount2 = 2
    let slideCount3 = 3
    const totalSlides = 3

    const slideLeftButton = document.querySelector('#slide-left');
    const slideRightButton = document.querySelector('#slide-right');
    const slideNumber = '#slide-';
        //FOR ARTISTS PAGE DESCRIPTION
            const slideH = '#slideH-';
            const slideP = '#slideP-';
    //for transition delay on single click sliding:
    const transitionTime = 300; // Transition time
    let isTransitioning = false; //prevent next transition until current is complete

    function updateSecondSlider() {
        const worksImages = {
            1: ['/images/jw2.jpg', '/images/jw3.jpg', '/images/jw4.jpg'],
            2: ['/images/technicolors/technicolors-metaphysical.jpg', '/images/technicolors/technicolors-cinemasublimina.jpg', '/images/technicolors/technicolors-ultravioletdisguise.jpg'],
            3: ['/images/novaliz1.jpg', '/images/novaliz3.jpg', '/images/novaliz2.jpg']
        };
        const worksLinks = {
            1: ['/reviews/works/jw-abstractsinblackandwhite', '/reviews/works/jw-abstractsinblackandwhite', '/reviews/works/jw-abstractsinblackandwhite'],
            2: ['/reviews/works/technicolors-metaphysical', '/reviews/works/technicolors-cinemasublimina', '/reviews/works/technicolors-ultravioletdisguise'],
            3: ['/reviews/works/novaliz-concepts', '/reviews/works/novaliz-concerts', '/reviews/works/novaliz-selfportraits']
        };

        const currentArtistWorks = worksImages[slideCount2];

        const currentArtistLinks = worksLinks[slideCount2];

        document.querySelector('#slideworksimg-1').src = currentArtistWorks[0];
        document.querySelector('#slideworksimg-2').src = currentArtistWorks[1];
        document.querySelector('#slideworksimg-3').src = currentArtistWorks[2];
        
        document.querySelector('#slide-21').href = currentArtistLinks[0];
        document.querySelector('#slide-22').href = currentArtistLinks[1];
        document.querySelector('#slide-23').href = currentArtistLinks[2];
    }


    function slideRight(){
        
                if (slideCount1 >= totalSlides) {
                        slideCount1 = 1;
                        console.log('1 is back to 1');
                } else {
                    slideCount1 += 1;
                    console.log('1 up');
                }

                if (slideCount2 >= totalSlides) {
                    slideCount2 = 1;
                    console.log('2 is back to 1');
                } else {
                slideCount2 += 1;
                console.log('2 up');
                }

                if (slideCount3 >= totalSlides) {
                    slideCount3 = 1;
                    console.log('3 is back to 1');
                } else {
                slideCount3 += 1;
                console.log('3 up');
                }


    var slideImage1 = document.querySelector(slideNumber+slideCount1);
    var slideImage2 = document.querySelector(slideNumber+slideCount2);
    var slideImage3 = document.querySelector(slideNumber+slideCount3);

    var slideH1 = document.querySelector(slideH+slideCount1);
    var slideH2 = document.querySelector(slideH+slideCount2);
    var slideH3 = document.querySelector(slideH+slideCount3);

    var slideP1 = document.querySelector(slideP+slideCount1);
    var slideP2 = document.querySelector(slideP+slideCount2);
    var slideP3 = document.querySelector(slideP+slideCount3);

  //      slideImage1.removeAttribute("style");
    //    slideImage2.removeAttribute("style");
      //  slideImage3.removeAttribute("style");
           //     slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);");  //middle to left
             //   slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); // right to middle
               // slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); //left to right
            
            
              
            slideH1.setAttribute("style","visibility: hidden; display: none; opacity: 0;");
            slideH2.setAttribute("style","visibility: visible; display: flex; opacity: 1;");
            slideH3.setAttribute("style","visibility: hidden; display: none; opacity: 0;");

            slideP1.setAttribute("style","visibility: hidden; display: none; opacity: 0;");
            slideP2.setAttribute("style","visibility: visible; display: block; opacity: 1;");
            slideP3.setAttribute("style","visibility: hidden; display: none; opacity: 0;");

                slideImage1.setAttribute("style", " z-index: 29; left: 5%; opacity: .95;"); 
                slideImage2.setAttribute("style", " z-index: 30; left: 25%; transform: scale(1.6) translateY(-5%);"); 
                slideImage3.setAttribute("style", " z-index: 28; left: 45%; opacity: .95;"); 
                    //accessibility changes:
                    slideImage1.setAttribute("aria-expanded", "false");
                    slideImage1.setAttribute("inert", "");
                    slideImage2.setAttribute("aria-expanded", "true");
                    slideImage2.removeAttribute("inert", "");
                    slideImage3.setAttribute("aria-expanded", "false");
                    slideImage3.setAttribute("inert", "");
      
        updateSecondSlider();
        
            }

function slideLeft(){
                if (slideCount1 <= 1) {
                    slideCount1 = 3;
        //            console.log('1 is back to 1');
                } else {
                    slideCount1 -= 1;
       //             console.log('1 up');
                }

                if (slideCount2 <= 1) {
                    slideCount2 = 3;
         //           console.log('2 is back to 1');
                } else {
                slideCount2 -= 1;
           //     console.log('2 up');
                }

                if (slideCount3 <= 1) {
                    slideCount3 = 3;
         //           console.log('3 is back to 1');
                } else {
                slideCount3 -= 1;
           //     console.log('3 up');
                }
    var slideImage1 = document.querySelector(slideNumber+slideCount1);
    var slideImage2 = document.querySelector(slideNumber+slideCount2);
    var slideImage3 = document.querySelector(slideNumber+slideCount3);

    var slideH1 = document.querySelector(slideH+slideCount1);
    var slideH2 = document.querySelector(slideH+slideCount2);
    var slideH3 = document.querySelector(slideH+slideCount3);

    var slideP1 = document.querySelector(slideP+slideCount1);
    var slideP2 = document.querySelector(slideP+slideCount2);
    var slideP3 = document.querySelector(slideP+slideCount3);

//        slideImage1.removeAttribute("style");
  //      slideImage2.removeAttribute("style");
    //    slideImage3.removeAttribute("style");
     //           slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);"); 
       //         slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); 
         //       slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); 


         slideH1.setAttribute("style","visibility: hidden; display: none; opacity: 0;");
         slideH2.setAttribute("style","visibility: visible; display: flex; opacity: 1;");
         slideH3.setAttribute("style","visibility: hidden; display: none; opacity: 0;");

         slideP1.setAttribute("style","visibility: hidden; display: none; opacity: 0;");
         slideP2.setAttribute("style","visibility: visible; display: block; opacity: 1;");
         slideP3.setAttribute("style","visibility: hidden; display: none; opacity: 0;");


            slideImage1.setAttribute("style", " z-index: 28; left: 5%; opacity: .95;"); 
            slideImage2.setAttribute("style", " z-index: 30; left: 25%; transform: scale(1.6) translateY(-5%);"); 
            slideImage3.setAttribute("style", " z-index: 29; left: 45%; opacity: .95;"); 
                //accessibility changes:
                slideImage1.setAttribute("aria-expanded", "false");
                slideImage1.setAttribute("inert","");
                slideImage2.setAttribute("aria-expanded", "true");
                slideImage2.removeAttribute("inert","");
                slideImage3.setAttribute("aria-expanded", "false");
                slideImage3.setAttribute("inert","");                
//setTimeout(slideLeft, 500) - infinite sliding

    updateSecondSlider();
    
}


//hover sliding:
    function startSlideRight() {
        slideInterval = setInterval(slideRight, 500); 
    }

    function startSlideLeft() {
        slideInterval = setInterval(slideLeft, 500); 
    }

    function stopSlide() {
        clearInterval(slideInterval);
    }


//single click sliding:

function slideRightSingle(){
   
    if (isTransitioning) return; // Check if transition is in progress
        isTransitioning = true; // Set the flag to indicate a transition is in progress

    slideRight();

    setTimeout(() => {
        isTransitioning = false; // Reset the flag after transition time
    }, transitionTime);
    stopSlide();
}

function slideLeftSingle(){
    
    if (isTransitioning) return; // Check if transition is in progress
        isTransitioning = true; // Set the flag to indicate a transition is in progress

    slideLeft();

    setTimeout(() => {
        isTransitioning = false; // Reset the flag after transition time
    }, transitionTime);
    stopSlide();
}

//single slide for accessibility (tab+enter)
    slideLeftButton.addEventListener('keydown', function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === 'Enter' || event.keyCode === 13) {
            slideLeftSingle();
        }
    });

    slideRightButton.addEventListener('keydown', function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === 'Enter' || event.keyCode === 13) {
            slideRightSingle();
        }
    });

                slideLeftButton.addEventListener('click', slideLeftSingle);
                slideRightButton.addEventListener('click', slideRightSingle);



})();

//SECOND SLIDER
(() => {

    let slideCount1 = 1
    let slideCount2 = 2
    let slideCount3 = 3
    const totalSlides = 3
    const slideLeftButton = document.querySelector('#slide-left2');
    const slideRightButton = document.querySelector('#slide-right2');
    const slideNumber = '#slide-2';
    const transitionTime = 300; 
    let isTransitioning = false;
    
    function slideRight(){
        
                if (slideCount1 >= totalSlides) {
                        slideCount1 = 1;
                        console.log('1 is back to 1');
                } else {
                    slideCount1 += 1;
                    console.log('1 up');
                }

                if (slideCount2 >= totalSlides) {
                    slideCount2 = 1;
                    console.log('2 is back to 1');
                } else {
                slideCount2 += 1;
                console.log('2 up');
                }

                if (slideCount3 >= totalSlides) {
                    slideCount3 = 1;
                    console.log('3 is back to 1');
                } else {
                slideCount3 += 1;
                console.log('3 up');
                }
    var slideImage1 = document.querySelector(slideNumber+slideCount1);
    var slideImage2 = document.querySelector(slideNumber+slideCount2);
    var slideImage3 = document.querySelector(slideNumber+slideCount3);
                slideImage1.setAttribute("style", " z-index: 29; left: 15%; opacity: .95;"); 
                slideImage2.setAttribute("style", " z-index: 30; left: 35%; transform: scale(1.6) translateY(-5%);"); 
                slideImage3.setAttribute("style", " z-index: 28; left: 55%; opacity: .95;"); 
                    slideImage1.setAttribute("aria-expanded", "false");
                    slideImage1.setAttribute("inert", "");
                    slideImage2.setAttribute("aria-expanded", "true");
                    slideImage2.removeAttribute("inert", "");
                    slideImage3.setAttribute("aria-expanded", "false");
                    slideImage3.setAttribute("inert", "");
            }

function slideLeft(){
                if (slideCount1 <= 1) {
                    slideCount1 = 3;
        //            console.log('1 is back to 1');
                } else {
                    slideCount1 -= 1;
       //             console.log('1 up');
                }

                if (slideCount2 <= 1) {
                    slideCount2 = 3;
         //           console.log('2 is back to 1');
                } else {
                slideCount2 -= 1;
           //     console.log('2 up');
                }

                if (slideCount3 <= 1) {
                    slideCount3 = 3;
         //           console.log('3 is back to 1');
                } else {
                slideCount3 -= 1;
           //     console.log('3 up');
                }
    var slideImage1 = document.querySelector(slideNumber+slideCount1);
    var slideImage2 = document.querySelector(slideNumber+slideCount2);
    var slideImage3 = document.querySelector(slideNumber+slideCount3);
            slideImage1.setAttribute("style", " z-index: 28; left: 15%; opacity: .95;"); 
            slideImage2.setAttribute("style", " z-index: 30; left: 35%; transform: scale(1.6) translateY(-5%);"); 
            slideImage3.setAttribute("style", " z-index: 29; left: 55%; opacity: .95;"); 
                slideImage1.setAttribute("aria-expanded", "false");
                slideImage1.setAttribute("inert","");
                slideImage2.setAttribute("aria-expanded", "true");
                slideImage2.removeAttribute("inert","");
                slideImage3.setAttribute("aria-expanded", "false");
                slideImage3.setAttribute("inert","");                

}
    function startSlideRight() {
        slideInterval = setInterval(slideRight, 500); 
    }
    function startSlideLeft() {
        slideInterval = setInterval(slideLeft, 500); 
    }
    function stopSlide() {
        clearInterval(slideInterval);
    }
function slideRightSingle(){ 
    if (isTransitioning) return;
        isTransitioning = true; 
    slideRight();
    setTimeout(() => {
        isTransitioning = false;
    }, transitionTime);
    stopSlide();
}

function slideLeftSingle(){
    
    if (isTransitioning) return; 
        isTransitioning = true; 

    slideLeft();

    setTimeout(() => {
        isTransitioning = false;
    }, transitionTime);
    stopSlide();
}
    slideLeftButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            slideLeftSingle();
        }
    });
    slideRightButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            slideRightSingle();
        }
    });
                slideLeftButton.addEventListener('click', slideLeftSingle);
                slideRightButton.addEventListener('click', slideRightSingle);
})();
