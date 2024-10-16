(() => {
    const slidebuttonCloseFullscreen = document.querySelector('#slideexpand-close');
    const fullscreenWindow = document.querySelector('#slideexpand-fullscreencontainer');


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
    function expandSlideFullscreen(index) {
        fullscreenWindow.setAttribute("aria-expanded", "true");
        slidebuttonCloseFullscreen.setAttribute("tabindex", "0");
        slideExpandImgs[index].setAttribute("style", "display: block; visibility: visible;");
        currentSlideIndex = index;
        slidebuttonCloseFullscreen.focus();
    }

    // Function to close the fullscreen view and return focus to the original button
    function closeSlideFullscreen() {
        if (currentSlideIndex !== null) {
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
    slidebuttonCloseFullscreen.addEventListener('keydown', closeSlideFullscreen);
    
})();

