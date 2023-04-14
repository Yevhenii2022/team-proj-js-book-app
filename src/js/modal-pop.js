import refs from './refs';
import { getBooksId } from './api-book';
import Notiflix from 'notiflix';
import defaultImage from '../images/shopping-list-empty-bg/shoping-list-empty-lg.png';

// Здійснення відкриття модального вікна
let bookForRendering;

const shoppingListArray = [];
// const queueArray = [];

const savedDataShoppingList = localStorage.getItem('shoppingList');
const parsedDataShoppingList = JSON.parse(savedDataShoppingList);
if (parsedDataShoppingList) {
  for (const array of parsedDataShoppingList) {
    shoppingListArray.push(array);
  }
}

// Work of Modal-Pop
refs.backdrop.addEventListener('click', handleBackdropClick);
// refs.openModalPopBtn.addEventListener('click', openModalPop);
refs.closeModalPopBtn.addEventListener('click', closeModalPop);

// OPEN/CLOSE MODAL VINDOW
// async function openModalPop(event) {
//   // refs.scrollBtn????.classList.remove('btn__scroll--show');
//   // await showBookDetails(event);
//   window.addEventListener('keydown', onEscKeyPress);
// }

function closeModalPop() {
  document.body.classList.toggle('no-scroll');
  refs.modalPop.classList.toggle('backdrop--is-hidden');

  // const scrollParam = window.scrollY;
  // const coords = document.documentElement.clientHeight;

  // if (scrollParam > coords) {
  //   refs.scrollBtn????.classList.add('btn__scroll--show');
  // }

  // window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModalPop();
  }
}

function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModalPop();
  }
}
