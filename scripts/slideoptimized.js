(() => {
    let slideCount1 = 1;
    let slideCount2 = 2;
    let slideCount3 = 3;
    const totalSlides = 3;
    const slideLeftButton = document.querySelector('#slide-left');
    const slideRightButton = document.querySelector('#slide-right');
    const slideNumber = '#slide-';

    function slideRight() {
        slideCount1 = slideCount1 >= totalSlides ? 1 : slideCount1 + 1;
        slideCount2 = slideCount2 >= totalSlides ? 1 : slideCount2 + 1;
        slideCount3 = slideCount3 >= totalSlides ? 1 : slideCount3 + 1;

        updateSlidesRight();
    }

    function slideLeft() {
        slideCount1 = slideCount1 <= 1 ? totalSlides : slideCount1 - 1;
        slideCount2 = slideCount2 <= 1 ? totalSlides : slideCount2 - 1;
        slideCount3 = slideCount3 <= 1 ? totalSlides : slideCount3 - 1;

        updateSlidesLeft();
    }

    function updateSlidesLeft() {
        var slideImage1 = document.querySelector(slideNumber + slideCount1);
        var slideImage2 = document.querySelector(slideNumber + slideCount2);
        var slideImage3 = document.querySelector(slideNumber + slideCount3);

        slideImage1.setAttribute("style", "z-index: 28; left: 12.5%;");
        slideImage2.setAttribute("style", "z-index: 30; left: 30%; transform: scale(1.2);");
        slideImage3.setAttribute("style", "z-index: 29; left: 54.5%;");
    }

    function updateSlidesRight() {
        var slideImage1 = document.querySelector(slideNumber + slideCount1);
        var slideImage2 = document.querySelector(slideNumber + slideCount2);
        var slideImage3 = document.querySelector(slideNumber + slideCount3);

        slideImage1.setAttribute("style", "z-index: 29; left: 12.5%;");
        slideImage2.setAttribute("style", "z-index: 30; left: 30%; transform: scale(1.2);");
        slideImage3.setAttribute("style", "z-index: 28; left: 54.5%;");
    }

    slideLeftButton.addEventListener('mouseover', slideLeft);
    slideRightButton.addEventListener('mouseover', slideRight);
})();
