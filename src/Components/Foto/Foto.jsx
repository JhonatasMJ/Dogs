import  { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET2 } from '../../Utils/Api';
import Error from '../UI/Error';
import Loading from '../UI/Loading';
import FotoContent from './FotoContent';


const Foto = () => {
   const {id} = useParams();
   const {data, loading, error, request} = useFetch()

   useEffect(() => {
    const {url, options} = PHOTO_GET2(id);
    request (url, options)
   }, [id, request]) 


   if(error) return <Error error={error}/>;
   if (loading) return <Loading/>
   if (data)
  return (
    <section className='container mainContainer'>
        <FotoContent single={true} data={data}/>
    </section>
  )
  else return null;
};

export default Foto