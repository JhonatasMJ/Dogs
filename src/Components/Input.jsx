import React from 'react'
import styles from './Input.module.css'

//Desestruturando para componentizar meu input
const Input = ({label, type, name}) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        <Input type={type} id={name} name={name}  className={styles.input}/>
        <p className={styles.erro}>Erro</p>

    </div>
      

  )
}

export default Input
