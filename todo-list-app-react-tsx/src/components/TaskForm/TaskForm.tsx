import React, { useState, useEffect } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  onAddTask: (text: string) => void;
  editingText: string;
  isEditing: boolean;
  setEditingText: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({  
  onAddTask, 
  editingText, 
  isEditing, 
  setEditingText  }) => {

  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (editingText) {
      setTaskText(editingText);
    }
  }, [editingText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (

<div className={styles.formContainer}>
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.taskInput}
          value={taskText}
          onChange={(e) => {
            setTaskText(e.target.value);
            if (isEditing) {
              setEditingText(e.target.value);
            }
          }}
          placeholder={isEditing ? "Edit task..." : "Add a new task..."}
          required
        />
        <button type="submit" className={styles.addBtn}>
          {isEditing ? "✏️ Update Task" : "➕ Add Task"}
        </button>
      </form>
    </div>



  );
};

export default TaskForm;