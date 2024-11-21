import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Error from "../Components/UI/Error";
import { RESETAR_SENHA } from "../Utils/Api";
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";

const Resetar = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  const password = useForm("password");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = RESETAR_SENHA({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <div>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default Resetar;
