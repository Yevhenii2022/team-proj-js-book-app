const signupBtn = document.querySelector('[data-modal-open]'); // кнопка "Зарегистрироваться"
const signupModal = document.querySelector('[data-close-modal]'); // модальное окно регистрации
const closeBtn = signupModal.querySelector('[modal-close]'); // кнопка закрытия модального окна

const registrationFormWrapper = document.querySelector('.regisraion-wrapper'); // контейнер формы регистрации
const registrationLink = document.querySelector('.registration-link'); // ссылка на форму регистрации

const loginFormWrapper = document.querySelector('.login-form-wrapper'); // контейнер формы входа
const loginLink = document.querySelector('.login-link'); // ссылка на форму входа

// Функция для закрытия модального окна
export function closeModal() {
  const modal = document.querySelector('[data-close-modal]');
  modal.style.display = 'none';
}

// Обработчик клика на кнопку "Зарегистрироваться"
signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block'; // Показываем модальное окно регистрации
});

// Обработчик клика на кнопку закрытия модального окна
closeBtn.addEventListener('click', () => {
  signupModal.style.display = 'none'; // Скрываем модальное окно регистрации
});

// Обработчик клика на любой элемент вне модального окна
window.addEventListener('click', event => {
  if (event.target === signupModal) {
    signupModal.style.display = 'none'; // Скрываем модальное окно регистрации
  }
});

// Обработчик нажатия клавиши Escape для закрытия модального окна
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && signupModal.style.display === 'block') {
    signupModal.style.display = 'none'; // Скрываем модальное окно регистрации
  }
});

// Обработчик клика на ссылку на форму входа
loginLink.addEventListener('click', () => {
  loginFormWrapper.classList.remove('hidden'); // Показываем форму входа
  registrationFormWrapper.classList.add('hidden'); // Скрываем форму регистрации
  loginLink.classList.add('active'); // Добавляем класс "active" для ссылки на форму входа
  registrationLink.classList.remove('active'); // Убираем класс "active" для ссылки на форму регистрации
});

// Обработчик клика на ссылку на форму регистрации
registrationLink.addEventListener('click', () => {
  registrationFormWrapper.classList.remove('hidden'); // Показываем форму регистрации
  loginFormWrapper.classList.add('hidden'); // Скрываем форму входа
  registrationLink.classList.add('active'); // Добавляем класс "active" для ссылки на форму регистрации
  loginLink.classList.remove('active'); // Убираем класс "active" для ссылки на ссылки на форму входа
});
