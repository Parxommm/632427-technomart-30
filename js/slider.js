// Не совсем правильно, но просто для себя
// попробовал сделать таким способом

const btn1 = document.querySelector(".slider-control__btn--1");
const btn2 = document.querySelector(".slider-control__btn--2");
const slideHammer = document.querySelector(".slide--hammer");
const slideDrill = document.querySelector(".slide--drill");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideHammer.classList.toggle("slide-current");
  slideDrill.classList.toggle("slide-current");
  btn1.classList.toggle("slider-control__btn--current");
  btn2.classList.toggle("slider-control__btn--current");
});

btn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideHammer.classList.toggle("slide-current");
  slideDrill.classList.toggle("slide-current");
  btn1.classList.toggle("slider-control__btn--current");
  btn2.classList.toggle("slider-control__btn--current");
});
