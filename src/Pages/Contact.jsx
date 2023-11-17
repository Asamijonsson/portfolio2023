import Home from "./Home"
import colorstyle from "../Color.module.css"
import style from "./Contact.module.css"
const Contact =()=>{
    return(
        <div role="form" id="main-content" aria-label="Contact imformation">
            <form action="https://formsubmit.co/momoji303@gmail.com" method="POST">
            <h3 className={colorstyle.primary}>Send message</h3>
            {/* <label className={style.title} for="inp" aria-labelledby="inp">Title</label><br /> */}
            <input type="hidden" name="_next" value={<Home/>}/>
            {/* <input className={style.input} type="text" id="inp" aria-required="true" aria-roledescription="input" required/><br /> */}
            <input type="email" name="email" placeholder="email" required/>
            <input type="text" name="subject" placeholder="subject" required/>
            <textarea  className={style.textarea} id="inp" cols="30" rows="10" aria-required="true" aria-roledescription="textarea" required></textarea><br />
            <button type="submit" className={style.button} >Send</button>
            </form>
        </div>
    )
}

export default Contact;
