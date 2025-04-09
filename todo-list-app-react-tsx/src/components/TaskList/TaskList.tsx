import React from "react";
import styles from "./TaskList.module.css";

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: TodoItem[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.taskItem}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            className={styles.taskCheckbox}
          />
          <span
            className={`${styles.taskContent} ${
              task.completed ? styles.completed : ""
            }`}
          >
            {task.text}
          </span>
          <button
            className={styles.editBtn}
            onClick={() => onEditTask(task.id)}
          >
            &#8801;
          </button>
          <button
            className={styles.deleteBtn}
            onClick={() => onDeleteTask(task.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;