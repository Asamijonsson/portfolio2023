import style from "./Aboutme.module.css";
import aboutme from "../image/aboutme.JPG";
import Knowledge from "./Knowledge";
import { Link } from "react-router-dom";
// import colorstyle from "../Color.module.css"

const Aboutme = () => {
  return (
    <div className={style.background}>
      <img src={aboutme} alt="" className={style.img} />
      <Link to={"/aboutmejp"} className={style.aboutmeLink}>Japanese</Link>
      <article>
        <h2>About me</h2>
                <p className={style.maintext}>
            Hello! My name is Asami, I'm a frontend developer and also chef from
            Japan. I built this website to showcase my frontend development
            skills. The website is Screen Reader-friendly, so please feel free
            to test it using your Screen Reader application. This is just my
            portfolio and all photos and artwork are copyrighted to me, so
            please do not use them without permission. However, if you like my
            website and are interested in using it for your restaurant, or if
            you would like to try my food based on the photos, please don't
            hesitate to contact me!
          </p>
              </article>

      <article >
        <h2 className={style.aboutmeArticle}>I use these applications and languages for buiding this website</h2>
      <Knowledge/>
      </article>
    </div>
  );
};

export default Aboutme;
