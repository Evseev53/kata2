//let pageWidth = document.scrollWidth;
let swiperClass = document.querySelector('.swiper-wrapper');
let swiperSlideClass = document.querySelectorAll('.swiper-slide');
let showMenuButton = document.querySelector('.text__read-more');
let showMenuButtonSpan = showMenuButton.querySelector('span');
let showMenuButtonImg = showMenuButton.querySelector('img');
let menuSlider = document.querySelector('.menu-slider');
let elemMenuSlider = menuSlider.querySelectorAll('li');
let showMenuStatus = false;

if (window.screen.width < 768) {
    new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        slidesPerView: 1.2,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2.7,
                spaceBetween: 20
            }
        }

    });
} else if (window.screen.width >= 768 && window.screen.width < 1024) {
    swiperClass.classList.remove('swiper-wrapper');
    for(let i = 0; i < swiperSlideClass.length; i++) {
        swiperSlideClass[i].classList.remove('swiper-slide');
    }
    for(let i = 6; i < elemMenuSlider.length; i++) {
        elemMenuSlider[i].classList.add('menu-slider--hidden');
    }
} else {
    swiperClass.classList.remove('swiper-wrapper');
    for (let i = 0; i < swiperSlideClass.length; i++) {
        swiperSlideClass[i].classList.remove('swiper-slide');
    }
    for (let i = 8; i < elemMenuSlider.length; i++) {
        elemMenuSlider[i].classList.add('menu-slider--hidden');
    }
}

//для конпки показать/скрыть. определить количетство видимых элементов меню
//если размер окна при ресайзе больше 1024 и количество видимых элементов 6, то добавить еще два видимых
//если размер окна при ресайзе от 768 до 1024 и количество видимых элементов = 8, то убавить до 6
window.addEventListener("resize", function () {
    let visibleElementsMenu = function () {
        let result = 0;
        for (let i = 0; i < elemMenuSlider.length; i++){
            if (elemMenuSlider[i].classList.contains('menu-slider--hidden')) {
                result += 1;
            }
        }
        return (elemMenuSlider.length - result);
    }

    if (window.screen.width >= 1024 && visibleElementsMenu() === 6){
        for (let i = 6; i < 8; i++) {
            elemMenuSlider[i].classList.remove('menu-slider--hidden');
        }
    }

    if (window.screen.width >= 768 && window.screen.width < 1024 && visibleElementsMenu() === 8) {
        for (let i = 8; i > 5; i--) {
            elemMenuSlider[i].classList.add('menu-slider--hidden');
        }
    }

    //если размер окна >= 768, то убрать классы слайдера с меню и элементов меню
    if (window.screen.width >= 768) {
        swiperClass.classList.remove('swiper-wrapper');
        for (let i = 0; i < elemMenuSlider.length; i++) {
            elemMenuSlider[i].classList.remove('.swiper-slide');
            console.log('del');
        }
    }
});

showMenuButton.addEventListener("click", function () {
    if (showMenuStatus === false) {
        showMenuStatus = true;
        for (let i = 6; i < elemMenuSlider.length; i++) {
            elemMenuSlider[i].classList.remove('menu-slider--hidden');
            }
        showMenuButtonSpan.textContent = 'Скрыть';
        showMenuButtonImg.setAttribute('src', 'img/readmore-2.svg');
    } else {
        showMenuStatus = false;
        if (window.screen.width >= 768 && window.screen.width < 1024) {
            for (let i = 6; i < elemMenuSlider.length; i++) {
                elemMenuSlider[i].classList.add('menu-slider--hidden');
            }
        } else {
            for (let i = 8; i < elemMenuSlider.length; i++) {
                elemMenuSlider[i].classList.add('menu-slider--hidden');
            }
        }
        showMenuButtonSpan.textContent = 'Показать всё';
        showMenuButtonImg.setAttribute('src', 'img/readmore.svg');
    }
});

