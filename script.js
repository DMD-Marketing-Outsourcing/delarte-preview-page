document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav__links");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });
});
