$(document).ready(function() {
    const buttonOpen = $('#topnav-open');
    const buttonClose = $('#topnav-close');
    const topNavMenu = $('#topnav-menu');
    const main = $('main');
    const reviewLinks = $('.review-link');
  
    function openMobileMenu() {
      console.log('Open menu function called');
      buttonOpen.attr("aria-expanded", "true");
      topNavMenu.removeAttr('inert').removeAttr('style');
      buttonOpen.attr('inert', '');
      buttonClose.focus();
  
      reviewLinks.attr('tabindex', '-1');
    }
  
    function closeMobileMenu() {
      console.log('Close menu function called');
      buttonOpen.attr("aria-expanded", "false");
      topNavMenu.attr('inert', '');
      buttonOpen.removeAttr('inert').focus();
  
      reviewLinks.removeAttr('tabindex');
  
      setTimeout(function() {
        topNavMenu.css('transition', 'none');
      }, 500);
    }
  
    function closeOnClick() {
      if (buttonOpen.attr('aria-expanded') === 'true') {
        closeMobileMenu();
      }
    }
  
    function setupTopNav(e) {
      if (e.matches) {
        // Mobile
        topNavMenu.attr('inert', '').css('transition', 'none');
      } else {
        // Tablet/Desktop
        closeMobileMenu();
        topNavMenu.removeAttr('inert');
      }
    }
  
    const media = window.matchMedia('(max-width: 850px)');
    setupTopNav(media);
  
    buttonOpen.on('click', openMobileMenu);
    buttonClose.on('click', closeMobileMenu);
    main.on('click', closeOnClick);
  
    media.addListener(function(e) {
      setupTopNav(e);
    });
  });
  