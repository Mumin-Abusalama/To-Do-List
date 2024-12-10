// Selectors
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Add Task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Function to add a new task
function addTask(taskText) {
  const li = document.createElement('li');
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()}`;
  
  li.innerHTML = `
      <span>Task:${taskText} Date:${formattedDate}</span>
      <button onclick="removeTask(this)">Delete</button>
  `;
  taskList.appendChild(li);
}

// Function to remove a task
function removeTask(button) {
    button.parentElement.remove();
}
