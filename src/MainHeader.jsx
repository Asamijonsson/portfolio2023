import { React } from "react";
import Header from "./Header";

import name from "../src/image/Name.png";

import style from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={style.mainheader}>
      <img src={name} alt="" className={style.img} />
      <Header />
    </div>
  );
};
export default MainHeader;
