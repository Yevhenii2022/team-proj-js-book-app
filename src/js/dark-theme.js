const themeSwitch = document.querySelector('.input');
const body = document.querySelector('body');
if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
  themeSwitch.checked = true;
}
themeSwitch.addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem('mode', 'dark');
    body.classList.add('dark-mode');
  } else {
    localStorage.setItem('mode', 'light');
    body.classList.remove('dark-mode');
  }
});