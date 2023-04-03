// import Profil from "../image/Profil.png"
import foodmain from "../image/foodmain.jpg"
import style from "./Home.module.css"

const Home =()=>{
  
    return(
    <div className={style.background} id="main-content">
        {/* <img src={Profil} alt=""/> */}
          <img src={foodmain} alt="" className={style.img}/>
      
    </div>
    )
}
export default Home