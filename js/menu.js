const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');


navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
})


navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})



const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', linkAction)
})

function linkAction() {
    navMenu.classList.remove('show-menu')
}