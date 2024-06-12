(() => {

    let slideCount1 = 1
    let slideCount2 = 2
    let slideCount3 = 3
    const totalSlides = 3

    const slideLeftButton = document.querySelector('#slide-left');
    const slideRightButton = document.querySelector('#slide-right');
    const slideNumber = '#slide-';
    

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

        slideImage1.removeAttribute("style");
        slideImage2.removeAttribute("style");
        slideImage3.removeAttribute("style");
                slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);");  //middle to left
                slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); // right to middle
                slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); //left to right
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

        slideImage1.removeAttribute("style");
        slideImage2.removeAttribute("style");
        slideImage3.removeAttribute("style");
                slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);"); 
                slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); 
                slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); 
}


    slideLeftButton.addEventListener('click', slideLeft);
    slideRightButton.addEventListener('click', slideRight);
})();
