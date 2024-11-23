import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import useFetch from '../../Hooks/useFetch'
import { STATES_GET } from '../../Utils/Api';
import Loading from '../../Components/UI/Loading';
import Error from '../../Components/UI/Error';
const UserGraph  = React.lazy(() => import('./UserGraph')) //Para importar algo pesado que nao usa no site todo
 
const UserStats = () => {
  const {data, error, loading, request} = useFetch();

  useEffect (() =>{
    async function getData() {
      const {url, options} = STATES_GET();
      await request (url, options)
    }
    getData();
  },[request]);


  if(loading) return <Loading/>
  if (error) return <Error error={error}/>
  if (data)
  return (
    <React.Suspense fallback={<div></div>}>
    <Helmet>
        <title>Dogs | Estatísticas </title>
        <meta name="description" content="Página de Login" />
      </Helmet>
        <UserGraph data={data}/>
    </React.Suspense>
  );
  else return null
}

export default UserStats