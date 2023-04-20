import LsService from './storage-methods';
import Notiflix from 'notiflix';
import refs from './refs';

const shoppingListArray = LsService.load(refs.SHOP_LIST_KEY);

refs.modalPopEl.addEventListener('click', event => {
  event.preventDefault();

  if (localStorage.getItem('user') === null) {
    if (event.target.classList.contains('modal-info__button')) {
      refs.modalPopInfoEl.innerHTML = 'PLEASE REGISTER TO ACCESS USER FEATURE';
      // refs.modalPopInfoEl.style.color = 'red';
      Notiflix.Notify.warning('YOU ARE NOT REGISTERED');
    }
  } else {
    if (event.target.classList.contains('modal-info__button')) {
      handleModalPopElClick();
    }
    if (event.target.textContent === 'remove from the shopping list') {
      refs.modalPopInfoEl.innerHTML =
        'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list.';
    }
    if (event.target.textContent === 'add to shopping list') {
      refs.modalPopInfoEl.innerHTML = '';
    }
  }
});

function handleModalPopElClick() {
  const activeBook = LsService.load('active-book');

  const watchedBtnRef = refs.modalPopEl.querySelector('.modal-info__button');

  if (shoppingListArray.find(el => el._id === activeBook._id)) {
    const idx = shoppingListArray.findIndex(el => el._id === activeBook._id);
    shoppingListArray.splice(idx, 1);
    LsService.save(refs.SHOP_LIST_KEY, shoppingListArray);
    Notiflix.Notify.warning('This book was removed from your Shopping list!');
    watchedBtnRef.textContent = 'add to shopping list';
    // LsService.remove('selected-books');
    return;
  }

  shoppingListArray.push(activeBook);
  LsService.save('selected-books', shoppingListArray);
  Notiflix.Notify.success('This book was added to your Shopping list!');
  watchedBtnRef.textContent = 'remove from the shopping list';
}
