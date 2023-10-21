document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Function to add a new task to the list
    function addNewTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            // Create a remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "✔";
            removeButton.className = "remove-button";

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);

            taskInput.value = "";
            taskInput.focus();
        }
    }

    // Add task on button click
    addTaskButton.addEventListener("click", addNewTask);

    // Add task on Enter key press
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    });

    // Remove task when the remove button is clicked
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            const listItem = event.target.parentNode;
            listItem.remove();
        }
    });
});
