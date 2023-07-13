import NewApiService from './API';
import amazon from '../../img/amazon.svg';
import applebook from '../../img/book-apple.svg';
import bookshop from '../../img/book-shop.svg';

const newApiService = new NewApiService();
const listShopBuy = document.querySelector('.shop-list');
const shopDiv = document.querySelector('.shop-background');
console.log(shopDiv);

const getIdlocalStore = async ids => {
  for (const id of ids) {
    const infoIdBooks = await newApiService.fetchBooksForId(id);

    if (Array.isArray(infoIdBooks)) {
      infoIdBooks.forEach(book => {
        processBook(book);
      });
    } else {
      processBook(infoIdBooks);
    }
  }
};

const processBook = book => {
  shopDiv.innerHTML = '';
  const booksForShop = `
    <li class="shopping-list-item" data-id="${book._id}">
      <img class="sh-book-img" src="${book.book_image}" alt="Boook image" loading="lazy"></img>
      <div class="sh-wrap">
        <div class="sh-book-info-wrap">
          <h2 class="sh-book-title">${book.title}</h2>
          <p class="sh-book-category">${book.list_name}</p>
          <div class="div-text-container">
            <p class="sh-book-description">${book.description}</p>
          </div>
        </div>
        <div class="sh-book-info-link-wrap">
          <p class="sh-book-author">${book.author}</p>
          <ul class="shopping-links">
            <li class="sh-soc-item"><a href="${book.buy_links[0].url}" class="amazon-link" target="_blank"><img class="store-link-img amazon-img" src="${amazon}" alt=""></a></li>
            <li class="sh-soc-item"><a href="${book.buy_links[1].url}" class="app-book-link" target="_blank"><img class="store-link-img" src="${applebook}" alt=""></a></li>
            <li class="sh-soc-item"><a href="${book.buy_links[3].url}" class="book-shop-link" target="_blank"><img class="store-link-img" src="${bookshop}" alt=""></a></li>
          </ul>
        </div>
      </div>
      <button class="sh-list-delete-btn" type="button">
        <svg class="sh-list-delete-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
          <path d="M7.25 1.75h5.5m-11 2.75h16.5m-1.833 0-.643 9.643c-.097 1.446-.145 2.17-.457 2.718a2.75 2.75 0 0 1-1.19 1.114c-.569.275-1.293.275-2.743.275H8.616c-1.45 0-2.174 0-2.743-.275a2.75 2.75 0 0 1-1.19-1.114c-.312-.548-.36-1.272-.457-2.718L3.583 4.5m4.584 4.125v4.583m3.666-4.583v4.583" />
        </svg>
      </button>
    </li>`;

  listShopBuy.insertAdjacentHTML('beforeend', booksForShop);
};

const updateShopList = () => {
  listShopBuy.innerHTML = '';

  const idBook = localStorage.getItem('shopping-list');
  const ids = JSON.parse(idBook);

  if (ids && ids.length > 0) {
    getIdlocalStore(ids);
  } else {
    const emptyShopMarkup = `
      <p class="shop-text-backgr">
        This page is empty, add some books and proceed to order.
      </p>

      <div class="shop-img-backgr">
        <img
          srcset="
            ./img/images/shopping-list-empty/shoplist-tabl@1x.png 1x,
            ./img/images/shopping-list-empty/shoplist-tabl@2x.png 2x
          "
          src="./img/images/shopping-list-empty/shoplist-tabl@1x.png"
          alt="stack of books"
        />
      </div>
    `;
    shopDiv.innerHTML = emptyShopMarkup;
  }
};

const deleteBookFromLocalStorage = id => {
  const idBook = localStorage.getItem('shopping-list');
  const ids = JSON.parse(idBook);

  const updatedIds = ids.filter(bookId => bookId !== id);
  const updatedIdsJSON = JSON.stringify(updatedIds);

  localStorage.setItem('shopping-list', updatedIdsJSON);

  if (updatedIds.length === 0) {
    updateShopList();
  }
};

const deletBooksFromShopList = e => {
  const target = e.target;

  if (!target.closest('.sh-list-delete-btn')) {
    return;
  }

  const el = target.closest('[data-id]');
  const id = el.dataset.id;

  deleteBookFromLocalStorage(id);
  el.remove();
};

listShopBuy.addEventListener('click', deletBooksFromShopList);

updateShopList();
