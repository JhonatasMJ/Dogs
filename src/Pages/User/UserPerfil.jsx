import React from 'react';
 import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Helmet from 'react-helmet';

const UserPerfil = () => {

  const { user } = useParams();

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
