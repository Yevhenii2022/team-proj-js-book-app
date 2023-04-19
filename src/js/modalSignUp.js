const signupBtnsEl = document.querySelectorAll('[data-modal-open]'); // кнопка "Зарегистрироваться"
const signupModal = document.querySelector('[data-modal-show]'); // модальное окно регистрации
const closeBtn = signupModal.querySelector('[data-modal-close]'); // кнопка закрытия модального окна

const registrationFormWrapper = document.querySelector('.regisraion-wrapper'); // контейнер формы регистрации
const registrationLink = document.querySelector('.registration-link'); // ссылка на форму регистрации

const loginFormWrapper = document.querySelector('.login-form-wrapper'); // контейнер формы входа
const loginLink = document.querySelector('.login-link'); // ссылка на форму входа

// Функция для закрытия модального окна
export function closeModal() {
  signupModal.style.display = 'none';
  closeBtn.removeEventListener('click', closeModal);
  window.removeEventListener('click', outsideClick);
  document.removeEventListener('keydown', escapePress);
}

// Обработчик клика на кнопку "Зарегистрироваться"
signupBtnsEl.forEach(btn => {
  btn.addEventListener('click', onOpenModalSignClick);
});

function onOpenModalSignClick(e) {
  e.preventDefault();
  signupModal.style.display = 'block';
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);
  document.addEventListener('keydown', escapePress);
}

// Функция для обработки клика вне модального окна
function outsideClick(event) {
  if (event.target === signupModal) {
    closeModal();
  }
}

// Функция для обработки нажатия клавиши Escape
function escapePress(event) {
  if (event.key === 'Escape' && signupModal.style.display === 'block') {
    closeModal();
  }
  document.removeEventListener('keydown', escapePress);
}

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
