import style from "./Sushi.module.css"
import sushi1 from "../image/sushi/sushi1.JPG"
import sushi2 from "../image/sushi/sushi2.JPG"
import sushi3 from "../image/sushi/sushi3.JPG"
import sushi4 from "../image/sushi/sushi4.JPG"

const sushi = ({sushiMenu})=>{
    const sushiList = sushiMenu.map((i) => (
        <li className={style.sushilist}>
          <p id="sect3" role="region" aria-labelledby="btn3">
            {i.name}
          </p>
        </li>
         ));
    return(
        <>
         <div className={style.allimg}>
        <img src={sushi1} alt="" className={style.img} />
        <img src={sushi3} alt="" className={style.img} />
        <img src={sushi2} alt="" className={style.img} />
        <img src={sushi4} alt="" className={style.img} />
        
      </div>
        <p>{sushiList}</p>
        </>
    )
}
export default sushi