import React from 'react'
import styles from './Button.module.css'

//Children é o texto do botao
const Button = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
