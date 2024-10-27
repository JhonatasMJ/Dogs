import React, { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../Utils/Api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null); // Dados do usuário
  const [login, setLogin] = useState(null); // Verificar se está logado ou não
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro
  const navigate = useNavigate()



  const userLogout = useCallback (async function () {
    setData(null) //Tiro todo os dados do usuario
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')

  }, [])



  async function getUser(token) {
    try {
      setLoading(true);
      setError(null);

      const { url, options } = USER_GET(token); // Pega a URL e opções
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Erro ao buscar dados do usuário"); // Força o erro caso a resposta não seja ok
      }
      const json = await response.json();
      setData(json); // Salva os dados do usuário
      setLogin(true); // Define como logado
    } catch (err) {
      setError(err.message); // Captura o erro
      setLogin(false);
    } finally {
      setLoading(false); // Encerra o estado de carregamento
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null); // Limpa o erro anterior
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Usuário ou senha inválidos"); // Força o erro em caso de resposta 404
      }
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message); // Seta a mensagem de erro
      setLogin(false); // Mantém o usuário não logado
    } finally {
      setLoading(false); // Para o estado de carregamento
    }
  }
  
  //Função para logar automatico
  useEffect(() => {async function autoLogin() {
    const token = window.localStorage.getItem("token");
    if (token) {
      try {
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Token inválido");
        await getUser(token);
      } catch (err) {
        setError(err.message);  // Defina o erro aqui
        userLogout();
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false)
    }
  }
    autoLogin();
  }, [userLogout]);



  return (
    <UserContext.Provider value={{ userLogin, data, userLogout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};
