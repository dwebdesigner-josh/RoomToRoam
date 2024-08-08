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
                slideImage1.setAttribute("style", " z-index: 29; left: 15%; "); 
                slideImage2.setAttribute("style", " z-index: 30; left: 35%; "); 
                slideImage3.setAttribute("style", " z-index: 28; left: 55%; "); 
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
            slideImage1.setAttribute("style", " z-index: 28; left: 15%; "); 
            slideImage2.setAttribute("style", " z-index: 30; left: 35%; "); 
            slideImage3.setAttribute("style", " z-index: 29; left: 55%; "); 
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
