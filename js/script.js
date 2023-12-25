// Burger menu
document.getElementById('burger').addEventListener('click', function () {
    this.classList.toggle('active');
    let menuList = document.getElementById('menu');
    menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
});

// Modal language window styles
let langBlock = document.querySelector('.lang-block');
let modal = document.getElementById('lang-modal');
let modalTexts = document.querySelectorAll('.modal-text');
let langText = document.querySelector('.lang-text');

langBlock.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.top = langBlock.offsetTop + langBlock.offsetHeight + 'px';
    modal.style.left = langBlock.offsetLeft - 15 + 'px'; 
    modal.style.display = 'block';
});

modalTexts.forEach(function (modalText) {
    modalText.addEventListener('click', function () {
        var selectedLang = this.getAttribute('data-lang');
        langText.innerText = selectedLang;
        modal.style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    if (!event.target.closest('.lang-block') && !event.target.closest('.modal')) {
        modal.style.display = 'none';
    }
});

// Slider

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide', {
        type: 'fade',
        heightRatio: 0.5,
        transition: 'fade',
        speed: 800,
        pagination: true,
        paginationType: 'progressbar',
        arrows: true,
        autoplay: true,
        interval: 4000,
        keyboard: true,
        touch: true,
    });

    splide.mount();
});
   