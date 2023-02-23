
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import colorstyle  from "./Color.module.css"

const Header = () => {

  
  return (
    <nav className={style.flexbox}>
      
      <Link to={"/"} className={style.link}>
        <h3 className={colorstyle.primary}>Home</h3>
      </Link>
     
      <Link to={"/works"}  className={style.link}>
        <h3 className={colorstyle.primary}>Works</h3>
      </Link>
    
      <Link to={"/aboutme"} className={style.link}>
        <h3 className={colorstyle.primary}>About Me</h3>
      </Link>
      <Link to={"/contact"} className={style.link}>
        <h3 className={colorstyle.primary}>Contact</h3>
      </Link>
    </nav>
  );
};


export default Header;
