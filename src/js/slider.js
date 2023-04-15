/* --------------------------------- slider --------------------------------- */
const swiperOverflowContainerEl = document.querySelector('.swiper-container');
const logosContainerEl = document.querySelector('.logoContainer');
const logoItemEl = document.querySelector('.logo__item');
const btnDownEl = document.querySelector('.swiper-button-next');

let currentClick = 1;
const scrolledDistance = 100;

let numberOfClicks = Math.floor(
  (logoItemEl.clientHeight * logosContainerEl.children.length +
    20 * (logosContainerEl.children.length - 1)) /
    scrolledDistance
);

btnDownEl.addEventListener('click', onMoveDownClick);

function onMoveDownClick() {
  if (currentClick !== numberOfClicks) {
    logosContainerEl.style.transform = `translateY(${
      -scrolledDistance * currentClick
    }px)`;
    ++currentClick;
  } else {
    currentClick = 1;
    logosContainerEl.style.transform = '';
  }
}
