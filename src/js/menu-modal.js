console.log('hi');
const mobileMenu = document.querySelector('.menu-modal-wrapper');
const openMenuBtn = document.querySelector('.burger-meny-btn');
const closeMenuBtn = document.querySelector('.burger-meny-btn-close');

const toggleMenu = e => {
  mobileMenu.classList.toggle('is-open');
  openMenuBtn.classList.toggle('mobile-btn-close');
  closeMenuBtn.classList.toggle('mobile-btn-close');

  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
};

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
});

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
