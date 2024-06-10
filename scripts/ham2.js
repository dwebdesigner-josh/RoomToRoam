(() => {
    const buttonOpen = document.querySelector('#topnav-open');
    const buttonClose = document.querySelector('#topnav-close');
    const topNavMenu = document.querySelector('#topnav-menu');
  
    function openMobileMenu() {
      topNavMenu.classList.add('open');
      buttonOpen.setAttribute('aria-expanded', 'true');
      buttonClose.focus();
    }
  
    function closeMobileMenu() {
      topNavMenu.classList.remove('open');
      buttonOpen.setAttribute('aria-expanded', 'false');
      buttonOpen.focus();
    }
  
    function toggleMobileMenu() {
      if (topNavMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  
    function closeOnClick(event) {
      if (!topNavMenu.contains(event.target) && event.target !== buttonOpen) {
        closeMobileMenu();
      }
    }
  
    buttonOpen.addEventListener('touchend', toggleMobileMenu);
    buttonClose.addEventListener('touchend', closeMobileMenu);
    document.addEventListener('touchend', closeOnClick);
  })();
  