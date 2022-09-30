let windowInnerWidth = window.innerWidth;
let swiperClass = document.querySelector('.swiper-wrapper');
let swiperSlideClass = document.querySelectorAll('.swiper-slide');
console.log(swiperSlideClass);


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
}

if (windowInnerWidth >= 768) {
    swiperClass.classList.remove('swiper-wrapper');
    for(let i = 0; i < swiperSlideClass.length; i++) {
        swiperSlideClass[i].classList.remove('swiper-slide');
    }
}

window.addEventListener("resize", function () {

});

