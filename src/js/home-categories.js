import { getCategoryList, getBooksCategory } from './api-book';
import refs from './refs';
import { createTopBooksMarkup } from './home-cards';
import { spinerStart, spinerStop } from './loader';
import { cutBookTitle, cutBookAuthor } from './home-cards';
import Notiflix from 'notiflix';

export { showTypeBook, markupTopBooksByType };

const renderCategories = async () => {
  try {
    spinerStart();
    const category = await getCategoryList();
    refs.categoriesSidebar.innerHTML = await markupCategoriesList(category);
    const ListCategory = document.querySelectorAll('.category-item');
    ListCategory.forEach(itemCategory => {
      itemCategory.addEventListener('click', event => {
        const ActiveCategory = document.querySelector('.category-item.active');
        if (ActiveCategory) {
          ActiveCategory.classList.remove('active');
        }
        event.target.classList.add('active');

        if (event.target.dataset.id === 'all-categories') {
          createTopBooksMarkup();
        } else {
          showTypeBook(event.target.dataset.id);
        }
      });
    });
    spinerStop();
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
};

renderCategories();

function markupCategoriesList(categories) {
  return `<li class="category-item active" data-id="all-categories">
        All categories</li>
        ${categories
          .map(
            category => `<li class="category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`
          )
          .join('')}`;
}

const showTypeBook = async type => {
  spinerStart();

  const typeBooksMore = await getBooksCategory(type);
  refs.homeContainer.classList.remove('container_active');
  refs.homeBooksByType.classList.add('container_active');
  refs.homeBooksByType.innerHTML = markupTopBooksByType(typeBooksMore, type);

  spinerStop();
};

function markupTopBooksByType(data, typeBooks) {
  if (data.length > 0) {
    return `<h3 class="books__main-title">${typeBooks.substring(
      0,
      typeBooks.lastIndexOf(' ')
    )}<span class="books__main-title-attribute"> ${typeBooks
      .split(' ')
      .pop()}</span></h3>
        <ul class="books__card-container">
        ${data
          .map(
            book => `<li class="books__item">
            <a href="#" class="books__item-link"  data-id='${book._id}'>
            <div class="books__card">
            <img
                class="books__card-title-img"
                src="${book.book_image}"
                alt="${book.title}"
                width="180"
                height="256"
                loading="lazy"               
            />
            <div class="books__overlay">
            <p class="books__overlay-text">Quick view</p>
            </div> 
            </div>
            <div class="books__descr">
            <h3 class="books__card-title">${cutBookTitle(book.title)}</h3>
            <p class="books__card-author">
            ${cutBookAuthor(book.author)}
            </p>
            </a>
            </li>`
          )
          .join('')}
         </ul>`;
  } else {
    Notiflix.Notify.failure(`Not found`);
  }
}
