const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourE1.innerText = h;
  minuteE1.innerText = m;
  secondE1.innerText = s;
  ampmE1.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("task-form");
  const inputTask = document.getElementById("input-task");
  const taskList = document.getElementById("task-list");
  const filterAll = document.getElementById("filter-all");
  const filterCompleted = document.getElementById("filter-completed");
  const filterPriority = document.getElementById("filter-priority");

  // Function to create a new task item
  function createTaskItem(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    const priorityButton = document.createElement("button");
    priorityButton.textContent = "Priority";

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    li.appendChild(priorityButton);

    // Event listener for completing a task
    completeButton.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Event listener for deleting a task
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    // Event listener for prioritizing a task
    priorityButton.addEventListener("click", function () {
      li.classList.toggle("priority");
    });

    return li;
  }

  // Event listener for the form submission
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = inputTask.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      inputTask.value = "";
    } else {
      alert("Please enter a task before submitting.");
    }
  });

  // Event listener for filtering tasks - All
  filterAll.addEventListener("click", function () {
    const taskItems = taskList.querySelectorAll("li");
    taskItems.forEach(function (taskItem) {
      taskItem.style.display = "block";
    });
  });

  // Event listener for filtering tasks - Completed
  filterCompleted.addEventListener("click", function () {
    const taskItems = taskList.querySelectorAll("li");
    taskItems.forEach(function (taskItem) {
      if (taskItem.classList.contains("completed")) {
        taskItem.style.display = "block";
      } else {
        taskItem.style.display = "none";
      }
    });
  });

  // Event listener for filtering tasks - Priority
  filterPriority.addEventListener("click", function () {
    const taskItems = taskList.querySelectorAll("li");
    taskItems.forEach(function (taskItem) {
      if (taskItem.classList.contains("priority")) {
        taskItem.style.display = "block";
      } else {
        taskItem.style.display = "none";
      }
    });
  });
});
