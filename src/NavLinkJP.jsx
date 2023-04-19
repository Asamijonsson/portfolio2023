import { Link } from "react-router-dom";

import style from "./NavLink.module.css";
import colorstyle from "./Color.module.css";
const NavLinkJP = () => {
  
  return (
    <div className={style.navbar}>
      <Link to={"/"} className={style.link}>
        <h3 className={colorstyle.primary}>Home</h3>
      </Link>

      <Link to={"/works"} className={style.link}>
        <h3 className={colorstyle.primary} >
          作品
        </h3>
      </Link>

      <Link to={"/aboutmejp"} className={style.link}>
        <h3 className={colorstyle.primary}>About Me</h3>
      </Link>
      <Link to={"/contactjp"} className={style.link} >
        <h3 className={colorstyle.primary}>コンタクト</h3>
      </Link>
    </div>
  );
};
export default NavLinkJP;
