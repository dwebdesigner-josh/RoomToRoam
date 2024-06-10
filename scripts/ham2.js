(() => {
    const buttonOpen = document.querySelector('#topnav-open');
    const buttonClose = document.querySelector('#topnav-close');
    const topNavMenu = document.querySelector('#topnav-menu');
  
    function openMobileMenu() {
      console.log('Open menu triggered');
      topNavMenu.classList.add('open');
      buttonOpen.setAttribute('aria-expanded', 'true');
      buttonClose.focus();
    }
  
    function closeMobileMenu() {
      topNavMenu.classList.remove('open');
      buttonOpen.setAttribute('aria-expanded', 'false');
      buttonOpen.focus();
    }
  
    function closeOnClick() {
      if (topNavMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  
    buttonOpen.addEventListener('touchstart', openMobileMenu);
    buttonClose.addEventListener('touchstart', closeMobileMenu);
    document.addEventListener('touchstart', function (event) {
      if (!topNavMenu.contains(event.target) && !buttonOpen.contains(event.target)) {
        closeOnClick();
      }
    });
  })();