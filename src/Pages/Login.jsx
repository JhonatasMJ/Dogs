import React, { useContext } from 'react'
import { Routes, Route, Navigate  } from 'react-router-dom'
import LoginForm from './LoginForm'
import Registro from './Registro'
import Senha from './Senha'
import Resetar from './Resetar'
import { UserContext } from '../Context/UserContext'

const Login = () => {
  const { login } = useContext(UserContext);


  if (login === true) return <Navigate to='/conta' />;

  if (login === false) return <Navigate to='/login' />;
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />} /> {/* Rotas internas do login */}
        <Route path="/registro" element={<Registro />} />
        <Route path="/senha" element={<Senha />} />
        <Route path="/resetar" element={<Resetar />} />
      </Routes>
    </section>
  );
};

export default Login
