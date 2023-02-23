import colorstyle from "../Color.module.css"
import style from "./Contact.module.css"
const Contact =()=>{
    return(
        <div role="form" id="contact-info" aria-label="Contact imformation">
            <h3 className={colorstyle.primary}>Send message</h3>
            <label className={style.title} for="inp" aria-labelledby="inp">Title</label><br />
            <input className={style.input} type="text" id="inp" aria-required="true" aria-roledescription="input" required/><br />
            <textarea  className={style.textarea} id="inp" cols="30" rows="10" aria-required="true" aria-roledescription="textarea" required></textarea><br />
            <button className={style.button} >Send</button>
        </div>
    )
}

export default Contact