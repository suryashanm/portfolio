/*Processed by SURYA on 10/11/2023@12:59:22*/
// Event listener for toggling hamburger menu, menu and CV file display on click.
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const cv = document.querySelector('.cv-file');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    cv.style.display = cv.style.display === 'flex' ? 'none' : 'flex';
});
//# sourceMappingURL=script.js.map