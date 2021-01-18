// DOM Elements
const header = document.getElementById("header");
const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");
const topNav = document.getElementsByClassName("top-nav");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("mySlides");

// ****** Click Events ******
// topnav active class listener
for (let i = 0; i < topNav.length; i++) {
  topNav[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Mobile Menu
mobileMenu.addEventListener("click", () => {
  if (nav.style.display === "block") nav.style.display = "none";
  else nav.style.display = "block";

  if (mobileMenu.classList.contains("fa-bars"))
    mobileMenu.classList.replace("fa-bars", "fa-times");
  else if (mobileMenu.classList.contains("fa-times")) {
    mobileMenu.classList.replace("fa-times", "fa-bars");
  }
});

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  // Hidding each slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // reset the active class from dot divs
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const nextSlide = () => {
  showSlides(slideIndex++);
};

const previousSlide = () => {
  showSlides(slideIndex--);
};

function currentSlide(n) {
  showSlides((slideIndex = n));
}

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function (e) {
    const n = dots[i].attributes.data.value;
    currentSlide(n);
  });
}

// ******** Scroll Event Listeners *******
window.onscroll = function () {
  headerOffset();
};

function headerOffset() {
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) header.classList.add("sticky");
  else header.classList.remove("sticky");
}
