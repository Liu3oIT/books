import { savedThemeOnReloaded, onCheckboxClickHandler } from './dayNight';

const checkBoxEl = document.querySelector('#checkbox');
const body = document.querySelector('body');

if (checkBoxEl) {
    checkBoxEl.addEventListener('change', (event) => { onCheckboxClickHandler(event, body) });
}

savedThemeOnReloaded(body, checkBoxEl);

const currentHomePage = document.querySelector('.home-btn');
const currentShoppingPage = document.querySelector('.list-btn');

    if (currentShoppingPage) {
    if (window.location.href === currentShoppingPage.href) {
    currentShoppingPage.classList.add('current');
    // mobileMenuList.add('current');
    currentHomePage.classList.remove('current');
    // mobileMenuHome.classList.remove('current');
}
}
