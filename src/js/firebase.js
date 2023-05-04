import { closeModal } from './modalSignUp';
import refs from './refs';
import LsService from './storage-methods';

import { Notify } from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

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

// function login() {
//   const email = loginForm.querySelector('[data-login-email]').value;
//   const password = loginForm.querySelector('[data-login-pass]').value;
//   if (!password) {
//     Notify.failure('Введите пароль');
//     return;
//   }
//   signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       const user = auth.currentUser;
//       console.log(user);
//       localStorage.setItem('user', JSON.stringify(user));

//       updateSignUpButton();
//       Notify.success('Авторизация прошла успешно!');
//       closeModal();
//     })
//     .catch(error => {
//       console.error(error);
//       const errorMessage = error.message;
//       Notify.failure(`Произошла ошибка: ${errorMessage}`);
//     });
// }

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
      const userId = user.uid;
      const userRef = ref(database, 'users/' + userId);
      return get(userRef).then(snapshot => {
        const userData = snapshot.val();
        const shoppingListArray = userData.shoppingList || [];
        LsService.save(refs.SHOP_LIST_KEY, shoppingListArray);
      });
    })
    .then(() => {
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
    const shoppingListArray = LsService.load(refs.SHOP_LIST_KEY);
    const userData = {
      name: user.displayName,
      email: user.email,
      shoppingList: shoppingListArray,
    };

    signOut(auth)
      .then(() => {
        const userId = user.uid;
        const userRef = ref(database, 'users/' + userId);
        return set(userRef, userData);
      })
      .then(() => {
        signUpButton.textContent = 'Sign Up';
        mobileSignUpButton.textContent = 'Sign Up';
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        Notify.success('You have successfully logged out!');
        removeUserDataFromLocalStorage(user);
        LsService.remove(refs.SHOP_LIST_KEY);
        document.querySelector('.sign-up-btn').classList.remove('hidden');
        document.querySelector('.user__container').classList.add('hidden');
        document.querySelector('.mobile__logout').classList.add('hidden');
        document.querySelector('.mobile__thumb').classList.add('hidden');
        document.querySelector('.user-sign').classList.remove('show');
        document.querySelector('.user-sign').classList.add('hidden');
        document.querySelector('.signup-btn-mobile').classList.remove('hidden');
        document.querySelector('.log-out-btn').classList.add('hidden');
        document.querySelector('.log-out-btn').classList.remove('is-open');
        document.querySelector('.navigation').classList.add('hidden');

        location.replace('./index.html');
      })
      .catch(error => {
        console.error(error);
      });
  }
}

function updateSignUpButton() {
  const user = auth.currentUser;
  const userData = JSON.parse(localStorage.getItem('user'));
  const mobileThumb = document.querySelector('.mobile__thumb');

  if (user || userData) {
    const name = user?.displayName || userData?.displayName;

    document.querySelector('.user__name').textContent = name;
    document.querySelector('.user-signtext').textContent = name;

    mobileThumb.classList.remove('visually-hidden');
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
    document.querySelector('.log-out-btn').classList.add('hidden');
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
