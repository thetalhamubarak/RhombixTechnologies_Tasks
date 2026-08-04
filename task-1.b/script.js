const STORAGE_KEY = "todo-tasks";
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const activeCount = document.getElementById("activeCount");
const emptyState = document.getElementById("emptyState");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  taskList.innerHTML = tasks.map(t => `
    <li class="task-item ${t.completed ? "completed" : ""}" data-id="${t.id}">
      <span class="task-check"></span>
      <span class="task-text" contenteditable="false">${t.text}</span>
      <div class="task-actions">
        <button class="icon-btn edit" title="Edit">✎</button>
        <button class="icon-btn delete" title="Delete">🗑</button>
      </div>
    </li>
  `).join("");

  activeCount.textContent = tasks.filter(t => !t.completed).length;
  emptyState.classList.toggle("show", tasks.length === 0);
  save();
}

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ id: Date.now(), text, completed: false });
  taskInput.value = "";
  render();
});

taskList.addEventListener("click", e => {
  const item = e.target.closest(".task-item");
  if (!item) return;
  const id = Number(item.dataset.id);
  const task = tasks.find(t => t.id === id);

  if (e.target.classList.contains("task-check")) {
    task.completed = !task.completed;
    render();
  } else if (e.target.classList.contains("delete")) {
    tasks = tasks.filter(t => t.id !== id);
    render();
  } else if (e.target.classList.contains("edit")) {
    const span = item.querySelector(".task-text");
    span.contentEditable = "true";
    span.focus();
    document.getSelection().selectAllChildren(span);
  }
});

taskList.addEventListener("blur", e => {
  if (!e.target.classList.contains("task-text")) return;
  const item = e.target.closest(".task-item");
  const id = Number(item.dataset.id);
  const task = tasks.find(t => t.id === id);
  const newText = e.target.textContent.trim();
  task.text = newText || task.text;
  e.target.contentEditable = "false";
  render();
}, true);

taskList.addEventListener("keydown", e => {
  if (e.target.classList.contains("task-text") && e.key === "Enter") {
    e.preventDefault();
    e.target.blur();
  }
});

render();
