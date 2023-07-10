import supportUkraineList from './support-ukraine-list';

const supportUkraineListEl = document.querySelector('.support-list');
const downBtn = document.querySelector('.support-down-btn');

renderCharityBar(supportUkraineList);

const slider = tns({
  nav: false,
  container: '.my-slider.support-list',
  axis: 'vertical',
  speed: 400,
  controls: false,
  nextButton: '.support-down-btn',
  controlsContainer: false,
  rewind: true,
  mouseDrag: true,
  responsive: {
    375: {
      items: 4,
    },
    768: {
      items: 6,
    },
  },
});

downBtn.addEventListener('click', function () {
  slider.goTo('next');
});

function renderCharityBar(charityList) {
  const markup = charityList
    .map(
      item => `
  <li class="support-item">
    <a href="${item.url}" target="_blank">
      <img class="support-img" srcset="${item.img}" alt="${item.title}">
    </a>
  </li>
  `
    )
    .join('');

  supportUkraineListEl.insertAdjacentHTML('beforeend', markup);
}
