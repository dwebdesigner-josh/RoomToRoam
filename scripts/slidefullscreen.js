(() => {
    const slidebuttonExpandFullscreen = document.querySelector('#slide-expand1');
    const slidebuttonCloseFullscreen = document.querySelector('#slideexpand-close');
    const fullscreenWindow = document.querySelector('#slideexpand-fullscreencontainer');

    function expandSlideFullscreen(){
        fullscreenWindow.setAttribute("aria-expanded", "true");
        slidebuttonCloseFullscreen.setAttribute("tabindex", "0");
        slidebuttonCloseFullscreen.focus();
    }
    function closeSlideFullscreen(){
        fullscreenWindow.setAttribute("aria-expanded", "false");
        slidebuttonExpandFullscreen.focus();
        slidebuttonCloseFullscreen.removeAttribute("tabindex");
    }


    slidebuttonExpandFullscreen.addEventListener('click', expandSlideFullscreen);
    slidebuttonExpandFullscreen.addEventListener('keydown', function(event) {
        // Check if the key pressed is Enter (key code 13)
        if (event.key === 'Enter' || event.keyCode === 13) {
            expandSlideFullscreen();
        }
    });
    slidebuttonCloseFullscreen.addEventListener('click', closeSlideFullscreen);
    slidebuttonCloseFullscreen.addEventListener('keydown', closeSlideFullscreen);
})();