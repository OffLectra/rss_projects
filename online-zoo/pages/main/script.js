// alert('Work in progress! Give me some time, please =) | Работа в процессе! Позволь мне доделать, пожалуйста =)')

const iconMenu = document.querySelector('.burger_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu_body');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}