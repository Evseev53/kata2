//КАРТОЧКИ
let brands = document.querySelector('.swiper-brands'); //карточки брендов
let services = document.querySelector('.swiper-services'); //карточки услуг
let cardsBrandsVisible = false; //все карточки брендов отображаются
let cardsServicesVisible = false; //все карточки услуг отображаются
let showMoreButtonBrands = brands.querySelector('.read-more'); //кнопка показа карточек брендов
let showMoreButtonServices = services.querySelector('.read-more'); //кнопка показа карточек услуг

//ТЕКСТ
let textVisible = false; //весь текст отображается
let readMoreButton = document.querySelector('.text__read-more'); //кнопка показа текста

//СЛАЙДЕР
let swiperActive = false; //слайдер отображается
let sliderBrands; //слайдер для карточек брендов
let sliderServices; //слайдер для карточек услуг
let sliderPrices; //слайдер для карточек с ценами

//МЕНЮ
let menuElem = document.querySelectorAll('.menu__link'); //пункт меню
let mainMenuElem = document.querySelectorAll('.main-menu__link'); //пункт меню сайдбара

//ТЕКСТ
let text = document.querySelector('.text'); //текст
let textP = text.querySelectorAll('p'); //параграф текста


//СВАЙПЕР
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
showMoreButtonBrands.addEventListener('click', function () {
    if (!cardsBrandsVisible) {
        cardsBrandsVisible = true;
        showMoreButtonBrands.querySelector('span').textContent = 'Скрыть';
        showMoreButtonBrands.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
        brands.querySelector('.cards').style.maxHeight = '600px';
    } else {
        cardsBrandsVisible = false;
        showMoreButtonBrands.querySelector('span').textContent = 'Показать всё';
        showMoreButtonBrands.querySelector('img').setAttribute('src', 'img/readmore.svg');
        brands.querySelector('.cards').style.maxHeight = '170px';
    }
});

//кнопка Показать всё/Скрыть для карточек услуг
showMoreButtonServices.addEventListener('click', function () {
    if (!cardsServicesVisible) {
        cardsServicesVisible = true;
        showMoreButtonServices.querySelector('span').textContent = 'Скрыть';
        showMoreButtonServices.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
        services.querySelector('.cards').style.maxHeight = '600px';
    } else {
        cardsServicesVisible = false;
        showMoreButtonServices.querySelector('span').textContent = 'Показать всё';
        showMoreButtonServices.querySelector('img').setAttribute('src', 'img/readmore.svg');
        services.querySelector('.cards').style.maxHeight = '170px';
    }
});



//Отображение текста
//кнопка Читать далее/Скрыть
readMoreButton.addEventListener('click', function () {
    if (!textVisible) {
      for (let i = 0; i < textP.length; i++) {
        textP[i].style.display = 'inline-block';
      }
      textVisible = true;
      readMoreButton.querySelector('span').textContent = 'Скрыть';
      readMoreButton.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
    } else {
      textVisible = false;
      readMoreButton.querySelector('span').textContent = 'Читать далее';
      readMoreButton.querySelector('img').setAttribute('src', 'img/readmore.svg');
      if (window.innerWidth < 768) {
        for (let i = 1; i < textP.length; i++) {
          textP[i].style.display = 'none';
        }
      } else {
          for (let i = 2; i < textP.length; i++) {
            textP[i].style.display = 'none';
        }
      }
    }
});


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


//МЕНЮ
//переключение пунктов меню
function activeMenuElem(e) {
    for(let i = 0; i < menuElem.length; i++){
        menuElem[i].classList.remove('menu__link--active');
    }
    e.currentTarget.className = 'menu__link--active menu__link';
}

for(let i = 0; i < menuElem.length; i++){
    menuElem[i].addEventListener('click', activeMenuElem, false);
}
