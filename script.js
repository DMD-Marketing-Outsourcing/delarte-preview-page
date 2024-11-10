const navLinks = document.querySelector(".nav__links");
const hamburger = document.querySelector(".hamburger");

function toggleMobileNav() {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", toggleMobileNav);
});
