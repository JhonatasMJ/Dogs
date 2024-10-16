import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dog from "../Assets/dogs.svg";
import { User } from "lucide-react";


const Header = () => {
  return (
    <header className={styles.header}>
      
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          {" "}
          <img src={Dog} alt="Logotipo" />{" "}
        </Link>
   
        <Link to="/login" className={styles.login}>
        Login / Criar
        <User size={22} color="#333"/>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
