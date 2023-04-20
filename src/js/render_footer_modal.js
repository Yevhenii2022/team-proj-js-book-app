import Glide from '@glidejs/glide';
import { glideFooter, options } from './slider_glide';
import { onClickEscape, closeModal } from './modal_footer';

const refs = {
  footerModal: document.querySelector('.footer-modal'),
  openModalLink: document.querySelector('[data-footer-open]'),
  modal: document.querySelector('[data-modal-footer]'),
  backdrop: document.querySelector('.js-backdrop'),
  addBodyClass: document.querySelector('body'),
};
export function openModal(event) {
  event.preventDefault();
  refs.modal.classList.remove('is-hidden');
  refs.addBodyClass.classList.add('modal-open');
  document.addEventListener('keydown', onClickEscape);
  refs.footerModal.innerHTML = '';
  const markup = `<div class="glide_footer">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides--footer">
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/114651264?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Yevhenii Lytvynenko</h3>
          <p class="student__role">Team Lead</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Yevhenii2022"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle"
                >
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/114179657?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Tetiana Nivchyk</h3>
          <p class="student__role">Tech Lead</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/tet-n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/94064326?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Kirill Rustamov</h3>
          <p class="student__role">Scrum Master</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Fantom19?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle"
                >
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://kolesanencore.github.io/Oh-my-donats/sergey.0d51e22f.png" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Kolesan Sergey</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Kolesanencore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/115711913?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Alena Larina</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/AlenaLarinaAL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/107365766?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Tetiana Ustimevko</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/TetianaUstimevko"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/114925791?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Anastasiia Shmoilova</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Shmoilova-Anastasiia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/114256757?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Tetiana Pesotska</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/TayanaP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/78583045?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Fedor Dobrovolskiy</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Fdobrovols"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/113857063?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Olena Nikitchenko</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/olena-nikitchenko"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <div class="glide__arrows" data-glide-el="controls">
    <button
      style="padding: 10px; border: none; left: 10px"
      class="glide__arrow glide__arrow--left arrow__footer"
      data-glide-dir="<">&#5130;</button>
    <button
      style="padding: 10px; border: none; right: 10px"
      class="glide__arrow glide__arrow--right arrow__footer"
      data-glide-dir=">">&#5125;</button></div>
  <div class="close-container" data-footer-close>
    <div class="leftright"></div>
    <div class="rightleft"></div>
  </div>
</div>`;

  refs.footerModal.insertAdjacentHTML('beforeend', markup);

  // const slide = document.querySelector('.glide__slides--footer');
  const closeModalBtn = document.querySelector('[data-footer-close]');

  glideFooter.destroy();
  let glidFooter = new Glide('.glide_footer', options);
  glidFooter.mount();

  closeModalBtn.addEventListener('click', closeModal);
}
