import { getCategoryList, getBooksCategory } from './api-book'
import refs from './refs';
import {createTopBooksMarkup} from './home-cards';



 const renderCategories = async () => {
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
};

renderCategories();

function markupCategoriesList(categories) {
    return `<li class="category-item active" data-id="all-categories">
        All categories</li>
        ${categories.map(category => `<li class="category-item" data-id="${category.list_name}">
        ${category.list_name}
        </li>`)
        .join('')}`;
};

// const renderTopBooks = async () => {
//     let topBooks = await getTopBooks();
//     topBooks = topBooks.map(type => {
//         return { ...type, books: type.books.slice(0,5)};
//     });
//     refs.homeList.innerHTML = await markupTopBooksList(
//     topBooks
//     );  
// };

// function markupTopBooksList(data) {
//     return  data.map((typeBooks) => {
//             return `
//                 <li>
//                 <ul> 
//                 ${typeBooks.books
//                 .map(book => markupTopBook(book, typeBooks))
//                 .join('')}
//                 </ul>
//                 </li>`;
//             })
//             .join('')
// }

// function markupTopBook(book) {
//     return `
//         <li>
//         <img
//         class="img"
//         src="${book.book_image ? book.book_image : ``}"
//         alt="${book.title}"
//         loading="lazy"
//         />
//         </li>`;
// }

const showTypeBook = async type => {
    const typeBooksMore = await getBooksCategory(type);
    refs.homeContainer.classList.remove('container_active');
    refs.homeBooksByType.classList.add('container_active');
    refs.homeBooksByType.innerHTML = markupTopBooksByType(
    typeBooksMore,
    type
    );
};

function markupTopBooksByType(data, typeBooks) {
    return `
        <h3 class="books__main-title">${typeBooks.substring(
        0,
        typeBooks.lastIndexOf(' ')
        )}<span class="books__main-title-attribute"> ${typeBooks.split(' ').pop()}</span></h3>
        <ul class="books__card-container">
        ${data
            .map(
            book => `<li class="books__item">
            <a href="#" class="books__item-link">
            <div class="books__card">
            <img
                class="books__card-title-img"
                src="${book.book_image}"
                alt="${book.title}"
                width="180"
                height="256"
                loading="lazy"
                data-id='${book._id}'
            />
            <div class="books__overlay">
            <p class="books__overlay-text">Quick view</p>
            </div> 
            </div>
            <div class="books__descr">
            <h3 class="books__card-title">${cutBookTitle(book.title)}</h3>
            <p class="books__card-author">
            ${book.author}
            </p>
            </a>
            </li>`
           )
           .join('')}
         </ul>`
};


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