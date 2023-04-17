const refs = {
  //Header

  // Home
  categoriesSidebar: document.querySelector('.sidebar__categories'),
  homeBooksByType: document.querySelector('.home-typeBook'),
  homeBook: document.querySelector('.home-book'),
  cardContainerEl: document.querySelector('.books__container'),
  homeContainer: document.querySelector('.home__main-container'),
 
  //Shopping-list
  shoppingListEl: document.querySelector('.shopping__cards'),
  notificationContainerEl: document.querySelector('.shopping__storage'),
  shoppingHeadingEl: document.querySelector('.shopping__heading'),
  logoTrashPath: new URL('../images/icons.svg', import.meta.url),

  SHOP_LIST_KEY: 'selected-books',

  //Pop-up-modal
  listBookEl: document.querySelector('.books__container'),
  closeModalPopBtn: document.querySelector('[data-modal-close]'),
  modalPopEl: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),

  // Mobile - menu - modal

  // Authorization - modal

  //Pagination
  paginationEl: document.querySelector('#tui-pagination-container'),
  // Spinner/loader

  // Scroll up
  scrollBtnEl: document.querySelector('.btn-up'),
};

export default refs;
