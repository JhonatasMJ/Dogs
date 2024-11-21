import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Helmet from 'react-helmet';

const UserPerfil = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get('user'); // Obtém o valor do parâmetro 'user'

  return (
    <section className="container mainContainer">
       <Helmet>
        <title>Dogs | Perfil </title>
        <meta name="description" content="Página de Login" />
      </Helmet>
      <h1 className="title"> {user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserPerfil;
