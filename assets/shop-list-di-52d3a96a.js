import{a as e,b as a,c,N as n}from"./header-mobile-menu-33912fbc.js";const r=new n;let h=localStorage.getItem("shopping-list");const p=JSON.parse(h),d=document.querySelector(".shop-list"),g=document.querySelector(".shop-div"),m=async t=>{for(const s of t){const o=await r.fetchBooksForId(s);Array.isArray(o)?o.forEach(l=>{i(l)}):i(o)}function i(s){g.innerHTML="";const o=`
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
        <li class="sh-soc-item"><a href="${s.buy_links[3].url}" class="book-shop-link" target="_blank"><img class="store-link-img" src="${c}" alt=""></a></li>
      </ul>
    </div>
  </div>
  <button class="sh-list-delete-btn" type="button">
                    <svg class="sh-list-delete-icon" width="18" height="18">
                    <use href="./img/icons.svg#icon-delet"></use>
                    </svg>
                  </button>
</li>`;d.insertAdjacentHTML("beforeend",o)}};m(p);document.querySelector(".modal__add-book-btn");const k=document.querySelector(".sh-list-delete-btn");console.log(k);
