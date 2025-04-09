import { TodoItem } from "../components/TaskList/TaskList";

export const loadTasks = (): TodoItem[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasks: TodoItem[]): void => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};