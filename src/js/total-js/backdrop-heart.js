const heartBtn = document.querySelector(".footer_icon");
const backdropModal = document.querySelector(".backdrop-modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOurTeams = document.querySelector(".modal");

heartBtn.addEventListener("click", () => {
  backdropModal.style.display = "block";
})

modalCloseBtn.addEventListener("click", () => {
  // modalOurTeams.classList.add("scale-modal-btn");
  
  backdropModal.style.display = "none";
  
  // modalOurTeams.classList.remove("scale-modal-btn");
})



window.addEventListener("click", (event) => {
  if(event.target === backdropModal) {
    backdropModal.style.display = "none";
  }
})