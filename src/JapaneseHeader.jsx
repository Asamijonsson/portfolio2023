import { useState } from "react";
import style from "./Header.module.css";
import JPNavLink from "./NavLinkJP";

const Header = ({language}) => {
  const [navOpen, setnavOpen] = useState(false);

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
          <JPNavLink language={language}/>{" "}
        </nav>
      ) : (
        <nav className={style.navHamburger}>
          <JPNavLink />
        </nav>
      )}
    </nav>
  );
};

export default Header;
