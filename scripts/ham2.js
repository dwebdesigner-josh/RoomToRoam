(() => {
    const buttonOpen = document.querySelector('#topnav-open');
    const buttonClose = document.querySelector('#topnav-close');
    const topNavMenu = document.querySelector('#topnav-menu');
    const reviewLinks = document.querySelectorAll('.review-link');
  
    // Function to open the mobile menu
    function openMobileMenu() {
      console.log('Open menu triggered');
      buttonOpen.setAttribute('aria-expanded', 'true');
      topNavMenu.classList.add('open'); // Add a class to show the menu
      buttonClose.focus();
  
      // Disable tabbing to review links
      reviewLinks.forEach(link => {
        link.setAttribute('tabindex', '-1');
      });
    }
  
    // Function to close the mobile menu
    function closeMobileMenu() {
      console.log('Close menu triggered');
      buttonOpen.setAttribute('aria-expanded', 'false');
      topNavMenu.classList.remove('open'); // Remove the class to hide the menu
      buttonOpen.focus();
  
      // Enable tabbing to review links
      reviewLinks.forEach(link => {
        link.removeAttribute('tabindex');
      });
    }
  
    // Event handler for opening the menu
    buttonOpen.addEventListener('click', openMobileMenu);
  
    // Event handler for closing the menu
    buttonClose.addEventListener('click', closeMobileMenu);
  
    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!topNavMenu.contains(event.target) && event.target !== buttonOpen) {
        closeMobileMenu();
      }
    });
  
    // Close the menu when Escape key is pressed
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && buttonOpen.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
      }
    });
  
    // Initial setup
    function setupTopNav() {
      if (window.innerWidth <= 850) {
        topNavMenu.classList.add('mobile'); // Add a class for mobile styles
      } else {
        topNavMenu.classList.remove('mobile');
        closeMobileMenu(); // Close menu on larger screens
      }
    }
  
    setupTopNav();
  
    // Update menu setup on window resize
    window.addEventListener('resize', setupTopNav);
  })();
  