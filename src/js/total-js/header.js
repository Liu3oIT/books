import { savedThemeOnReloaded, onCheckboxClickHandler } from './dayNight';
import updateShopingListCounter from './counter';

const checkBoxEl = document.querySelector('#checkbox');
const body = document.querySelector('body');

if (checkBoxEl) {
  checkBoxEl.addEventListener('change', event => {
    onCheckboxClickHandler(event, body);
  });
}

savedThemeOnReloaded(body, checkBoxEl);

const currentActivePage = document.querySelector('.current');
const newActivePage = document.querySelector(`a[data-page='${body.dataset.page}']`);

if (currentActivePage != newActivePage) {
    currentActivePage.classList.toggle("current");
    newActivePage.classList.toggle("current");
}
updateShopingListCounter();