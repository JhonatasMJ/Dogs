import React, { useContext } from 'react'
import styles from './FotoContent.module.css'

import FotoComentarios from './FotoComentarios';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { UserContext } from '../../Context/UserContext';
import FotoDelete from './FotoDelete';

const FotoContent = ({data}) => {
    const user = useContext(UserContext)
    const {photo, comments} = data;

  return (
    <div className={styles.foto}>
        <div className={styles.img}>
            <img src={photo.src} alt={photo.title} />
        </div>
        <div className={styles.details}>
            <div>
                <p className={styles.author}>  {/* Se o data usernaem de quem estiver logado for igual ao autor da foto, vai exibir o botão de deletar */}
                    {user.data && user.data.username === photo.author ? <FotoDelete id={photo.id}/> : 
                
                    <Link to={`/perfil/${photo.author}`}> @{photo.author} </Link> 
                    }
 
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
