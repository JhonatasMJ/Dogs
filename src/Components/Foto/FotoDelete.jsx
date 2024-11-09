import React from "react";
import styles from "./FotoDelete.module.css";
import { PHOTO_DELETE } from "../../Utils/Api";
import useFetch from "../../Hooks/useFetch";

const FotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar essa foto?"); //Confirma se deseja deletar a foto
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload(); //Faz reload na pagina
    }
  }

  return (
    <>
      {loading ? (
        <button  disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default FotoDelete;
