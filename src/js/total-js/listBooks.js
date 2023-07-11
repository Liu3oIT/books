import NewApiService from './API';
const newApiService = new NewApiService();
const title = document.querySelector('.my_title_category');
function markapCategoryList(response) {
  const listCategoryBooks = document.querySelector('.list-category-books');
  response.forEach(e => {
    const listCategory = `
      <li class="list__category">${e.list_name}</li>
    `;
    listCategoryBooks.insertAdjacentHTML('beforeend', listCategory);
  });
}
export function markupOneCategoryList(response) {
  const list = document.querySelector('.books-container');
  let categoryName = 0;

  response.forEach(category => {
    if (category.books.length !== categoryName) {
      categoryName = category.books.length;
      title.insertAdjacentHTML(
        'beforeend',
        `<h1 class="my_title">
      Best Sellers <span class="my_title_books">Books</span>
    </h1>`
      );
    }

    const titleCategory = `
    <li>
      <div class="section-category-for-books">
        <h2 class="title-category-name">${category.list_name}</h2>
        <div class="section-books">
          ${category.books
            .map(book => {
              return `
                
                  <div data-id="${book._id}">
                    <div class="card-book">
                      <img class="books-card-img" src="${book.book_image}" alt="${book.title}" width="180" height="256" loading="lazy">
                    </div>
                    <div class="info-books">
                      <h3 class="title-books">${book.title}</h3>
                      <p class="name-author">${book.author}</p>
                    </div>
                  </div>
                
              `;
            })
            .join('')}
        </div>
        <button class="books-btn" type="button">see more</button>
      </div>
      </li>
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
export async function topBooks() {
  try {
    const response = await newApiService.fetchTopFiveBooks();
    console.log(response);
    markupOneCategoryList(response);
  } catch (error) {
    console.warn(error);
  }
}
listForCategory();
topBooks();
