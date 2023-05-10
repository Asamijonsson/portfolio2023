import { Link } from "react-router-dom";
import { React } from "react";
import { motion } from "framer-motion";
import style from "./NavLink.module.css";
import colorstyle from "./Color.module.css";

const NavLink = () => {
  return (
    <div className={style.navbar}>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link to={"/"} className={style.link} reloadDocument>
          <h3 className={colorstyle.primary}>Home</h3>
        </Link>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link to={"/works"} className={style.link} reloadDocument>
          <h3 className={colorstyle.primary}>Works</h3>
        </Link>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link to={"/aboutme"} className={style.link} reloadDocument>
          <h3 className={colorstyle.primary}>About Me</h3>
        </Link>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link to={"/contact"} className={style.link} reloadDocument>
          <h3 className={colorstyle.primary}>Contact</h3>
        </Link>
      </motion.div>
    </div>
  );
};
export default NavLink;
