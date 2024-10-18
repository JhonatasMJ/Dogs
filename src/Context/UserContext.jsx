import React, { createContext, useState } from 'react';
import { TOKEN_POST, USER_GET } from '../Utils/Api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null); // Dados do usuário
  const [login, setLogin] = useState(null); // Verificar se está logado ou não
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  async function getUser(token) {
    try {
      setLoading(true);
      setError(null);

      const { url, options } = USER_GET(token); // Pega a URL e opções
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do usuário'); // Força o erro caso a resposta não seja ok
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
      setLoading(true);
      setError(null);

      const { url, options } = TOKEN_POST({ username, password }); // Pega a URL e opções do token
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Erro ao fazer login'); // Força o erro caso a resposta não seja ok
      }
      const { token } = await response.json();
      window.localStorage.setItem('token', token); // Salva o token no localStorage
      await getUser(token); // Busca os dados do usuário após o login
    } catch (err) {
      setError(err.message); // Captura o erro
      setLogin(false);
    } finally {
      setLoading(false); // Encerra o estado de carregamento
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data, login, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
