(() => {

const buttonOpen = document.querySelector('#topnav-open');
const buttonClose = document.querySelector('#topnav-close');
const media = window.matchMedia('(width < 850px)');
const topNavMenu = document.querySelector('#topnav-menu');
const main = document.querySelector('main');
const body = document.querySelector('body');
const review = document.querySelectorAll('.review-link'); //fixed: The querySelector() method only returns the first element that matches the specified selectors (first element in the class). To return all the matches, use the querySelectorAll() method instead.

function openMobileMenu(){
  console.log('Open menu triggered');
    buttonOpen.setAttribute("aria-expanded", "true");
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    buttonOpen.setAttribute('inert','');
   // main.setAttribute('inert', '');       - TODO consider reimplementing or keeping removed
   buttonClose.focus();
  // review.setAttribute('tabindex','-1');
   
   review.forEach(nodelistitem => {
    nodelistitem.setAttribute('tabindex', '-1');
   });

}

function closeMobileMenu(){
    buttonOpen.setAttribute("aria-expanded", "false");
    topNavMenu.setAttribute('inert', '');
  //  main.removeAttribute('inert');        - TODO consider reimplementing or keeping removed
    buttonOpen.removeAttribute('inert');
    buttonOpen.focus();
    //review.removeAttribute('tabindex');
    
 
    review.forEach(nodelistitem => {
      nodelistitem.removeAttribute('tabindex');
    });
 

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

function closeonclick(){
  if (buttonOpen.getAttribute('aria-expanded') === 'true'){
    closeMobileMenu();
  }
  else {}
};

//if( $('.classname').getAttribute('aria-expanded') === 'true') {} https://stackoverflow.com/questions/37125674/how-to-check-for-attribute-value


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

  $(window).on('load', () => {
    closeMobileMenu;
  });

buttonOpen.addEventListener('click', openMobileMenu);
buttonClose.addEventListener('click', closeMobileMenu);

buttonOpen.addEventListener('touchstart', openMobileMenu);
buttonClose.addEventListener('touchstart', closeMobileMenu);


main.addEventListener('click', closeonclick);
main.addEventListener('touchstart', closeonclick);


media.addEventListener('change', function (e) {
    setupTopNav(e);
  });
 

})();




