const wrapper = document.querySelector('.wrapper');

const headerLinkMain = document.querySelector('.header-box');
const lastChild = headerLinkMain.children[2];
const headerLink = lastChild.onclick = click();

function click() {
        lastChild.classList.toggle('active');
    }


console.log();