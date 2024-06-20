(() => {
  const scrolltest = document.querySelector('#scrolltest');

window.addEventListener('scroll', () => {
   /* document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));*/
    scrolltest.setAttribute('style','animation-play-state: running;');
  });


  window.addEventListener('keydown', () => {
     scrolltest.setAttribute('style','animation-play-state: running;');
   });

   window.addEventListener('click', () => {
    scrolltest.setAttribute('style','animation-play-state: running;');
  });
   //for accessibility (tab key instead of scroll (or any key))


   //possibly just add on load function as this is not even really a scroll feature at this point
})();