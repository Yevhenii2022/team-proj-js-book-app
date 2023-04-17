import refs from './refs';
import { getBooksId } from './api-book';
import Notiflix from 'notiflix';
import LsService from './storage-methods';
import { spinerStart, spinerStop } from './loader';
import defaultImage from '../images/shopping-list-empty-bg/shoping-list-empty-lg.png';
import amazonImg from '../images/book-store-icon/amazon.png';
import appleImg from '../images/book-store-icon/apple-books.png';
import bookShopImg from '../images/book-store-icon/book-shop.png';

//Work of Modal-Pop
refs.listBookEl.addEventListener('click', openModalPop);

//OPEN/CLOSE MODAL VINDOW
function openModalPop(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  refs.scrollBtnEl.classList.add('btn-up_hide');
  document.body.classList.add('no-scroll');

  const ffffff = event.target;
  console.log(ffffff);
  const bookId = event.target.getAttribute('data-id');
  console.log(bookId);

  refs.backdrop.classList.remove('backdrop--is-hidden');
  refs.backdrop.addEventListener('click', handleBackdropClick);
  refs.closeModalPopBtn.addEventListener('click', closeModalPop);
  window.addEventListener('keydown', onEscKeyPress);

  renderBookById(bookId);
}

function closeModalPop() {
  document.body.classList.remove('no-scroll');
  refs.backdrop.classList.toggle('backdrop--is-hidden');

  refs.backdrop.removeEventListener('click', handleBackdropClick);
  refs.closeModalPopBtn.removeEventListener('click', closeModalPop);
  window.removeEventListener('keydown', onEscKeyPress);
  LsService.remove('active-book');

  const scrollParam = window.scrollY;
  const coords = document.documentElement.clientHeight;

  if (scrollParam > coords) {
    refs.scrollBtnEl.classList.remove('btn-up_hide');
  }
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

async function renderBookById(id) {
  refs.modalPopEl.innerHTML = '';

  try {
    spinerStart();
    const book = await getBooksId(id);
    console.log(book);
    console.log(book._id);
    LsService.save('active-book', book);

    const { book_image, title, author, description, buy_links } = book;

    const isActivBook = Boolean(
      LsService.load('selected-books')?.find(el => el._id === book._id)
    );

    const markup = `
      <div class="modal-info">
        <img class="modal-info__image" src="${book_image}" alt="${title}" />
        <div class="modal-info__box">
          <h2 class="modal-info__title">${title}</h2>
          <p class="modal-info__author">${author}</p>
          <p class="modal-info__text">${description}</p>
          <ul class="modal-info__list">
            <li>
              <a class="modal-info__link" href="${
                buy_links[0].url
              }" target="_blank">
                <img src="${amazonImg}" />
              </a>
            </li>
            <li>
              <a class="modal-info__link" href="${
                buy_links[1].url
              }" target="_blank">
                <img src="${appleImg}" alt="apple-books" />
              </a>
            </li>
            <li>
              <a class="modal-info__link" href="${
                buy_links[4].url
              }" target="_blank">
                <img src="${bookShopImg}" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button class="modal-info__button" type="button">
      ${
        isActivBook ? 'remove from the shopping list' : 'add to shopping list'
      }                 
      </button>`;
    refs.modalPopEl.innerHTML = markup;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  } finally {
    spinerStop();
  }
}
