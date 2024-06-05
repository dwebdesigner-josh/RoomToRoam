(() => {

const buttonopen = document.querySelector('#topnav-open');
const buttonclose = document.querySelector('#topnav-close');
const media = window.matchMedia('(width < 850px)');
const topNavMenu = document.querySelector('#topnav-menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu(){
    buttonopen.setAttribute("aria-expanded", "true");
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    buttonopen.setAttribute('inert','');
    main.setAttribute('inert', '');
    buttonclose.focus();
}

function closeMobileMenu(){
    buttonopen.setAttribute("aria-expanded", "false");
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert');
    buttonopen.removeAttribute('inert');
    buttonopen.focus();
    
  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}



function setupTopNav(e) {
    if (e.matches) {
      // is mobile
      console.log('is mobile');
      topNavMenu.setAttribute('inert', '');
      topNavMenu.style.transition = 'none';
    } else {
      // is tablet/desktop
      console.log('is desktop');
      closeMobileMenu();
      topNavMenu.removeAttribute('inert');
    }
  }
  
  setupTopNav(media);


buttonopen.addEventListener('click', openMobileMenu);
buttonclose.addEventListener('click', closeMobileMenu);



media.addEventListener('change', function (e) {
    setupTopNav(e);
  });

})();




