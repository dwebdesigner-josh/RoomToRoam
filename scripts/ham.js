(() => {
    const buttonOpen = document.querySelector('#topnav-open'); // Changed variable name
    const buttonClose = document.querySelector('#topnav-close'); // Changed variable name
    const media = window.matchMedia('(max-width: 850px)'); // Corrected media query syntax
    const topNavMenu = document.querySelector('#topnav-menu');
    const main = document.querySelector('main');
    const body = document.querySelector('body');
    const reviewLinks = document.querySelectorAll('.review-link'); // Changed variable name
  
    function openMobileMenu() {
      console.log('Open menu triggered'); // Added console log for debugging
      buttonOpen.setAttribute("aria-expanded", "true");
      topNavMenu.removeAttribute('inert');
      topNavMenu.style.display = 'block'; // Ensure the menu is displayed
      buttonOpen.setAttribute('inert', '');
      buttonClose.focus();
      reviewLinks.forEach(nodelistitem => {
        nodelistitem.setAttribute('tabindex', '-1');
      });
    }
  
    function closeMobileMenu() {
      console.log('Close menu triggered'); // Added console log for debugging
      buttonOpen.setAttribute("aria-expanded", "false");
      topNavMenu.setAttribute('inert', '');
      topNavMenu.style.display = 'none'; // Ensure the menu is hidden
      buttonOpen.removeAttribute('inert');
      buttonOpen.focus();
      reviewLinks.forEach(nodelistitem => {
        nodelistitem.removeAttribute('tabindex');
      });
    }
  
    function closeOnClick() {
      console.log('Main area clicked'); // Added console log for debugging
      if (buttonOpen.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
      }
    }
  
    function setupTopNav(e) {
      if (e.matches) {
        console.log('is mobile'); // Added console log for debugging
        topNavMenu.setAttribute('inert', '');
        topNavMenu.style.transition = 'none';
        topNavMenu.style.display = 'none'; // Ensure the menu is hidden on load
      } else {
        console.log('is desktop'); // Added console log for debugging
        closeMobileMenu();
        topNavMenu.removeAttribute('inert');
        topNavMenu.style.display = 'block'; // Ensure the menu is displayed on larger screens
      }
    }
  
    setupTopNav(media);
  
    buttonOpen.addEventListener('click', openMobileMenu);
    buttonClose.addEventListener('click', closeMobileMenu);
  
    // Use pointerdown instead of touchend for better compatibility
    buttonOpen.addEventListener('pointerdown', openMobileMenu); // Changed to pointerdown
    buttonClose.addEventListener('pointerdown', closeMobileMenu); // Changed to pointerdown
  
    main.addEventListener('click', closeOnClick);
    main.addEventListener('pointerdown', closeOnClick); // Changed to pointerdown
  
    media.addEventListener('change', function (e) {
      setupTopNav(e);
    });

})();
