import * as variables from './variables';

//МЕНЮ
//переключение пунктов меню
function activeMenuElem(e) {
    for(let i = 0; i < variables.menuElem.length; i++){
        variables.menuElem[i].classList.remove('menu__link--active');
    }
    e.currentTarget.className = 'menu__link--active menu__link';
}

for(let i = 0; i < variables.menuElem.length; i++) {
    variables.menuElem[i].addEventListener('click', activeMenuElem, false);
}


//САЙДБАР
//переключение пунктов меню сайдбара
function activeMainMenuElem(e) {
    for(let i = 0; i < variables.mainMenuElem.length; i++){
        variables.mainMenuElem[i].classList.remove('main-menu__link--active');
    }
    e.currentTarget.className = 'main-menu__link--active main-menu__link';
}

for(let i = 0; i < variables.mainMenuElem.length; i++){
    variables.mainMenuElem[i].addEventListener('click', activeMainMenuElem, false);
}
