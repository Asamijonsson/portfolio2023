import CategoryList from "./CategoryList";
import profile1 from "../image/profile1.png";
import style from "./Works.module.css"
const Works = ({ menu }) => {
  return (
    <div>
        <img className={style.img} src={profile1} alt="" />
      <CategoryList menu={menu} />
    </div>
  );
};

export default Works;
