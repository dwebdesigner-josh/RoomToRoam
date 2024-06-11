(() => {

    const slideLeftButton = document.querySelector('#slide-left');

    function slideLeft(){
        slideLeftButton.setAttribute("aria-pressed", "true");
    }

    slideLeftButton.addEventListener('click', slideLeft);
})();