let cardsVisible = false; //все карточки отображаются
let textVisible = false; //весь текст отображается
let showMoreButton = document.querySelector('.read-more');
let readMoreButton = document.querySelector('.text__read-more');
let swiperActive = false; //свайпер отображается
let slider;
let buttonBurger = document.querySelector('.nav-list__link--burger-pink'); //кнопка бургер
let sidebar = document.querySelector('.sidebar');
let sidebarClose = document.querySelector('.nav-list__link--back-pink'); //кнопка закрыть сайдбар
let mainMenuElem = document.querySelectorAll('.main-menu__link'); //пункт меню сайдбара
let menuElem = document.querySelectorAll('.menu__link'); //пункт меню
let text = document.querySelector('.text');
let textP = text.querySelectorAll('p');

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
    if (window.innerWidth >= 1120) {
        console.log(window.innerWidth)
        sidebar.style.display = 'flex';
    } else {
        sidebar.style.display = 'none';
    }
});


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
