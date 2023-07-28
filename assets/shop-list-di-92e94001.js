import{a as p,b as d,c as h,u as g,N as k}from"./backdrop-heart-c3928baa.js";const m=new k,e=document.querySelector(".shop-list"),l=document.querySelector(".shop-background");console.log(l);const u=async s=>{for(const o of s){const t=await m.fetchBooksForId(o);Array.isArray(t)?t.forEach(i=>{a(i)}):a(t)}},a=s=>{l.style.display="none";const o=`
    <li class="shopping-list-item" data-id="${s._id}">
      <img class="sh-book-img" src="${s.book_image}" alt="Boook image" loading="lazy"></img>
      <div class="sh-wrap">
        <div class="sh-book-info-wrap">
          <h2 class="sh-book-title">${s.title}</h2>
          <p class="sh-book-category">${s.list_name}</p>
          <div class="div-text-container">
            <p class="sh-book-description">${s.description}</p>
          </div>
        </div>
        <div class="sh-book-info-link-wrap">
          <p class="sh-book-author">${s.author}</p>
          <ul class="shopping-links">
            <li class="sh-soc-item"><a href="${s.buy_links[0].url}" class="amazon-link" target="_blank"><img class="store-link-img amazon-store" src="${p}" alt=""></a></li>
            <li class="sh-soc-item"><a href="${s.buy_links[1].url}" class="app-book-link" target="_blank"><img class="store-link-img apple-store" src="${d}" alt=""></a></li>
            <li class="sh-soc-item"><a href="${s.buy_links[3].url}" class="book-shop-link" target="_blank"><img class="store-link-img book-shop" src="${h}" alt=""></a></li>
          </ul>
        </div>
      </div>
      <button class="sh-list-delete-btn" type="button">
        <svg class="sh-list-delete-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="-2 -2 24 24">
          <path d="M7.25 1.75h5.5m-11 2.75h16.5m-1.833 0-.643 9.643c-.097 1.446-.145 2.17-.457 2.718a2.75 2.75 0 0 1-1.19 1.114c-.569.275-1.293.275-2.743.275H8.616c-1.45 0-2.174 0-2.743-.275a2.75 2.75 0 0 1-1.19-1.114c-.312-.548-.36-1.272-.457-2.718L3.583 4.5m4.584 4.125v4.583m3.666-4.583v4.583" />
        </svg>
      </button>
    </li>`;e.insertAdjacentHTML("beforeend",o)},n=()=>{e.innerHTML="";const s=localStorage.getItem("shopping-list"),o=JSON.parse(s);o&&o.length>0&&u(o)},f=s=>{const o=localStorage.getItem("shopping-list"),i=JSON.parse(o).filter(r=>r!==s),c=JSON.stringify(i);localStorage.setItem("shopping-list",c),g(),i.length===0&&(l.style.display="block",n())},b=s=>{const o=s.target;if(!o.closest(".sh-list-delete-btn"))return;const t=o.closest("[data-id]"),i=t.dataset.id;f(i),t.remove()};e.addEventListener("click",b);n();
