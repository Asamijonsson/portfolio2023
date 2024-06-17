// import Home from "./Home"
import colorstyle from "../Color.module.css"
import style from "./Contact.module.css"
const Contact =()=>{
    return(  
        <div role="form" id="main-content" aria-label="Contact imformation">
                <p className={style.bartext}>This page is mock-up</p>
           <form method="POST" action="https://formsubmit.co/momoji303@gmail.com" className={style.form}>
                    <h3 className={colorstyle.primary}>Send Message</h3>
            <input className={style.input} type="text" id="inp" aria-required="true" aria-roledescription="input" placeholder="Subject" required/>
            <input className={style.email} type="email" name="email" placeholder="E-mail" required/>
            <input className={style.textarea} type="text" name="message" placeholder="Write your message here" id="inp"  aria-required="true" aria-roledescription="input" required/>
            <button type="submit" className={style.button} >Send</button>
                    </form> 
            </div>
  
    )
}

export default Contact;
