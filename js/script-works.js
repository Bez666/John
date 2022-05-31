const headerLinkMain = document.querySelector('.header__link');
const headerLink = headerLinkMain.onclick = click();

function click() {
        headerLinkMain.classList.toggle('active');
    }