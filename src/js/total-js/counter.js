const STORAGE_KEY = 'shop-list-di';

const counterValue = document.querySelector('.counter-value');

function shopingListCounter() {
  const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  counterValue.textContent = shoppingListArray.length || '';
}

shopingListCounter();