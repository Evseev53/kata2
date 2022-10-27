import Swiper from '../../node_modules/swiper/swiper-bundle.js';
import * as cards from './cards';

let swiperActive = false; //слайдер отображается
let swiperBrands; //слайдер для карточек брендов
let swiperServices; //слайдер для карточек услуг
let swiperPrices; //слайдер для карточек с ценами
let swiperNameArr = [swiperBrands, swiperPrices, swiperServices];


//СВАЙПЕР
function swiper(on) {
    let classArr = ['.swiper-brands', '.swiper-prices', '.swiper-services'];
    if (on) {
        for (let i = 0; i < classArr.length; i++) {
            swiperNameArr[i] = new Swiper(classArr[i], {
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: 'auto',
                spaceBetween: 18,
            });
            console.log(swiperNameArr[i]);
        }
    } else {
        for (let i = 0; i < swiperNameArr.length; i++) {
            swiperNameArr[i].destroy();
        }
    }
}

//при загрузке страницы включает свайпер, если <768
if (window.innerWidth < 768) {
    swiperActive = true;
    swiper(true);
}

//вкл и выкл свайпера при ресайзе
window.addEventListener("resize", function () {
    if (window.innerWidth >= 768 && swiperActive) {
        swiper(false);
        swiperActive = false;
    } else if (window.innerWidth < 768 && !swiperActive) {
        cards.cardsBrandsVisible.visible = false;
        cards.cardsServicesVisible.visible = false;
        swiper(true);
        swiperActive = true;
    }
});
