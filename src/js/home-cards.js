import { getTopBooks } from './api-book';
import refs from './refs';
// import booksCardTpl from '../templates/gallery-card.hbs';

export { createTopBooksMarkup };
let currentRenderWidth = 375;

addEventListener('resize', event => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
    (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    location.reload();
  }
});

currentRenderWidth = window.innerWidth;
let amountRenderedBooks = 1;
if (currentRenderWidth < 768) {
  amountRenderedBooks = 1;
} else if (currentRenderWidth > 767 && currentRenderWidth < 1440) {
  amountRenderedBooks = 3;
} else {
  amountRenderedBooks = 5;
}
console.log(amountRenderedBooks);
const createTopBooksMarkup = async () => {
  let markup = await getTopBooks();
  markup = markup.map(el => {
    return { ...el, books: el.books };
  });
  refs.homeBooksByType.classList.remove('container_active');
  refs.homeContainer.classList.add('container_active');
  refs.cardContainerEl.innerHTML = await booksCardTemplate(markup);
};

createTopBooksMarkup();

function booksCardTemplate(data) {
  return data
    .map(elements => {
      return `
        <li class="books__list">
  <h3 class="books__list-title">${elements.list_name}</h3>
  <ul class="books__card-container"> ${elements.books
          .map(book => {
            return `
    <li class="books__item">
      <a href="#" class="books__item-link">
      <div class="books__card">
        <img
          src="${book.book_image}"
          alt="${book.title}"
          class="books__card-title-img"
          width="180"
          height="256"
          data-id='${book._id}'
        />
        <div class="books__overlay">
          <p class="books__overlay-text">quick view</p>
        </div>
       </div> 
        <div class="books__descr">
          <h3 class="books__card-title">${cutBookTitle(book.title)}</h3>
          <p class="books__card-author">${book.author}</p>
        </div>
     </a>
    </li>`;
          })
          .slice(0, amountRenderedBooks)
          .join('')}
  </ul>
  <button class="books__btn" type="button">see more</button>
</li>`;
    })
    .join('');
}


function cutBookTitle(title) {
  if (window.innerWidth <= 767 && title.length >= 27)
    return title
      .substring(0, 27)
      .toUpperCase()
      .replace(/\s[A-Z]*$/g, '...');

  if (window.innerWidth > 767 && title.length >= 19)
    return title
      .substring(0, 19)
      .toUpperCase()
      .replace(/\s[A-Z]*$/g, '...');

  return title;
}
