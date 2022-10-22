import * as variables from './variables';
import Swiper from '../../node_modules/swiper/swiper-bundle.js';


//СЛАЙДЕР
let swiperActive = false; //слайдер отображается
let sliderBrands; //слайдер для карточек брендов
let sliderServices; //слайдер для карточек услуг
let sliderPrices; //слайдер для карточек с ценами

//отображение карточек брендов
let cardsBrandsVisible = false; //все карточки брендов отображаются
let cardsServicesVisible = false; //все карточки услуг отображаются


//СЛАЙДЕР
function swiperBrands(on) {
    if (on) {
        sliderBrands = new Swiper('.swiper-brands', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 18,
        });
    } else {
        sliderBrands.destroy();
    }
}

function swiperServices(on) {
    if (on) {
        sliderServices = new Swiper('.swiper-services', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 18,
        });
    } else {
        sliderServices.destroy();
    }
}

function swiperPrices(on) {
    if (on) {
        sliderPrices = new Swiper('.swiper-prices', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 18,
        });
    } else {
        sliderPrices.destroy();
    }
}

//при загрузке страницы включает свайпер, если <768
if (window.innerWidth < 768) {
    swiperActive = true;
    swiperBrands(true);
    swiperServices(true);
    swiperPrices(true);
}

//вкл и выкл свайпера при ресайзе
window.addEventListener("resize", function () {
    if (window.innerWidth >= 768 && swiperActive) {
        swiperBrands(false);
        swiperServices(false);
        swiperPrices(false);
        swiperActive = false;
    } else if (window.innerWidth < 768 && !swiperActive) {
        cardsBrandsVisible = false;
        cardsServicesVisible = false;
        swiperBrands(true);
        swiperServices(true);
        swiperPrices(true);
        swiperActive = true;
    }
});



//КАРТОЧКИ
//кнопка Показать всё/Скрыть для карточек брендов
variables.showMoreButtonBrands.addEventListener('click', function () {
    if (!cardsBrandsVisible) {
        cardsBrandsVisible = true;
        variables.showMoreButtonBrands.querySelector('span').textContent = 'Скрыть';
        variables.showMoreButtonBrands.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
        variables.brands.querySelector('.cards').style.maxHeight = '600px';
    } else {
        cardsBrandsVisible = false;
        variables.showMoreButtonBrands.querySelector('span').textContent = 'Показать всё';
        variables.showMoreButtonBrands.querySelector('img').setAttribute('src', 'img/readmore.svg');
        variables.brands.querySelector('.cards').style.maxHeight = '170px';
    }
});

//кнопка Показать всё/Скрыть для карточек услуг
variables.showMoreButtonServices.addEventListener('click', function () {
    if (!cardsServicesVisible) {
        cardsServicesVisible = true;
        variables.showMoreButtonServices.querySelector('span').textContent = 'Скрыть';
        variables.showMoreButtonServices.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
        variables.services.querySelector('.cards').style.maxHeight = '600px';
    } else {
        cardsServicesVisible = false;
        variables.showMoreButtonServices.querySelector('span').textContent = 'Показать всё';
        variables.showMoreButtonServices.querySelector('img').setAttribute('src', 'img/readmore.svg');
        variables.services.querySelector('.cards').style.maxHeight = '170px';
    }
});







