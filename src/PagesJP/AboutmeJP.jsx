import { Link } from "react-router-dom";
import style from "./AboutmeJP.module.css";
import aboutme from "../image/aboutme.JPG";
import Knowledge from "../Pages/Knowledge";

const AboutmeJP =()=>{
    return(
        <div>
 <div className={style.background}>
      <img src={aboutme} alt="" className={style.img} />
      <Link to={"/aboutme"} className={style.aboutmeJpLink}>English</Link>
      <article>
        <h2>About me</h2>
        <div className={style.text}>
          <p>
            ご覧いただきありがとうございます。 このウェブサイトはわたしが今までフロントエンドの勉強習作ですが
            調理師として海外で10年ほど仕事もしていました。“作品”の中にある写真は実際に自分で作ってきたものです。
            このサイトやわたしの作品に興味を持ってくださったなら幸いです。
            御用の際はコンタクトからメッセージを送ってください。
            
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