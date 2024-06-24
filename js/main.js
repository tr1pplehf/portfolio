Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const btnMoreProjects = document.querySelector('#btn-more-porject');
const moreProjects = document.querySelector('#more-projects');
btnMoreProjects.addEventListener('click', function () {
    moreProjects.classList.toggle('none');

    if (btnMoreProjects.textContent === 'Посмотреть все проекты') {
        btnMoreProjects.textContent = 'Закрыть проекты'
    } else if (btnMoreProjects.textContent === 'Закрыть проекты') {
        btnMoreProjects.textContent = 'Посмотреть все проекты'
    }
})