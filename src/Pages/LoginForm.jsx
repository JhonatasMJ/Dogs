import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useForm from "../Hooks/useForm";
import { Helmet } from "react-helmet";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Components/Button.module.css";

import { UserContext } from "../Context/UserContext";
import Error from "../Components/UI/Error";

const LoginForm = () => {
  const username = useForm("usernameSchema");
  const password = useForm("password");

  const { userLogin, error, loading } = useContext(UserContext); //Pego o userLogin do contexto global

  //Pegar dados do usuario
  async function handleSubmit(event) {
    event.preventDefault();

    // Se for validado, vai fazer o fetch
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value); //Pega do contexto global
    }
  }

  return (
    <section className="animeLeft">
      <Helmet>
        <title>Dogs | Login</title>
        <meta name="description" content="Página de Login" />
      </Helmet>
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          placeholder="Insira seu nome ou email"
          onChange={password.onChange}
          {...password}
          error={password.error} //Seta o erro que passei no meu componente de input
        />
          {/* Se o loading existir, vai deixar o botao com o estilo de carregando  */}
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}{" "}
 <Error error={error && 'Dados incorretos'} />
      </form>
      <Link className={styles.perdeu} to="/login/senha">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastra-se no site.</p>
        <Link className={stylesBtn.button} to="/login/registro">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
