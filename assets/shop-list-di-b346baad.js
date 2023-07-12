import{a as e,b as a,c as n,N as c}from"./header-mobile-menu-bef24127.js";const r=new c;let h=localStorage.getItem("shopping-list");const p=JSON.parse(h),d=document.querySelector(".shop-list"),m=document.querySelector(".shop-background"),k=async t=>{for(const s of t){const o=await r.fetchBooksForId(s);Array.isArray(o)?o.forEach(l=>{i(l)}):i(o)}function i(s){m.innerHTML="";const o=`
      <li id="${s._id}" class="shopping-list-item">
  <img
    class="sh-book-img"
    src="${s.book_image}"
    alt="Boook image"
    loading="lazy"
  ></img>
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
        <li class="sh-soc-item"><a href="${s.buy_links[0].url}" class="amazon-link" target="_blank"><img class="store-link-img amazon-img" src="${e}" alt=""></a></li>
        <li class="sh-soc-item"><a href="${s.buy_links[1].url}" class="app-book-link" target="_blank"><img class="store-link-img" src="${a}" alt=""></a></li>
        <li class="sh-soc-item"><a href="${s.buy_links[3].url}" class="book-shop-link" target="_blank"><img class="store-link-img" src="${n}" alt=""></a></li>
      </ul>
    </div>
  </div>
  <button class="sh-list-delete-btn" type="button">
                   
                   <svg class="sh-list-delete-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.25 1.75h5.5m-11 2.75h16.5m-1.833 0-.643 9.643c-.097 1.446-.145 2.17-.457 2.718a2.75 2.75 0 0 1-1.19 1.114c-.569.275-1.293.275-2.743.275H8.616c-1.45 0-2.174 0-2.743-.275a2.75 2.75 0 0 1-1.19-1.114c-.312-.548-.36-1.272-.457-2.718L3.583 4.5m4.584 4.125v4.583m3.666-4.583v4.583"/></svg>
                    
                  </button>
</li>`;d.insertAdjacentHTML("beforeend",o)}};k(p);document.querySelector(".modal__add-book-btn");const g=document.querySelector(".sh-list-delete-btn");console.log(g);
