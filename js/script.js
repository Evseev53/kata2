let cardsVisible = false; //все карточки отображаются
let showMoreButton = document.querySelector('.read-more');
let swiperActive = false; //свайпер отображается
let slider;
let buttonBurger = document.querySelector('.nav-list__link--burger-pink'); //кнопка бургер
let sidebar = document.querySelector('.sidebar');
let sidebarClose = document.querySelector('.nav-list__link--back-pink'); //кнопка закрыть сайдбар

function swiper(on) {
    if (on) {
        slider = new Swiper('.swiper', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 18,
        });
    } else {
        slider.destroy();
    }
}

//при загрузке страницы включает свайпер, если <768
if (window.screen.width < 768) {
    swiperActive = true;
    swiper(true);
}

//вкл и выкл свайпера при ресайзе
window.addEventListener("resize", function () {
    if (window.screen.width >= 768 && swiperActive) {
        swiper(false);
        swiperActive = false;
        } else if (window.screen.width < 768 && !swiperActive) {
        cardsVisible = false;
        swiper(true);
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


//показать сайдбар
buttonBurger.addEventListener('click', function () {
    sidebar.style.display = 'flex';
});

//скрыть сайдбар
sidebarClose.addEventListener('click', function () {
    sidebar.style.display = 'none';
});

//сайдбар при ресайзе
window.addEventListener('resize', function () {
    if (window.screen.width >= 1120) {
        sidebar.style.display = 'flex';
    } else {
        sidebar.style.display = 'none';
    }
});