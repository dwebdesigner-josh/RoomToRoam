(() => {
  const scrolltest = document.querySelector('#scrolltest');

window.addEventListener('scroll', () => {
   /* document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));*/
    scrolltest.setAttribute('style','animation-play-state: running;');
  });


  window.addEventListener('keydown', () => {
     scrolltest.setAttribute('style','animation-play-state: running;');
   });
   //for accessibility (tab key instead of scroll (or any key))

})();