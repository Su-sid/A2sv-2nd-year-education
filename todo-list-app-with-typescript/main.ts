// Define the Todo item interface
interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

// TodoList class to manage todos
class TodoList {
  private tasks: TodoItem[];
  private taskForm: HTMLFormElement;
  private taskInput: HTMLInputElement;
  private taskList: HTMLUListElement;
  private taskCount: HTMLSpanElement;
  private clearAll: HTMLButtonElement;
  private emptyState: HTMLDivElement;
  private currentlyEditingTask: TodoItem | null = null;

  constructor() {
    // DOM elements
    this.taskForm = document.getElementById("task-form") as HTMLFormElement;
    this.taskInput = document.getElementById("task-input") as HTMLInputElement;
    this.taskList = document.getElementById("task-list") as HTMLUListElement;
    this.taskCount = document.getElementById("task-count") as HTMLSpanElement;
    this.clearAll = document.getElementById("clear-all") as HTMLButtonElement;
    this.emptyState = document.getElementById("empty-state") as HTMLDivElement;

    // Load tasks from local storage
    this.tasks = this.loadTasks();

    // Initialize event listeners
    this.initEventListeners();

    // Initial render
    this.renderTasks();
  }

  // Load tasks from local storage
  private loadTasks(): TodoItem[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  // Save tasks to local storage
  private saveTasks(): void {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    this.updateTaskCount();
  }

  // Update task count
  private updateTaskCount(): void {
    const remainingTasks = this.tasks.filter((task) => !task.completed).length;
    this.taskCount.textContent = remainingTasks.toString();

    // Toggle empty state visibility
    if (this.tasks.length === 0) {
      this.emptyState.style.display = "block";
    } else {
      this.emptyState.style.display = "none";
    }
  }

  // Create task element
  private createTaskElement(task: TodoItem): HTMLLIElement {
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
  public addTask(text: string): void {
    if (text.trim()) {
      const newTask: TodoItem = {
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
  public toggleTask(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  // Edit task
  public editTask(taskId: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      // If there's a task currently being edited and it wasn't modified restore the previous task
      if (
        this.currentlyEditingTask &&
        this.taskInput.value === this.currentlyEditingTask.text
      ) {
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
  public deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
    this.renderTasks();
  }

  // Clear all tasks
  public clearAllTasks(): void {
    if (this.tasks.length > 0) {
      if (confirm("Are you sure you want to delete all tasks?")) {
        this.tasks = [];
        this.saveTasks();
        this.renderTasks();
      }
    }
  }

  // Render tasks
  private renderTasks(): void {
    this.taskList.innerHTML = "";
    this.tasks.forEach((task) => {
      const taskElement = this.createTaskElement(task);
      this.taskList.prepend(taskElement);
    });
    this.updateTaskCount();
  }

  // Initialize event listeners
  private initEventListeners(): void {
    // Form submit event
    this.taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTask(this.taskInput.value);
      this.taskInput.value = "";
      this.taskInput.focus();
    });

    // Task list event delegation
    this.taskList.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const taskItem = target.closest(".task-item") as HTMLLIElement;

      if (!taskItem) return;

      const taskId = taskItem.getAttribute("data-id") as string;

      if (target.classList.contains("task-checkbox")) {
        this.toggleTask(taskId);
        const taskContent = taskItem.querySelector(
          ".task-content"
        ) as HTMLSpanElement;

        // Update the UI immediately
        const task = this.tasks.find((t) => t.id === taskId);
        if (task && task.completed) {
          taskContent.classList.add("completed");
        } else {
          taskContent.classList.remove("completed");
        }

        this.updateTaskCount();
      } else if (target.classList.contains("edit-btn")) {
        this.editTask(taskId);
      } else if (target.classList.contains("delete-btn")) {
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
