//Selectors
const totalTasks = document.getElementById("totalTasks");
const taskInput = document.getElementById("taskInput");
const listOfTasks = document.getElementById("list");

//Variables
const tasks = [];

//Functions
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const editTask = (element) => {
  element.removeAttribute("readonly");
  element.removeAttribute("class", "form-control-plaintext");
  element.setAttribute("class", "form-control");
  element.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      element.setAttribute("readonly", "true");
      element.removeAttribute("class", "form-control");
      element.setAttribute("class", "form-control-plaintext");

      const itemIndex = tasks.findIndex((item) => item.id === Number(element.id));
      if (itemIndex !== -1) {
        tasks[itemIndex] = {
          ...tasks[itemIndex],
          message: element.value,
        };

        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    }
  });
};

const removeTask = (element) => {
  const itemIndex = tasks.findIndex((item) => item.id === Number(element.id));
  tasks.splice(itemIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const createRowOfTask = (item) => {
  const task = document.createElement("div");
  const taskDescriptionContainer = document.createElement("div");
  const taskDescription = document.createElement("input");
  const editContainer = document.createElement("div");
  const editElement = document.createElement("i");
  const deleteContainer = document.createElement("div");
  const deleteElement = document.createElement("i");
  taskDescription.value = item.message;

  task.classList.add("row", "w-50", "mt-3");
  editContainer.classList.add("col-1", "text-end");
  editElement.classList.add("fa-solid", "fa-pen", "text-primary", "editBtn");
  deleteContainer.classList.add("col-1", "text-end");
  deleteElement.classList.add("fa-solid", "fa-circle-xmark", "text-danger", "deleteBtn");
  taskDescriptionContainer.setAttribute("class", "col-10");
  taskDescription.setAttribute("class", "form-control-plaintext");
  taskDescription.setAttribute("readonly", "true");

  taskDescriptionContainer.appendChild(taskDescription);
  editContainer.appendChild(editElement);
  deleteContainer.appendChild(deleteElement);

  task.appendChild(taskDescriptionContainer);
  task.appendChild(editContainer);
  task.appendChild(deleteContainer);

  taskDescription.id = item.id;
  listOfTasks.appendChild(task);

  editElement.addEventListener("click", () => {
    editTask(taskDescription);
  });

  deleteElement.addEventListener("click", () => {
    task.remove();
    removeTask(taskDescription);
  });
};

const showTasks = () => {
  for (const item of tasks) {
    createRowOfTask(item);
  }
};

const addTasks = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    tasks.push({
      id: randomInteger(99, 1000),
      message: taskInput.value,
      state: false,
    });

    const lastItem = tasks[tasks.length - 1];
    createRowOfTask(lastItem);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
  }
};

const localStorageTasks = localStorage.getItem("tasks");

if (localStorageTasks) {
  tasks.push(...JSON.parse(localStorageTasks));
}
//Call functions
showTasks();

//Event listeners
taskInput.addEventListener("keyup", addTasks);

setInterval(() => {
  totalTasks.textContent = tasks.length + " tasks";
}, 1000);
