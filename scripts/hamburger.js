(() => {

const buttonopen = document.querySelector('button#topnav-open');

function openMobileMenu(){
    buttonopen.setAttribute("aria-expanded", "true");
}

buttonopen.addEventListener('click', openMobileMenu);

})();
