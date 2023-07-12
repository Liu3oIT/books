import NewApiService from './API';
import amazon from '../../img/amazon.svg';
import applebook from '../../img/book-apple.svg';
import bookshop from '../../img/book-shop.svg';

const newApiService = new NewApiService();
let idBook = localStorage.getItem('shopping-list');
const ids = JSON.parse(idBook);
const listShopBuy = document.querySelector('.shop-list');
const shopDiv = document.querySelector('.shop-div');

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

  function processBook(book) {
    shopDiv.innerHTML = '';
    const booksForShop = `
      <li id="${book._id}" class="shopping-list-item">
  <img
    class="sh-book-img"
    src="${book.book_image}"
    alt="Boook image"
    loading="lazy"
  ></img>
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
                   
                   <svg class="sh-list-delete-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.25 1.75h5.5m-11 2.75h16.5m-1.833 0-.643 9.643c-.097 1.446-.145 2.17-.457 2.718a2.75 2.75 0 0 1-1.19 1.114c-.569.275-1.293.275-2.743.275H8.616c-1.45 0-2.174 0-2.743-.275a2.75 2.75 0 0 1-1.19-1.114c-.312-.548-.36-1.272-.457-2.718L3.583 4.5m4.584 4.125v4.583m3.666-4.583v4.583"/></svg>
                    
                  </button>
</li>`;

    listShopBuy.insertAdjacentHTML('beforeend', booksForShop);
  }
};
getIdlocalStore(ids);
const btnByu = document.querySelector('.modal__add-book-btn');
const beletbooks = document.querySelector('.sh-list-delete-btn');

console.log(beletbooks);
