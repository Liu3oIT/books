import {fetchHits} from './category-books';

const loadMoreBtn = document.querySelectorAll(".books-btn");


loadMoreBtn.forEach((el) => {
  el.addEventListener("click", hendleOnClickLoadMore);
})


function createAllBookCategory (data) {

  const markup = data.map((book) => {

    `<div data-id=${book._id}>
        <div class="card-book">
        <img
          src="${book.book_image}"
          alt="${book.title}"
          class="books-card-img"
          width="180"
          height="256"
          loading="lazy"
        />
        </div> 
      <div class="info-books">
        <h3 class="title.books">${book.title}</h3>
        <p class="name-author">${book.author}</p>
      </div>
    </div>
    `

  }).join("");

  return markup;
}

async function createMarkupCategoryBook (element) {

  const data = await fetchHits(element);

  categoryListById.innerHTML = createAllBookCategory(data);

}


function hendleOnClickLoadMore (event) {
  const idBook = event.target.dataset.id;
  createMarkupCategoryBook(idBook);
}






