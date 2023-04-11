
import { useState } from "react";
import style from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [navOpen, setnavOpen] = useState(false);

  const toggleHamburger = () =>{
setnavOpen(!navOpen)
  }

  return (
    <nav >
      
      {navOpen ?<div onClick={toggleHamburger} >   
      <NavLink/>
      </div>
  :  <NavLink/> }
          </nav>
  );
};


export default Header;
