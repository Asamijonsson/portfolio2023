import { React } from "react";
import Header from "./Header";

import style from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={style.mainheader}>
           <Header />
    </div>
  );
};
export default MainHeader;
