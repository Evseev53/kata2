//КАРТОЧКИ
let brands = document.querySelector('.swiper-brands'); //карточки брендов
let services = document.querySelector('.swiper-services'); //карточки услуг
let showMoreButtonBrands = brands.querySelector('.read-more'); //кнопка показа карточек брендов
let showMoreButtonServices = services.querySelector('.read-more'); //кнопка показа карточек услуг

//ТЕКСТ
let text = document.querySelector('.text'); //текст
let textP = text.querySelectorAll('p'); //параграф текста
let readMoreButton = document.querySelector('.text__read-more'); //кнопка показа текста

//МЕНЮ
let menuElem = document.querySelectorAll('.menu__link'); //пункт меню
let mainMenuElem = document.querySelectorAll('.main-menu__link'); //пункт меню сайдбара

//МОДАЛКИ
let popupContainer = document.querySelector('.popup-container');
let popupFeedback = document.querySelector('.popup-feedback');
let inputInFeedback = popupFeedback.querySelectorAll('.form__input');  //первый инпут в модалке
