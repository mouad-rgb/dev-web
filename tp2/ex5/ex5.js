const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("display");
    intervalId = setInterval(next, 5000);
  }
}

function show(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("display");
  });
  slides[slideIndex].classList.add("display");
}

function next() {
  slideIndex++;
  show(slideIndex);
  clearInterval(intervalId);
  intervalId = setInterval(next, 7000);
}

function prev() {
  slideIndex--;
  show(slideIndex);
  clearInterval(intervalId);
}
