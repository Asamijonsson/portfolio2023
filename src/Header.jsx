import { useState } from "react";
import name from "../src/image/Name.png";
import style from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);

  const toggleHamburger = () => {
    setnavOpen(!navOpen);
  };

  return (
    <nav className={style.nav}>
      <img src={name} alt="" className={style.img} />
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
