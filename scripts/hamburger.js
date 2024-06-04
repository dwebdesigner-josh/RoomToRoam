(() => {

const buttonopen = document.querySelector('#topnav-open');
const buttonclose = document.querySelector('#topnav-close');

function openMobileMenu(){
    buttonopen.setAttribute("aria-expanded", "true");
}

function closeMobileMenu(){
    buttonopen.setAttribute("aria-expanded", "false");
}

buttonopen.addEventListener('click', openMobileMenu);
buttonclose.addEventListener('click', closeMobileMenu);


})();
