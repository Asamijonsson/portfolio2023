import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foodmain from "../image/foodoriginal.re.jpg";

import style from "./Home.module.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div  id="main-content">
      <legend className={style.herobackground}>
        <img src={foodmain} alt="" className={style.img} />
      </legend>
      <article className={style.article}>
        <motion.div
                 Layout
          onClick={() => setIsOpen(!isOpen)}
          className={style.card}
          style={{
            borderRadius: "1rem",
            boxshadow: "0px 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <motion.h2 Layout="position" className={style.welcomeText}>Welcome to my website! </motion.h2>
          <AnimatePresence>
          {isOpen && (
            <motion.section
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
              <p className={style.articleText}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus minima placeat accusamus illo cumque temporibus
                voluptates culpa neque odio natus, excepturi fuga, dolores
                dolorum esse voluptatum quia dignissimos nisi est.
              </p>
            </motion.section>
          )}
          </AnimatePresence>
        </motion.div>
       </article>
     
    </div>
  );
};
export default Home;
