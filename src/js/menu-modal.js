import refs from './refs';
import { setActiveState } from './set-active-state';

setActiveState(refs.mobileNavLinksEl);
const toggleMenu = () => {
  refs.bodyEl.classList.toggle('no-scroll-menu');
  refs.mobileMenuEl.classList.toggle('is-open');
  refs.openMenuBtnEl.classList.toggle('mobile-btn-close');
  refs.closeMenuBtnEl.classList.toggle('mobile-btn-close');

  const isMenuOpen =
    refs.openMenuBtnEl.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtnEl.setAttribute('aria-expanded', !isMenuOpen);
};

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.mobileMenuEl.classList.remove('is-open');
  refs.openMenuBtnEl.setAttribute('aria-expanded', false);
  refs.openMenuBtnEl.classList.remove('mobile-btn-close');
  refs.closeMenuBtnEl.classList.add('mobile-btn-close');
});

refs.openMenuBtnEl.addEventListener('click', toggleMenu);
refs.closeMenuBtnEl.addEventListener('click', toggleMenu);
