(() => {

    let slideLeftCount1 = 1
    let slideLeftCount2 = 2
    let slideLeftCount3 = 3
    const totalSlides = 3

    const slideLeftButton = document.querySelector('#slide-left');
    const slideNumber = '#slide-';
    

    function slideLeft(){
        
if (slideLeftCount1 >= totalSlides) {
        slideLeftCount1 = 1;
        console.log('1 is back to 1');
} else {
    slideLeftCount1 += 1;
    console.log('1 up');
}

if (slideLeftCount2 >= totalSlides) {
    slideLeftCount2 = 1;
    console.log('2 is back to 1');
} else {
slideLeftCount2 += 1;
console.log('2 up');
}

if (slideLeftCount3 >= totalSlides) {
    slideLeftCount3 = 1;
    console.log('3 is back to 1');
} else {
slideLeftCount3 += 1;
console.log('3 up');
}


var slideImage1 = document.querySelector(slideNumber+slideLeftCount1);
var slideImage2 = document.querySelector(slideNumber+slideLeftCount2);
var slideImage3 = document.querySelector(slideNumber+slideLeftCount3);

slideImage1.removeAttribute("style");
slideImage2.removeAttribute("style");
slideImage3.removeAttribute("style");
        slideImage1.setAttribute("style", "order: 3; transform: translateX(-350px);");  //middle to left
        slideImage2.setAttribute("style", "order: 4; transform: translateX(-350px) scale(1.2);"); // right to middle
        slideImage3.setAttribute("style", "order: 2; transform: translateX(700px);"); //left to right
    }


    slideLeftButton.addEventListener('click', slideLeft);

})();
