import NewApiService from './API';
const newApiService = new NewApiService();
function markapCategoryList(response) {
  const listCategoryBooks = document.querySelector('.list-category-books');
  response.forEach(e => {
    const listCategory = `
      <li>${e.list_name}</li>
    `;
    listCategoryBooks.insertAdjacentHTML('beforeend', listCategory);
  });
}
function markupCategoryList(response) {
  const list = document.querySelector('.books-container');
  response.forEach(category => {
    const titleCategory = `
      <div class="section-category-for-books">
        <h2 class="title-category-name">${category.list_name}</h2>
        <div class="section-books">
          ${category.books
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
            .join('')}
        </div>
        <button class="books-btn" type="button">see more</button>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', titleCategory);
  });
}
async function listForCategory() {
  try {
    const response = await newApiService.fetchCategoryBooks();
    markapCategoryList(response);
  } catch (error) {
    console.warn(error);
  }
}
async function topBooks() {
  try {
    const response = await newApiService.fetchTopFiveBooks();
    markupCategoryList(response);
  } catch (error) {
    console.warn(error);
  }
}
listForCategory();
topBooks();
