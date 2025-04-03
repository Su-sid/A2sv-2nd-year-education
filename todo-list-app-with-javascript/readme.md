# Simple To-Do List App

An easy-to-use to-do list application built with vanilla JavaScript, HTML, and CSS.

![Simple To-Do List App](https://raw.githubusercontent.com/su-sid/A2sv-2nd-year-education/todo-list-app-with-javascript/assets/todo-list-app-no-task-page.jpg)
![Simple To-Do List App](https://raw.githubusercontent.com/su-sid/A2sv-2nd-year-education/todo-list-app-with-javascript/assets/todo-list-app-with-javascript/assets/todo-list-app-with-task-page.jpg)

## Features

- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as completed
- ✅ Task counter showing remaining tasks at the bottom
- ✅ Local storage to persist tasks between sessions
- ✅ Clear all tasks with confirmation
- ✅ Clean and responsive user interface with smooth transitions

## Project Structure

```
todo-list-app/
│
├── index.html
├── styles.css
├── main.js
├── README.md
└── ./assets           # Directory with preview images
```

## Installation & Running the App

1. **Access and download the project files** to your local machine:
   Get the files from the following repository

```
https://github.com/Su-sid/A2sv-2nd-year-education/tree/main/todo-list-app-with-javascript

```

2. **Open the project**:

   - You can simply open the `index.html` file in your web browser

   OR

   - Use a local development server (recommended for development):
     ```bash
     # Requires Node.js to run
     npm install -g http-server
     http-server
     ```
     Then visit `http://localhost:8080` in your browser

3. **Start managing your tasks!** The app is ready to use immediately.

## Usage

- **Adding Tasks**: Type your task in the input field and press "Add Task" or hit Enter
- **Completing Tasks**: Click the checkbox next to a task to mark it as completed
- **Editing Tasks**: Click the "≡" (edit) button to modify an existing task
- **Deleting Tasks**: Click the "×" (delete) button to remove a specific task
- **Clearing All**: Use the "Clear All Tasks" button at the bottom and confirm the action to remove all tasks

## How It Works

The app uses browser local storage to save your tasks, meaning they will persist even if you close the browser or refresh the page. Tasks are stored as JSON objects with the following structure:

```javascript
{
  id: "timestamp",
  text: "Task description",
  completed: false
}
```

## Browser Compatibility

This app works in all modern browsers that support ES6 and Local Storage:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
