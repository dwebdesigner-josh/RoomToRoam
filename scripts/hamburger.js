(() => {

  const buttonopen = document.querySelector('#topnav-open');
  const buttonclose = document.querySelector('#topnav-close');
  const media = window.matchMedia('(width < 850px)');
  const topNavMenu = document.querySelector('#topnav-menu');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const review = document.querySelectorAll('.review-link'); //fixed: The querySelector() method only returns the first element that matches the specified selectors (first element in the class). To return all the matches, use the querySelectorAll() method instead.
  
  function openMobileMenu(){
      buttonopen.setAttribute("aria-expanded", "true");
      topNavMenu.removeAttribute('inert');
      topNavMenu.removeAttribute('style');
      buttonopen.setAttribute('inert','');
     // main.setAttribute('inert', '');       - TODO consider reimplementing or keeping removed
     buttonclose.focus();
    // review.setAttribute('tabindex','-1');
     
     review.forEach(nodelistitem => {
      nodelistitem.setAttribute('tabindex', '-1');
     });
  
  }
  
  function closeMobileMenu(){
      buttonopen.setAttribute("aria-expanded", "false");
      topNavMenu.setAttribute('inert', '');
    //  main.removeAttribute('inert');        - TODO consider reimplementing or keeping removed
      buttonopen.removeAttribute('inert');
      buttonopen.focus();
      //review.removeAttribute('tabindex');
      
   
      review.forEach(nodelistitem => {
        nodelistitem.removeAttribute('tabindex');
      });
   
  
    setTimeout(() => {
      topNavMenu.style.transition = 'none';
    }, 500);
  }
  
  function closeonclick(){
    if (buttonopen.getAttribute('aria-expanded') === 'true'){
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
  
  
  
  buttonopen.addEventListener('click', openMobileMenu);
  buttonclose.addEventListener('click', closeMobileMenu);
  
  main.addEventListener('click', closeonclick);
  
  
  media.addEventListener('change', function (e) {
      setupTopNav(e);
    });
   
  
  })();