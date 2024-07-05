import { Link } from "react-router-dom";
import { React } from "react";
import { FaHome } from "react-icons/fa";
import style from "./NavLink.module.css";
import colorstyle from "./Color.module.css";

const NavLink = () => {
  return (
    <div className={style.navbar}>

      <Link to="/" className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}><FaHome /></h3>
      </Link>
      <Link id="ffxiv" to="/ffxiv" className={style.link}reloadDocument>
      <h3 className={colorstyle.primary}>Look up FFXIVitems!</h3>
      </Link>   
      {/* <Link id="marketBoard" to="marketboard" className={style.link}reloadDocument>
      <h3 className={colorstyle.primary}>Look up Market Board(coming soon)</h3>
      </Link>    */}
      <Link to="/pokemon" className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>Look up Pokemon</h3>
      </Link>
      <Link to="/aboutme" className={style.link} reloadDocument>
        <h3 className={colorstyle.primary}>About</h3>
      </Link>
    </div>
  );
};
export default NavLink;
