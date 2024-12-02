import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'

import Feed from '../Feed/Feed.jsx'
import UserFoto from './UserFoto.jsx'
import UserStats from './UserStats.jsx'
import UserHeader from './UserHeader.jsx'
import { UserContext } from '../../Context/UserContext.jsx'
import NotFound from '../../Components/UI/NotFound.jsx'

const Conta = () => {

  const {data} = useContext(UserContext);
  console.log('User ID:', data.id);

  return (
    <section className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserFoto/>}/>
        <Route path='estatisticas' element={<UserStats/>}/>
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </section>

  )}

export default Conta