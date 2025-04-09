import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import NoTask from "./components/NoTask/NoTask";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
import { loadTasks, saveTasks } from "./utils/localStorage";
import "./styles/global.css";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  isEditing?: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TodoItem[]>([]);
  const [editingText, setEditingText] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
// 



  const addTask = (text: string) => {
  if (editingId) {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === editingId ? { ...task, text, isEditing: false } : task
      )
    );
    setEditingId(null);
    setEditingText("");
  } else {
    // Otherwise create a new task
    const newTask: TodoItem = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }
};

const toggleTask = (id: string) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

const deleteTask = (id: string) => {
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
};

const editTask = (id: string) => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    setEditingId(id);
    setEditingText(task.text);
  }
};

const clearAllTasks = () => {
  if (window.confirm("Are you sure you want to clear all tasks?")) {
    setTasks([]);
    setEditingId(null);
    setEditingText("");
  }
};


return (
  <div className="container">
    <Header />
    <TaskForm 
      onAddTask={addTask} 
      editingText={editingText}
      isEditing={!!editingId}
      setEditingText={setEditingText}
    />
    
    {tasks.length === 0 ? (
      <NoTask />
    ) : (
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    )}
   
    <Footer
      taskCount={tasks.filter((task) => !task.completed).length}
      onClearAll={clearAllTasks}
    />
  </div>
);
};

export default App;
