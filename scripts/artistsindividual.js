(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const summaryClick = document.querySelector('#artist-summary');
    const summaryOverlay = document.querySelector('#artist-summary-text');
    let expanded = false;
  
    function overlay() {
      if (!expanded) {
        expanded = true;
        summaryOverlay.setAttribute('style', 'display: flex; visibility: visible;');
      } else {
        expanded = false;
        summaryOverlay.setAttribute('style', 'display: none; visibility: hidden;');
      }
    }
  
    function handleKeydown(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        overlay();
      }
    }
  
    function mediaChange(e) {
      if (e.matches) { // Mobile
        summaryOverlay.setAttribute('style', 'display: none; visibility: hidden;');
        summaryClick.setAttribute('tabindex', '0');
        summaryClick.addEventListener('click', overlay);
        summaryClick.addEventListener('keydown', handleKeydown);
      } else { // Desktop
        summaryOverlay.setAttribute('style', 'display: flex; visibility: visible;');
        summaryClick.removeAttribute('tabindex');
        summaryClick.removeEventListener('click', overlay);
        summaryClick.removeEventListener('keydown', handleKeydown);
      }
    }
  
    // Initial check
    mediaChange(mediaQuery);
  
    // Listen for changes in media query
    mediaQuery.addEventListener('change', mediaChange);
  
  })();

(() => {
 const expandContainer = document.querySelector('#container-container2');
 let expanded = false;
 const mediaQuery = window.matchMedia('(max-width: 1000px)');

 function expandText(){
    if(!expanded){
        expanded=true;
        expandContainer.setAttribute('aria-expanded','true');
    } else {
        expanded = false;
        expandContainer.setAttribute("aria-expanded", "false");
    }
 }


 function mediaChange(e) {
    if (e.matches) { // Mobile
      expandContainer.setAttribute('tabindex','0');
    } else{ //desktop
      expandContainer.setAttribute('tabindex','-1');
    }
 }

 expandContainer.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        expandText();
    }
});
 expandContainer.addEventListener('click', expandText);

 mediaQuery.addEventListener('change', mediaChange);

 // Initial check
mediaChange(mediaQuery);

})();

