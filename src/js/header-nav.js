
// const myButton = document.getElementById("my-button");
// const myDiv = document.getElementById("my-div");

// myButton.addEventListener("click", function() {
 //   myDiv.classList.add("is-active");;
// });

// let currentUrl = window.location.href;
// let links = document.querySelector('.navigation__link');
// for(let i = 0; i < links.length; i++) {
//   if(links[i].href === currentUrl) {
//     links[i].classList.add("is-active");
//   }
// }


// try{
// let el = document.querySelector('.navigation__link');
// var url = document.location.href;
// for(var i = 0; i < el.length; i++){
// if (url === el[i].href) {
// el[i].className += 'is-active';
// };
// };
// }catch(e){}

// const navBtn = document.querySelectorAll('.navigation__link');
// navBtn.forEach(itemBtn => {
//     itemBtn.addEventListener('click', event => {
//         console.log(event.target);
//       const activeBtn = document.querySelector('.navigation__link.is-active');
//       if (activeBtn) {
//         activeBtn.classList.remove('is-active');
//       }
//       event.target.classList.add('is-active');
      
//     });
//   });
  

const navBtn = document.querySelectorAll('.navigation__link');
const activeBtnIndex = localStorage.getItem('activeBtnIndex');

navBtn.forEach((itemBtn, index) => {
  itemBtn.addEventListener('click', event => {
    const activeBtn = document.querySelector('.navigation__link.is-active');
    if (activeBtn) {
      activeBtn.classList.remove('is-active');
    }
    event.target.classList.add('is-active');

    localStorage.setItem('activeBtnIndex', index);
  });

  
  if (activeBtnIndex && index === parseInt(activeBtnIndex)) {
    itemBtn.classList.add('is-active');
  }
});

// const navBtn = document.querySelectorAll('.navigation__link');
// const activeBtnKey = 'activeBtn';

// navBtn.forEach(itemBtn => {
//     itemBtn.addEventListener('click', event => {
//         const activeBtn = document.querySelector('.navigation__link.is-active');
//         if (activeBtn) {
//             activeBtn.classList.remove('is-active');
//         }
//         event.target.classList.add('is-active');
//         localStorage.setItem(activeBtnKey, event.target.dataset.nav);
//     });
// });

// const savedActiveBtn = localStorage.getItem(activeBtnKey);
// if (savedActiveBtn) {
//     const btnToActivate = document.querySelector(`.navigation__link[data-nav="${savedActiveBtn}"]`);
//     if (btnToActivate) {
//         btnToActivate.classList.add('is-active');
//     }
// }


// const navBtn = document.querySelectorAll('.navigation__link');
// const activeBtnIndex = localStorage.getItem('activeBtnIndex');

// navBtn.forEach((itemBtn, index) => {
//   itemBtn.setAttribute('data-index', index); 

//   itemBtn.addEventListener('click', event => {
//     const activeBtn = document.querySelector('.navigation__link.is-active');
//     if (activeBtn) {
//       activeBtn.classList.remove('is-active');
//     }
//     event.target.classList.add('is-active');

//     localStorage.setItem('activeBtnIndex', event.target.getAttribute('data-index'));
//   });

//   if (activeBtnIndex && index === parseInt(activeBtnIndex)) {
//     itemBtn.classList.add('is-active');
//   }
// });
