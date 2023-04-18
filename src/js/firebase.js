// import { closeModal } from './modalSignUp';
import { Notify } from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDnbTZrtxRCm7S5kEYMz7d0ZvM5OmZwHj0',
  authDomain: 'books-project-js.firebaseapp.com',
  projectId: 'books-project-js',
  storageBucket: 'books-project-js.appspot.com',
  messagingSenderId: '372577717328',
  appId: '1:372577717328:web:14037313534e678b751555',
  databaseURL:
    'https://books-project-js-default-rtdb.europe-west1.firebasedatabase.app/',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const form = document.querySelector('.registration-form');
const nameInput = form.querySelector('.registration-form__input[type="text"]');
const emailInput = form.querySelector(
  '.registration-form__input[type="email"]'
);
const passwordInput = form.querySelector(
  '.registration-form__input[type="password"]'
);
const signUpButton = document.querySelector('.sign-up-btn__text');

function signUp() {
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      saveUserDataToLocalStorage(user);
      Notify.success('Вы успешно зарегистрировались!');
      closeModal();
      return signInWithEmailAndPassword(auth, email, password);
    })
    .then(() => {
      const user = auth.currentUser;
      console.log(user);
      return updateProfile(user, {
        displayName: name,
      });
    })
    .then(() => {
      const user = auth.currentUser;
      const userId = user.uid;
      const userRef = ref(database, 'users/' + userId);
      return set(userRef, {
        name: name,
        email: email,
        password: password,
      });
    })
    .then(() => {
      updateSignUpButton();
    })
    .catch(error => {
      console.error(error);
      const errorMessage = error.message;
      Notify.failure(`Произошла ошибка: ${errorMessage}`);
    });
}

// =======

function login() {
  const email = loginForm.querySelector('[data-login-email]').value;
  const password = loginForm.querySelector('[data-login-pass]').value;
  if (!password) {
    Notify.failure('Введите пароль');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));

      updateSignUpButton();
      Notify.success('Авторизация прошла успешно!');
      closeModal();
    })
    .catch(error => {
      console.error(error);
      const errorMessage = error.message;
      Notify.failure(`Произошла ошибка: ${errorMessage}`);
    });
}

function logout() {
  const user = auth.currentUser;
  if (user) {
    signOut(auth)
      .then(() => {
        signUpButton.textContent = 'Sign Up';
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        Notify.success('Вы успешно вышли из системы!');
        removeUserDataFromLocalStorage(user);
        document.querySelector('.log-out-btn').style.display = 'none'; // Скрываем кнопку log out при выходе пользователя
      })
      .catch(error => {
        console.error(error);
      });
  }
}

function updateSignUpButton() {
  const user = auth.currentUser;
  const userData = JSON.parse(localStorage.getItem('user'));
  if (user || userData) {
    const name = user?.displayName || userData?.displayName;
    signUpButton.textContent = name ?? 'Sign Up';
    document.querySelector('.log-out-btn').style.display = 'flex'; // Показываем кнопку log out, если пользователь авторизован
  } else {
    signUpButton.textContent = 'Sign Up';
    document.querySelector('.log-out-btn').style.display = 'none'; // Скрываем кнопку log out, если пользователь не авторизован
  }
}

function handleRegistrationFormSubmit(e) {
  e.preventDefault();
  signUp();
}

form.addEventListener('submit', handleRegistrationFormSubmit);
const loginForm = document.querySelector('.login-form');

function handleLoginFormSubmit(e) {
  e.preventDefault();
  login();
}

loginForm.addEventListener('submit', handleLoginFormSubmit);

const logoutBtn = document.querySelector('[data-log-out]');
logoutBtn.addEventListener('click', logout);

function saveUserDataToLocalStorage(user, name) {
  const userData = { ...user, displayName: name };
  localStorage.setItem('user', JSON.stringify(userData));
}

function removeUserDataFromLocalStorage() {
  localStorage.removeItem('user');
}

window.addEventListener('load', () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  if (userData) {
    const { email, password } = userData;
    if (password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateSignUpButton();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  updateSignUpButton();
});