(() => {

    let slideCount1 = 1
    let slideCount2 = 2
    let slideCount3 = 3
    let slideCount4 = 4
    let slideCount5 = 5
    const totalSlides = 5
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

                if (slideCount4 >= totalSlides) {
                    slideCount4 = 1;
                    console.log('4 is back to 1');
                } else {
                slideCount4 += 1;
                console.log('4 up');
                }

                if (slideCount5 >= totalSlides) {
                    slideCount5 = 1;
                    console.log('5 is back to 1');
                } else {
                slideCount5 += 1;
                console.log('5 up');
                }
    var slideImage1 = document.querySelector(slideNumber+slideCount1);
    var slideImage2 = document.querySelector(slideNumber+slideCount2);
    var slideImage3 = document.querySelector(slideNumber+slideCount3);
    var slideImage4 = document.querySelector(slideNumber+slideCount4);
    var slideImage5 = document.querySelector(slideNumber+slideCount5);
                slideImage1.setAttribute("style", " z-index: 29; left: 7%; "); 
                slideImage2.setAttribute("style", " z-index: 31; left: 15%; "); 
                slideImage3.setAttribute("style", " z-index: 32; left: 35%; "); 
                slideImage4.setAttribute("style", " z-index: 30; left: 55%; "); 
                slideImage5.setAttribute("style", " z-index: 28; left: 60%; "); 
                    slideImage1.setAttribute("aria-expanded", "false");
                    slideImage1.setAttribute("inert", "");
                    slideImage2.setAttribute("aria-expanded", "true");
                    slideImage2.removeAttribute("inert", "");
                    slideImage3.setAttribute("aria-expanded", "true");
                    slideImage3.removeAttribute("inert", "");
                    slideImage4.setAttribute("aria-expanded", "true");
                    slideImage4.removeAttribute("inert", "");
                    slideImage5.setAttribute("aria-expanded", "false");
                    slideImage5.setAttribute("inert", "");
            }

function slideLeft(){
                if (slideCount1 <= 1) {
                    slideCount1 = 5;
        //            console.log('1 is back to 1');
                } else {
                    slideCount1 -= 1;
       //             console.log('1 up');
                }

                if (slideCount2 <= 1) {
                    slideCount2 = 5;
         //           console.log('2 is back to 1');
                } else {
                slideCount2 -= 1;
           //     console.log('2 up');
                }

                if (slideCount3 <= 1) {
                    slideCount3 = 5;
         //           console.log('3 is back to 1');
                } else {
                slideCount3 -= 1;
           //     console.log('3 up');
                }
                if (slideCount4 <= 1) {
                    slideCount4 = 5;
                } else {
                slideCount4 -= 1;
                }
                if (slideCount5 <= 1) {
                    slideCount5 = 5;
                } else {
                slideCount5 -= 1;
                }
    var slideImage1 = document.querySelector(slideNumber+slideCount1);
    var slideImage2 = document.querySelector(slideNumber+slideCount2);
    var slideImage3 = document.querySelector(slideNumber+slideCount3);
    var slideImage4 = document.querySelector(slideNumber+slideCount4);
    var slideImage5 = document.querySelector(slideNumber+slideCount5);
            slideImage1.setAttribute("style", " z-index: 28; left: 7%; "); 
            slideImage2.setAttribute("style", " z-index: 30; left: 15%; "); 
            slideImage3.setAttribute("style", " z-index: 32; left: 35%; "); 
            slideImage4.setAttribute("style", " z-index: 31; left: 55%; "); 
            slideImage5.setAttribute("style", " z-index: 29; left: 60%; "); 
                slideImage1.setAttribute("aria-expanded", "false");
                slideImage1.setAttribute("inert","");
                slideImage2.setAttribute("aria-expanded", "true");
                slideImage2.removeAttribute("inert","");   
                slideImage3.setAttribute("aria-expanded", "true");
                slideImage3.removeAttribute("inert","");
                slideImage4.setAttribute("aria-expanded", "true");
                slideImage4.removeAttribute("inert", "");
                slideImage5.setAttribute("aria-expanded", "false");
                slideImage5.setAttribute("inert", "");             

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


(() => {
    //see readme.md SAVE section for original uncompressed code of below slide info expand functions
    // Array of slide buttons and corresponding info sections
    const slides = [
        { button: document.querySelector('#slide-21'), info: document.querySelector('#slideinfo-1') },
        { button: document.querySelector('#slide-22'), info: document.querySelector('#slideinfo-2') },
        { button: document.querySelector('#slide-23'), info: document.querySelector('#slideinfo-3') },
        { button: document.querySelector('#slide-24'), info: document.querySelector('#slideinfo-4') },
        { button: document.querySelector('#slide-25'), info: document.querySelector('#slideinfo-5') }
    ];

    // Function to hide all slide info sections
    function hideAllSlides() {
        slides.forEach(slide => {
            slide.info.setAttribute('style', 'display: none; visibility: hidden;');
            slide.info.setAttribute('aria-expanded', 'false');
            slide.info.setAttribute('inert','');
        });
    }

    // Function to handle slide toggle
    function toggleSlide(index) {
        const isCurrentlyExpanded = slides[index].info.getAttribute('aria-expanded') === 'true';
        
        hideAllSlides(); // Hide all slides

        if (!isCurrentlyExpanded) {
            slides[index].info.setAttribute('style', 'display: block; visibility: visible;');
            slides[index].info.setAttribute('aria-expanded', 'true');
            slides[index].info.removeAttribute('inert','');
        }
    }

    // Attach event listeners to each button
    slides.forEach((slide, index) => {
        slide.button.addEventListener('click', () => toggleSlide(index));
        slide.button.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            toggleSlide(index);
        }
        });
    });
})();