# 🔢 Counter

A simple interactive counter application that demonstrates fundamental JavaScript concepts through a clean and intuitive interface.

## 📸 Preview

A minimalist counter with three action buttons for incrementing, decrementing, and resetting the value.

## ✨ Features

- ➕ **Increment**: Increase counter by 1
- ➖ **Decrement**: Decrease counter by 1
- 🔄 **Reset**: Return counter to 0
- 🎨 **Dynamic Styling**: Color changes based on counter value
  - Positive numbers: Green
  - Negative numbers: Red
  - Zero: Default color

## 🎯 Learning Objectives

This project helped me learn:

- **Variables**: Storing and updating state
- **Event Listeners**: Responding to button clicks with `addEventListener`
- **DOM Manipulation**: Selecting and modifying HTML elements
- **Conditional Logic**: Using `if/else` statements to control program flow
- **Dynamic Styling**: Changing CSS properties via JavaScript

## 💻 Code Highlights

### Key Concepts Demonstrated

```javascript
// State management
let count = 0;

// Event handling
button.addEventListener("click", function () {
  // Action
});

// DOM manipulation
element.textContent = count;

// Conditional styling
if (count > 0) {
  element.style.color = "green";
} else if (count < 0) {
  element.style.color = "red";
}
```

## 🚀 How to Run

1. Clone the repository
2. Navigate to `01-counter` folder
3. Open `index.html` in your browser

Or use Live Server in VS Code for hot reload.

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## 📝 What's Next?

This is the first project in the series. After mastering these concepts, move on to the **Tip Calculator** to learn about form inputs and mathematical operations.

---

[← Back to Main Repository](../README.md) | [Next Project: Tip Calculator →](../02-tip-calculator)
