import React from 'react'
import styles from './Footer.module.css';
import Dog from '../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dog/>
      <p>Dogs, Alguns direitos reservados.</p>
    </footer >
  )
}

export default Footer
