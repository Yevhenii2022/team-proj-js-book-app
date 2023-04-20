export function setActiveState(elements) {
  elements.forEach((item, index) => {
    const href = item.getAttribute('href').match(/\/[a-z-]*.html/g);
    const windowHref = window.location.href.match(/team-proj-js-book-app\/$/g);
    const windowHrefAfterRegistration = window.location.href.match(
      /team-proj-js-book-app\/#$/g
    );
    const reg = window.location.href.match(/1234\/#$/g);
    if (
      window.location.href.includes(href) ||
      (window.location.href.includes(windowHref) && index === 0) ||
      (window.location.href.includes(windowHrefAfterRegistration) &&
        index === 0) ||
      (window.location.href.includes(reg) && index === 0)
    ) {
      item.classList.add('is-activ');
    }
  });
}
