const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Tutup menu otomatis saat link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
