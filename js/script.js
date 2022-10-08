let cardsVisible = false; //все карточки отображаются
let showMoreButton = document.querySelector('.read-more');
let swiperActive = false; //свайпер отображается
let swiper;

//при загрузке страницы включает свайпер, если <768
if (window.screen.width < 768) {
    swiperActive = true;
    swiper = new Swiper('.swiper', {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 18,
    });
}

//вкл и выкл свайпера при ресайзе
window.addEventListener("resize", function () {
    if (window.screen.width >= 768 && swiperActive) {
        swiper.destroy();
        swiperActive = false;
        } else if (window.screen.width < 768 && !swiperActive) {
        cardsVisible = false;
        swiper = new Swiper('.swiper', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            spaceBetween: 20,
        });
        swiperActive = true;
    }
});

//кнопка Показать всё/Скрыть
showMoreButton.addEventListener('click', function () {
    if (!cardsVisible) {
        cardsVisible = true;
        showMoreButton.querySelector('span').textContent = 'Скрыть';
        showMoreButton.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
        document.querySelector('.brands').style.maxHeight = '600px';
    } else {
        cardsVisible = false;
        showMoreButton.querySelector('span').textContent = 'Показать всё';
        showMoreButton.querySelector('img').setAttribute('src', 'img/readmore.svg');
        document.querySelector('.brands').style.maxHeight = '170px';
    }
});
