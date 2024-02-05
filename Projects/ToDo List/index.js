function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const completedTaskText = document.getElementById("completedTask");
  const deletedTaskText = document.getElementById("deletedTask");
  let deleted = false;

  if (taskInput.value !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;

    // Button to delete task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleted = true;
      deletedTaskText.innerHTML = "Task removed";
      setTimeout(function () {
        deletedTaskText.innerHTML = "";
      }, 2000);
    };

    taskItem.appendChild(deleteButton);
    taskItem.onclick = function () {
      if (!deleted) {
        completedTaskText.innerHTML = "Task completed";
      }
      taskList.removeChild(taskItem);
      setTimeout(function () {
        completedTaskText.innerHTML = "";
      }, 2000);
    };

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
