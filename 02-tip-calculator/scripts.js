const billInput = document.getElementById("billInput");
const tipAmountSpan = document.getElementById("tipAmount");
const totalAmountSpan = document.getElementById("totalAmount");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const percent5 = document.getElementById("percent5");
const percent10 = document.getElementById("percent10");
const percent15 = document.getElementById("percent15");
const percent20 = document.getElementById("percent20");
const percent25 = document.getElementById("percent25");

const percentButtons = [percent5, percent10, percent15, percent20, percent25];

let selectedPercent = 0;

percent5.addEventListener("click", () => {
  selectedPercent = 5;
  removeActiveClass();
  percent5.classList.add("active");
});
percent10.addEventListener("click", () => {
  selectedPercent = 10;
  removeActiveClass();
  percent10.classList.add("active");
});
percent15.addEventListener("click", () => {
  selectedPercent = 15;
  removeActiveClass();
  percent15.classList.add("active");
});
percent20.addEventListener("click", () => {
  selectedPercent = 20;
  removeActiveClass();
  percent20.classList.add("active");
});
percent25.addEventListener("click", () => {
  selectedPercent = 25;
  removeActiveClass();
  percent25.classList.add("active");
});

calculateBtn.addEventListener("click", () => {
  const billAmount = parseFloat(billInput.value);

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Wrong number!");
    return;
  }

  if (selectedPercent === 0) {
    alert("Enter the percent!");
    return;
  }

  const tip = billAmount * (selectedPercent / 100);
  const total = billAmount + tip;

  tipAmountSpan.textContent = "$" + tip.toFixed(2);
  totalAmountSpan.textContent = "$" + total.toFixed(2);
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  selectedPercent = 0;
  tipAmountSpan.textContent = "";
  totalAmountSpan.textContent = "";
  removeActiveClass();
});

function removeActiveClass() {
  percentButtons.forEach((button) => {
    button.classList.remove("active");
  });
}
