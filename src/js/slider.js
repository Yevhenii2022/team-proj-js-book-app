/* --------------------------------- slider --------------------------------- */
const swiperOverflowContainerEl = document.querySelector('.swiper-container');
const logosContainerEl = document.querySelector('.logoContainer');
const logoItemEl = document.querySelector('.logo__item');
const btnDownEl = document.querySelector('.swiper-button-next');
const btnDownIconEl = document.querySelector('.swiper-button-next__icon');

let currentClick = 1;
const scrolledDistance = 100;

let numberOfClicks = Math.ceil(
  (logoItemEl.clientHeight * logosContainerEl.children.length +
    20 * (logosContainerEl.children.length - 1) -
    swiperOverflowContainerEl.clientHeight) /
    scrolledDistance
);

// console.log(numberOfClicks);
btnDownEl.addEventListener('click', onMoveDownClick);

function onMoveDownClick() {
  if (currentClick <= numberOfClicks) {
    if (currentClick === numberOfClicks) {
      btnDownIconEl.style.transform = 'rotate(180deg)';
    }

    logosContainerEl.style.transform = `translateY(${
      -scrolledDistance * currentClick
    }px)`;

    console.log(logosContainerEl.style.transform);
    ++currentClick;
  } else {
    currentClick = 1;
    logosContainerEl.style.transform = '';

    btnDownIconEl.style.transform = '';
  }
}
