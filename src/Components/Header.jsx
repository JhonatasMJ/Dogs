import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../Assets/dogs.svg";
import { User } from "lucide-react";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { data} = useContext(UserContext); // Pegando os dados do usuário do contexto global

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <img src={Dog} alt="Logotipo" />
        </Link>

        {/* Verifica se há dados do usuário (se está logado) */}
        {data ? (
          <div className={styles.userSection}>
            <Link to="/conta" className={styles.login}>
              {data.nome}
              <User size={22} color="#333" />
            </Link>

          </div>
        ) : (
          <Link to="/login" className={styles.login}>
            Login
            <User size={22} color="#333" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
