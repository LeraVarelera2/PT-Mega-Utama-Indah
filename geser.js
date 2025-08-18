const items = document.querySelectorAll(".geser .item");
let activeIndex = 0;

function updateSlider() {
  items.forEach((item, index) => {
    item.classList.remove("active", "right");
    if (index === activeIndex) {
      item.classList.add("active");
    } else if (index === (activeIndex + 1) % items.length) {
      item.classList.add("right");
    }
  });
}

function geserKanan() {
  activeIndex = (activeIndex + 1) % items.length;
  updateSlider();
}

function geserKiri() {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  updateSlider();
}

// EVENT LISTENER untuk tombol panah
document.querySelector(".arrow.left").addEventListener("click", geserKiri);
document.querySelector(".arrow.right").addEventListener("click", geserKanan);

updateSlider(); // inisialisasi
