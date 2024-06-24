const mobileNavOpen = document.querySelector('#mobileNavOpen');
const mobileNavClose = document.querySelector('#mobileNavClose');
const mobileNav = document.querySelector('.mobile-nav');
const navScroll = document.body;
const mobileNavList = mobileNav.querySelectorAll('a, button');

// Открытие мобильной навигации
mobileNavOpen.addEventListener('click', function () {
    mobileNavClose.classList.toggle('active');
    mobileNav.classList.toggle('mobile-nav--open');
    navScroll.classList.toggle('no-scroll');
})
// Закрытие мобильной навигации
mobileNavClose.addEventListener('click', function () {
    mobileNavClose.classList.toggle('active');
    mobileNav.classList.toggle('mobile-nav--open');
    navScroll.classList.toggle('no-scroll');
})
// Закрытие мобильной навигации по клику на элемент списка
mobileNavList.forEach(function(i){
    i.addEventListener('click', function(){
        mobileNav.classList.remove('mobile-nav--open');
        navScroll.classList.remove('no-scroll');
    })
})