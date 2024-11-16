import style from "./Home.module.css";
import Weather from "../components/Weather";

const Home = () => {
  return (
    <>
      <div className={style.text}>
        Hi, Welcome to my website! This website is my hobby project. Please
        enjoy!
        {/* Feature update: I will implement a market board from FFXIV, where you can see item prices.  */}
      </div>
      <Weather />
    </>
  );
};

export default Home;
