import style from "./Ramen.module.css"
import ramen1 from "../image/ramen/ramen1.JPG"
import ramen2 from "../image/ramen/ramen2.JPG"
import ramen3 from "../image/ramen/ramen3.JPG"
import ramen4 from "../image/ramen/ramen4.JPG"

const ramen = ({ramenMenu})=>{
    const ramenList = ramenMenu.map((i) => (
        <li className={style.ramenlist}>
          <p id="sect4" role="region" aria-labelledby="btn4">
            {i.name}
          </p>
        </li>
         ));
    return(
        <>
         <div className={style.allimg}>
        <img src={ramen1} alt="" className={style.img} />
        <img src={ramen3} alt="" className={style.img} />
        <img src={ramen2} alt="" className={style.img} />
        <img src={ramen4} alt="" className={style.img} />
        
      </div>
        <p>{ramenList}</p>
        </>
    )
   
}
export default ramen