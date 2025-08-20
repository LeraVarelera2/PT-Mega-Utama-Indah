// WA Modal
const waModal = document.getElementById("waModal");
const waClose = document.querySelector(".wa-close");

// buka modal saat klik Phone Number
document.querySelector(".contact-item.phone").addEventListener("click", () => {
  waModal.style.display = "flex";
});

// tutup modal
waClose.onclick = () => {
  waModal.style.display = "none";
};

// tutup jika klik di luar modal
window.onclick = (e) => {
  if (e.target === waModal) {
    waModal.style.display = "none";
  }
};

// Email Modal
// ===== EMAIL MODAL =====
const emailModal = document.getElementById("emailModal");
const emailIcon = document.getElementById("emailIcon");
const emailTrigger = document.getElementById("emailTrigger"); // <strong>Email</strong>
const emailTriggerText = document.getElementById("emailTriggerText"); // teks alamat
const closeEmail = document.querySelector(".email-close");

const openEmail = () => {
  emailModal.style.display = "flex";
};

const closeEmailModal = () => {
  emailModal.style.display = "none";
};

// bikin semua area bisa klik
[emailIcon, emailTrigger, emailTriggerText].forEach((el) => {
  if (el) el.addEventListener("click", openEmail);
});

closeEmail.addEventListener("click", closeEmailModal);

// klik di luar modal nutup
window.addEventListener("click", (e) => {
  if (e.target == emailModal) {
    closeEmailModal();
  }
});
