import React, { useEffect } from 'react'
import styles from '../Feed/FeedModal.module.css'
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Utils/Api';
import Error from '../../Components/UI/Error';
import Loading from '../../Components/UI/Loading';
import FotoContent from '../../Components/Foto/FotoContent';

const FeedModal = ({photo, setModalFoto}) => {

  
  const {data, error, request, loading} = useFetch();


  //Fecha o modal ao clicar do lado de fora
  function handleOutsideClick(event){ 
    if(event.target === event.currentTarget){
      setModalFoto(null)
    }
  }


  useEffect(() =>{
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  },[photo, request])

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <FotoContent data={data}/>}
    </div>
  )
}

export default FeedModal
