# Learning Quiz

An interactive quiz application that fetches trivia questions from the Open Trivia Database API. Features include multiple categories, difficulty levels, timer functionality, and persistent score history.

## Features

- **Dynamic Question Loading**: Fetch questions from 20+ categories via API
- **Difficulty Selection**: Choose between Easy, Medium, and Hard questions
- **30-Second Timer**: Time limit for each question with automatic timeout handling
- **Real-time Feedback**: Immediate visual feedback (green for correct, red for incorrect)
- **Score Tracking**: Track your performance across all questions
- **History Dashboard**: View your last 4 quiz results with scores and percentages
- **Theme Toggle**: Switch between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **HTML Entity Decoding**: Properly displays special characters in questions

## What I Learned

### Single Page Application (SPA) Architecture

- Managing multiple screens without page reloads
- Screen switching with JavaScript
- State management across different views
- Navigation flow and user experience

### Advanced API Integration

- Building dynamic API URLs with query parameters
- Working with the Open Trivia Database API
- Fetching and parsing category data
- Handling multiple API endpoints
- Error handling for failed requests

### State Management

- Creating a centralized state object
- Managing complex application state:
  - Questions array
  - Current question index
  - User answers
  - Timer state
  - Settings
- State updates and side effects

### Timer Implementation

- Using `setInterval()` for countdown functionality
- Clearing intervals to prevent memory leaks
- Timer state management
- Handling timeout scenarios
- Synchronizing timer with user actions

### LocalStorage for Persistence

- Saving quiz history as JSON
- Retrieving and parsing stored data
- Managing arrays in LocalStorage
- Displaying historical data
- Data serialization with `JSON.stringify()` and `JSON.parse()`

### Dynamic DOM Manipulation

- Creating elements programmatically
- Event delegation and click handlers
- Conditional rendering based on state
- innerHTML vs createElement approaches
- Button state management (disabled, classes)

### Array Methods Mastery

- `.forEach()` for iteration
- `.map()` for transformation
- `.slice()` for array subsets
- `.reverse()` for order manipulation
- `.sort()` for randomization
- `.find()` for searching

### HTML Entity Decoding

- Handling encoded characters from API (`&#039;`, `&quot;`)
- Creating a decoder using textarea element
- Processing strings before display

### Closures and Scope

- Understanding closure in event listeners
- Capturing variables in `forEach` loops
- Managing function scope with timers
- Arrow functions vs regular functions

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Open Trivia Database API
- LocalStorage API

## Code Highlights

### State Management Pattern

```javascript
const state = {
  categories: [],
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  settings: {
    amount: 10,
    category: "",
    categoryName: "",
    difficulty: "easy",
  },
  selectedAnswer: null,
  timerId: null,
};
```

### Timer Implementation

```javascript
function startTimer() {
  let timerLeft = 30;
  elements.timer.textContent = `Time: ${timerLeft}s`;

  state.timerId = setInterval(() => {
    timerLeft--;
    elements.timer.textContent = `Time: ${timerLeft}s`;

    if (timerLeft === 0) {
      clearInterval(state.timerId);
      handleTimeOut();
    }
  }, 1000);
}
```

### Answer Validation Logic

```javascript
function handleAnswersClick(selectedAnswer, buttonElement) {
  const currentQuestion = state.questions[state.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct_answer;

  clearInterval(state.timerId); // Stop timer

  const allAnswerButtons = document.querySelectorAll(".answer-btn");
  allAnswerButtons.forEach((button) => (button.disabled = true));

  const isCorrect = selectedAnswer === correctAnswer;

  if (isCorrect) {
    buttonElement.classList.add("correct");
    state.score++;
  } else {
    buttonElement.classList.add("incorrect");
    // Show correct answer
    allAnswerButtons.forEach((button) => {
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }
}
```

### LocalStorage History Management

