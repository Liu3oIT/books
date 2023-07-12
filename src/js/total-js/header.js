import { savedThemeOnReloaded, onCheckboxClickHandler } from './dayNight';

const checkBoxEl = document.querySelector('#checkbox');
const body = document.querySelector('body');

if (checkBoxEl) {
    checkBoxEl.addEventListener('change', (event) => { onCheckboxClickHandler(event, body) });
}

savedThemeOnReloaded(body, checkBoxEl);

const currentShoppingPage = document.querySelector('.list-btn');
currentShoppingPage.classList.add('current');

function eventHandlerCurrentPage() {
    
}