"use strict";
// TodoList class to manage todos
class TodoList {
    tasks;
    taskForm;
    taskInput;
    taskList;
    taskCount;
    clearAll;
    emptyState;
    currentlyEditingTask = null;
    constructor() {
        // DOM elements
        this.taskForm = document.getElementById("task-form");
        this.taskInput = document.getElementById("task-input");
        this.taskList = document.getElementById("task-list");
        this.taskCount = document.getElementById("task-count");
        this.clearAll = document.getElementById("clear-all");
        this.emptyState = document.getElementById("empty-state");
        // Load tasks from local storage
        this.tasks = this.loadTasks();
        // Initialize event listeners
        this.initEventListeners();
        // Initial render
        this.renderTasks();
    }
    // Load tasks from local storage
    loadTasks() {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    }
    // Save tasks to local storage
    saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        this.updateTaskCount();
    }
    // Update task count
    updateTaskCount() {
        const remainingTasks = this.tasks.filter((task) => !task.completed).length;
        this.taskCount.textContent = remainingTasks.toString();
        // Toggle empty state visibility
        if (this.tasks.length === 0) {
            this.emptyState.style.display = "block";
        }
        else {
            this.emptyState.style.display = "none";
        }
    }
    // Create task element
    createTaskElement(task) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.setAttribute("data-id", task.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;
        const taskContent = document.createElement("span");
        taskContent.classList.add("task-content");
        taskContent.textContent = task.text;
        if (task.completed) {
            taskContent.classList.add("completed");
        }
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "&times;";
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.innerHTML = "&#8801;";
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);
        return taskItem;
    }
    // Add a new task
    addTask(text) {
        if (text.trim()) {
            const newTask = {
                id: Date.now().toString(),
                text: text.trim(),
                completed: false,
            };
            this.tasks.push(newTask);
            this.currentlyEditingTask = null; // Reset the editing task
            this.saveTasks();
            this.renderTasks();
        }
    }
    // Toggle task completion
    toggleTask(taskId) {
        const task = this.tasks.find((t) => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
        }
    }
    // Edit task
    editTask(taskId) {
        const task = this.tasks.find((t) => t.id === taskId);
        if (task) {
            // If there's a task currently being edited and it wasn't modified restore the previous task
            if (this.currentlyEditingTask &&
                this.taskInput.value === this.currentlyEditingTask.text) {
                this.tasks.push(this.currentlyEditingTask);
                this.saveTasks();
                this.renderTasks();
            }
            // Store the current task before removing it
            this.currentlyEditingTask = { ...task };
            // Put task text in input field
            this.taskInput.value = task.text;
            this.taskInput.focus();
            // Remove task from array and storage
            this.tasks = this.tasks.filter((t) => t.id !== taskId);
            this.saveTasks();
            this.renderTasks();
        }
    }
    // Delete task
    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
        this.renderTasks();
    }
    // Clear all tasks
    clearAllTasks() {
        if (this.tasks.length > 0) {
            if (confirm("Are you sure you want to delete all tasks?")) {
                this.tasks = [];
                this.saveTasks();
                this.renderTasks();
            }
        }
    }
    // Render tasks
    renderTasks() {
        this.taskList.innerHTML = "";
        this.tasks.forEach((task) => {
            const taskElement = this.createTaskElement(task);
            this.taskList.prepend(taskElement);
        });
        this.updateTaskCount();
    }
    // Initialize event listeners
    initEventListeners() {
        // Form submit event
        this.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addTask(this.taskInput.value);
            this.taskInput.value = "";
            this.taskInput.focus();
        });
        // Task list event delegation
        this.taskList.addEventListener("click", (e) => {
            const target = e.target;
            const taskItem = target.closest(".task-item");
            if (!taskItem)
                return;
            const taskId = taskItem.getAttribute("data-id");
            if (target.classList.contains("task-checkbox")) {
                this.toggleTask(taskId);
                const taskContent = taskItem.querySelector(".task-content");
                // Update the UI immediately
                const task = this.tasks.find((t) => t.id === taskId);
                if (task && task.completed) {
                    taskContent.classList.add("completed");
                }
                else {
                    taskContent.classList.remove("completed");
                }
                this.updateTaskCount();
            }
            else if (target.classList.contains("edit-btn")) {
                this.editTask(taskId);
            }
            else if (target.classList.contains("delete-btn")) {
                this.deleteTask(taskId);
            }
        });
        // Clear all tasks
        this.clearAll.addEventListener("click", () => {
            this.clearAllTasks();
        });
    }
}
// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const todoList = new TodoList();
});
