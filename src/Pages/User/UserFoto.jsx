import React, { useEffect, useState } from "react";
import styles from "./UserFoto.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Error from "../../Components/UI/Error";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "../../Utils/Api";

const UserFoto = () => {
  const nome = useForm("nome");
  const peso = useForm("number");
  const idade = useForm("number");
  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();


  //Apos postar a foto,  redireciona para a página de perfil

  useEffect(() =>{
    if(data)  navigate("/conta")
  },	[data, navigate])

  const [img, setImg] = useState({});

 function handleSubmit(event) {
  event.preventDefault();
  const token = window.localStorage.getItem("token"); // Obtenha o token antes
  const formData = new FormData();
  
  formData.append("img", img.raw);
  formData.append("nome", nome.value);
  formData.append("peso", peso.value);
  formData.append("idade", idade.value);

  const { url, options } = PHOTO_POST(formData, token);
  request( url, options );
}

  function handleImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.fotoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="
      nome"
          {...nome}
          error={nome.error}
        />

        <Input
          label="Peso"
          type="number"
          name="peso"
          {...peso}
          error={peso.error}
        />
        <Input
          label="Idade"
          type="number"
          name="idade"
          {...idade}
          error={idade.error}
        />

        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImg}
        />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button> Enviar </Button>
        )}

        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          >
            {" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserFoto;
