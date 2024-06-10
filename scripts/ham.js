(() => {
  const buttonOpen = document.querySelector('#topnav-open');
  const buttonClose = document.querySelector('#topnav-close');
  const topNavMenu = document.querySelector('#topnav-menu');

  buttonOpen.addEventListener('click', () => {
    console.log('Open button clicked');
    topNavMenu.style.display = 'block';
  });

  buttonClose.addEventListener('click', () => {
    console.log('Close button clicked');
    topNavMenu.style.display = 'none';
  });
})();