import style from "./Footer.module.css"
import colourstyle from "./Color.module.css"
const Footer =()=>{
    return(
        <>
        <nav className={style.footerNav}>
    
        <h3 className={colourstyle.primary}>ALL FINAL FANTASY XIV CONTENT IS PROPERTY OF
        © 2024 SQUARE ENIX CO., LTD. All Rights Reserved. FINAL FANTASY XIV © SQUARE ENIX CO., LTD.</h3>
        </nav>
        </>
    )
}
export default Footer