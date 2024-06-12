(() => {

    let slideLeftCount1 = 1
    let slideLeftCount2 = 2
    let slideLeftCount3 = 3

    const slideLeftButton = document.querySelector('#slide-left');
    const slideNumber = '#slide-';
    var slideImage1 = document.querySelector(slideNumber+slideLeftCount1);
    var slideImage2 = document.querySelector(slideNumber+slideLeftCount2);
    var slideImage3 = document.querySelector(slideNumber+slideLeftCount3);
    

    function slideLeft(){
        slideImage1.setAttribute("style", "transform: translateX(700px);");
        slideImage2.setAttribute("style", "transform: translateX(-350px);");
        slideImage3.setAttribute("style", "transform: translateX(-350px) scale(1.2); ");
slideLeftCount1 +=1;
    }


    slideLeftButton.addEventListener('click', slideLeft);

})();
