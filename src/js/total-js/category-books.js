import axios from 'axios';
import { topBooks } from './listBooks';

const list = document.querySelector('.books-container');
const title = document.querySelector('.my_title_category');
async function fetchHits(category) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/category';
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category: category,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    markupCategoryList(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

const categoryBookscurrent = document.querySelector('.list-category-books');

function markupCategoryList(response) {
  let categoryName = '';
  response.forEach(category => {
    if (category.list_name !== categoryName) {
      categoryName = category.list_name;
      title.insertAdjacentHTML(
        'beforeend',
        `<h1 class="my_title">${category.list_name}</h1>`
      );
    }
    const titleCategory = `
      <div class="section-category-for-books">
        <div class="section-books">
          <li>
            <div data-id="${category._id}">
              <div class="card-book">
                <img class="books-card-img" src="${category.book_image}" alt="${category.title}" width="180" height="256" loading="lazy">
              </div>
              <div class="info-books">
                <h3 class="title-books">${category.title}</h3>
                <p class="name-author">${category.author}</p>
              </div>
            </div>
          </li>
        </div>
      </div>
    `;

    list.insertAdjacentHTML('beforeend', titleCategory);
  });
}

const listBookOneCategory = async event => {
  list.innerHTML = '';
  title.innerHTML = '';
  const target = event.target;
  if (target.tagName !== 'LI') {
    return;
  }

  const selectedCategory = target.textContent;

  await fetchHits(selectedCategory);

  const categoryListItems = document.querySelectorAll('.list__category');
  categoryListItems.forEach(item => {
    item.removeAttribute('selected');
  });

  target.setAttribute('selected', 'true');
};
const allcategory = document.querySelector('.all-category');

allcategory.addEventListener('click', topBooks);
categoryBookscurrent.addEventListener('click', listBookOneCategory);
