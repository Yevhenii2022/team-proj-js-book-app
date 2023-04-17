export function setActiveState(elements) {
  elements.forEach(item => {
    const href = item.getAttribute('href').match(/\/[a-z-]*.html/g);
    const windowHref = window.location.href.match(/team-proj-js-book-app\/$/g);
    if (
      window.location.href.includes(href) ||
      window.location.href.includes(windowHref)
    ) {
      item.classList.add('is-activ');
    }
  });
}
