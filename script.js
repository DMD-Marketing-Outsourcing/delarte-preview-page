const navLinks = document.querySelector(".nav__links");
const hamburger = document.querySelector(".hamburger");

function toggleMobileNav() {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", toggleMobileNav);
});

function loadMap() {
  const mapPlaceholder = document.getElementById("map-placeholder");
  mapPlaceholder.innerHTML = `
      <iframe
        src="https://maps.google.com/maps?&hl=en&q=Villa Del Arte, 34-100 Wadowice&t=&z=17&ie=UTF8&iwloc=B&output=embed"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        title="Mapa google maps z zaznaczoną lokalizacją naszego hotelu"
      ></iframe>
    `;
}
