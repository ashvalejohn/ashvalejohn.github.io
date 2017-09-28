var menuButton = document.querySelector('.header__hamburger');
var mobileMenu = document.querySelector('.header__nav--mobile');
var main = document.querySelector('main');
var footer = document.querySelector('footer');

// open mobile menu if user clicks on hamburger
function openMenu(){
  mobileMenu.classList.toggle('hamburger--closed');
}

// close menu if user clicks on content
function closeMenu(){
  mobileMenu.classList.add('hamburger--closed');
}

menuButton.addEventListener('click', openMenu);

main.addEventListener('click', closeMenu);
footer.addEventListener('click', closeMenu);
