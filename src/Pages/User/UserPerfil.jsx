import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Feed from '../Feed/Feed';

const UserPerfil = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get('user'); // Obtém o valor do parâmetro 'user'

  return (
    <section className="container mainContainer">
      <h1 className="title"> {user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserPerfil;
