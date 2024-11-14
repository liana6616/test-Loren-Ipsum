const main = document.querySelector('.main');
const burger = document.querySelector('.header__button');
const list = document.querySelector('.header__nav-wrapper');
const logo = document.querySelector('.header__logo');
const btnText = document.querySelector('.header__button-text');

burger.addEventListener('click', () => {
  main.classList.toggle('active');
  btnText.classList.toggle('active');
  list.classList.toggle('active');
  burger.classList.toggle('active');
  logo.classList.toggle('active');
  overlay(true);
});

burger.addEventListener('click', () => {
  menu.classList.remove('header__nav-wrapper--closed');
  overlay(false);
});
