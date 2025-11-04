const overlay = document.getElementById("overlay");
const openBtns = document.querySelectorAll(".btn");
const modal = document.getElementById("myModal");

const modalTitle = document.querySelector(".modal-title");
const modalImage = document.querySelector(".modal-image");
const modalDescription = document.querySelector(".modal-description");
const modalBtnFirst = document.querySelector(".modal-btn-first");
const modalBtnSecond = document.querySelector(".modal-btn-second");
const modalBtnThird = document.querySelector(".modal-btn-third");
const modalSpam = document.querySelector(".spam");
const modalCategories = document.querySelector(".model-categories");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "infoImg") {
      // Nothing change
      modalImage.style.display = "block";
      modalCategories.style.display = "none";
      modalSpam.style.display = "none";
    } else if (btn.id === "infoAlert") {
      // alert content
      modalTitle.textContent = '"Amazon" Would Like to Send You Notifications';
      modalImage.style.display = "none";
      modalCategories.style.display = "none";
      modalSpam.style.display = "flex";
    } else if (btn.id === "infoCategories") {
      // categories content
      modalImage.style.display = "none";
      modalCategories.style.display = "flex";
      modalSpam.style.display = "none";
    } else if (btn.id === "infoBattery") {
      // battery content
      modalImage.style.display = "block";
      modalCategories.style.display = "none";
      modalSpam.style.display = "none";
    } else if (btn.id === "infoContacts") {
      // contacts content
      modalImage.style.display = "block";
      modalCategories.style.display = "none";
      modalSpam.style.display = "none";
    }
    overlay.classList.add("show");
  });
});

const modalButtons = document.querySelectorAll(".modal-content button");
modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("show");
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("show")) {
    overlay.classList.remove("show");
  }
});
