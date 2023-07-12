import{N as C,a as B,b as E,c as q,d as T}from"./header-mobile-menu-33912fbc.js";function f(){document.querySelector(".loader").classList.remove("hidden")}function y(){document.querySelector(".loader").classList.add("hidden")}const b=new C,M=document.querySelector(".my_title_category");function A(t){const o=document.querySelector(".list-category-books");t.forEach(e=>{const s=`
      <li class="list__category">${e.list_name}</li>
    `;o.insertAdjacentHTML("beforeend",s)})}function O(t){const o=document.querySelector(".books-container");let e=0;t.forEach(s=>{s.books.length!==e&&(e=s.books.length,M.insertAdjacentHTML("beforeend",`<h1 class="my_title">
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
    `;o.insertAdjacentHTML("beforeend",i)})}async function H(){f();try{const t=await b.fetchCategoryBooks();A(t)}catch(t){console.warn(t)}finally{y()}}async function p(){f();try{const t=await b.fetchTopFiveBooks();O(t)}catch(t){console.warn(t)}finally{y()}}H();p();const a=document.querySelector("#book-modal"),I=document.querySelector(".books-container");document.querySelector(".category-books-list");const N=document.querySelector(".close-button"),j=document.querySelector(".modal__add-book-btn"),u=document.querySelector(".modal__remove-notification"),m=document.querySelector(".modal__add-notification"),k=document.querySelector(".modal__notification");let g=document.querySelector(".modal__content"),r=null,n=[];j.addEventListener("click",P);N.addEventListener("click",d);I.addEventListener("click",U);function v(){!a.classList.contains("is-hidden")||(m.classList.remove("hidden"),u.classList.add("hidden"),k.classList.add("hidden"))}function x(){n.includes(r)?(k.classList.remove("hidden"),u.classList.remove("hidden"),m.classList.add("hidden")):(k.classList.add("hidden"),u.classList.add("hidden"),m.classList.remove("hidden"))}function z(t){return fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>o.json())}function F(t){const o=`
    <div class="modal__img-container">
      <img src="${t.book_image}" alt="${t.title}" class="modal__img">
    </div>
    <div class="modal__desc">
      <h2 class="modal__title">${t.title}</h2>
      <p class="modal__author">${t.author}</p>
      <p class="modal__book-desc">${t.description}</p>
      <ul class="modal__list">
        <li class="modal__item"><a href="${t.buy_links[0].url}" class="amazon-link" target="_blank"><img class="store-link-img amazon-img" src="${B}" alt=""></a></li>
        <li class="modal__item"><a href="${t.buy_links[1].url}" class="app-book-link" target="_blank"><img class="store-link-img" src="${E}" alt=""></a></li>
        <li class="modal__item"><a href="${t.buy_links[3].url}" class="book-shop-link" target="_blank"><img class="store-link-img" src="${q}" alt=""></a></li>
      </ul>
    </div>
  `;g.innerHTML="",g.innerHTML=o}function R(t){z(t).then(o=>{F(o)})}function L(){n=JSON.parse(localStorage.getItem("shopping-list"))||[]}function D(){localStorage.setItem("shopping-list",JSON.stringify(n))}function J(){localStorage.setItem("shopping-list",JSON.stringify(n))}function d(t){t.code==="Escape"&&(a.removeEventListener("keydown",d),a.classList.add("is-hidden")),t.currentTarget===t.target&&a.classList.add("is-hidden"),t.target.classList.contains("popup-fade")&&a.classList.add("is-hidden"),t.target.classList.contains("modal__close-img")&&a.classList.add("is-hidden"),G(),v()}function U(t){if(!t.target.closest(".section-books-item"))return;const o=t.target,s=o.closest("[data-id]").dataset.id;if(window.addEventListener("keydown",d),a.addEventListener("click",d),a.addEventListener("keydown",d),o.classList.contains("books-btn"))return;r=s,R(s),a.classList.remove("is-hidden"),x(),Array.from(a.classList).includes("is-hidden")||Y()}function P(t){if(k.classList.toggle("hidden"),u.classList.toggle("hidden"),m.classList.toggle("hidden"),L(),m.classList.contains("hidden")&&(n.includes(r)||(n.push(r),D())),u.classList.contains("hidden")){const o=n.indexOf(r);o!==-1&&(n.splice(o,1),J())}}v();L();const _=document.documentElement;function Y(){_.style.overflow="hidden"}function G(){_.style.overflow="auto"}function K(){const t=document.querySelector("#scroll-top");t.addEventListener("click",e),window.addEventListener("scroll",o);function o(){const s=window.scrollY,i=700;t.classList.toggle("js-scroll-up_hidden",s<i)}function e(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("load",()=>{window.scrollTo(0,0)})}K();const h=document.querySelector(".books-container"),w=document.querySelector(".my_title_category");async function S(t){const o="https://books-backend.p.goit.global/books/category";try{const e=await T.get(o,{params:{category:t}});if(e.status!==200)throw new Error(`Request failed with status ${e.status}`);return V(e.data),e.data}catch(e){throw new Error(`Request failed: ${e.message}`)}}const Q=document.querySelector(".list-category-books");function V(t){let o="";t.forEach(e=>{e.list_name!==o&&(o=e.list_name,w.insertAdjacentHTML("beforeend",`<h1 class="my_title">${e.list_name}</h1>`));const s=`
      <div class="section-category-for-books">
        <div class="section-books">       
          <li>
              <div  data-id="${e._id}">
                  <div class="card-book">
                  <img class="books-card-img" src="${e.book_image}" alt="${e.title}" width="180" height="256" loading="lazy">             
                </div>
                <div class="info-books">
                  <h3 class="title-books">${e.title}</h3>
                  <p class="name-author">${e.author}</p>
                </div>
              </div>
          </li>
        </div>
      </div>
    `;h.insertAdjacentHTML("beforeend",s)})}const W=async t=>{h.innerHTML="",w.innerHTML="";const o=t.target;if(o.tagName!=="LI")return;const e=o.textContent;await S(e),document.querySelectorAll(".list__category").forEach(i=>{i.removeAttribute("selected")}),o.setAttribute("selected","true")},X=async t=>{const o=t.target;if(o.tagName!=="BUTTON")return;const s=o.closest("[data-category]").dataset.category;try{const i=await tt(s);Z(i,o),o.style.display="none"}catch(i){console.error("Error:",i)}};function Z(t,o){const s=t.splice(5),i=document.createElement("div");i.classList.add("new-books"),s.forEach(l=>{const $=`
      <li>
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
    `;i.insertAdjacentHTML("beforeend",$)}),o.parentElement.insertBefore(i,o.nextElementSibling)}function tt(t){return fetch(`https://books-backend.p.goit.global/books/category?category=${t}`).then(o=>o.json()).catch(o=>{throw console.error("Error:",o),o})}const ot=document.querySelector(".all-category");ot.addEventListener("click",p);Q.addEventListener("click",W);h.addEventListener("click",X);const et=document.querySelectorAll(".books-btn"),st=document.querySelector(".books-container");et.forEach(t=>{t.addEventListener("click",nt)});function it(t){const o=t.map(e=>`<li>
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
    `).join("");st.innerHTML=o}async function at(t){const o=await S(t);it(o)}function nt(t){const o=t.target.dataset.id;at(o)}
