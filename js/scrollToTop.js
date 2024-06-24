// Находим кнопку
const scrollButton = document.querySelector('#scrollToTopBtn');

// Добавляем событие скролла на странице
window.addEventListener('scroll', function () {
    // Если пользователь проскролил страницу по высоте больше чем высота экрана
    if (window.pageYOffset > window.innerHeight) {
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }
});
