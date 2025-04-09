import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>😎 Simple To Do List App With TypeScript</h1>
      <p>This simple app helps you keep track of your daily tasks with ease</p>
      <p>The app is implemented using TypeScript</p>
    </header>
  );
};

export default Header;