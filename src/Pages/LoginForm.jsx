import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useForm from "../Hooks/useForm";
import { Helmet } from "react-helmet";

import { UserContext } from "../Context/UserContext";

const LoginForm = () => {
  const username = useForm("usernameSchema");
  const password = useForm("password");

const {userLogin} = useContext(UserContext) //Pego o userLogin do contexto global




  //Pegar dados do usuario
  async function handleSubmit(event) {
    event.preventDefault();

    // Se for validado, vai fazer o fetch
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value); //Pega do contexto global
    }
     
  }

  return (
    <section>
      <Helmet>
        <title>Dogs | Login</title>
        <meta name="description" content="Página de Login" />
      </Helmet>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          value={username.value} 
          onChange={username.onChange} 
          {...username}
          error={username.error} 
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          value={password.value} 
          onChange={password.onChange} 
          {...password}
          error={password.error} //Seta o erro que passei no meu componente de input
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/registro">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
