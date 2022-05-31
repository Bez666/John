const headerLinkMain = document.querySelector('.header__link').nextElementSibling;
const headerLink = headerLinkMain.onclick = click();

function click() {
    headerLinkMain.classList.toggle('active');
}