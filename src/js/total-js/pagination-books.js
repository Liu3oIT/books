import {fetchHits} from './category-books';

async function getPosts () {
  const response = await fetch('https://books-backend.p.goit.global/books/top-books');
  const data = await response.json();
  return data;
}

async function mainBooks () {
  const postsData = await getPosts();
  let currenPage = 1;
  let rows = 10;

  function listPagesBooks (arrData, rowPerPage, page) {
    const postsEl = document.querySelector(".posts-shop-books");
    postsEl.innerHTML = "";
    page -= 1;

    const startEl = rowPerPage * page;
    const endEl = startEl + rowPerPage;
    const paginateData = arrData.slice(startEl, endEl);

    paginateData.forEach((el) => {

      const postEl = document.createElement("div");
      postEl.classList.add("posts");

      postEl.insertAdjacentHTML("beforeend", `<p>${el.list_name}</p>`);

      postsEl.appendChild(postEl);
    })
  }

  function paginationBooks (arrData, rowPerPage) {
    const paginationEl = document.querySelector(".pagination-shop-books");
    const pageCount = Math.ceil(arrData.length / rowPerPage);
    const ulElBooks = document.createElement("ul");
    ulElBooks.classList.add("pagination-list");

    for(let i = 0; i < pageCount; i += 1) {
      const liElBooks = listPaginationBtn(i + 1);
      ulElBooks.appendChild(liElBooks);
    }

    paginationEl.appendChild(ulElBooks);
  }

  function listPaginationBtn (page) {
    const liEl = document.createElement("li");
    liEl.classList.add("pagination-item");
    liEl.innerText = page;

    if(currenPage === page) {
      liEl.classList.add("pagination-item-active");
    }

    liEl.addEventListener("click", () => {
      currenPage = page;
      listPagesBooks(postsData, rows, currenPage);

      let currentItemLi = document.querySelector("li.pagination-item-active");
      currentItemLi.classList.remove("pagination-item-active");

      liEl.classList.add("pagination-item-active");
    })

    return liEl;
  }

  listPagesBooks(postsData, rows, currenPage);
  paginationBooks(postsData, rows);
}

mainBooks();