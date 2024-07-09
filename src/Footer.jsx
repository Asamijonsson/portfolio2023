import style from "./Footer.module.css"
import colourstyle from "./Color.module.css"
const Footer =()=>{
    return(
        <>
        <nav className={style.footerNav}>
    
        <h3 className={colourstyle.primary}>ALL FINAL FANTASY XIV CONTENT IS PROPERTY OF
        Square Enix Co., Ltd., and Square Enix, Inc. </h3>
        </nav>
        </>
    )
}
export default Footer