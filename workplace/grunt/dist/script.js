/*Processed by SURYA on 6/1/2024@11:48:20*/
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