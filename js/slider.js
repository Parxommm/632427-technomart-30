
const next = document.querySelector(".slide__next");
const prev = document.querySelector(".slide__prev");
const dots = document.querySelectorAll(".slider__dot");
const slides = document.querySelectorAll(".slide");

let index = 0;

const currentSlide = n => {
  for(slide of slides) {
    slide.classList.remove("slide--current");
  }
  slides[n].classList.add("slide--current");
}

const currentDot = n => {
  for(dot of dots) {
    dot.classList.remove("slider__dot--current");
  }
  dots[n].classList.add("slider__dot--current");
}

const prepareCurrentSlide = ind => {
  currentSlide(ind);
  currentDot(ind);
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
