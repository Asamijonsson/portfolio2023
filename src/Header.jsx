import { useState, useEffect } from "react";
import style from "./Header.module.css";
import NavLink from "./NavLink";

const Header = ({language}) => {
  const [navOpen, setnavOpen] = useState();
  useEffect(() => {}, [language]);
  const toggleHamburger = () => {
    setnavOpen(!navOpen);
  };

  return (
    <nav className={style.nav}>
      
      <button className={style.toggleButton} onClick={toggleHamburger}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>
      {!navOpen ? (
        <nav className={style.navbar}>
          <NavLink />{" "}
        </nav>
      ) : (
        <nav className={style.navHamburger}>
          <NavLink />
        </nav>
      )}
    </nav>
  );
};

export default Header;
