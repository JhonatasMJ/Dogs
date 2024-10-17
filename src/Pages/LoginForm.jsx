import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import Button from "../Components/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
     event.preventDefault(); 
     try {
      const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), 
      });

      const json = await response.json();
      console.log(json); 

    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } 
   console.log('sou lindo')
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input label="Senha" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/registro">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
