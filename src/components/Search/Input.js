import React from 'react';
import Button from './Button';
import styles from './Input.module.css';

const Input = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter Pokemon Name"
        className={styles.input}
      />
      <Button> Search</Button>
    </div>
  );
};

export default Input;
