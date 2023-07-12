const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const modal = document.querySelector('.header-mobile-menu');
const body = document.querySelector('body');

let originalOverflow;

burgerMenuBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  burgerMenuBtn.classList.add('is-hidden-btn');
  closeMenuBtn.classList.remove('is-hidden-btn');
  originalOverflow = body.style.overflow;
  body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  burgerMenuBtn.classList.remove('is-hidden-btn');
  closeMenuBtn.classList.add('is-hidden-btn');
  body.style.overflow = originalOverflow;
});

function handleViewportChange() {
    if (window.innerWidth > 768) {
      modal.style.display = 'none';
      closeMenuBtn.classList.add('is-hidden-btn');
      burgerMenuBtn.classList.remove('is-hidden-btn');
    }
  }
  
  window.addEventListener('DOMContentLoaded', handleViewportChange);
  window.addEventListener('resize', handleViewportChange);