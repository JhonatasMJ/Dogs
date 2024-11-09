import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import FotoComentariosForm from "./FotoComentariosForm";
import styles from "./FotoComentarios.module.css";

const FotoComentarios = (props) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(props.comments);
  const commentsSection = useRef(null)


  //Scrolla para o ultimo comentario
  useEffect (() =>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <FotoComentariosForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default FotoComentarios;
