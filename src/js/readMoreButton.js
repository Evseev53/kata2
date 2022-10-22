import * as variables from './variables';

let textVisible = false; //весь текст отображается

//Отображение текста
//кнопка Читать далее/Скрыть
//отображается разное количество текста в зависимости от ширины окна
variables.readMoreButton.addEventListener('click', function () {
    if (!textVisible) {
        for (let i = 0; i < variables.textP.length; i++) {
            variables.textP[i].style.display = 'inline-block';
        }
        textVisible = true;
        variables.readMoreButton.querySelector('span').textContent = 'Скрыть';
        variables.readMoreButton.querySelector('img').setAttribute('src', 'img/readmore-2.svg');
    } else {
        textVisible = false;
        variables.readMoreButton.querySelector('span').textContent = 'Читать далее';
        variables.readMoreButton.querySelector('img').setAttribute('src', 'img/readmore.svg');
        if (window.innerWidth < 768) {
            for (let i = 1; i < variables.textP.length; i++) {
                variables.textP[i].style.display = 'none';
            }
        } else {
            for (let i = 2; i < variables.textP.length; i++) {
                variables.textP[i].style.display = 'none';
            }
        }
    }
});
