import { useState } from "react";
import Header from "./Header";
import JapaneseHeader from "./JapaneseHeader"
import name from "../src/image/Name.png";
// import styles from "./Pages/Button.module.css"
import style from "./MainHeader.module.css"
const MainHeader = () => {
    const [language, setLanguage] = useState(false);
    const handleChangeLanguage = () => {
        setLanguage(!language);
        console.log(language)
      };
    
  return(<div className={style.mainheader}>
    <img src={name} alt="" className={style.img} />
    
    {!language?
     <Header/>:<JapaneseHeader/>}
     <button onClick={handleChangeLanguage} className={style.button}>JP/EN</button>
     </div>
  )};
export default MainHeader;
