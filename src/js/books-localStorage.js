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

// console.log(refs.modalPopEl);

function handleModalPopElClick() {
  console.log('ffffff');
  const activeBook = LsService.load('active-book');
  const watchedBtnRef = refs.modalPopEl.querySelector('.modal-info__button');
  console.log(watchedBtnRef);

  if (shoppingListArray.find(el => el.id === activeBook.id)) {
    const idx = shoppingListArray.findIndex(el => el.id === activeBook.id);
    shoppingListArray.splice(idx, 1);
    LsService.save('selected-books', shoppingListArray);
    Notiflix.Notify.warning('This book was removed from your Shopping list!');
    watchedBtnRef.textContent = 'add to shopping list';
    // removeBookFromList(activeBook.id);
    return;
  }

  shoppingListArray.push(activeBook);
  LsService.save('selected-books', shoppingListArray);
  Notiflix.Notify.success('This book was added to your Shopping list!');
  watchedBtnRef.textContent = 'remove from the shopping list';
  // addBookBackToList(activeBook.id);
}

function removeBookFromList(itemID) {
  if (isShoppingListPage) {
    const bookCard = document.querySelector(`[data-id="${itemID}"]`);

    bookCard.style.display = 'none';
  }
}

function addBookBackToList(itemID) {
  if (isLibraryPage) {
    const bookCard = document.querySelector(`[data-id="${itemID}"]`);

    bookCard.style.display = 'block';
  }
}

export function getLocalStorageData() {
  if (LsService.load('selected-books')) {
    shoppingListArray.push(...LsService.load('selected-books'));
  }
}
