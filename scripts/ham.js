//used for safari mobile debugging (issue was with click, touchend and pointerdown not working - touchstart does work)

(() => {
  const buttonOpen = document.querySelector('#topnav-open');
  const buttonClose = document.querySelector('#topnav-close');
  const topNavMenu = document.querySelector('#topnav-menu');

  buttonOpen.addEventListener('click', () => {
    console.log('Open button clicked');
    topNavMenu.style.display = 'block';
  });

  buttonClose.addEventListener('touchstart', () => {
    console.log('Close button clicked');
    topNavMenu.style.display = 'none';
  });
})();