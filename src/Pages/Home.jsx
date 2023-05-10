
import foodmain from "../image/foodoriginal.re.jpg";

import style from "./Home.module.css";

const Home = () => {
  
  return (
    <div className={style.herobackground} id="main-content">
      <legend>
      <img src={foodmain} alt="" className={style.img} />
      </legend>
      <section className={style.secondsecbackground}>
<h3>Welcome to my website!</h3>


<article></article>
      </section>
    </div>
  );
};
export default Home;
