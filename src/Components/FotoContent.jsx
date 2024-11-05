import React from 'react'
import styles from '../Components/FotoContent.module.css'

import FotoComentarios from './FotoComentarios';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const FotoContent = ({data}) => {

    const {photo, comments} = data;

  return (
    <div className={styles.foto}>
        <div className={styles.img}>
            <img src={photo.src} alt={photo.title} />
        </div>
        <div className={styles.details}>
            <div>
                <p className={styles.author}> 
                    <Link to={`/perfil/${photo.author}`}> @{photo.author} </Link>  
                    <span className={styles.visualizacao}>
                        <Eye size={16}/>
                        {photo.acessos}
                        </span>
                </p>
                <h1 className='title'>
                    <Link to={`/fotos/${photo.id}`}>{photo.title}</Link>
                </h1>
                <ul className={styles.attributes}>
                    <li>{photo.peso} kg</li>
                    <li>{photo.idade === 1 ? 'ano' : `${photo.idade} anos` }</li>
                </ul>
            </div>
        </div>
        <FotoComentarios id={photo.id} comments={comments}/>
    </div>
  )
}

export default FotoContent
