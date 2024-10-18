import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        className={`${styles.input} ${error && styles.inputError}`}  // Se o erro existir, vai adicionar o css de erro
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} // Validação ao sair do campo
      />
      {error && <p className={styles.erro}>{error}</p>} {/* Se erro existir, vai exibir o paragrafo com o erro dentro */}
    </div>
  );
};

export default Input;
