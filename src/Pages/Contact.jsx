import Home from "./Home"
import colorstyle from "../Color.module.css"
import style from "./Contact.module.css"
const Contact =()=>{
    return(  
        <div role="form" id="main-content" aria-label="Contact imformation">
           <form method="POST" action="https://formsubmit.co/momoji303@gmail.com" enctype="multipart/form-data">
            <h3 className={colorstyle.primary}>Send message</h3>
            <label className={style.title} for="inp" aria-labelledby="inp">Title</label><br />
            <input type="hidden" name="_next" value="https://asamijonsson.azurewebsites.net.html"/>
            <input className={style.input} type="text" id="inp" aria-required="true" aria-roledescription="input" required/><br />
            <input type="email" name="email" placeholder="email" required/>
            <input type="text" name="subject" placeholder="subject" required/>
            <textarea  className={style.textarea} id="inp" cols="30" rows="10" aria-required="true" aria-roledescription="textarea" required></textarea><br />
            <button type="submit" className={style.button} >Send</button>
            </form> 
          </div>
         
    //     <div>
    // <form method="POST" action="https://formsubmit.co/momoji303@gmail.com" enctype="multipart/form-data">
    // <input type="email" name="email" placeholder="Your email"/>
    // <textarea name="message" placeholder="Details of your problem"></textarea>
    // <input type="file" name="attachment" accept="image/png, image/jpeg"/>
    // <button type="submit">Send Test</button>
    // </form>
    //     </div>

  
    )
}

export default Contact;
