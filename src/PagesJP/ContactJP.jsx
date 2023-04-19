import Home from "../Pages/Home"
import colorstyle from "../Color.module.css"
import style from "./ContactJP.module.css"
const Contact =()=>{
    return(
        <div role="form" id="main-content" aria-label="Contact imformation">
            <form action="https://formsubmit.co/momoji832@hotmail.com" method="POST">
            <h3 className={colorstyle.primary}>メッセージを送る</h3>
            <label className={style.title} for="inp" aria-labelledby="inp">タイトル</label><br />
            <input type="hidden" value={<Home/>}/>
            <input className={style.input} type="text" id="inp" aria-required="true" aria-roledescription="input" required/><br />
            <textarea  className={style.textarea} id="inp" cols="30" rows="10" aria-required="true" aria-roledescription="textarea" required></textarea><br />
            <button className={style.button} >Send</button>
            </form>
        </div>
    )
}

export default Contact