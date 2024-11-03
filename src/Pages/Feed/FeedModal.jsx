import React, { useEffect } from 'react'
import styles from '../Feed/FeedModal.module.css'
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Utils/Api';
import Error from '../../Components/UI/Error';
import Loading from '../../Components/UI/Loading';
import FotoContent from '../../Components/FotoContent';

const FeedModal = ({photo}) => {

  
  const {data, error, request} = useFetch();



  useEffect(() =>{
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  },[photo, request])

  return (
    <div className={styles.modal}>
      {error && <Error error={error}/>}
      {Loading && <Loading/>}
      {data && <FotoContent data={data}/>}
    </div>
  )
}

export default FeedModal
