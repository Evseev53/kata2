//КАРТОЧКИ
export let brands = document.querySelector('.swiper-brands'); //карточки брендов
export let services = document.querySelector('.swiper-services'); //карточки услуг
export let showMoreButtonBrands = brands.querySelector('.read-more'); //кнопка показа карточек брендов
export let showMoreButtonServices = services.querySelector('.read-more'); //кнопка показа карточек услуг

//ТЕКСТ
export let text = document.querySelector('.text'); //текст
export let textP = text.querySelectorAll('p'); //параграф текста
export let readMoreButton = document.querySelector('.text__read-more'); //кнопка показа текста

//МЕНЮ
export let menuElem = document.querySelectorAll('.menu__link'); //пункт меню
export let mainMenuElem = document.querySelectorAll('.main-menu__link'); //пункт меню сайдбара

//МОДАЛКИ
export let popupContainer = document.querySelector('.popup-container');
export let popupFeedback = document.querySelector('.popup-feedback');
export let inputInFeedback = popupFeedback.querySelectorAll('.form__input');  //первый инпут в модалке
