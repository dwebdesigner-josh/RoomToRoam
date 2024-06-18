(() => {
  const scrolltest = document.querySelector('#scrolltest');

window.addEventListener('scroll', () => {
   /* document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));*/
    scrolltest.setAttribute('style','animation-play-state: running;');
  });

})();