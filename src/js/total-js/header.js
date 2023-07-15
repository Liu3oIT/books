import { savedThemeOnReloaded, onCheckboxClickHandler } from './dayNight';
import updateShopingListCounter from './counter';
import { forEach } from 'lodash';

const checkBoxEl = document.querySelector('#checkbox');
const body = document.querySelector('body');

if (checkBoxEl) {
  checkBoxEl.addEventListener('change', event => {
    onCheckboxClickHandler(event, body);
  });
}

savedThemeOnReloaded(body, checkBoxEl);

const currentActivePages = document.querySelectorAll('.current');
const newActivePages = document.querySelectorAll(`a[data-page='${body.dataset.page}']`);

currentActivePages.forEach((currentPage) => {
  newActivePages.forEach((newActivePage) => {
   if (currentPage.dataset.page != newActivePage.dataset.page) {
    currentPage.classList.remove("current");
     setCurrent(newActivePage);
}
  });
});

function setCurrent(el) {
  if (!el.classList.contains('current')) {
    el.classList.add('current');
  }
}

updateShopingListCounter();