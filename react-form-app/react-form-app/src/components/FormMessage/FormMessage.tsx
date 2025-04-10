import React from 'react';
import { FormMessageProps } from '../../interfaces/FormTypes';
import styles from './FormMessage.module.css';

const FormMessage: React.FC<FormMessageProps> = ({ success, message }) => {
  return (
    <div className={`${styles.formMessage} ${success ? styles.success : styles.error}`}>
      {message}
    </div>
  );
};

export default FormMessage;