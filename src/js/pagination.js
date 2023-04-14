import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const visiblePages = 3; 

function getPagination(totalItems, itemsPerPage){
    const paginationEl = document.querySelector('.pagination');

    const options = {
        totalItems: totalItems,
        itemsPerPage: itemsPerPage,
        visiblePages: visiblePages,
        centerAlign: true,
        firstItemClassName: 'pagination__first-item',
        lastItemClassName: 'pagination__last-item',
        prevButtonClassName: 'pagination__prev-btn',
        nextButtonClassName: 'pagination__next-btn',
        pageLinkClassName: 'pagination__page-link',
        activePageLinkClassName: 'pagination__page-link--active',
      };
    
    return new Pagination(paginationEl, options);
}

export { getPagination }



// const pageBtnFirst = document.querySelector('.pagination__first-item');
// pageBtnFirst.style.backgroundColor = "black";
// pageBtnFirst.style.width = "44px";
// pageBtnFirst.style.fontSize = "22px";
// pageBtnFirst.style.paddingTop = "11px";

// const nextBtn = document.querySelector('.pagination__next-btn');
// nextBtn.style.backgroundColor = "black";
// nextBtn.style.width = "44px";
// nextBtn.style.height = "44px";
// nextBtn.style.borderRadius = "50%";
// nextBtn.style.marginBottom = "40px";
// nextBtn.style.fontSize = "22px";
// nextBtn.style.paddingTop = "11px";


// const pageBtn = document.querySelector('.tui-page-btn');
// pageBtn.style.width = "44px";


// const options = {
//   totalItems: currentData.length,
//   itemsPerPage: 3,
//   visiblePages: 3,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };


// const pagination = new Pagination('.shopping__pagination', options);

// pagination.on('afterMove', () => {
//   const currentPage = pagination.getCurrentPage();
//   const currentData = data.slice((currentPage - 1) * options.itemsPerPage, currentPage * options.itemsPerPage);

//   renderShoppingList(currentData);
// });

 

