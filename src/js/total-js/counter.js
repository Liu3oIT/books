const STORAGE_KEY = 'shopping-list';

const counterValue = document.querySelector('.counter-value');

export default function updateShopingListCounter() {
  const shoppingListArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  counterValue.textContent = shoppingListArray.length || '';
}

