import React, { useState } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div className= {styles.formContainer}>
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.taskInput}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <button type="submit" className={styles.addBtn}>
        ➕ Add Task
      </button>
    </form>
    </div>
  );
};

export default TaskForm;