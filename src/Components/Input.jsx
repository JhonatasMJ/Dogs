import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        className={styles.input} 
        value={value} 
        onChange={onChange} 
      />
      <p className={styles.erro}>Erro</p>
    </div>
  );
};

export default Input;
