//МОДАЛКИ
let popupContainer = document.querySelector('.popup-container');
let popupFeedback = document.querySelector('.popup-feedback');
let inputInFeedback = popupFeedback.querySelectorAll('.form__input');  //первый инпут в модалке


//автофокус при открытии модалки
let button = document.querySelector('.nav-list__link--message-pink');

button.addEventListener('click', function () {
    setTimeout(document.forms[0].querySelector('.form__input').focus(), 1000);
});


//закрытие модалки нажатием esc
document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
        document.querySelector('.close-btn').click();
    }
});
