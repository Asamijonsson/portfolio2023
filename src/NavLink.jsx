import { Link } from "react-router-dom";
import { React } from "react";
import style from "./NavLink.module.css";
import colorstyle from "./Color.module.css";

const NavLink = () => {
  return (
    <div className={style.navbar}>
    
        <Link to={"/"} className={style.link} reloadDocument>
          <h3 className={colorstyle.primary}>Home</h3>
        </Link>
        <Link to={"/subscribe"} className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>Subscribe(mock-up)</h3>
      </Link>

      <Link to={"/works"} className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>Works(mock-up)</h3>
      </Link>

      <Link to={"/aboutme"} className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>About</h3>
      </Link>
      <Link to={"/contact"} className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>Contact</h3>
      </Link>
    </div>
  );
};
export default NavLink;
