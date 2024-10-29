(() => {
    const slidebuttonCloseFullscreen = document.querySelector('#slideexpand-close');
    const fullscreenWindow = document.querySelector('#slideexpand-fullscreencontainer');
    //remove tabbing for all other parts of the page when fullscreen is open
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const footer2 = document.querySelector('#footer-policies');


    const slideExpandButtons = [
        document.querySelector('#slideexpand-1'),
        document.querySelector('#slideexpand-2'),
        document.querySelector('#slideexpand-3'),
        document.querySelector('#slideexpand-4'),
        document.querySelector('#slideexpand-5')
    ];

    const slideExpandImgs = [
        document.querySelector('#slideinfo-fullscreenimg-1'),
        document.querySelector('#slideinfo-fullscreenimg-2'),
        document.querySelector('#slideinfo-fullscreenimg-3'),
        document.querySelector('#slideinfo-fullscreenimg-4'),
        document.querySelector('#slideinfo-fullscreenimg-5')
    ];

    let currentSlideIndex = null; // To keep track of the currently active slide

    // Function to expand the fullscreen view for the given index
        //nav header and main included to remove tabbing for all other parts of the page when fullscreen is open

    function expandSlideFullscreen(index) {
        fullscreenWindow.setAttribute("aria-expanded", "true");
        slidebuttonCloseFullscreen.setAttribute("tabindex", "0");
        slideExpandImgs[index].setAttribute("style", "display: block; visibility: visible;");
        currentSlideIndex = index;

        nav.setAttribute("style", "display: none;");
        header.setAttribute("style", "display: none;");
        main.setAttribute("style", "display: none;");
        footer.setAttribute("style", "display: none;");
        footer2.setAttribute("style", "display: none;");

        slidebuttonCloseFullscreen.focus();
    }

    // Function to close the fullscreen view and return focus to the original button
    function closeSlideFullscreen() {
        if (currentSlideIndex !== null) {
            nav.removeAttribute("style", "display: none;");
            header.removeAttribute("style", "display: none;");
            main.removeAttribute("style", "display: none;");
            footer.removeAttribute("style", "display: none;");
            footer2.removeAttribute("style", "display: none;");

            fullscreenWindow.setAttribute("aria-expanded", "false");
            slideExpandImgs[currentSlideIndex].setAttribute("style", "display: none; visibility: hidden;");
            slideExpandButtons[currentSlideIndex].focus();
            slidebuttonCloseFullscreen.removeAttribute("tabindex");
            currentSlideIndex = null;
        }
    }

    // Loop through each button and set up event listeners
    slideExpandButtons.forEach((button, index) => {
        // Expand the slide on click or when Enter key is pressed
        button.addEventListener('click', () => expandSlideFullscreen(index));
        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.keyCode === 13) {
                expandSlideFullscreen(index);
            }
        });
    });

    // Set up event listeners for the close button
    slidebuttonCloseFullscreen.addEventListener('click', closeSlideFullscreen);
    slidebuttonCloseFullscreen.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            closeSlideFullscreen();
        } else if (event.key === 'Escape' || event.keyCode === 27) {
            // Call a function to exit fullscreen or handle escape
            closeSlideFullscreen();
        }
    });
    
})();

