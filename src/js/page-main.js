const hamburger = document.querySelector(".hamburger");
const navbar_ul = document.querySelector(".navbar-ul");
const closer = document.querySelector(".closer");
const navbar__button = document.querySelector(".navbar__button");
const form = document.querySelector(".header-form");
const form__close = document.querySelector(".form__close");

hamburger.addEventListener("click", () => {
  navbar_ul.classList.add("active");
  hamburger.classList.add("hidden");
  closer.classList.add("active");
  navbar__button.classList.add("active");
});

closer.addEventListener("click", () => {
  navbar_ul.classList.remove("active");
  hamburger.classList.remove("hidden");
  closer.classList.remove("active");
  navbar__button.classList.remove("active");
});

navbar__button.addEventListener("click", () => {
  navbar_ul.classList.remove("active");
  hamburger.classList.remove("hidden");
  closer.classList.remove("active");
  navbar__button.classList.remove("active");
  form.classList.remove("hidden");
});

form__close.addEventListener("click", () => {
  form.classList.add("hidden");
});
