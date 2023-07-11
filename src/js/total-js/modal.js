import amazon from '../../img/amazon.svg';
import applebook from '../../img/book-apple.svg';
import bookshop from '../../img/book-shop.svg';


const backDrop = document.querySelector('#book-modal');
const bestSellerRef = document.querySelector('.books-container');
const categoriesRef = document.querySelector('.category-books-list');
const closeBtn = document.querySelector('.close-button');
const addBookBtn = document.querySelector('.modal__add-book-btn');
const removeNotification = document.querySelector('.modal__remove-notification');
const addNotification = document.querySelector('.modal__add-notification');
const notification = document.querySelector('.modal__notification');

let modalContent = document.querySelector('.modal__content');
let idToLocaleStorege = null;
let arrToLocaleStoreg = [];


addBookBtn.addEventListener('click', onAddBookClick);
closeBtn.addEventListener('click', onBtnCloseClick);
bestSellerRef.addEventListener('click', onCardClick);

function fetchCategory(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(res =>
    res.json()
  );
}


function renderTargetCategory(id) {
  const markup = `
      <div class="modal__img-container">
        <img src="${id.book_image}" alt="${id.title}" class="modal__img">
      </div>
      <div class="modal__desc">
        <h2 class="modal__title">${id.title}</h2>
        <p class="modal__author">${id.author}</p>
        <p class="modal__book-desc">${id.description}</p>
        <ul class="modal__list">
          <li class="modal__item"><a href="${id.buy_links[0].url}" class="amazon-link"><img class="store-link-img amazon-img" src="${amazon}" alt=""></a></li>
          <li class="modal__item"><a href="${id.buy_links[1].url}" class="app-book-link"><img class="store-link-img" src="${applebook}" alt=""></a></li>
          <li class="modal__item"><a href="${id.buy_links[3].url}" class="book-shop-link"><img class="store-link-img" src="${bookshop}" alt=""></a></li>
        </ul>
      </div>
    `;


  modalContent.innerHTML = '';
  modalContent.innerHTML = markup;
}


function getCategory(id) {
  fetchCategory(id).then(res => {
    renderTargetCategory(res);
  });
}


function onBtnCloseClick(e) {
  if (e.code === 'Escape') {
    backDrop.removeEventListener('keydown', onBtnCloseClick);
    backDrop.classList.add('is-hidden');
  }
  if (e.currentTarget === e.target) {
    backDrop.classList.add('is-hidden');
  }
  if (e.target.classList.contains('modal__close-img')) {
    backDrop.classList.add('is-hidden');
  }
}


function onCardClick(e) {
  if (e.target.tagName !== 'IMG') {
    return;
  }
  const card = e.target;
  const el = card.closest('[data-id]');
  const id = el.dataset.id;

  window.addEventListener('keydown', onBtnCloseClick);
  backDrop.addEventListener('click', onBtnCloseClick);
  backDrop.addEventListener('keydown', onBtnCloseClick);
  
  if (card.classList.contains('books-btn')) {
    return;
  }

  idToLocaleStorege = id;
  getCategory(id);
  backDrop.classList.remove('is-hidden');
}


function onAddBookClick(res) {
  notification.classList.toggle('hidden');
  removeNotification.classList.toggle('hidden');
  addNotification.classList.toggle('hidden');

  if (addNotification.classList.contains('hidden')) {
    arrToLocaleStoreg.push(idToLocaleStorege);
    localStorage.setItem('shopping-list', JSON.stringify(arrToLocaleStoreg));
  }

  if (removeNotification.classList.contains('hidden')) {
    const arrTofilter = JSON.parse(localStorage.getItem('shopping-list'));
    const filtredArr = arrTofilter.filter(id => id !== idToLocaleStorege);
    localStorage.setItem('shopping-list', JSON.stringify(filtredArr));
  }
}

