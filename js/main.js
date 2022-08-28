"use strict"

const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu) {
    const listMenu = document.querySelector('.header__list')
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock')
        burgerMenu.classList.toggle('_active');
        listMenu.classList.toggle('_active');
    });
}

const arrowMenu = document.querySelector('.page-sixth__spoiler');
const arrow = document.querySelector('.page-sixth__arrow');
arrowMenu.addEventListener("click", function(e) {
    document.querySelectorAll('.hiden').forEach(item => item.classList.add('_active'))
    arrow.classList.add('_active');
    arrowMenu.classList.add('hiden');
});
