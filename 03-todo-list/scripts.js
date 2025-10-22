let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("inputBtn");
const todolist = document.getElementById("todoList");
const deleteBtn = document.getElementById("deleteBtn");

// Initialize

document.addEventListener("DOMContentLoaded", function () {
  todoBtn.addEventListener("click", addTask);
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
  deleteBtn.addEventListener("click", deleteAllTask);
  displayTask();
});

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    todo.push({
      text: newTask,
      disabled: false,
    });
    saveToLocalStorage();
    todoInput.value = "";
    displayTask();
  }
}

function displayTask() {
  todolist.innerHTML = "";
  todo.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="todo-container">
        <input type="checkbox" class="todo-checkbox" id="input-${index}"
        ${item.disabled ? "checked" : ""}>
        <p id="todo-${index}" class="${
      item.disabled ? "disabled" : ""
    }" onclick="editTask(${index})">${item.text}</p>
    </div>
`;
    li.querySelector(".todo-checkbox").addEventListener("change", () => {
      toggleTask(index);
    });
    todolist.appendChild(li);
  });

  updateCouner();
}

function updateCounter() {
  const counterSpan = document.querySelector(".counter-container span");
  counterSpan.textContent = todo.length;
}

function editTask(index) {
  const todoItem = document.getElementById(`todo-${index}`);
  const existingText = todo[index].text;
  const inputElement = document.createElement("input");

  inputElement.type = "text";
  inputElement.value = existingText;
  inputElement.className = "edit-input";

  todoItem.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("blur", function () {
    const updatedText = inputElement.value.trim();
    if (updatedText) {
      todo[index].text = updatedText;
      saveToLocalStorage();
    }

    displayTask();
  });

  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      inputElement.blur();
    }
  });
}

function toggleTask(index) {
  todo[index].disabled = !todo[index].disabled;
  saveToLocalStorage();
  displayTask();
}

function deleteAllTask() {
  todo = [];
  saveToLocalStorage();
  displayTask();
}

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}
