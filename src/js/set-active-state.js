export function setActiveState(elements) {
  elements.forEach(item => {
    const href =
      item.getAttribute('href').match(/\/[a-z-]*.html/g) ??
      'team-proj-js-book-app/';

    if (window.location.href.includes(href)) {
      item.classList.add('is-activ');
    }
  });
}
