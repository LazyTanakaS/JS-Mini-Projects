# 🟨 JavaScript Mini Projects

A collection of vanilla JavaScript projects demonstrating core JS fundamentals without frameworks.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=flat&logo=css3)

## 📋 Projects Overview

| #   | Project                                 | Key Concepts             | Live Demo                                                                  |
| --- | --------------------------------------- | ------------------------ | -------------------------------------------------------------------------- |
| 7   | 🧠 [Quiz App](#-quiz-app)               | SPA, API, Timer, State   | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/07-quiz-app/)        |
| 6   | 🌤️ [Weather App](#-weather-app)         | API, Async/Await, Themes | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/06-weather-app/)     |
| 5   | 🎨 [Color Generator](#-color-generator) | Arrays, Clipboard API    | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/05-color-generator/) |
| 4   | 🪟 [Modal Window](#-modal-window)       | Events, DOM, Keyboard    | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/04-modal-window/)    |
| 3   | ✅ [Todo List](#-todo-list)             | localStorage, CRUD       | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/03-todo-list/)       |
| 2   | 💰 [Tip Calculator](#-tip-calculator)   | Forms, Validation        | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/02-tip-calculator/)  |
| 1   | 🔢 [Counter](#-counter)                 | DOM, Events, State       | [Demo](https://lazytanakas.github.io/JS-Mini-Projects/01-counter/)         |

---

## 🧠 Quiz App

**The most advanced project** — A single-page trivia application with no frameworks.

### Features

- 📚 **Multiple categories** from Open Trivia Database API
- ⏱️ **30-second timer** per question
- 📊 **Score tracking** with percentage
- 📜 **History** of past attempts
- 🌓 **Dark/Light theme** with persistence
- 🔀 **Randomized answers** for each question

### Technical Highlights

```javascript
// SPA architecture with state object
const state = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  timerId: null,
  settings: { amount: 10, category: "", difficulty: "easy" },
};

// Screen switching without page reload
function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });
  document.getElementById(screenName).classList.add("active");
}
```

### Concepts Practiced

- Single Page Application (SPA) architecture
- State management without frameworks
- setInterval / clearInterval for timer
- API integration with error handling
- HTML entity decoding
- localStorage for persistence

---

## 🌤️ Weather App

Real-time weather data with city search and theme switching.

### Features

- 🌡️ Temperature, wind, humidity, visibility
- 🔍 Search by city name
- 📜 History of last 7 searches
- 🌓 Light/Dark theme toggle
- 💾 Persistent theme preference

### Technical Highlights

- OpenWeatherMap API integration
- Async/await with try/catch/finally
- Dynamic icon switching based on theme
- Loading states during API calls

---

## 🎨 Color Generator

Random color palette generator with copy functionality.

### Features

- 🎲 Generate random HEX colors
- 📋 Click to copy to clipboard
- 📜 Color history tracking
- 🖼️ Visual color preview

### Concepts Practiced

- Random number generation
- Clipboard API
- Template literals
- Array manipulation

---

## 🪟 Modal Window

Reusable modal component pattern.

### Features

- 🖱️ Click outside to close
- ⌨️ ESC key to close
- 🎨 Smooth animations
- 🔒 Prevents background scroll

### Concepts Practiced

- Event delegation
- Event bubbling prevention
- Keyboard event handling
- CSS transitions

---

## ✅ Todo List

Classic todo application with persistence.

### Features

- ➕ Add new tasks
- ✔️ Mark as completed
- 🗑️ Delete tasks
- 💾 Saves to localStorage

### Concepts Practiced

- localStorage API
- JSON stringify/parse
- Array methods (push, filter)
- Dynamic DOM manipulation

---

## 💰 Tip Calculator

Calculate tips and split bills.

### Features

- 💵 Bill amount input
- 📊 Tip percentage selection
- 👥 Split between people
- ✅ Input validation

### Concepts Practiced

- Form handling
- parseFloat for decimals
- Input validation
- classList manipulation

---

## 🔢 Counter

Simple counter with controls.

### Features

- ➕ Increment
- ➖ Decrement
- 🔄 Reset
- 🎨 Color changes based on value

### Concepts Practiced

- addEventListener
- DOM manipulation
- Conditional styling
- Basic state management

---

## 🛠️ How to Use

```bash
# Clone the repository
git clone https://github.com/LazyTanakaS/JS-Mini-Projects.git

# Navigate to any project
cd JS-Mini-Projects/07-quiz-app

# Open in browser
open index.html
# or use Live Server in VS Code
```

No build tools required — just open HTML files in browser!

---

## 📚 Learning Progression

This repository shows progression from basic to advanced JavaScript:

```
Counter (basics)
    ↓
Tip Calculator (forms)
    ↓
Todo List (localStorage)
    ↓
Modal Window (events)
    ↓
Color Generator (arrays)
    ↓
Weather App (APIs)
    ↓
Quiz App (SPA architecture)
```

---

## 🎯 Skills Demonstrated

| Skill            | Evidence                    |
| ---------------- | --------------------------- |
| DOM Manipulation | All projects                |
| Event Handling   | Modal, Quiz, all forms      |
| Async/Await      | Weather, Quiz               |
| API Integration  | Weather, Quiz               |
| localStorage     | Todo, Weather, Quiz         |
| State Management | Quiz (complex state object) |
| Error Handling   | Weather, Quiz               |
| CSS Animations   | Modal, Color Generator      |

---

## 👤 Author

**Petr Komar**  
Junior Frontend Developer

- GitHub: [@LazyTanakaS](https://github.com/LazyTanakaS)
- Email: <petrokomar16@gmail.com>
