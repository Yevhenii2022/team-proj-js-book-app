import refs from './refs';
import { getBooksId } from './api-book';
import Notiflix from 'notiflix';
import LsService from './storage-methods';
import defaultImage from '../images/shopping-list-empty-bg/shoping-list-empty-lg.png';
import amazonImage1 from '../images/shopping-list-shops/amazon-shop-1x.png';
import amazonImage2 from '../images/shopping-list-shops/amazon-shop-2x.png';
import appleImage1 from '../images/shopping-list-shops/apple-shop-1x.png';
import appleImage2 from '../images/shopping-list-shops/apple-shop-2x.png';
import bookshopImage1 from '../images/shopping-list-shops/bookshop-1x.png';
import bookshopImage2 from '../images/shopping-list-shops/bookshop-2x.png';
import bookshopImage2 from '../images/shopping-list-shops/bookshop-2x.png';

//OPEN/CLOSE MODAL VINDOW
refs.listBookEl.addEventListener('click', openModalPop);

function openModalPop(event) {
  event.preventDefault();

  if (!event.target.closest('.books__item-link')) return;

  refs.scrollBtnEl.classList.add('btn-up_hide');
  document.body.classList.add('no-scroll');

  const bookId = event.target
    .closest('.books__item-link')
    .getAttribute('data-id');

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

  refs.modalPopInfoEl.innerHTML = '';
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
    const book = await getBooksId(id);

    LsService.save('active-book', book);

    const { book_image, title, author, description, buy_links } = book;

    if (description === '') {
      refs.descriptionBookEl.innerHTML = 'there is no description of this book';
    } else {
      refs.descriptionBookEl.innerHTML = '';
    }

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
              }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
                <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="amazon" />
              </a>
            </li>
            <li>
              <a class="modal-info__link" href="${
                buy_links[1].url
              }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
                <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="apple-books" />
              </a>
            </li>
            <li>
              <a class="modal-info__link" href="${
                buy_links[4].url
              }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
                <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button class="modal-info__button" type="button">
      ${isActivBook ? 'remove from the shopping list' : 'add to shopping list'}
      </button>
     `;

    refs.modalPopEl.innerHTML = markup;

    const linksShops = document.querySelectorAll('.modal-info__link');
    onLinksClick(linksShops);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}

function onLinksClick(links) {
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(this.href);
    });
  }
}
