let header__burger = document.querySelector('.header__burger');
let nav = document.querySelector('.nav');
let back = document.querySelector('body');
let nav__list = document.querySelector('.nav__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    nav.classList.toggle('active');
    back.classList.toggle('lock');
}

nav__list.onclick = function () {
    nav__list.classList.remove('active');
    back.classList.toggle('lock');
}
