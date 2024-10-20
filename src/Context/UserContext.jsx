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
    navigate('/login')
  }, [navigate])



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
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password }); // Pega a URL e opções do token
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Usuário inválido"); // Força o erro caso a resposta não seja ok
      }
      const { token } = await response.json();
      window.localStorage.setItem("token", token); // Salva o token no localStorage
      await getUser(token); // Busca os dados do usuário após o login
      navigate('/conta')
    } catch (err) {
      setError(err.message); // Captura o erro
      setLogin(false);
    } finally {
      setLoading(false); // Encerra o estado de carregamento
    }
  }

  
  //Função para logar automatico
  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token"); //Pego o token
      if (token) {
        //Se token existir

        try {
          setError(null);
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if(!response.ok) throw new Error('Token inválido');
          await getUser(token)
        } catch (err) {
          userLogout(); //Reseta o usuario do 0
        } finally {
          setLoading(false);
        }
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
