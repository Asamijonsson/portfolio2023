import { useState } from "react";
import { motion } from "framer-motion";
import style from "./Header.module.css";
import NavLink from "./NavLink";


const Header = ({ i, expanded, setExpanded }) => {
  const [navOpen, setnavOpen] = useState();
  const isOpen = i === expanded;

  const toggleHamburger = () => {
    setnavOpen(!navOpen);
  };

 
  return (
    <nav className={style.nav}>
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
        <motion.section
        initial={false}
        animate={{ backgroundColor: isOpen ? "#7eafac" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        >
        <motion.nav
        key="content"
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
          open: { opacity: 1, height: "auto" },
          collapsed: { opacity: 0, height: 0 }
        }}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
                <NavLink />
        </motion.nav>
        </motion.section>
      )}
    </nav>
  );
};

export default Header;
