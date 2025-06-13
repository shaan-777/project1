// Theme Toggle (moon icon only)
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// FAQ Toggle
function toggleFaq(element) {
  const answer = element.querySelector(".faq-answer");
  if (answer) answer.classList.toggle("open");

  const arrow = element.querySelector(".arrow");
  if (arrow) arrow.classList.toggle("open");
}

// Startup Modal Logic
const startupModal = document.getElementById("startupModal");
const openModalBtns = document.querySelectorAll(".cta, .cta-button");
const closeBtn = document.querySelector(".close");

if (startupModal && openModalBtns.length && closeBtn) {
  // Open modal on either button click
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      startupModal.style.display = "block";
    });
  });

  // Close modal on "X"
  closeBtn.addEventListener("click", () => {
    startupModal.style.display = "none";
  });

  // Close modal if clicking outside the form
  window.addEventListener("click", (e) => {
    if (e.target === startupModal) {
      startupModal.style.display = "none";
    }
  });
}

// Form Submit
const startupForm = document.getElementById("startupForm");
if (startupForm && startupModal) {
  startupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted! Redirect to payment here.");
    startupModal.style.display = "none";
  });
}
