// Филтр на мобилках
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

//клик по кнопке для скрытия/показа фильтра и изминения иконки
sidebarToggleBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');

};
// Показ еще три карточки при нажатиее на кнопку еще
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card__link--hidden');

btnShowMoreCards.addEventListener('click', function() {

    hiddenCards.forEach(function(card) {
        card.classList.remove('card__link--hidden');
    })
});

// Показать/скрыть контент внутри  виджетов
const widgets = document.querySelectorAll('.widget');

//находим все виджеты на странице
widgets.forEach(function(widgets) {
    //слушаем клик внутри виджета
    widgets.addEventListener('click', function(e) {
        //  если клик по заголовку/ тогда /скрываем тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');

        }
    });
});
// Location кнопка любая
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckBoxes = document.querySelectorAll('[data-locatin-param]');
// клик по кнопке любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function() {
    if (checkBoxAny.checked) {
        topLocationCheckBoxes.forEach(function(item) {
            item.checked = false;
        });

    }
});
// клик по кнопке с верхнево ряда и отключение кнопки "любая"
topLocationCheckBoxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }

    })
});
// 
const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function(e) {
    e.preventDefault();
    //если блоки были скрыты - значить показываем 
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = "block";
        });
        showMoreOptions.innerText = "Скрыть дополнительные опции";
        showMoreOptions.dataset.options = 'visible'

    }
    //если блоки были видны - значит скрываем
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function(item) {
            item.style.display = "none";
        });
        showMoreOptions.innerText = "Показать еще";
        showMoreOptions.dataset.options = 'hidden'
    }

}