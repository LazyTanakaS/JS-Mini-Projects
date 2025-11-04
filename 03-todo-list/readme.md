# ✅ Todo List

A fully functional todo list application with persistent storage, featuring the ability to add, edit, complete, and delete tasks. Perfect for learning data persistence and CRUD operations.

## 📸 Preview

A clean, modern todo list interface with purple accents, custom checkboxes, and a task counter.

## ✨ Features

- ➕ **Add Tasks**: Create new todo items
- ✏️ **Edit Tasks**: Click on any task to edit it inline
- ☑️ **Complete Tasks**: Mark tasks as done with custom checkboxes
- 🗑️ **Delete All**: Clear all tasks at once
- 💾 **Data Persistence**: Tasks saved in LocalStorage
- 📊 **Task Counter**: Displays total number of tasks
- ⌨️ **Keyboard Support**: Press Enter to add or save tasks
- 🎨 **Elegant UI**: Modern design with smooth interactions

## 🎯 Learning Objectives

This project helped me learn:

- **LocalStorage API**: Persisting data across browser sessions
- **CRUD Operations**: Create, Read, Update, Delete functionality
- **Array Methods**: Using `forEach`, `push`, and array manipulation
- **Dynamic Element Creation**: Building list items programmatically
- **Inline Editing**: Replacing elements for edit mode
- **Event Handling**: Multiple event types (click, keydown, blur)
- **State Management**: Managing application state with objects
- **JSON**: Converting between objects and strings

## 💻 Code Highlights

### Key Concepts Demonstrated

```javascript
// LocalStorage operations
localStorage.setItem("todo", JSON.stringify(todo));
let todo = JSON.parse(localStorage.getItem("todo")) || [];

// Dynamic element creation
const li = document.createElement("li");
li.innerHTML = `<div>...</div>`;

// Array manipulation
todo.push({ text: newTask, disabled: false });
todo.forEach((item, index) => {
  /* render */
});

// Inline editing
todoItem.replaceWith(inputElement);
inputElement.focus();

// Keyboard events
if (event.key === "Enter") {
  addTask();
}

// Checkbox state management
todo[index].disabled = !todo[index].disabled;
```

## 🚀 How to Run

1. Clone the repository
2. Navigate to `03-todo-list` folder
3. Open `index.html` in your browser

Or use Live Server in VS Code for hot reload.

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom checkboxes, Flexbox)
- Vanilla JavaScript (ES6+)
- LocalStorage API

## 📚 Concepts Covered

- **Data Persistence**: Saving data to LocalStorage
- **CRUD Operations**: Full create, read, update, delete cycle
- **Event Delegation**: Handling events on dynamically created elements
- **Array Methods**: Iterating and manipulating arrays
- **Object-Oriented Thinking**: Structuring data as objects
- **Input Handling**: Preventing empty tasks and trimming whitespace
- **Dynamic Styling**: Applying styles based on state

## 🎨 Design Features

- Dark theme (#252525 background)
- Purple accent color (#6c63ff)
- Custom checkboxes with smooth animations
- Strikethrough effect for completed tasks
- Scrollable task list with custom styling
- Responsive button design

## 📝 What's Next?

After mastering data persistence and CRUD operations, move on to the **Modal Window** to learn about advanced DOM manipulation and animations.

---

[← Previous: Tip Calculator](../02-tip-calculator) | [Back to Main Repository](../README.md) | [Next Project: Modal Window →](../04-modal-window)
