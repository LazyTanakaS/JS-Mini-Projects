const counterElemet = document.getElementById("counterValue");
const plusBtn = document.getElementById("buttonPlus");
const minusBtn = document.getElementById("buttonMinus");
const resetBtn = document.getElementById("buttonReset");
let count = 0;

plusBtn.addEventListener("click", () => {
  count++;
  counterElemet.textContent = count;
  updateColor();
});

minusBtn.addEventListener("click", () => {
  count--;
  counterElemet.textContent = count;
  updateColor();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterElemet.textContent = count;
  updateColor();
});

function updateColor() {
  if (count > 0) {
    counterValue.style.color = "green";
  } else if (count < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "black";
  }
}
