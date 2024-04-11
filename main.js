document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.className = "p-2 border-b border-gray-200 flex justify-between";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.className = "text-red-500 hover:text-red-700";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input after adding
  }
});
