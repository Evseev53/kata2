//ТЕКСТ
let text = document.querySelector('.text'); //текст
let textP = text.querySelectorAll('p'); //параграф текста
let readMoreButton = document.querySelector('.text__read-more'); //кнопка показа текста
let textVisible = false; //весь текст отображается

//Отображение текста
//кнопка Читать далее/Скрыть
//отображается разное количество текста в зависимости от ширины окна
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
