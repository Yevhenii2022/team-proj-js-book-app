import LsService from './storage-methods';
import Notiflix from 'notiflix';
import refs from './refs';

// const isShoppingListPage = location.pathname.includes('shopping-list');

const shoppingListArray = [];

refs.modalPopEl.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('modal-info__button')) {
    handleModalPopElClick();
  }
});

function handleModalPopElClick() {
  console.log('click btn');
  const activeBook = LsService.load('active-book');

  const watchedBtnRef = refs.modalPopEl.querySelector('.modal-info__button');
  console.log(watchedBtnRef);
  LsService.remove('selected-books');

  if (shoppingListArray.find(el => el._id === activeBook._id)) {
    const idx = shoppingListArray.findIndex(el => el._id === activeBook._id);
    shoppingListArray.splice(idx, 1);
    LsService.save('selected-books', shoppingListArray);
    Notiflix.Notify.warning('This book was removed from your Shopping list!');
    watchedBtnRef.textContent = 'add to shopping list';
    LsService.remove('selected-books');
    return;
  }

  shoppingListArray.push(activeBook);
  LsService.save('selected-books', shoppingListArray);
  Notiflix.Notify.success('This book was added to your Shopping list!');
  watchedBtnRef.textContent = 'remove from the shopping list';
}
