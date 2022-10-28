//КАРТОЧКИ
let brands = document.querySelector('.swiper-brands'); //карточки брендов
let services = document.querySelector('.swiper-services'); //карточки услуг
let showMoreButtonBrands = brands.querySelector('.read-more'); //кнопка показа карточек брендов
let showMoreButtonServices = services.querySelector('.read-more'); //кнопка показа карточек услуг

//отображение карточек брендов
export let cardsBrandsVisible = {visible: false}; //все карточки брендов отображаются
export let cardsServicesVisible = {visible: false}; //все карточки услуг отображаются

//КАРТОЧКИ
//показать/скрыть
function showCards (cardsVisible, showMoreButton, cardsContainer) {
    showMoreButton.addEventListener('click', function(){
        if (!cardsVisible) {
            cardsVisible = true;
            showMoreButton.querySelector('span').textContent = 'Скрыть';
            showMoreButton.querySelector('img').style.transform = 'rotate(180deg)';
            cardsContainer.querySelector('.cards').style.maxHeight = '600px';
        } else {
            cardsVisible = false;
            showMoreButton.querySelector('span').textContent = 'Показать всё';
            showMoreButton.querySelector('img').style.transform = 'rotate(360deg)';
            cardsContainer.querySelector('.cards').style.maxHeight = '170px';
        }
    });
};

showCards(cardsBrandsVisible.visible, showMoreButtonBrands, brands);
showCards(cardsServicesVisible.visible, showMoreButtonServices, services);









