import style from "./Aboutme.module.css";
// import aboutme from "../image/aboutme.JPG";
import Knowledge from "../components/Knowledge";
// import { Link } from "react-router-dom";
// import colorstyle from "../Color.module.css"

const Aboutme = () => {
  return (
    <div className={style.background}>
      {/* <img src={aboutme} alt="" className={style.img} /> */}
      {/* <Link to={"/aboutmejp"} className={style.aboutmeLink}>
        Japanese
      </Link> */}
      <article className={style.aboutme}>
        <h2 className={style.lubricant}>About me</h2>
        <p className={style.maintext}>
          Hello! My name is Asami, Thank you for visit my website. I'm a Front-end
          developer with a great interest in Javascript,
          ReactJS, HTML & CSS, UX Design, and a bit of backend NodeJS. Just now I'm studying
          Back-end, Python, dotnet with C#.
          Possesses a dedicated work ethic mind, with good communication
          skills. Multicultural with deep knowledge of both Swedish and
          Japanese cultures.
        </p>
      </article>

      <article className={style.aboutwebsite}>
        <h2 className={style.lubricant}>About this website</h2>
        <p className={style.maintext}>
          I built this website to showcase my frontend development
          skills both study and my hobby because I love Final Fantasy XIV! 
          For deploy my website, I use XIVAPI, 'A FINAL FANTASY XIV: Online REST API', Azure together with Github Action for CI/CD pipeline. I also used Azure DevOps for att understand pipeline in DevOps.
                 </p>
      </article>
      <article className={style.aboutmeKnowledge}>
        <h2>
          I use these applications and languages for buiding this website
        </h2>
        <Knowledge />
      </article>
    </div>
  );
};

export default Aboutme;
