const slider = document.querySelector(".slider");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;
const slideInterval = 2500; // 3 detik per slide

function moveSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.style.transform = `translateX(-${
    (100 / totalSlides) * currentIndex
  }%)`;
  slider.style.transition = "transform 1s ease-in-out";
}

// jalankan tiap interval
setInterval(moveSlide, slideInterval);
