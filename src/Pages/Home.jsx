import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import foodmain from "../image/foodoriginal.re.jpg";

import style from "./Home.module.css";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className={style.herobackground} id="main-content">
      <legend>
      <img src={foodmain} alt="" className={style.img} />
      </legend>
      <section className={style.secondsecbackground}>
<h3>Welcome to my website!</h3>

  <motion.div  onClick={() => setSelectedId()}>
    <motion.h5>Hello</motion.h5>
    <motion.h2>welcome</motion.h2>
  </motion.div>


<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>hello</motion.h5>
      <motion.h2>welcome</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
<article></article>
      </section>
    </div>
  );
};
export default Home;