```javascript
function saveResult() {
  const newResult = {
    score: state.score,
    total: state.questions.length,
    percentage: Math.round((state.score / state.questions.length) * 100),
    date: new Date().toISOString(),
    category: state.settings.categoryName || "Any Category",
    difficulty: state.settings.difficulty,
  };

  const historyString = localStorage.getItem("quiz-history");
  const history = historyString ? JSON.parse(historyString) : [];

  history.push(newResult);
  localStorage.setItem("quiz-history", JSON.stringify(history));
}
```

### HTML Entity Decoder

```javascript
function decodeHTML(html) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
}
```

### Dynamic Button Creation with Event Listeners

```javascript
allAnswers.forEach((answer) => {
  const btn = document.createElement("button");
  btn.textContent = answer;
  btn.className = "answer-btn";

  btn.addEventListener("click", () => {
    handleAnswersClick(answer, btn);
  });

  elements.answersContainer.appendChild(btn);
});
```

## How to Use

1. Open `index.html` in your browser
2. Select the number of questions (5-50)
3. Choose a category or select "Any Category" for variety
4. Pick your difficulty level
5. Click "Start Quiz" to begin
6. Answer each question within 30 seconds
7. Click "Next Question" to proceed
8. View your results and previous scores on the homepage

## Project Structure

```
quiz-app/
├── index.html          # Main HTML structure
├── css/
│   ├── variables.css   # CSS custom properties for theming
│   └── style.css       # All component styles
├── js/
│   └── app.js          # Application logic
└── README.md           # Project documentation
```

## Challenges Overcome

1. **Timer Management**: Learned to properly clear intervals to prevent multiple timers running simultaneously
2. **State Synchronization**: Managing state updates across multiple user actions (answer selection, timeout, navigation)
3. **HTML Entities**: Discovered API returns encoded HTML entities and implemented a decoder
4. **Answer Randomization**: Implemented Fisher-Yates shuffle to prevent answer pattern recognition
5. **Category ID vs Name**: Resolved displaying category names instead of IDs in history by storing both
6. **Memory Leaks**: Understanding when to clear intervals and remove event listeners
7. **LocalStorage Limitations**: Working with string-only storage and array serialization

## Key Takeaways

- Single Page Applications require careful state management
- `setInterval` must always be cleared to prevent memory leaks
- LocalStorage is powerful but requires serialization (JSON.stringify/parse)
- Event listeners in loops need closures to capture correct values
- Array methods are essential for data manipulation
- User feedback (visual states, loading indicators) greatly improves UX
- Breaking complex applications into smaller functions improves maintainability
- Proper error handling prevents poor user experience

## Future Improvements

- Progress bar visualization
- Sound effects for correct/incorrect answers
- Keyboard shortcuts for navigation
- Question bookmarking
- Statistics dashboard (average score, category performance)
- Multiplayer mode
- Export quiz results
- Custom question sets
- Difficulty-based scoring
- Achievements system

## Bugs Fixed During Development

1. **Timer not stopping on answer**: Added `clearInterval()` in `handleAnswersClick()`
2. **Multiple timers running**: Stored timer ID in state for proper cleanup
3. **Category showing as ID**: Implemented `data-category-name` attribute storage
4. **Memory leak on navigation**: Added cleanup in `handleBackButton()`
5. **HTML entities displaying raw**: Created `decodeHTML()` function
6. **Answer order predictable**: Implemented `Math.random()` sort for randomization

## Resources Used

- [Open Trivia Database API](https://opentdb.com/api_config.php)
- [MDN - setInterval/clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [JavaScript.info - Array Methods](https://javascript.info/array-methods)
- [MDN - LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Learn JavaScript - Kantór Tutorial](https://learn.javascript.ru/)

## Lessons for Next Project

- Start with state design before writing UI code
- Plan screen flow and navigation early
- Use consistent naming conventions (e.g., `handle*` for event handlers)
- Write cleanup functions alongside setup functions
- Test edge cases (empty state, network errors, rapid clicking)
- Consider mobile UX from the beginning

---

[Previous: Weather App](../06-weather-app) | [Back to Main Repository](../../README.md) | [Next: React Learning →](../react-projects)
