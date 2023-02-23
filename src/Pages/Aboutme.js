import style from "./Aboutme.module.css"
import aboutme from "../image/aboutme.JPG"
// import colorstyle from "../Color.module.css"

const Aboutme =()=>{
    return(
        <div className={style.background}>
            <img src={aboutme} alt="" className={style.img}/>
            <article>
                <h2>About me</h2>
            <p>Hello! My name is Asami, I'm a frontend developer and also chef from Japan. I built this website to showcase my frontend development skills. <br></br>
            The website is Screen Reader-friendly, so please feel free to test it using your Screen Reader application.<br></br>
                This is just my portfolion and all photos and artwork are copyrighted to me, so please do not use them without permission.<br></br>
                However, if you like my website and are interested in using it for your restaurant, <br></br>
                or if you would like to try my food based on the photos, please don't hesitate to contact me!
            </p>

            </article>
           
        </div>
    )
}

export default Aboutme