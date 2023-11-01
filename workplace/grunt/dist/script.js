/*Processed by SURYA on 1/11/2023@14:12:2*/
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const cv = document.querySelector('.cv-file');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    cv.style.display = cv.style.display === 'flex' ? 'none' : 'flex';
});
//# sourceMappingURL=script.js.map