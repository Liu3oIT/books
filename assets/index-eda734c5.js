import{s as h,h as g,N as E,u as y,a as B,b as q,c as T,l as M,d as A}from"./backdrop-heart-c3928baa.js";const p=new E,x=document.querySelector(".my_title_category");function H(t){const o=document.querySelector(".list-category-books");t.forEach(e=>{const s=`
      <li class="list__category">${e.list_name}</li>
    `;o.insertAdjacentHTML("beforeend",s)})}function I(t){const o=document.querySelector(".books-container");let e=0;t.forEach(s=>{s.books.length!==e&&(e=s.books.length,x.insertAdjacentHTML("beforeend",`<h1 class="my_title">
      Best Sellers <span class="my_title_books">Books</span>
    </h1>`));const i=`
    <li  class="books-container-item">
      <div class="section-category-for-books">
        <h2 class="title-category-name">${s.list_name}</h2>
        <ul class="section-books">
          ${s.books.map(c=>`
                  <li data-id="${c._id}" class="section-books-item">
                    <div class="card-book">
                      <img class="books-card-img" src="${c.book_image}" alt="${c.title}" width="180" height="256" loading="lazy">
                      <div class="overflow-books">
                        <p class="overflow-books-text">quick view</p>
                      </div>
                    </div>
                    <div class="info-books">
                      <h3 class="title-books">${c.title}</h3>
                      <p class="name-author">${c.author}</p>
                    </div>
                  </li>
              `).join("")}
        </ul>
        <button class="books-btn" type="button" data-category="${s.list_name}">see more</button>
      </div>
    </li>
    `;o.insertAdjacentHTML("beforeend",i)})}async function N(){h();try{const t=await p.fetchCategoryBooks();H(t)}catch(t){console.warn(t)}finally{g()}}async function v(){h();try{const t=await p.fetchTopFiveBooks();I(t)}catch(t){console.warn(t)}finally{g()}}N();v();const a=document.querySelector("#book-modal"),j=document.querySelector(".books-container");document.querySelector(".category-books-list");const O=document.querySelector(".close-button"),z=document.querySelector(".modal__add-book-btn"),u=document.querySelector(".modal__remove-notification"),m=document.querySelector(".modal__add-notification"),k=document.querySelector(".modal__notification");let b=document.querySelector(".modal__content"),r=null,n=[];z.addEventListener("click",G);O.addEventListener("click",d);j.addEventListener("click",Y);function L(){!a.classList.contains("is-hidden")||(m.classList.remove("hidden"),u.classList.add("hidden"),k.classList.add("hidden"))}function F(){n.includes(r)?(k.classList.remove("hidden"),u.classList.remove("hidden"),m.classList.add("hidden")):(k.classList.add("hidden"),u.classList.add("hidden"),m.classList.remove("hidden"))}function R(t){return fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json())}function D(t){const o=`
    <div class="modal__img-container">
      <img src="${t.book_image}" alt="${t.title}" class="modal__img">
    </div>
    <div class="modal__desc">
      <h2 class="modal__title">${t.title}</h2>
      <p class="modal__author">${t.author}</p>
      <p class="modal__book-desc">${t.description}</p>
      <ul class="modal__list">
        <li class="modal__item"><a href="${t.buy_links[0].url}" class="amazon-link" target="_blank"><img class="store-link-img amazon-img" src="${B}" alt=""></a></li>
        <li class="modal__item"><a href="${t.buy_links[1].url}" class="app-book-link" target="_blank"><img class="store-link-img" src="${q}" alt=""></a></li>
        <li class="modal__item"><a href="${t.buy_links[3].url}" class="book-shop-link" target="_blank"><img class="store-link-img" src="${T}" alt=""></a></li>
      </ul>
    </div>
  `;b.innerHTML="",b.innerHTML=o}function J(t){R(t).then(o=>{D(o)})}function _(){n=JSON.parse(localStorage.getItem("shopping-list"))||[]}function U(){localStorage.setItem("shopping-list",JSON.stringify(n)),y()}function P(){localStorage.setItem("shopping-list",JSON.stringify(n)),y()}function d(t){t.code==="Escape"&&(a.removeEventListener("keydown",d),a.classList.add("is-hidden")),t.currentTarget===t.target&&a.classList.add("is-hidden"),t.target.classList.contains("popup-fade")&&a.classList.add("is-hidden"),t.target.classList.contains("modal__close-img")&&a.classList.add("is-hidden"),Q(),L()}function Y(t){if(!t.target.closest(".section-books-item"))return;const o=t.target,s=o.closest("[data-id]").dataset.id;if(window.addEventListener("keydown",d),a.addEventListener("click",d),a.addEventListener("keydown",d),o.classList.contains("books-btn"))return;r=s,J(s),a.classList.remove("is-hidden"),F(),Array.from(a.classList).includes("is-hidden")||K()}function G(t){if(k.classList.toggle("hidden"),u.classList.toggle("hidden"),m.classList.toggle("hidden"),_(),m.classList.contains("hidden")&&(n.includes(r)||(n.push(r),U())),u.classList.contains("hidden")){const o=n.indexOf(r);o!==-1&&(n.splice(o,1),P())}}L();_();const w=document.documentElement;function K(){w.style.overflow="hidden"}function Q(){w.style.overflow="auto"}function V(){const t=document.querySelector("#scroll-top");t.addEventListener("click",e),window.addEventListener("scroll",o);function o(){const s=window.scrollY,i=700;t.classList.toggle("js-scroll-up_hidden",s<i)}function e(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("load",()=>{window.scrollTo(0,0)})}V();const f=document.querySelector(".books-container"),S=document.querySelector(".my_title_category");async function $(t){h();const o="https://books-backend.p.goit.global/books/category";try{const e=await A.get(o,{params:{category:t}});if(e.status!==200)throw new Error(`Request failed with status ${e.status}`);return X(e.data),e.data}catch(e){throw new Error(`Request failed: ${e.message}`)}finally{g()}}const W=document.querySelector(".list-category-books");function X(t){let o="";t.forEach(e=>{e.list_name!==o&&(o=e.list_name,S.insertAdjacentHTML("beforeend",`<h1 class="my_title">${e.list_name}</h1>`));const s=`
    <li class="section-books-item">
      <div class="section-category-for-books">
        <div class="section-books">       
              <div  data-id="${e._id}">
                  <div class="card-book">
                  <img class="books-card-img" src="${e.book_image}" alt="${e.title}" width="180" height="256" loading="lazy">   
                    <div class="overflow-books">
                      <p class="overflow-books-text">quick view</p>
                    </div>          
                  </div>
                <div class="info-books">
                  <h3 class="title-books">${e.title}</h3>
                  <p class="name-author">${e.author}</p>
                </div>
              </div>
        </div>
      </div>
       </li>
    `;f.insertAdjacentHTML("beforeend",s)})}const Z=M.debounce(async t=>{f.innerHTML="",S.innerHTML="";const o=t.target;if(o.tagName!=="LI")return;const e=o.textContent;await $(e),document.querySelectorAll(".list__category").forEach(i=>{i.removeAttribute("selected")}),o.setAttribute("selected","true")},1e3),tt=async t=>{const o=t.target;if(o.tagName!=="BUTTON")return;const s=o.closest("[data-category]").dataset.category;try{const i=await et(s);ot(i,o),o.style.display="none"}catch(i){console.error("Error:",i)}};function ot(t,o){const s=t.splice(5),i=document.createElement("div");i.classList.add("new-books"),s.forEach(l=>{const C=`
      <li class="section-books-item">
        <div data-id="${l._id}">
          <div class="card-book">
            <img class="books-card-img" src="${l.book_image}" alt="${l.title}" width="180" height="256" loading="lazy">
            <div class="overflow-books">
              <p class="overflow-books-text">quick view</p>
            </div>
          </div>
          <div class="info-books">
            <h3 class="title-books">${l.title}</h3>
            <p class="name-author">${l.author}</p>
          </div>
        </div>
      </li>
    `;i.insertAdjacentHTML("beforeend",C)}),o.parentElement.insertBefore(i,o.nextElementSibling)}function et(t){return fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>o.json()).catch(o=>{throw console.error("Error:",o),o})}const st=document.querySelector(".all-category");st.addEventListener("click",v);W.addEventListener("click",Z);f.addEventListener("click",tt);const it=document.querySelectorAll(".books-btn"),at=document.querySelector(".books-container");it.forEach(t=>{t.addEventListener("click",lt)});function nt(t){const o=t.map(e=>`<li>
        <div class="card-book">
          <div data-id=${e._id}>
              <img
              src="${e.book_image}"
              alt="${e.title}"
              class="books-card-img"
              width="180"
              height="256"
              loading="lazy"
            />
            <div class="info-books">
            <h3 class="title.books">${e.title}</h3>
            <p class="name-author">${e.author}</p>
          </div>
       </div>
    </li>
    `).join("");at.innerHTML=o}async function ct(t){const o=await $(t);nt(o)}function lt(t){const o=t.target.dataset.id;ct(o)}
