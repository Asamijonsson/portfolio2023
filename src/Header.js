
import { Link } from "react-router-dom";
// import { useNavigate } from "react";
import style from "./Header.module.css";
import colorstyle  from "./Color.module.css"

const Header = () => {
  // const navigate = useNavigate();
  // const handleFocus = () => {
  //   this.skipLink.focus();
  // }
  // console.log(handleFocus)
  return (
    <nav className={style.flexbox}>
      
      <Link to={"/"} className={style.link} reloadDocument >
        <h3 className={colorstyle.primary}>Home</h3>
      </Link>
     
      <Link to={"/works"}  className={style.link} 
      // onClick={(e) => {
      //     e.preventDefault();
      //     navigate(-1);
      //   }}
        reloadDocument>
        <h3 className={colorstyle.primary} reloadDocument>Works</h3>
      </Link>
    
      <Link to={"/aboutme"} className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>About Me</h3>
      </Link>
      <Link to={"/contact"} className={style.link} reloadDocument >
        <h3 className={colorstyle.primary}>Contact</h3>
      </Link> 
      
      
    </nav>
  );
};


export default Header;
