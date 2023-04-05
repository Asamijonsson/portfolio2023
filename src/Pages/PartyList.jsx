import style from "./PartyList.module.css";
import appetizer1 from "../image/appetizers/appetizer1.JPG";
import appetizer2 from "../image/appetizers/appetizer2.JPG";
import appetizer3 from "../image/appetizers/appetizer3.JPG";
import appetizer5 from "../image/appetizers/appetizer5.JPG";

const partyList = ({ partyMenu }) => {
  const appetizerList = partyMenu
    .filter((i) => i.categoryName === "appetizers")
    .map(({ categoryName, foodName }) => ({ categoryName, foodName }));

  const mainfoodList = partyMenu
    .filter((i) => i.categoryName === "main")
    .map(({ categoryName, foodName }) => ({ categoryName, foodName }));

  const dessertList = partyMenu
    .filter((i) => i.categoryName === "dessert")
    .map(({ categoryName, foodName }) => ({ categoryName, foodName }));

  const appetizers = appetizerList[0].foodName.map((i) => (
    <li className={style.foodlist}>
      <p id="sect1" role="region" aria-labelledby="btn1">
        {i.name}
      </p>
    </li>
  ));
  const mainfood = mainfoodList[0].foodName.map((i) => (
    <li className={style.foodlist}>
      <p id="sect1" role="region" aria-labelledby="btn1">
        {i.name}
      </p>
    </li>
  ));
  const dessert = dessertList[0].foodName.map((i) => (
    <li className={style.foodlist}>
      <p id="sect1" role="region" aria-labelledby="btn1">
        {i.name}
      </p>
    </li>
  ));

  console.log(appetizerList);
  console.log(appetizers);
  console.log(mainfoodList);
  console.log(dessertList);
  return (
    <>
      <div className={style.allimg}>
        <img src={appetizer1} alt="" className={style.img} />
        <img src={appetizer5} alt="" className={style.img} />
        <img src={appetizer3} alt="" className={style.img} />
        <img src={appetizer2} alt="" className={style.img} />
      </div>
      <p className={style.title}>Appetizers</p>
      <ul>{appetizers}</ul>
      <p className={style.title}>Main</p>
      <ul>{mainfood}</ul>
      <p className={style.title}>Dessert</p>
      <ul>{dessert}</ul>
    </>
  );
};

export default partyList;
