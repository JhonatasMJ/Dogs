import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import LoginForm from './LoginForm'
import Registro from './Registro'
import Senha from './Senha'
import Resetar from './Resetar'

const Login = () => {
  return (
    <section>
     <Routes>
        <Route path='/' element={<LoginForm/>}/> {/* Rotas internas dentro do proprio login */}
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/senha' element={<Senha/>}/>
        <Route path='/resetar' element={<Resetar/>}/>
     </Routes>
    </section>
  )
}

export default Login
