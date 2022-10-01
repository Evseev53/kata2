let windowInnerWidth = window.innerWidth;
let swiperClass = document.querySelector('.swiper-wrapper');
let swiperSlideClass = document.querySelectorAll('.swiper-slide');
let showMenuButton = document.querySelector('.text__read-more');
let showMenuButtonSpan = showMenuButton.querySelector('span');
let showMenuButtonImg = showMenuButton.querySelector('img');
let menuSlider = document.querySelector('.menu-slider');
let elemMenuSlider = menuSlider.querySelectorAll('li');


if (windowInnerWidth < 768) {
    let swiper = new Swiper('.swiper', {
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
} else {
    swiperClass.classList.remove('swiper-wrapper');
    for(let i = 0; i < swiperSlideClass.length; i++) {
        swiperSlideClass[i].classList.remove('swiper-slide');
    }
    for(let i = 6; i < elemMenuSlider.length; i++) {
        elemMenuSlider[i].classList.add('menu-slider--hidden');
    }
}

window.addEventListener("resize", function () {
    console.log(window.innerWidth);
});

showMenuButton.addEventListener("click", function () {
    console.log('click');
    for(let i = 6; i < elemMenuSlider.length; i++) {
        elemMenuSlider[i].classList.remove('menu-slider--hidden');
    }
    let showMenu = true;
    showMenuButtonSpan.textContent = 'Скрыть';
    showMenuButtonImg.setAttribute('src', 'img/readmore-2.svg');
});

