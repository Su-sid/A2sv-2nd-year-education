import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  taskCount: number;
  onClearAll: () => void;
}

const Footer: React.FC<FooterProps> = ({ taskCount, onClearAll }) => {
  return (
    <footer className={styles.footer}>
      <div>
        You have <span className={styles.taskCount}>{taskCount}</span> tasks
        remaining
      </div>
      <button className={styles.clearAll} onClick={onClearAll}>
        Clear All Tasks
      </button>
    </footer>
  );
};

export default Footer;