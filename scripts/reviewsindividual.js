(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');
    const imgClick = document.querySelector('#work-infoheader');
    const imgOverlay = document.querySelector('#work-infooverlay');
    let expanded = false;
  
    function overlay() {
      if (!expanded) {
        expanded = true;
        imgOverlay.setAttribute('style', 'display: flex; visibility: visible;');
      } else {
        expanded = false;
        imgOverlay.setAttribute('style', 'display: none; visibility: hidden;');
      }
    }
  
    function handleKeydown(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        overlay();
      }
    }
  
    function mediaChange(e) {
      if (e.matches) { // Mobile
        
        imgClick.setAttribute('tabindex', '0');
        imgClick.addEventListener('click', overlay);
        imgClick.addEventListener('keydown', handleKeydown);
      } else { // Desktop
        imgOverlay.setAttribute('style', 'display: none; visibility: hidden;');
        imgClick.removeAttribute('tabindex');
        imgClick.removeEventListener('click', overlay);
        imgClick.removeEventListener('keydown', handleKeydown);
      }
    }
  
    // Initial check
    mediaChange(mediaQuery);
  
    // Listen for changes in media query
    mediaQuery.addEventListener('change', mediaChange);
  
  })();
