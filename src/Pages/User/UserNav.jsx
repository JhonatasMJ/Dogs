import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import {
  ChartNoAxesColumnIncreasing,
  LayoutGrid,
  LogOut,
  Plus,
} from "lucide-react";
import styles from "./UserNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width:40rem)");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false); // Fecha o menu ao mudar a rota
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu ? styles.mobileButtonActive : ""}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu ? styles.navMobileActive : ''}`}>
        <NavLink to="/conta" end className={({ isActive }) => (isActive ? styles.active : "")}>
          <LayoutGrid className={styles.icon} />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas" className={({ isActive }) => (isActive ? styles.active : "")}> {/* //Função isActive do proprio navlink, se estiver aitvo, vai mudar meu icone */}
          <ChartNoAxesColumnIncreasing className={styles.icon} />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar" className={({ isActive }) => (isActive ? styles.active : "")}>
          <Plus className={styles.icon} />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <LogOut className={styles.icon} />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserNav;
