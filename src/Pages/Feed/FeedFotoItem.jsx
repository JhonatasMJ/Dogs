import React from 'react'
import styles from '../Feed/FeedFotosItems.module.css'
import { Eye } from 'lucide-react'
import Image from '../../Components/UI/Image';

const FeedFotoItem = ({photo, setModalFoto}) => {

  function handleClick() {
    setModalFoto(photo);
  }


  return (
   
      <li className={styles.foto} onClick={handleClick}>
        <Image src={photo.src} alt={photo.title} /> {/* Pego a foto */}
        <span>{photo.acessos}
          <Eye color='#fff' size={18}/>
          </span>  {/* Pego a quantidade de acessos */}

      </li>
  )
}

export default FeedFotoItem
