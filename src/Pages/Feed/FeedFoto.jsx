import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Utils/Api';
import Error from '../../Components/UI/Error';
import Loading from '../../Components/UI/Loading';
import FeedFotoItem from './FeedFotoItem';
import styles from './FeedFotos.module.css'

const FeedFoto = () => {

  const {data, loading, error, request} = useFetch();

  useEffect(() =>{
    async function fetchPhotos() {
      const {url, options} = PHOTOS_GET({pages: 1, total: 6, user: 0}); //Puxa as fotos
      const  {response, json} = await request(url, options)
    }
    fetchPhotos()
  },[request])


  if(error) return <Error error={error}/>
  if (loading) return <Loading/>
  if (data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo =>  <FeedFotoItem photo={photo} key={photo.id}/>)} {/* Pego todas as fotos */}
    </ul>
  )
  else return null
}

export default FeedFoto;