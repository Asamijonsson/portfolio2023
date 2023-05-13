import { useState } from "react";
import { motion } from "framer-motion";
import style from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  const [navOpen, setnavOpen] = useState();

  const toggleHamburger = () => {
    setnavOpen(!navOpen);
  };

  return (
    <nav className={style.nav}>
      <button className={style.toggleButton} onClick={toggleHamburger}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>
      {!navOpen ? (
        <nav className={style.navbar}>
          <NavLink />{" "}
        </nav>
      ) : (
        <motion.nav
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <NavLink />
        </motion.nav>
      )}
    </nav>
  );
};

export default Header;
