import { useState } from "react";
import style from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);

  const toggleHamburger = () =>{
setnavOpen(!navOpen)

  }
 
  return (
    <div>
      <button className={style.toggleButton} onClick={toggleHamburger} >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        </button>
        {!navOpen? 
        <nav className={style.navbar}>
      <NavLink /> </nav>: 
        <nav className={style.navHamburger}>
      <NavLink/>
      </nav>
  }
       </div>
      
  );
};


export default Header;
