import { getCategoryList, getBooksCategory, getTopBooks } from './api-book'
import refs from './refs';



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
            renderTopBooks();
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

const renderTopBooks = async () => {
    let topBooks = await getTopBooks();
    topBooks = topBooks.map(type => {
        return { ...type, books: type.books.slice(0,5)};
    });
    refs.homeList.innerHTML = await markupTopBooksList(
    topBooks
    );  
};

function markupTopBooksList(data) {
    return  data.map((typeBooks) => {
            return `
                <li>
                <ul> 
                ${typeBooks.books
                .map(book => markupTopBook(book, typeBooks))
                .join('')}
                </ul>
                </li>`;
            })
            .join('')
}

function markupTopBook(book) {
    return `
        <li>
        <img
        class="img"
        src="${book.book_image ? book.book_image : ``}"
        alt="${book.title}"
        loading="lazy"
        />
        </li>`;
}

const showTypeBook = async type => {
    const typeBooksMore = await getBooksCategory(type);
    refs.homeBooksByType.innerHTML = markupTopBooksByType(
    typeBooksMore,
    type
    );
};

function markupTopBooksByType(data, typeBooks) {
    return `<ul >
            ${data.map(book => `<li >
            <img
            class="img"
            src="${book.book_image ? book.book_image : ``}"
            alt="${book.title}"
            loading="lazy"
            />
            </li>`
            )
            .join('')}
            </ul>`
};