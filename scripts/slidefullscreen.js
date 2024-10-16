(() => {
    const slidebuttonCloseFullscreen = document.querySelector('#slideexpand-close');
    const fullscreenWindow = document.querySelector('#slideexpand-fullscreencontainer');

    const slideExpandButton1 = document.querySelector('#slideexpand-1');
    const slideExpandImg1 = document.querySelector('#slideinfo-fullscreenimg-1');


    function expandSlideFullscreen(){
        fullscreenWindow.setAttribute("aria-expanded", "true");
        slidebuttonCloseFullscreen.setAttribute("tabindex", "0");
        slideExpandImg1.setAttribute("style","display: block; visibility: visible;");
        slidebuttonCloseFullscreen.focus();
    }
    function closeSlideFullscreen(){
        fullscreenWindow.setAttribute("aria-expanded", "false");
        slideExpandImg1.setAttribute("style","display: none; visibility: hidden;");
        slideExpandButton1.focus();
        slidebuttonCloseFullscreen.removeAttribute("tabindex");
    }


    slideExpandButton1.addEventListener('click', expandSlideFullscreen);
    slideExpandButton1.addEventListener('keydown', function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === 'Enter' || event.keyCode === 13) {
            expandSlideFullscreen();
        }
    });
    slidebuttonCloseFullscreen.addEventListener('click', closeSlideFullscreen);
    slidebuttonCloseFullscreen.addEventListener('keydown', closeSlideFullscreen);
})();

