//МОДАЛКИ
let popupContainer = document.querySelectorAll('.popup-container');
let popupFeedback = document.querySelector('.popup-feedback');
let popupCallback = document.querySelector('.popup-call-back');
let openPopupCallbackBtn = document.querySelectorAll('.button--phone-pink');
let openPopupFeedbackBtn = document.querySelectorAll('.button--message-pink');
let closeBtn = document.querySelectorAll('.close-btn');
let content = document.querySelectorAll('.popup-content');
let body = document.querySelector('.body');
let burgerBtn = document.querySelector('.button--burger-pink');
let sidebar = document.querySelector('.sidebar-container');
let sidebarContent = document.querySelector('.sidebar');
let closeSidebar = document.querySelector('.button--back-pink');
let sidebarActive = false;

//открыть модалку
function openPopup (button, popup) {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            popup.closest('.popup-container').classList.add('popup-container--open');
            body.style.overflow = 'hidden';
        });
    }
}

//автофокус при открытии модалки
function autofocus (openPopupBtn, popup) {
    for (let i = 0; i < openPopupBtn.length; i++) {
        openPopupBtn[i].addEventListener('click', function() {
            popup.closest('.popup-container').querySelector('.form__input').focus();
        });
    }
}

//кнопка закрыть
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function() {
        closeBtn[i].closest('.popup-container').classList.remove('popup-container--open');
        if (!sidebarActive) {
            body.style.overflow = 'visible';
        }
    });
}

//закрытие модалки нажатием esc
document.addEventListener('keydown', function (event) {
    for (let i = 0; i < closeBtn.length; i++) {
        if (event.code === 'Escape') {
            closeBtn[i].click();
            closeSidebar.click();
            sidebarActive = false;
        }
    }
});

//закрытие кликом на заблюренную область
for (let i = 0; i < popupContainer.length; i++) {
    popupContainer[i].addEventListener('click', function(e) {
        for (let i = 0; i < content.length; i++) {
            let withinBoundaries = e.composedPath().includes(content[i]);
            if (!withinBoundaries) {
                popupContainer[i].classList.remove('popup-container--open');
                if (!sidebarActive) {
                    body.style.overflow = 'visible';
                }
            }
        }
    });
}

//открыть сайдбар
burgerBtn.addEventListener('click', function() {
    sidebar.classList.add('sidebar-container--open');
    body.style.overflow = 'hidden';
    sidebarActive = true;
});

//закрыть сайдбар
closeSidebar.addEventListener('click', function(e){
    sidebar.classList.remove('sidebar-container--open');
    body.style.overflow = 'visible';
    sidebarActive = false;
});

//закрыть сайдбар кликом на заблюренную область
sidebar.addEventListener('click', function(e){
    let withinBoundaries = e.composedPath().includes(sidebarContent);
    if (!withinBoundaries) {
        sidebar.classList.remove('sidebar-container--open');
        body.style.overflow = 'visible';
        sidebarActive = false;
    }
});

openPopup(openPopupCallbackBtn, popupCallback);
openPopup(openPopupFeedbackBtn, popupFeedback);
autofocus(openPopupCallbackBtn, popupCallback);
autofocus(openPopupFeedbackBtn, popupFeedback);
