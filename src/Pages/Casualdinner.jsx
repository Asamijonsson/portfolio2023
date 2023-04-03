import style from "./Casualdinner.module.css";
import casual1 from "../image/casualdinner/casual1.JPG";
import casual2 from "../image/casualdinner/casual2.JPG";
import casual3 from "../image/casualdinner/casual3.JPG";
import casual5 from "../image/casualdinner/casual5.JPG";

const casualdinner = ({ dinnerMenu }) => {
  const casualDinnerFoods = dinnerMenu.map((i) => (
    <li className={style.casualdinnerlist}>
      <p id="sect2" role="region" aria-labelledby="btn2">
        {i.name}
      </p>
    </li>
  ));

  console.log(dinnerMenu);
  return (
    <>
      <div className={style.allimg}>
        <img src={casual1} alt="" className={style.img} />
        <img src={casual3} alt="" className={style.img} />
        <img src={casual5} alt="" className={style.img} />
        <img src={casual2} alt="" className={style.img} />
      </div>
      <ul>{casualDinnerFoods}</ul>
    
    </>
  );
};

export default casualdinner;
