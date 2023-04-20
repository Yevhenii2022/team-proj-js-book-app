import { closeModal } from './modalSignUp';
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
const mobileSignUpButton = document.querySelector('.signup-btn__text'); //mobile btn

function signUp() {
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      saveUserDataToLocalStorage(user);
      Notify.success('YOU HAVE SUCCESSFULLY REGISTERED!');
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
      Notify.failure(`An error has occurred: ${errorMessage}`);
    });
}

function login() {
  const email = loginForm.querySelector('[data-login-email]').value;
  const password = loginForm.querySelector('[data-login-pass]').value;
  if (!password) {
    Notify.failure('ENTER PASSWORD');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const user = auth.currentUser;
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));

      updateSignUpButton();
      Notify.success('Authorization was successful!');
      closeModal();
    })
    .catch(error => {
      console.error(error);
      const errorMessage = error.message;
      Notify.failure(`An error has occurred: ${errorMessage}`);
    });
}

function logout() {
  const user = auth.currentUser;
  if (user) {
    signOut(auth)
      .then(() => {
        signUpButton.textContent = 'Sign Up';
        mobileSignUpButton.textContent = 'Sign Up';
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        Notify.success('You have successfully logged out!');
        removeUserDataFromLocalStorage(user);
        // document.querySelector('.log-out-btn').style.display = 'none'; // Скрываем кнопку log out при выходе пользователя
        // document.querySelector('.mobile__logout').style.display = 'none'; // Скрываем кнопку 2 ую log out при выходе пользователя
        // document.querySelector('.mobile__thumb').style.display = 'none';
        // document.querySelector('.user__container').style.display = 'none';
        // document.querySelector('.signup-btn-mobile').style.display = 'flex';
        // document.querySelector('.user-sign').style.display = 'none';
        // document.querySelector('.sign-up-btn').style.display = 'none';
        document.querySelector('.sign-up-btn').classList.remove('hidden');
        document.querySelector('.user__container').classList.add('hidden');
        document.querySelector('.mobile__logout').classList.add('hidden');
        document.querySelector('.mobile__thumb').classList.add('hidden');
        document.querySelector('.user-sign').classList.remove('show');
        document.querySelector('.user-sign').classList.add('hidden');
        document.querySelector('.signup-btn-mobile').classList.remove('hidden');
        document.querySelector('.log-out-btn').classList.add('hidden');
        document.querySelector('.log-out-btn').style.display = 'none';
        document.querySelector('.navigation').classList.add('hidden');
      })
      .catch(error => {
        console.error(error);
      });
  }
}
// mobile__home-item > mobile__shoplist
function updateSignUpButton() {
  const user = auth.currentUser;
  const userData = JSON.parse(localStorage.getItem('user'));
  const mobileThumb = document.querySelector('.mobile__thumb');

  // const mobileSignUpBtn = document.querySelector('.signup-btn-mobile');
  // const descSignUpBtn = document.querySelector('.sign-up-btn');
  // const descUserContEl = document.querySelector('.user-sign');
  // const mobUserConEl = document.querySelector('.user__container');
  // const descLogOutEl = document.querySelector('.log-out-btn');
  // const mobLogOutEl = document.querySelector('.mobile__logout');
  // const navigationDescEl = document.querySelector('.navigation');
  if (user || userData) {
    const name = user?.displayName || userData?.displayName;

    document.querySelector('.user__name').textContent = name;
    document.querySelector('.user-signtext').textContent = name;

    mobileThumb.classList.remove('visually-hidden'); // Показываем элемент с классом "mobile__thumb", если пользователь авторизован
    if (name) {
      document.querySelector('.sign-up-btn').classList.add('hidden');
      document.querySelector('.user-sign').classList.add('show');
      document.querySelector('.signup-btn-mobile').classList.add('hidden');
      document.querySelector('.user__container').classList.remove('hidden');
      document.querySelector('.mobile__logout').classList.remove('hidden');
      document.querySelector('.mobile__thumb').classList.remove('hidden');
      document.querySelector('.log-out-btn').classList.remove('hidden');
      document.querySelector('.navigation').classList.remove('hidden');
    } else {
      document.querySelector('.log-out-btn').classList.add('hidden');
      document.querySelector('.navigation').classList.add('hidden');
    }
  } else {
    document.querySelector('.log-out-btn').classList.add('hidden');
    document.querySelector('.user-sign').classList.remove('show');
    document.querySelector('.user-sign').classList.add('hidden');
    document.querySelector('.user__container').classList.add('hidden');
    document.querySelector('.mobile__logout').classList.add('hidden');
    document.querySelector('.mobile__thumb').classList.add('hidden');
    document.querySelector('.sign-up-btn').classList.remove('hidden');
    document.querySelector('.navigation').classList.add('hidden');
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

const mobileLogoutBtn = document.querySelector('.mobile__logout');
mobileLogoutBtn.addEventListener('click', logout);

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
