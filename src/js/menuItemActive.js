//МЕНЮ
let menuElem = document.querySelectorAll('.menu__link'); //пункт меню
let mainMenuElem = document.querySelectorAll('.main-menu__link'); //пункт меню сайдбара

//МЕНЮ
//переключение пунктов меню
function activeMenuElem(e) {
    for(let i = 0; i < menuElem.length; i++){
        menuElem[i].classList.remove('menu__link--active');
    }
    e.currentTarget.className = 'menu__link--active menu__link';
}

for(let i = 0; i < menuElem.length; i++) {
    menuElem[i].addEventListener('click', activeMenuElem, false);
}

//САЙДБАР
//переключение пунктов меню сайдбара
function activeMainMenuElem(e) {
    for(let i = 0; i < mainMenuElem.length; i++){
        mainMenuElem[i].classList.remove('main-menu__link--active');
    }
    e.currentTarget.className = 'main-menu__link--active main-menu__link';
}

for(let i = 0; i < mainMenuElem.length; i++){
    mainMenuElem[i].addEventListener('click', activeMainMenuElem, false);
}
