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
const modalBattery = document.querySelector(".modal-battery");
const modalContact = document.querySelector(".modal-contact");
const modalLabel = document.querySelector(".modal-label");

function hideAllElements() {
  modalImage.style.display = "none";
  modalBattery.style.display = "none";
  modalContact.style.display = "none";
  modalCategories.style.display = "none";
  modalSpam.style.display = "none";
  modalLabel.style.display = "none";
}

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    hideAllElements();

    if (btn.id === "infoImg") {
      // image content
      modalTitle.textContent =
        '""Pinterest" Would Like to Send You Notifications Similar to These';
      modalImage.style.display = "block";
      modalDescription.textContent =
        "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.";
      modalBtnFirst.textContent = "Allow";
      modalBtnFirst.style.color = "#007aff";
      modalBtnSecond.textContent = "Allow in Scheduled Summary";
      modalBtnThird.textContent = "Don't Allow";
      modalBtnThird.style.color = "#ff3b30";
    } else if (btn.id === "infoAlert") {
      // alert content
      modalTitle.textContent = '"Amazon" Would Like to Send You Notifications';
      modalSpam.style.display = "flex";
      modalDescription.textContent =
        "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.";
      modalBtnFirst.textContent = "Allow";
      modalBtnFirst.style.color = "#007aff";
      modalBtnSecond.textContent = "Allow in Scheduled Summary";
      modalBtnThird.textContent = "Don't Allow";
      modalBtnThird.style.color = "#ff3b30";
    } else if (btn.id === "infoCategories") {
      // categories content
      modalTitle.textContent = '"Amazon" Would Like to Send You Notifications';
      modalCategories.style.display = "flex";
      modalDescription.textContent =
        "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.";
      modalBtnFirst.textContent = "Allow";
      modalBtnFirst.style.color = "#007aff";
      modalBtnSecond.textContent = "Allow in Scheduled Summary";
      modalBtnThird.textContent = "Don't Allow";
      modalBtnThird.style.color = "#ff3b30";
    } else if (btn.id === "infoBattery") {
      // battery content
      modalBattery.style.display = "block";
      modalTitle.textContent =
        '""Tinder" has been heavily using your battery lately. Do you want to continue using it?';
      modalDescription.textContent =
        "Continuous drainage like this can impact battery health, capacity, and overall system performance.";
      modalBtnFirst.textContent = "Delete App";
      modalBtnFirst.style.color = "#ff3b30";
      modalBtnSecond.textContent = "Disabel Background Usage";
      modalBtnThird.textContent = "Cancel";
      modalBtnThird.style.color = "#007aff";
    } else if (btn.id === "infoContacts") {
      // contacts content
      modalTitle.textContent =
        '""TikTok" Would Like Full Access to Your Contacts';
      modalContact.style.display = "block";
      modalLabel.style.display = "block";
      modalDescription.textContent =
        "Contacts may include additional data, such as locations, photos, relations, birthdays, notes, and more.";
      modalBtnFirst.textContent = "Select Contacts...";
      modalBtnFirst.style.color = "#007aff";
      modalBtnSecond.textContent = "Allow Full Access";
      modalBtnThird.textContent = "Don't allow";
      modalBtnThird.style.color = "#007aff";
    }
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

const modalButtons = document.querySelectorAll(".modal-content button");
modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  });
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("show")) {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
});
