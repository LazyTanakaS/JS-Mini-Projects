const hexChars = "0123456789ABCDEF";

function generateColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += hexChars[randomIndex];
  }

  return color;
}

const colorCircles = document.querySelectorAll(".colors .color-circle");
const colorCodes = document.querySelectorAll(".colors .color-code");
const btnGenerate = document.querySelector(".btn-generate");
const btnCopy = document.querySelector(".btn-copy");

let colorHistory = JSON.parse(localStorage.getItem("colorHistory")) || [];

if (colorHistory.length > 0) {
  updateHistoryDisplay(colorHistory.length);
}

function updateColors() {
  const newColors = [];

  colorCircles.forEach((circle, index) => {
    const oldColor = colorCodes[index].textContent;
    newColors.push(oldColor);

    colorCodes[index].style.opacity = 0;

    setTimeout(() => {
      const newColor = generateColor();
      circle.style.backgroundColor = newColor;
      colorCodes[index].textContent = newColor;

      colorCodes[index].style.opacity = 1;
    }, 300);
  });

  // History check
  if (colorHistory.length + newColors.length > 8) {
    const toRemove = colorHistory.length + newColors.length - 8;
    colorHistory.splice(0, toRemove);
  }

  // Add new colors to history
  const oldLength = colorHistory.length;
  colorHistory.push(...newColors);

  localStorage.setItem("colorHistory", JSON.stringify(colorHistory));

  updateHistoryDisplay(oldLength);
}

btnGenerate.addEventListener("click", () => {
  updateColors();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    updateColors();
  }
});

colorCodes.forEach((code) => {
  code.addEventListener("click", () => {
    navigator.clipboard.writeText(code.textContent);
    showToast(`Copied: ${code.textContent}`);
  });
});

// COLOR HISTORY

function createHistoryItem(color) {
  const historyItem = document.createElement("div");
  historyItem.className = "history-item";

  // Circle
  const circle = document.createElement("div");
  circle.className = "color-circle";
  circle.style.backgroundColor = color;

  // Color Code
  const code = document.createElement("div");
  code.className = "color-code";
  code.textContent = color;

  code.addEventListener("click", () => {
    navigator.clipboard.writeText(code.textContent);
    showToast(`Copied: ${code.textContent}`);
  });

  historyItem.appendChild(circle);
  historyItem.appendChild(code);

  return historyItem;
}

function updateHistoryDisplay(oldLength = 0) {
  const historyContainer = document.querySelector(".color-history");
  historyContainer.innerHTML = "";

  colorHistory.forEach((color, index) => {
    const historyItem = createHistoryItem(color);

    if (index >= oldLength) {
      historyItem.classList.add("new-item");
      historyItem.style.animationDelay = `${(index - oldLength) * 0.05}s`;
    }

    historyContainer.appendChild(historyItem);
  });
}

// TOAST SHOW
function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerHTML = "";
  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
