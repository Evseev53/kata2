import {inputInFeedback, popupContainer, popupFeedback} from "./variables";

//автофокус при открытии модалки
let button = document.querySelector('.nav-list__link--message-pink');

button.addEventListener('click', function () {
    console.log(document.forms[0].querySelector('.form__input'));
    setTimeout(document.forms[0].querySelector('.form__input').focus(), 1000);
    console.log('focusOn');
});


//закрытие модалки нажатием esc
document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
        document.querySelector('.close-btn').click();
    }
});
