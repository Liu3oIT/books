 export function showLoader() {
  const loaderOverlay = document.querySelector('.loader');

  loaderOverlay.classList.remove('hidden');


}
 export function hideLoader() {
  const loaderOverlay = document.querySelector('.loader');

  loaderOverlay.classList.add('hidden');


}