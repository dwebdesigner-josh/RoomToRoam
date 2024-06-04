(() => {

const buttonopen = document.querySelector('#topnav-open');

function openMobileMenu(){
    buttonopen.setAttribute("aria-expanded", "true");
}

buttonopen.addEventListener('click', openMobileMenu);

})();
