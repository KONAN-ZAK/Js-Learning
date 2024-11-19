'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const scrollFromLearnMore = document.querySelector('.btn--scroll-to');
const scrollToSection1 = document.querySelector('#section--1');

const navContainer = document.querySelector('.nav__links');
const navButtons = document.querySelectorAll('.nav__link');

const operation_conatiner = document.querySelector(
  '.operations__tab-container'
);
const tabs = document.querySelectorAll('.operations__tab');
const operationContent = document.querySelectorAll('.operations__content');

//__________________________________________
// <------- learn more button --------->

scrollFromLearnMore.addEventListener('click', e => {
  scrollToSection1.scrollIntoView({ behavior: 'smooth' });
});

// _______________________________________
// <------- Nav Bar buttons --------->
/** 
navButtons.forEach((element, i) => {
  element.addEventListener('click', e => {
    e.preventDefault();
    const address = element.getAttribute('href');
    document.querySelector(address).scrollIntoView({ behavior: 'smooth' });
  });
});
*/
//💎 what if we have 1000 of buttons, that is a problem to add eventListener to all of them
// more efficent
navContainer.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const address = e.target.getAttribute('href');
    document.querySelector(address).scrollIntoView({ behavior: 'smooth' });
  }
});

// _______________________________________
// <------- Operation Conatiner --------->

operation_conatiner.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // check if the value is null
  if (!clicked) {
    return;
  }

  //go to start view and add activation class for button
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //go to start view and add activation class for button
  operationContent.forEach(content => {
    content.classList.remove('operations__content--active');
  });

  const TheOperationNumber = clicked.dataset.tab;
  document
    .querySelector(`.operations__content--${TheOperationNumber}`)
    .classList.add('operations__content--active');
});


// _______________________________________
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
