(() => {

    const slideLeftButton = document.querySelector('#slide-left');
    const slideImage1 = document.querySelector('#slide-1');

    function slideLeft(){
        slideImage1.setAttribute("animation", "bannermove 10s linear 1");
    }

    slideLeftButton.addEventListener('click', slideLeft);
})();
