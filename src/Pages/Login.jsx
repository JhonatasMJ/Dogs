import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Registro from './Registro';
import Senha from './Senha';
import Resetar from './Resetar';
import { UserContext } from '../Context/UserContext';
import styles from './Login.module.css';
import NotFound from '../Components/UI/NotFound';

const Login = () => {
  const { login } = useContext(UserContext);

  // Se o usuário estiver logado, redireciona para a página da conta
  if (login === true) return <Navigate to='/conta' />;

  // Se não estiver logado, renderiza as rotas internas do login
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} /> {/* Formulário de login */}
          <Route path="/registro" element={<Registro />} /> {/* Página de cadastro */}
          <Route path="/senha" element={<Senha />} /> {/* Esqueceu a senha */}
          <Route path="/resetar" element={<Resetar />} /> {/* Resetar senha */}
          <Route path="*" element={<NotFound/>} /> 
        </Routes>
      </div>
    </section>
  );
};

export default Login;
