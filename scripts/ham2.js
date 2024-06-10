(() => {
    const buttonOpen = document.querySelector('#topnav-open');
    const buttonClose = document.querySelector('#topnav-close');
    const topNavMenu = document.querySelector('#topnav-menu');
  
    function toggleMobileMenu() {
      const isOpen = topNavMenu.classList.contains('open');
      topNavMenu.classList.toggle('open', !isOpen);
      buttonOpen.setAttribute('aria-expanded', !isOpen);
      if (!isOpen) {
        buttonClose.focus();
      } else {
        buttonOpen.focus();
      }
    }
  
    function closeOnClick(event) {
      if (!topNavMenu.contains(event.target) && event.target !== buttonOpen) {
        toggleMobileMenu();
      }
    }
  
    buttonOpen.addEventListener('touchend', toggleMobileMenu);
    buttonClose.addEventListener('touchend', toggleMobileMenu);
    document.addEventListener('touchend', closeOnClick);
  })();
  