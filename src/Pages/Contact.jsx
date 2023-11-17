// import Home from "./Home"
import colorstyle from "../Color.module.css"
import style from "./Contact.module.css"
const Contact =()=>{
    return(  
        <div role="form" id="main-content" aria-label="Contact imformation">
            
           <form method="POST" action="https://formsubmit.co/momoji303@gmail.com" enctype="multipart/form-data">
           <div className={style.form}>
            <h3 className={colorstyle.primary}>Send message</h3>
            <input className={style.input} type="text" id="inp" aria-required="true" aria-roledescription="input" placeholder="Subject" required/>
            <input className={style.email} type="email" name="email" placeholder="email" required/>
            <input className={style.textarea} type="text" name="message" placeholder="Write your message here" id="inp" cols="30" rows="10" aria-required="true" aria-roledescription="textarea" required/>
            <button type="submit" className={style.button} >Send</button>
            </div>
            </form> 
            </div>
  
    )
}

export default Contact;
