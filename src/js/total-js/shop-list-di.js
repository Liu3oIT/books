const shopDiv = document.querySelector('.shop-background');
const btn = document.querySelector('.modal__add-book-btn');

console.log(btn);

const infoBooks = [];
localStorage.setItem('infoBooks', JSON.stringify(infoBooks));





btn.addEventListener('click', e => {
  e.preventDefault();
  const parentDiv = e.target.closest('.modal__add-book-btn');
  if (parentDiv) {
    const dataId = parentDiv.dataset.id;
    console.log(dataId);
  }
});




function saveLokalStor(info) {
  const infoBooksString = localStorage.getItem('infoBooks');
  const infoBooks = JSON.parse(infoBooksString) || [];

  infoBooks.push(info);

  localStorage.setItem('infoBooks', JSON.stringify(infoBooks));
}

function checkingLocalStorage() {
  const infoBooksString = localStorage.getItem('infoBooks');
  const infoBooks = JSON.parse(infoBooksString);

  if (!infoBooks || infoBooks.length === 0) {
    shopDiv.classList.remove('displNan');
    return;
  } else {
    shopDiv.classList.add('displNan');

    drawingMarkings(infoBooks);
  }
}

function drawingMarkings(infoBooks) {
  const result = infoBooks
    .map(book => {
      return `
      <li>
        <div data-id="${book._id}">
          <div class="card-book">
            <img class="books-card-img" src="${book.book_image}" alt="${book.title}" width="180" height="256" loading="lazy">
          </div>
          <div class="info-books">
            <h3 class="title-books">${book.title}</h3>
            <p class="name-author">${book.author}</p>
          </div>
        </div>
      </li>
    `;
    })
    .join('');

  return result;
}

checkingLocalStorage();
