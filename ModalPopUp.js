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
const emailTriggerContainer = document.querySelector(
  ".contact-item.email-trigger"
); // seluruh area
const closeEmail = document.querySelector(".email-close");

const openEmail = () => {
  emailModal.style.display = "flex";
};

const closeEmailModal = () => {
  emailModal.style.display = "none";
};

// klik seluruh area email
if (emailTriggerContainer) {
  emailTriggerContainer.addEventListener("click", openEmail);
}

// tombol close
closeEmail.addEventListener("click", closeEmailModal);

// klik di luar modal nutup
window.addEventListener("click", (e) => {
  if (e.target == emailModal) {
    closeEmailModal();
  }
});
