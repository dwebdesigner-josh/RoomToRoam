(() => {

    let slideCount1 = 1
    let slideCount2 = 2
    let slideCount3 = 3
    const totalSlides = 3

    const slideLeftButton = document.querySelector('#slide-left');
    const slideRightButton = document.querySelector('#slide-right');
    const slideNumber = '#slide-';
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    //for transition delay on single click sliding:
    const transitionTime = 300; // Transition time
    let isTransitioning = false; //prevent next transition until current is complete
    

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

  //      slideImage1.removeAttribute("style");
    //    slideImage2.removeAttribute("style");
      //  slideImage3.removeAttribute("style");
           //     slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);");  //middle to left
             //   slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); // right to middle
               // slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); //left to right
                
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

//        slideImage1.removeAttribute("style");
  //      slideImage2.removeAttribute("style");
    //    slideImage3.removeAttribute("style");
     //           slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);"); 
       //         slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); 
         //       slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); 
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

//desktop vs mobile event listeners
function mediaChange(e) {
    if (e.matches) { // Mobile
                slideLeftButton.removeEventListener('mouseover', startSlideLeft);
                slideLeftButton.removeEventListener('mouseout', stopSlide);
                slideRightButton.removeEventListener('mouseover', startSlideRight);
                slideRightButton.removeEventListener('mouseout', stopSlide); 
        slideLeftButton.addEventListener('click', slideLeftSingle);
        slideRightButton.addEventListener('click', slideRightSingle);
        
    } else { // Desktop and Tablet 
                slideLeftButton.removeEventListener('click', slideLeftSingle);
                slideRightButton.removeEventListener('click', slideRightSingle);
                slideLeftButton.addEventListener('click', slideLeftSingle);
                slideRightButton.addEventListener('click', slideRightSingle);
        slideLeftButton.addEventListener('mouseover', startSlideLeft);
        slideLeftButton.addEventListener('mouseout', stopSlide);
        slideRightButton.addEventListener('mouseover', startSlideRight);
        slideRightButton.addEventListener('mouseout', stopSlide); 

         
    }
}

mediaQuery.addEventListener('change', mediaChange);

    // Initial check
    mediaChange(mediaQuery);


})();
