import axios from 'axios';
import { topBooks } from './listBooks';

const list = document.querySelector('.books-container');
const title = document.querySelector('.my_title_category');

export async function fetchHits(category) {
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
    <li class="section-books-item">
      <div class="section-category-for-books">
        <div class="section-books">       
              <div  data-id="${category._id}">
                  <div class="card-book">
                  <img class="books-card-img" src="${category.book_image}" alt="${category.title}" width="180" height="256" loading="lazy">             
                </div>
                <div class="info-books">
                  <h3 class="title-books">${category.title}</h3>
                  <p class="name-author">${category.author}</p>
                </div>
              </div>
        </div>
      </div>
       </li>
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

const moreBooksFromCategory = async event => {
  const target = event.target;
  if (target.tagName !== 'BUTTON') {
    return;
  }
  const categoryBooks = target.closest('[data-category]');
  const titleCategory = categoryBooks.dataset.category;
  try {
    const res = await fetchCategory(titleCategory);
    markapForMoreBooks(res, target);
    target.style.display = 'none';
  } catch (error) {
    console.error('Error:', error);
  }
};

function markapForMoreBooks(res, target) {
  const startIndex = 5;
  const extractedItems = res.splice(startIndex);

  const booksContainer = document.createElement('div');
  booksContainer.classList.add('new-books');
  extractedItems.forEach(category => {
    const titleCategory = `
      <li>
        <div data-id="${category._id}">
          <div class="card-book">
            <img class="books-card-img" src="${category.book_image}" alt="${category.title}" width="180" height="256" loading="lazy">
            <div class="overflow-books">
              <p class="overflow-books-text">quick view</p>
            </div>
          </div>
          <div class="info-books">
            <h3 class="title-books">${category.title}</h3>
            <p class="name-author">${category.author}</p>
          </div>
        </div>
      </li>
    `;
    booksContainer.insertAdjacentHTML('beforeend', titleCategory);
  });

  const parentElement = target.parentElement;
  parentElement.insertBefore(booksContainer, target.nextElementSibling);
}

function fetchCategory(titleCategory) {
  return fetch(
    `https://books-backend.p.goit.global/books/category?category=${titleCategory}`
  )
    .then(res => res.json())
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

const allcategory = document.querySelector('.all-category');
allcategory.addEventListener('click', topBooks);
categoryBookscurrent.addEventListener('click', listBookOneCategory);
list.addEventListener('click', moreBooksFromCategory);
