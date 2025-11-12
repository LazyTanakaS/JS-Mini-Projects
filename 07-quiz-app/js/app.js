const state = {
  categories: [],
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  settings: {
    amount: 10,
    category: "",
    difficulty: "easy",
  },
  selectedAnswer: null,
};

const elements = {
  // THEME
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("theme-icon"),

  //   SCREENS
  setupScreen: document.getElementById("setupScreen"),
  gameScreen: document.getElementById("gameScreen"),
  resultScreen: document.getElementById("resultScreen"),

  //   SETUP FORM
  setupForm: document.getElementById("setupForm"),
  questionAmount: document.getElementById("questionAmount"),
  categorySelect: document.getElementById("category"),
  difficultySelect: document.getElementById("difficulty"),

  //   GAME SCREEN
  questionText: document.getElementById("questionText"),
  questionCategory: document.getElementById("questionCategory"),
  progressInfo: document.getElementById("progressInfo"),
  answersContainer: document.getElementById("answersContainer"),
  nextBtn: document.getElementById("nextBtn"),
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadCategories();
  setupEventListeners();
});

// EVENT LISTENERS
function setupEventListeners() {
  // Theme toggle
  elements.themeToggle.addEventListener("click", toggleTheme);

  // Setup form
  elements.setupForm.addEventListener("submit", handleSetupSubmit);

  // Next button
  elements.nextBtn.addEventListener("click", handleNextQuestion);
}

// THEME MANAGEMENT
function initTheme() {
  const savedTheme = localStorage.getItem("quiz-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("quiz-theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  elements.themeIcon.textContent = theme === "light" ? "🌙" : "☀️";
}

// API
async function loadCategories() {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");
    const data = await response.json();

    state.categories = data.trivia_categories;
    populateCategoryDropdown();
  } catch (error) {
    console.error("Error loading categories:", error);
    elements.categorySelect.innerHTML =
      '<option value="">Error loading categories</option>';
  }
}

function populateCategoryDropdown() {
  elements.categorySelect.innerHTML = '<option value="">Any Category</option>';

  state.categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    elements.categorySelect.appendChild(option);
  });
}

// EVENT LISTENER
function handleSetupSubmit(e) {
  e.preventDefault();

  state.settings.amount = elements.questionAmount.value;
  state.settings.category = elements.categorySelect.value;
  state.settings.difficulty = elements.difficultySelect.value;

  console.log("Quiz settings", state.settings);
  loadQuestions();
}

// SCREEN
function showScreen(screenName) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById(screenName).classList.add("active");
}

// QUESTIONS LOADER

function handleAnswersClick(selectedAnswer, buttonElement) {
  const currentQuestion = state.questions[state.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct_answer;

  const allAnswerButtons = document.querySelectorAll(".answer-btn");
  allAnswerButtons.forEach((button) => {
    button.disabled = true;
    button.classList.remove("selected");
  });

  const isCorrect = selectedAnswer === correctAnswer;

  if (isCorrect) {
    buttonElement.classList.add("correct");
    state.score++;
  } else {
    buttonElement.classList.add("incorrect");

    allAnswerButtons.forEach((button) => {
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
  }

  state.selectedAnswer = selectedAnswer;
  state.userAnswers.push({
    question: currentQuestion.question,
    selectedAnswer: selectedAnswer,
    correctAnswer: correctAnswer,
    isCorrect: isCorrect,
  });

  elements.nextBtn.style.display = "block";
}

// LOADER QUESTIONS
function buildApiUrl() {
  let url = `https://opentdb.com/api.php?amount=${state.settings.amount}`;

  if (state.settings.category) {
    url += `&category=${state.settings.category}`;
  }

  if (state.settings.difficulty) {
    url += `&difficulty=${state.settings.difficulty}`;
  }

  url += `&type=multiple`;

  return url;
}

async function loadQuestions() {
  try {
    const url = buildApiUrl();
    const response = await fetch(url);
    const data = await response.json();

    state.questions = data.results;
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.userAnswers = [];

    console.log("Questions loaded", state.questions);

    showScreen("gameScreen");
    displayQuestion();
  } catch (error) {
    console.error("Error loading questions:", error);
    alert("Failed to load questions. Please try again.");
  }
}

// DECODE HTML ENTITIES
function decodeHTML(html) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
}

// DISPLAY QUESTIONS
function displayQuestion() {
  const currentQuestion = state.questions[state.currentQuestionIndex];

  elements.questionText.textContent = decodeHTML(currentQuestion.question);

  elements.questionCategory.textContent = `Category: ${decodeHTML(
    currentQuestion.category
  )}`;

  elements.progressInfo.textContent = `${state.currentQuestionIndex + 1}/${
    state.questions.length
  }`;

  const correctAnswer = decodeHTML(currentQuestion.correct_answer);
  const incorrectAnswers = currentQuestion.incorrect_answers.map((answer) =>
    decodeHTML(answer)
  );

  const allAnswers = [...incorrectAnswers, correctAnswer];
  allAnswers.sort(() => Math.random() - 0.5);

  elements.answersContainer.innerHTML = "";
  allAnswers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.className = "answer-btn";

    btn.addEventListener("click", () => {
      handleAnswersClick(answer, btn);
    });

    elements.answersContainer.appendChild(btn);
  });

  elements.nextBtn.style.display = "none";
  state.selectedAnswer = null;

  console.log(currentQuestion);
}

// HANDLE NEXT QUESTION
function handleNextQuestion() {
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex < state.questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// SHOW RESULTS
function showResults() {
  showScreen("resultScreen");

  const resultContainer = document
    .getElementById("resultScreen")
    .querySelector(".container");
  const percentage = Math.round((state.score / state.questions.length) * 100);

  let message = "";
  let emoji = "";

  if (percentage === 100) {
    message = "Perfect! You're a genius! 🎉";
  } else if (percentage >= 80) {
    message = "Excellent work! Keep it up! 👏";
  } else if (percentage >= 60) {
    message = "Good job! You can do better! 💪";
  } else if (percentage >= 40) {
    message = "Not bad, but there's room for improvement! 📚";
  } else {
    message = "Keep practicing, you'll get there! 💡";
  }

  resultContainer.innerHTML = `
    <div class="result-container">
      <h2>Quiz Completed!</h2>
      <div class="result-summary">
        <p class="result-score">Your Score: ${state.score}/${state.questions.length}</p>
        <p class="result-percentage">${percentage}%</p>
      </div>
      <p class="result-message">${message}</p>
      <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
    </div>
  `;
}
