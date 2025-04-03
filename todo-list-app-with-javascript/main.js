document.addEventListener('DOMContentLoaded', () => {
  
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskCount = document.getElementById('task-count');
    const clearAll = document.getElementById('clear-all');
    const emptyState = document.getElementById('empty-state');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Check if there are tasks in local storage
    let currentlyEditingTask = null;

    // save tasks to local storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskCount();
    };

    // Function to update task count
    const updateTaskCount = () => {
        const remainingTasks = tasks.filter(task => !task.completed).length;
        taskCount.textContent = remainingTasks;

        // Toggle empty state visibility
        if (tasks.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }
    };

    //create a task element
    const createTaskElement = (task) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.setAttribute('data-id', task.id);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.checked = task.completed;

        const taskContent = document.createElement('span');
        taskContent.classList.add('task-content');
        taskContent.textContent = task.text;
        if (task.completed) {
            taskContent.classList.add('completed');
        }



        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;';

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = '&#8801;';

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        return taskItem;
    };

    // render tasks
    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            taskList.prepend(taskElement);
        });
        updateTaskCount();
    };

    // Add task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTask = {
                id: Date.now().toString(),
                text: taskText,
                completed: false
            };
            tasks.push(newTask);
            currentlyEditingTask = null; // Reset the editing task
            saveTasks();
            renderTasks();
            taskInput.value = '';
            taskInput.focus();
        }
    });

    // Toggle task completion
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-checkbox')) {
            const taskId = e.target.parentElement.getAttribute('data-id');
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = e.target.checked;
                const taskContent = e.target.nextElementSibling;

                if (task.completed) {
                    taskContent.classList.add('completed');
                } else {
                    taskContent.classList.remove('completed');
                }

                saveTasks();
                updateTaskCount();
            }
        }
    });

    // Edit task
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const taskItem = e.target.parentElement;
            const taskId = taskItem.getAttribute('data-id');
            const task = tasks.find(t => t.id === taskId);

            if (task) {
                // If there's a task currently being edited and it wasn't modified restore the previous task
                if (currentlyEditingTask && taskInput.value === currentlyEditingTask.text) {
                    tasks.push(currentlyEditingTask);
                    saveTasks();
                    renderTasks();
                }

                // task text content
                const taskContent = taskItem.querySelector('.task-content').textContent;

                // Store the current task before removing it
                currentlyEditingTask = {
                    id: taskId,
                    text: taskContent,
                    completed: task.completed
                };

                // Put task text in input field
                taskInput.value = taskContent;
                taskInput.focus();

                // Remove task from array and storage
                tasks = tasks.filter(t => t.id !== taskId);
                saveTasks();
                renderTasks();
            }
        }
    });

    // Delete task
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.parentElement;
            const taskId = taskItem.getAttribute('data-id');
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasks();
            renderTasks();
        }
    });

    // Clear all tasks
    clearAll.addEventListener('click', () => {
        if (tasks.length > 0) {
            if (confirm('Are you sure you want to delete all tasks?')) {
                tasks = [];
                saveTasks();
                renderTasks();
            }
        }
    });

    // Initial render
    renderTasks();
});