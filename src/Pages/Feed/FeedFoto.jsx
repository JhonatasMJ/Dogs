import  { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Utils/Api';
import Error from '../../Components/UI/Error';
import Loading from '../../Components/UI/Loading';
import FeedFotoItem from './FeedFotoItem';
import styles from './FeedFotos.module.css'

const FeedFoto = ({page,user, setModalFoto, setInfinite}) => {

  const {data, loading, error, request} = useFetch();

  useEffect(() =>{
    async function fetchPhotos() {
      const total = 6
      const {url, options} = PHOTOS_GET({page, total, user}); //Puxa as fotos
      const  {response, json} = await request(url, options)
      if (response && response.ok && json.length < total  ) setInfinite(false) 
    }
    fetchPhotos()
  },[request, user, page, setInfinite])


  if(error) return <Error error={error}/>
  if (loading) return <Loading/>
  if (data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => 
         <FeedFotoItem
          photo={photo} 
          key={photo.id} 
          setModalFoto={setModalFoto}
          
          />)} {/* Pego todas as fotos */}
    </ul>
  )
  else return null
}

export default FeedFoto;