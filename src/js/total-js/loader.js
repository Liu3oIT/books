 export function showLoader() {
  const loaderOverlay = document.querySelector('.loader');
  // loaderOverlay.style.display = 'block';
  loaderOverlay.classList.remove('hidden-x');


}
 export function hideLoader() {
  const loaderOverlay = document.querySelector('.loader');
  // loaderOverlay.style.display = 'none';
  loaderOverlay.classList.add('hidden-x');


}