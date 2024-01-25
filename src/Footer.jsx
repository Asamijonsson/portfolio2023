import style from "./Footer.module.css"
import colourstyle from "./Color.module.css"
const Footer =()=>{
    return(
        <>
        <nav className={style.footerNav}>
    
        <h3 className={colourstyle.primary}>©Asami Jönsson 2024</h3>
        </nav>
        </>
    )
}
export default Footer