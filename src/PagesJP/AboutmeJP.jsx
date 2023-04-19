import style from "./AboutmeJP.module.css";
import aboutme from "../image/aboutme.JPG";
import Knowledge from "../Pages/Knowledge";
const AboutmeJP =()=>{
    return(
        <div>
 <div className={style.background}>
      <img src={aboutme} alt="" className={style.img} />
      <article>
        <h2>About me</h2>
        <div className={style.text}>
          <p>
            ご覧いただきありがとうございます。 My name is Asami, I'm a frontend developer and also chef from
            Japan. I built this website to showcase my frontend development
            skills. The website is Screen Reader-friendly, so please feel free
            to test it using your Screen Reader application. This is just my
            portfolio and all photos and artwork are copyrighted to me, so
            please do not use them without permission. However, if you like my
            website and are interested in using it for your restaurant, or if
            you would like to try my food based on the photos, please don't
            hesitate to contact me!
          </p>
        </div>
      </article>

      <article >
        <h2 className={style.aboutmeArticle}>I use these applications and languages for buiding this website</h2>
      <Knowledge/>
      </article>
    </div>
        </div>
    )
}
export default AboutmeJP