// import React from 'react'
import styles from "./NoTask.module.css";

const  NoTask=() => {
  return (
 
<div className={styles.emptyState} id="empty-state">
    <div>📝</div>
    <p>No tasks yet. </p> 
    <p> Add a new task and it will be displayed here 😉</p>
</div>

  )
}

export default NoTask