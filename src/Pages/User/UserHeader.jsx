import React, { useState, useEffect } from 'react'
import UserNav from './UserNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
const [title,setTitle] = useState('');
const location = useLocation(); //Pega a rota atual


//Aqui usei o location para verificar o pathname, se for o nome da rota, define o titulo baseado na rota
useEffect(() => {
  const pathname = location.pathname
  switch(pathname) {
    case '/conta/postar':
      setTitle('Poste Sua Foto')
      break
    case '/conta/estatisticas':
      setTitle('Estatíticas')
      break
    default:
      setTitle('Minha Conta')
  }


},[location])


  return (
    <header className={styles.header}>
      <h1 className="title animeLeft">{title}</h1>
      <UserNav/>
    </header>
  )
}

export default UserHeader
