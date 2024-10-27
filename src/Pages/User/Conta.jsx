import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Feed from './Feed.jsx'
import UserFoto from './UserFoto.jsx'
import UserStats from './UserStats.jsx'
import UserHeader from './UserHeader.jsx'

const Conta = () => {
  return (
    <section className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='postar' element={<UserFoto/>}/>
        <Route path='estatisticas' element={<UserStats/>}/>
      </Routes>
    </section>

  )}

export default Conta