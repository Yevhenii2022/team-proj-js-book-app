import dataBooks from '../test-json-api/category.json';
import { getPagination, paginationEl } from './pagination';
import { save, load } from './local-storage';
import amazonImage1 from '../images/shopping-list-shops/amazon-shop-1x.png';
import amazonImage2 from '../images/shopping-list-shops/amazon-shop-2x.png';
import appleImage1 from '../images/shopping-list-shops/apple-shop-1x.png';
import appleImage2 from '../images/shopping-list-shops/apple-shop-2x.png';
import bookshopImage1 from '../images/shopping-list-shops/bookshop-1x.png';
import bookshopImage2 from '../images/shopping-list-shops/bookshop-2x.png';
import bookshopImage2 from '../images/shopping-list-shops/bookshop-2x.png';

const shoppingListEl = document.querySelector('.shopping__cards');
const notificationContainerEl = document.querySelector('.shopping__storage');
const shoppingHeadingEl = document.querySelector('.shopping__heading');
const logoTrashPath = new URL('../images/icons.svg', import.meta.url);

const SHOP_LIST_KEY = 'data';
save(SHOP_LIST_KEY, dataBooks);
let bookList = load(SHOP_LIST_KEY);

let currentPage = 1;
let itemsPerPage = 3;
let bookCount = bookList.length;

let pagination = getPagination(bookCount, itemsPerPage);
pagination.on('beforeMove', event => {
  currentPage = event.page;
  renderShoppingList(bookList, event.page);
});

renderShoppingList(bookList, currentPage);

function renderShoppingList(data, page = 1) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentData = data.slice(startIndex, endIndex);

  if (currentData.length) {
    removeEmptyNotificationContainer();
    const markup = currentData
      .map(
        ({
          _id,
          book_image,
          author,
          title,
          list_name,
          description,
          buy_links: [amazon, apple, , , bookshop],
        }) => {
          return `<li class="shopping__card" data-id="${_id}">
  <div class="shopping__block">
    <div>
      <div class="shopping__thumb">
        <img src="${book_image}" alt="" class="shopping__book-img" />
      </div>
      <p class="shopping__book-author">${author}</p>
    </div>
    <div class="shopping__wrap">
      <h2 class="shopping__title">${title}</h2>
      <p class="shopping__category">${cutNameCategory(list_name)}</p>
      <p class="shopping__book-description--tablet">${description}</p>
      <ul class="shopping__shops">
        <li class="shopping__shop">
          <a href="${
            amazon.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous" referrerpolicy="no-referrer">
            <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="${
            amazon.name
          }" class="shopping__shop-img" width="48" height="15"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            apple.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous" referrerpolicy="no-referrer">
            <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="${
            apple.name
          }" class="shopping__shop-img" width="28" height="27"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            bookshop.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous" referrerpolicy="no-referrer">
            <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="${
            bookshop.name
          }" class="shopping__shop-img" width="32" height="30"/>
          </a>
        </li>
      </ul>
      <div class="shopping__wrap-shops--tablet">
      <p class="shopping__book-author--tablet">${author}</p>
      <ul class="shopping__shops--tablet">
        <li class="shopping__shop">
          <a href="${
            amazon.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous" referrerpolicy="no-referrer">
            <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="${
            amazon.name
          }" class="shopping__shop-img" width="48" height="15"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            apple.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous" referrerpolicy="no-referrer">
            <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="${
            apple.name
          }" class="shopping__shop-img" width="28" height="27"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            bookshop.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous" referrerpolicy="no-referrer">
            <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="${
            bookshop.name
          }" class="shopping__shop-img" width="32" height="30"/>
          </a>
        </li>
      </ul>
      </div>
      </div>
  </div>
  <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list">
    <svg class="shopping__btn-icon" width="18" height="18">
      <use href="${logoTrashPath}#icon-trash"></use>
    </svg>
  </button>
  <p class="shopping__book-description">${description}</p>
</li>`;
        }
      )
      .join('');
    shoppingListEl.innerHTML = markup;
    shoppingListEl.addEventListener('click', onTrashClick);
  } else {
    pasteEmptyNotificationContainer();
  }
}

function pasteEmptyNotificationContainer() {
  shoppingListEl.innerHTML = '';
  notificationContainerEl.classList.add('empty-js');
  shoppingHeadingEl.style.marginBottom = '140px';
}

function removeEmptyNotificationContainer() {
  notificationContainerEl.classList.remove('empty-js');
  shoppingHeadingEl.style.marginBottom = '';
  removeEventListener('click', onTrashClick);
}

function cutNameCategory(name) {
  if (window.innerWidth <= 768) {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }
  return name;
}

function onTrashClick(e) {
  const target = e.target.closest('.shopping__btn');
  const page = pagination.getCurrentPage();

  if (!target) {
    return;
  }
  const liEl = target.closest('.shopping__btn').closest('.shopping__card');
  const seekedId = liEl.dataset.id.trim();
  let removedElIndex = [...shoppingListEl.childNodes].indexOf(liEl);

  const removedElIndexFromStorage = bookList.findIndex(
    item => item._id === seekedId
  );

  bookList.splice(removedElIndexFromStorage, 1);

  deleteCard(removedElIndex);

  save(SHOP_LIST_KEY, bookList);

  // renderShoppingList(bookList, page);
  bookCount = bookList.length;

  pagination.setTotalItems(bookCount);
  pagination.movePageTo(page);
 
  if (shoppingListEl.childNodes.length === 0) {
    pagination.movePageTo(currentPage - 1);

    if (!bookList.length) {
      paginationEl.style.display = 'none';
    }
  }
}

function deleteCard(index) {
  const number = shoppingListEl.children.length - 1;
  if (!number) {
    pasteEmptyNotificationContainer();
    return;
  }
  shoppingListEl.removeChild(shoppingListEl.childNodes[index]);
}
