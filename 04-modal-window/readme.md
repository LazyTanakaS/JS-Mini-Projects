# 🪟 Modal Window

An elegant iOS-style modal window system featuring multiple content variations, smooth animations, and professional UI design. Perfect for learning advanced DOM manipulation and CSS animations.

## 📸 Preview

A collection of iOS-inspired modal dialogs with different content types: images, alerts, categories, battery warnings, and contact permissions.

## ✨ Features

- 🖼️ **Image Modal**: Display images with notification preview
- ⚠️ **Alert Modal**: Show spam warnings and alerts
- 📑 **Categories Modal**: Display multiple notification categories
- 🔋 **Battery Modal**: Warning about battery-draining apps
- 👥 **Contacts Modal**: Request contact access permissions
- 🎭 **Smooth Animations**: Scale and fade transitions
- ⌨️ **Keyboard Support**: Close modal with Escape key
- 🖱️ **Backdrop Click**: Close by clicking outside the modal
- 🚫 **Body Scroll Lock**: Prevent scrolling when modal is open
- 🎨 **CSS Variables**: Easily customizable theme

## 🎯 Learning Objectives

This project helped me learn:

- **Advanced DOM Manipulation**: Showing/hiding elements dynamically
- **CSS Animations**: Creating smooth scale and opacity transitions
- **Event Delegation**: Handling multiple buttons efficiently
- **Dynamic Content**: Switching modal content based on context
- **CSS Variables**: Implementing maintainable and themeable styles
- **Multiple Event Types**: Click, keydown, and backdrop events
- **State Management**: Managing modal visibility and content state
- **Accessibility**: Proper focus management and keyboard navigation

## 💻 Code Highlights

### Key Concepts Demonstrated

```javascript
// Dynamic content switching
function hideAllElements() {
  modalImage.style.display = "none";
  modalBattery.style.display = "none";
  // Hide all elements first
}

// Event delegation with forEach
openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    hideAllElements();
    // Show specific content based on button ID
    if (btn.id === "infoImg") {
      modalImage.style.display = "block";
      modalTitle.textContent = "...";
    }
  });
});

// Modal control
overlay.classList.add("show");
document.body.style.overflow = "hidden";

// Keyboard events
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Backdrop click handling
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});
```

### CSS Features

```css
/* CSS Variables for theming */
:root {
  --color-bg-modal: #b3b3b3;
  --color-text-confirm: #007aff;
  --color-text-reject: #ff3b30;
}

/* Smooth animations */
.modal {
  transform: scale(0);
  transition: transform 0.3s ease-in-out;
}

.overlay.show .modal {
  transform: scale(1);
}
```

## 🚀 How to Run

1. Clone the repository
2. Navigate to `04-modal-window` folder
3. Ensure all images are in the `images/` folder
4. Open `index.html` in your browser

Or use Live Server in VS Code for hot reload.

## 🛠️ Technologies Used

- HTML5
- CSS3 (Variables, Animations, Transitions)
- Vanilla JavaScript (ES6+)

## 📚 Concepts Covered

- **Modal Systems**: Creating overlay-based UI components
- **CSS Animations**: Scale, opacity, and transform transitions
- **CSS Variables**: Creating maintainable theme systems
- **Event Handling**: Multiple event types and delegation
- **Dynamic Content**: Switching content without page reload
- **Accessibility**: Keyboard navigation and focus management
- **Responsive Design**: Flexible layouts with flexbox
- **State Management**: Controlling modal visibility states

## 🎨 Design Features

- iOS-style modal design
- Smooth scale-in animation
- Backdrop blur effect
- Color-coded buttons (blue for confirm, red for reject)
- Multiple content layouts
- Custom typography with Poppins font
- Responsive button sizing
- Professional spacing and padding

## 📂 File Structure

```
04-modal-window/
├── index.html
├── styles.css
├── variables.css
├── scripts.js
└── images/
    ├── alert.png
    ├── battery.png
    ├── contacts.png
    └── frame.png
```

## 🎓 Advanced Techniques

- **Separation of Concerns**: CSS variables in separate file
- **Reusable Components**: Single modal with dynamic content
- **Clean Code**: Organized function structure
- **Performance**: Efficient event handling
- **User Experience**: Multiple ways to close modal

## 📝 What's Next?

This is the most advanced project in the series! You've now mastered:

- Basic JavaScript fundamentals
- Form handling and validation
- Data persistence
- Advanced DOM manipulation and animations

Consider building more complex projects or exploring frameworks like React!

---

[← Previous: Todo List](../03-todo-list) | [Back to Main Repository](../README.md)
